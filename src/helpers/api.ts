import {AsyncStorage } from 'react-native'
import { yahooWeatherURL } from '../constants/index'

export function getWatherReport(place:string, u:Unit='C'):Promise<WeatherReport> {

  return fetch(yahooWeatherURL(place,u))
    .then(response => response.json())
    .then(response => {
      const {description,atmosphere,wind,units} = response.query.results.channel
      const { condition, forecast } = response.query.results.channel.item
      return {place,description,atmosphere,wind,forecast,units,condition} as WeatherReport
    })
    .catch(error=>{
      console.log(error)
      return null
    })
}



// AsyncStorage API

export function getStoredPlaces():Promise<string[]> {
  
  try {
    return AsyncStorage.getItem('@WeatherStore:places')
    .then(JSON.parse)
    .catch(error=>{
      console.log(error)
      return null
    })
  } catch (error) {
    console.log(error)
    return null
  }
}

export function setStoredPlaces(places:string[]):void {

  try {
    AsyncStorage.setItem('@WeatherStore:places', JSON.stringify(places))  
  } catch (error) {
    console.log(error)
  }

}

export function removeStoredPlaces():void {
  
  try {
    AsyncStorage.removeItem('@WeatherStore:places')
  } catch (error) {
    console.log(error)
  }
}

// Geolocation

export function getCurrentPosition():Promise<Coords> {
  const options = {
    enableHighAccuracy: true, 
    timeout: 20000, 
    maximumAge: 1000, 
    distanceFilter: 10 
  }
  return new Promise((resolve,reject) => {

    navigator.geolocation.getCurrentPosition(resolve,reject,options)

  }).then((position:any) => {
    const { latitude, longitude } = position.coords
    return { latitude, longitude } as Coords
  }).catch(error=>{
    console.log(error)
    return null
  })
}
