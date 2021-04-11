import produce from 'immer'
import { defaults } from '../../containers/OptionsForm/settings'

import { UI_FILTER_SET } from './ui.actions'

const initialState = {
  filter: {
    ...defaults,
    title: '',
    startDate: null,
    endDate: null,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UI_FILTER_SET:
      return produce(state, draftState => {
        draftState.filter = action.payload
        return draftState
      })
    default:
      return state
  }
}
