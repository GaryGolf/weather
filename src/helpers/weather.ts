import * as API from './api'
import {PLACES} from '../constants/index'

export async function init():Promise<string[]> {

  let [places, local] = await Promise.all([API.getStoredPlaces(), getLocalPlaceName()])

  if(!places) {
      places = PLACES
      API.setStoredPlaces(places)
  }

  if(local) places.push(local)

  return places 
}

function  wait(ms:number): Promise<String> {
  return new Promise(resolve=>setTimeout(()=>resolve('Ok'),ms))
}


async function getLocalPlaceName(): Promise<string> {
  const {latitude, longitude} = await API.getCurrentPosition()
  return await API.getLocalPlaceName(latitude,longitude)
  // return await wait(1000).then(ok=>'Kiev') // !!!!
}

export async function fetchWeather(place:string):Promise<WeatherReport> {
  return await API.getWatherReport(place)
}

export async function removePlace(place:string):Promise<string> {
  const places = await API.getStoredPlaces()
  if(places) await API.setStoredPlaces(places.filter(v=>v!=place))
  return place
}

export async function addPlace(place:string):Promise<any> {
  const [report,places] = await Promise.all([API.getWatherReport(place),API.getStoredPlaces()])
  if(!report) return null
  places.push(place)
  if(places) await API.setStoredPlaces(places)
  return report
}

export async function resetPlaces():Promise<string[]> {
  await API.setStoredPlaces(PLACES)
  return await init()
}



export function windDirection(direction:string):string{
  const dir = Number(direction)
  if(dir>315 && dir<=45) return 'N'
  else if(dir>45 && dir<=90) return 'NW'
  else if(dir>90 && dir<=135) return 'SW'
  else if(dir>135 && dir<=180) return 'S'
  else if(dir>180 && dir<=225) return 'SE'
  else if(dir>225 && dir<=270) return 'E'
  return 'NE'
}

