import * as React from 'react'
import { bindActionCreators, Dispatch, Action } from 'redux'
import { Image, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as Actions from '../constants/actions'
const {connect} = require('react-redux')
const hamburger = require('../../assets/img/hamburger.png')

import {init, fetchWeather} from '../helpers/weather'

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
    console.log('Main')
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
    return (
      <View style={styles.container}>
        <Text>Weather App</Text>
        <TouchableHighlight 
          onPress={e=>this.navigate('Local Weather')}>
          <Text>Local Weather</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={e=>this.navigate('Moscow')}>
          <Text>Moscow</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  menu: {
    margin: 10,
    padding: 4
  },
  hamburger: {
    width: 30,
    height: 30
  }
})