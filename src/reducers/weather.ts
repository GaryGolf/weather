import * as API from '../helpers/api'
import * as Actions from '../constants/actions';

export interface WeatherState {
    ["place"]?: WeatherReport
}

const initialState: WeatherState = {}

export function weather(state = initialState, action): WeatherState {

    const {type, payload} = action

    switch (action.type) {

    case Actions.NOTHING_HAPPEND :
    
      break

    case Actions.FETCH_WEATHER :
      if(payload) return {...state, [payload.place]:payload}
      
    default:
      break
    }
    return state
}

