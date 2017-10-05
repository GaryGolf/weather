
import * as Actions from '../constants/actions';

export interface WeatherState {
    init: boolean
}

const initialState: WeatherState = {
    init: false
}

export function weather(state = initialState, action): WeatherState {
    const {type, payload} = action
    switch (action.type) {
    case Actions.NOTHING_HAPPEND :
    default:
      break
  }
  return state
}