import * as React from 'react'
import {TouchableHighlight, View, Text, TextInput, StyleSheet} from 'react-native'
import { bindActionCreators, Dispatch, Action } from 'redux'
import {TextInputProperties, FlatList, } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as Actions from '../constants/actions'
import {addPlace, removePlace, resetPlaces} from '../helpers/weather'
import RemoveRow from '../components/remove-row'
const {connect} = require('react-redux')


interface Props {
  navigation?: NavigationParams
  weather?: {['place']: WeatherReport}
  add(place:string):void
  remove(place:string):void
  reset():void
}
interface State {
  text: string
}

@connect(
  state => ({
    weather: state.weather
  }),
  dispatch => ({
    add: (place:string) => dispatch({type: Actions.ADD_PLACE, payload:addPlace(place)}),
    remove: (place:string) => dispatch({type:Actions.REMOVE_PLACE, payload:removePlace(place)}),
    reset: async () => {
      await dispatch({type: Actions.RESET})
      const places = await resetPlaces()
      places.forEach(place=>dispatch({type: Actions.ADD_PLACE, payload:addPlace(place)}))
    }
  })
)
export default class Settings extends React.PureComponent <Props, State> {
  private input:  React.Component<TextInputProperties,React.ComponentState>
  constructor(props:Props){
    super(props)
    this.state = { text: null }
  }

  handleNewPlace = () => {
    const place = this.state.text
    const input: any = this.input
    input.clear()
    this.props.add(place)
  }

  handleNewPlaceInput = (text:string) => {
    this.setState({text})
  }

  render(){
    const {weather, remove, reset} = this.props
    return (
      <View>
        <View>
          <TextInput
            style={styles.input}
            ref={element=>this.input=element}
            keyboardType={'default'}
            placeholder={'Add place'}
            maxLength={60}
            onChangeText={this.handleNewPlaceInput}
            onEndEditing={this.handleNewPlace}
          />
        </View>

        <FlatList 
          data={Object.keys(weather).map(key=>({ place: weather[key].place}))}
          keyExtractor={item=>item.place}
          renderItem={ rowData => (

            <RemoveRow 
              rowData={rowData}
              onPressItem={remove}
            />

          )}
        /> 
        <TouchableHighlight onPress={reset}>
          <View style={styles.button}>
            <Text style={styles.text}>Reset</Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 5,
    marginVertical: 20,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1
  },
  button: {
    margin: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 18
  }
})