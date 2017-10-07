import * as React from 'react'
import { bindActionCreators, Dispatch, Action } from 'redux'
import { Image, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { ScrollView, FlatList } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as Actions from '../constants/actions'
const {connect} = require('react-redux')
const hamburger = require('../../assets/img/hamburger.png')

import {init, fetchWeather} from '../helpers/weather'
// const Swipeout = require('react-native-swipeout')
// import * as Swipeout from 'react-native-swipeout'

import WeatherRow from '../components/weather-row'

interface Props {
  navigation?: NavigationParams
  weather?: any
  fetch(place:string):void
}
interface State {}

@connect(
  state => ({
    weather: state.weather
  }),
  dispatch => ({
    fetch: (place:string) => dispatch({type: Actions.FETCH_WEATHER, payload:fetchWeather(place)})
  })
)
export default class Main extends React.Component <Props, State> {

  constructor(props:Props){
    super(props)
  }

  componentDidMount(){
    init().then(places=>places.forEach(this.props.fetch))
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
    headerStyle: {backgroundColor: '#999'} ,
    headerTitleStyle: { color: '#eef'}
  }) 

  navigate = (place:string) => {
    this.props.navigation.navigate('Weather',{place})
  }
  

  render(){

    if(!this.props.weather) return null
    const {weather} = this.props
    const keys = Object.keys(this.props.weather)
    const data = keys.map(key=>({key, weather: weather[key]}))

    return (
      <ScrollView>
        <FlatList 
          data={data}
          renderItem={rowData=><WeatherRow rowData={rowData}/>}
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