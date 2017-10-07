import * as API from '../helpers/api'
import * as Actions from '../constants/actions';

export interface WeatherState {
    ["place"]?: WeatherReport
}

const initialState: WeatherState = {}

export function weather(state = initialState, action): WeatherState {

    const {type, payload} = action
    const keys:string[] = Object.keys(state)

    switch (action.type) {

    case Actions.REMOVE_PLACE : {
      if(!payload || !keys.some(key=>key==payload)) break
      const places = {...state}
      delete places[payload]
      return places
    }

    case Actions.ADD_PLACE : 
      if(!payload || keys.some(key=>key==payload)) break
      return {...state, [payload.place]:payload}
    
    default:
      break
    }
    return state
}

