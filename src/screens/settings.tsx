import * as React from 'react'
import {View, TextInput} from 'react-native'
import {TextInputProperties, FlatList, } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as Actions from '../constants/actions'
import RemoveRow from '../components/remove-row'
const {connect} = require('react-redux')

interface Props {
  navigation?: NavigationParams
  weather?: {['place']: WeatherReport}
  remove(place:string):void
}
interface State {
  text: string
}

@connect(
  state => ({
    weather: state.weather
  }),
  dispatch => ({
    remove: (place:string) =>  dispatch({type: Actions.REMOVE_PLACE, payload:place})
  })
)
export default class Settings extends React.PureComponent <Props, State> {
  private input:  React.Component<TextInputProperties,React.ComponentState>
  constructor(props:Props){
    super(props)
    this.state = { text: null }
  }
  handleNewPlace = () => {
    
    console.log(this.state.text)
    const input: any = this.input
    input.clear()
  }

  handleNewPlaceInput = (text:string) => {
    this.setState({text})
  }

  render(){
    const {weather, remove} = this.props

    return (
      <View>
        <View>
          <TextInput
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

      </View>
    )
  }
}