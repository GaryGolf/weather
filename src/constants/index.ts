export const PRODUCTION = false

// url
export const yahooWeatherURL = (city:string, U:string) => `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="${U}"&format=json`
export const yahooLabelURL = 'https://poweredby.yahoo.com/purple.png'