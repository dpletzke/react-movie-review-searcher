import produce from 'immer'

import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE,
} from './reviews.actions'

const initialState = {
  data: [],
  criticsReviewTracker: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS_FETCH_SUCCESS:
      return produce(state, draftState => {
        draftState.data = action.payload
        draftState.criticsReviewTracker = action.payload.reduce(
          (acc, review) => {
            const { critics_pick, byline } = review
            const criticRef = acc[byline]
            if (criticRef) {
              criticRef.totalReviews += 1
              criticRef.totalPicks += critics_pick
            } else {
              acc[byline] = {
                totalReviews: 1,
                totalPicks: critics_pick,
              }
            }
            return acc
          },
          {}
        )
        return draftState
      })
    //TODO: implement error handling
    case REVIEWS_FETCH_FAILURE:
      return state
    default:
      return state
  }
}
