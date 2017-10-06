/*
showMapImage(lat,lng) {
  var url = 'https://maps.googleapis.com/maps/api/staticmap?center='+lat+','+lng+
'&zoom=12&size=640x640&style=feature:all%7Csaturation:-80'+ 
'&style=feature:road.arterial%7Celement:geometry%7Chue:0x00FFEE%7Csaturation:50'+
'&style=feature:poi.business%7Celement:labels%7Cvisibility:off'+
'&style=feature:poi%7Celement:geometry%7Clightness:45'
  var html = '<img class="img-thumbnail img-rounded img-responsive" src="'+
      url+'" alt="local map">'
  // $('#local-map').attr('src', url)
  $('#map').html(html)
}

<img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/>

*/

import * as API from './api'
import {PLACES} from '../constants/index'

export async function init():Promise<string[]> {
  let places = await API.getStoredPlaces()
  if(!places) {
      places = PLACES
      await API.setStoredPlaces(places)
  }
  return places 
}

export async function fetchWeather(place:string):Promise<WeatherReport> {
  return await API.getWatherReport(place)
}