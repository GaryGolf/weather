import { combineReducers, Reducer } from 'redux'
import {weather, WeatherState} from './weather'

export interface RootState {
    weather: WeatherState
}

export default combineReducers<RootState>({
    weather
})