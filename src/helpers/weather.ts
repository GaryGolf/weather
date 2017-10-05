const url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Nizhny Novgorod") and u="C"&format=json'
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