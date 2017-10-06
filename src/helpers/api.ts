import { yahooWeatherURL } from '../constants/index'

export function getWatherReport(place:string, u:Unit='C'): any {

  return fetch(yahooWeatherURL(place,u))
    .then(response => response.json())
    .then(console.log)
    .catch(console.error)
}