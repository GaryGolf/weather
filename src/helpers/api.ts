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