import produce from 'immer';

import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE,
} from './reviews.actions'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS_FETCH_SUCCESS:
      return produce(state, draftState => {
        draftState.data = action.payload
        return draftState
      })
    //TODO: implement error handling
    case REVIEWS_FETCH_FAILURE:
      return state
    default:
      return state
  }
}
