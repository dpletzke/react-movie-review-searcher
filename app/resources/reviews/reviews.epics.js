import { combineEpics, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'
import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE,
} from './reviews.actions'

import { CRITICS_FETCH_REQUEST } from '../critics/critics.actions'

const fetchReviews = (action$, state$, { get }) =>
  action$.pipe(
    ofType(REVIEWS_FETCH_REQUEST),
    mergeMap(() =>
      from(get('/static/movie-reviews.json')).pipe(
        map(response => {
          let payload = response.data
          return {
            type: REVIEWS_FETCH_SUCCESS,
            payload,
            meta: response.data.meta,
          }
        }),
        catchError(error => {
          console.error(error)
          return of({ type: REVIEWS_FETCH_FAILURE, error: errorMsg })
        })
      )
    )
  )

const triggerCriticsRequest = (action$, state$, { get }) => {
  return action$.pipe(
    ofType(REVIEWS_FETCH_SUCCESS),
    mergeMap(() => {
      return of({ type: CRITICS_FETCH_REQUEST })
    })
  )
}

export default combineEpics(fetchReviews, triggerCriticsRequest)
