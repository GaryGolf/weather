declare type Unit = 'C' | 'F'

declare interface Atmosphere {
  humidity:   string
  pressure:   string
  rising:     string
  visibility: string
}

declare interface Condition {
  code: string
  date: string
  temp: string
  text: string
}

declare interface Wind {
  chill:  string
  direction: string
  speed:  string
}

declare interface Forecast {
  code: string
  date: string
  day:  string
  high: string
  low:  string
  text: string
}

declare interface Units {
  distance: string
  pressure: string
  speed:    string
  temperature:  string
}

declare interface WeatherReport {
  place:        string
  description:  string
  atmosphere:   Atmosphere
  condition:    Condition
  wind:         Wind
  forecast?:    Array<Forecast>
  units?:       Units
}