export const PRODUCTION = false

export const PLACES = ['Moscow','London','San Francisco','Dubai','Stockholm']

// url
export const yahooWeatherURL = (city:string, U:string) => `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="${U}"&format=json`
export const googleApiURL = (latitude:string, longitude: string) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAmk7cP6WPlqLXgIP4mlQKg7RTDVxhKm50`