import * as React from 'react'
import { bindActionCreators, Dispatch, Action } from 'redux'
import { Image, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { ScrollView, FlatList, TextInput } from 'react-native'

import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as Actions from '../constants/actions'
const {connect} = require('react-redux')
const hamburger = require('../../assets/img/hamburger.png')
const settings = require('../../assets/img/settings.png')

import {init, fetchWeather, removePlace} from '../helpers/weather'

import WeatherRow from '../components/weather-row'

interface Props {
  navigation?: NavigationParams
  weather?: any
  add(place:string):void
}
interface State {
  newPlaceName: string
}

@connect(
  state => ({
    weather: state.weather
  }),
  dispatch => ({
    add: (place:string) => dispatch({type: Actions.ADD_PLACE, payload:fetchWeather(place)})
  })
)
export default class Main extends React.Component <Props, State> {
  
  constructor(props:Props){
    super(props)
    this.state = { newPlaceName: null}
  }

  componentDidMount(){
    init().then(places=>places.forEach(this.props.add))
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Weather',
    headerLeft: (
      <TouchableHighlight onPress={()=>navigation.navigate('DrawerOpen')}> 
        <View style={styles.menu}>
          <Image
            style={styles.hamburger}
            source={hamburger}
          />
        </View> 
      </TouchableHighlight>
    ),
    headerRight: (
      <TouchableHighlight onPress={()=>navigation.navigate('Settings')}> 
      <View style={styles.menu}>
        <Image
          style={styles.hamburger}
          source={settings}
        />
      </View> 
    </TouchableHighlight>
    ),
    headerStyle: {backgroundColor: '#999'} ,
    headerTitleStyle: { color: '#eef'}
  }) 

  navigate = (place:string) => {
    const {navigation, weather} = this.props
    navigation.navigate('Weather',{weather:weather[place]})
  }

  render(){

    const {weather} = this.props

    return (

      <ScrollView>
        <FlatList 
          data={Object.keys(weather).map(key=>({ weather: weather[key]}))}
          keyExtractor={item=>item.weather.place}
          renderItem={ rowData => (

            <WeatherRow 
              rowData={rowData}
              onPressItem={this.navigate}
            />

          )}
        /> 
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  menu: {
    margin: 10,
    padding: 4
  },
  hamburger: {
    width: 24,
    height: 24
  }
})