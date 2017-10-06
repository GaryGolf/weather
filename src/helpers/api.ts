import {AsyncStorage} from 'react-native'
import { yahooWeatherURL } from '../constants/index'

export function getWatherReport(place:string, u:Unit='C'):Promise<void|WeatherReport> {

  return fetch(yahooWeatherURL(place,u))
    .then(response => response.json())
    .then(response => {
      const {description,atmosphere,wind,units} = response.query.results.channel
      const { condition, forecast } = response.query.results.channel.item
      return {place,description,atmosphere,wind,forecast,units,condition} as WeatherReport
    })
    .catch(console.error)
}



// AsyncStorage API

export function getStoredPlaces():Promise<void|string[]> {
  
  try {
    return AsyncStorage.getItem('@WeatherStore:places')
    .then(JSON.parse)
    .catch(console.error)
  } catch (error) {
    console.error(error)
  }
}

export function setStoredPlaces(places:string[]):void{

  try {
    AsyncStorage.setItem('@WeatherStore:places', JSON.stringify(places))  
  } catch (error) {
    console.error(error)
  }

}

export function removeStoredPlaces():void {
  
  try {
    AsyncStorage.removeItem('@WeatherStore:places')
  } catch (error) {
    console.error(error)
  }
}