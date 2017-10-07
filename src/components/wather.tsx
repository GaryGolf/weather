import * as React from 'react'
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as API from '../helpers/api'
import {windDirection} from '../helpers/weather'

const back = require('../../assets/img/back.png')
const logo = require('../../assets/img/purple.png')

interface Props {
  navigation?: NavigationParams
}


export default class Weather extends React.Component <Props, null> {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.weather.place}`,
    headerLeft: (
      <TouchableHighlight onPress={()=>navigation.goBack(null)}> 
        <View style={styles.back}>
          <Image
            style={styles.hamburger}
            source={back}
          />        
        </View> 
      </TouchableHighlight>
    ),
    headerStyle: {backgroundColor: '#999'} ,
    headerTitleStyle: { color: '#eef'}
  })
  constructor(props:Props){
    super(props)
    
  } 
  
  render(){
    const weather:WeatherReport = this.props.navigation.state.params.weather
    return (
      <View style={styles.container}>
        <Text>{weather.description}</Text>
        <Text>Temperature: {weather.condition.temp} {weather.units.temperature}</Text>
        <Text>Condition: {weather.condition.text}</Text>
        <Text>Wind: {weather.wind.speed} {weather.units.speed} "{windDirection(weather.wind.direction)}"</Text>
        <Text>Pressure: {weather.atmosphere.pressure} {weather.units.pressure}</Text>
        <Text>Visibility:{weather.atmosphere.visibility} {weather.units.distance}</Text>
        <Image
            /* style={styles.hamburger} */
            source={logo}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  back: {
    margin: 10,
    padding: 4
  },
  hamburger: {
    width: 30,
    height: 30
  }
   
})