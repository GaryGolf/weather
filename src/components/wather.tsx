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
        <View style={styles.weather}>
          <View style={[styles.line,styles.title]}>
            <Text style={styles.description}>{weather.description}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.bold}>Temperature:  </Text>
            <Text>{weather.condition.temp} {weather.units.temperature}</Text>
          </View>
          <View style={styles.line}>  
            <Text style={styles.bold}>Condition:  </Text>
            <Text> {weather.condition.text}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.bold}>Wind:  </Text>
            <Text> {weather.wind.speed} {weather.units.speed} "{windDirection(weather.wind.direction)}"</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.bold}>Pressure:  </Text>
            <Text>{weather.atmosphere.pressure} {weather.units.pressure}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.bold}>Visibility:  </Text>
            <Text>{weather.atmosphere.visibility} {weather.units.distance}</Text>
          </View>
          <View style={styles.spacer}/>
          <View style={styles.label}>
            <Image source={logo}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    padding: 10
  },
  weather: {
    flex: 5
  },
  description: {
    fontSize: 18,
    fontWeight: '800',
    color: '#444'

  },
  title: {
    marginBottom: 20
  },
  line: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-end'
  },
  spacer: {
    flex: 10
  },
  bold:{
    fontWeight: '800'
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