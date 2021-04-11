import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import uiReducer from './ui/ui.reducer'

import reviewsReducer from './reviews/reviews.reducer'
import reviewsEpic from './reviews/reviews.epics'

import criticsReducer from './critics/critics.reducer'
import criticsEpic from './critics/critics.epics'

//Step 1: Add epic
export const resourcesEpic = combineEpics(reviewsEpic, criticsEpic)

//Step 2: Add reducer for each module
export const resourcesReducer = combineReducers({
  reviews: reviewsReducer,
  critics: criticsReducer,
  ui: uiReducer,
})
