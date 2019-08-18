import {
  ALL_SAMPLES,
  ADD_SAMPLE,
  REMOVE_SAMPLE,
  CREATE_NEW_SAMPLE,
  EDIT_SAMPLE
} from '../actions/layout-actions'
import { LayoutParams, LayoutAction } from '../../types/layout-types'

const initialLayoutState: LayoutParams = {
  allSamples: []
}

export default function layoutReducer(
  state = initialLayoutState,
  action: LayoutAction
) {
  switch (action.type) {
    case ALL_SAMPLES:
      return Object.assign({}, state, {
        allSamples: state
      })
    case ADD_SAMPLE:
      return Object.assign({}, state, {
        allSamples: state.allSamples.concat(action.result)
      })
    case REMOVE_SAMPLE:
      return Object.assign({}, state, {
        allSamples: state.allSamples.splice(action.result.assignment, 1)
      })
    case CREATE_NEW_SAMPLE:
      return Object.assign({}, state, {})
    case EDIT_SAMPLE:
      return Object.assign({}, state, {
        allSamples: state.allSamples[action.result.assignment] = action.result
      })
    default:
      return state
  }
}
