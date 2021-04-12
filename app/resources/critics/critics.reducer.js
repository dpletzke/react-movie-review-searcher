import produce from 'immer';

import {
  CRITICS_FETCH_SUCCESS,
  CRITICS_FETCH_FAILURE,
} from './critics.actions'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CRITICS_FETCH_SUCCESS:
      return produce(state, draftState => {
        draftState.data = action.payload
        return draftState
      })
    case CRITICS_FETCH_FAILURE:
      return state
    default:
      return state
  }
}
