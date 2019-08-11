import {
  ALL_SAMPLES,
  ADD_SAMPLE,
  REMOVE_SAMPLE,
  CREATE_NEW_SAMPLE
} from '../actions/layout-actions'
import { LayoutParams, LayoutAction } from '../../types/layout-types'
import { createSample } from '../../lib/create-sample'

const oscillator = new AudioContext().createOscillator()

const initialSampleController = createSample({
  oscillator,
  start: () => oscillator.start,
  stop: () => setTimeout(() => oscillator.stop, 1000),
  volume: 1,
  assignment: 1
})

const initialLayoutState: LayoutParams = {
  allSamples: [initialSampleController]
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
        allSamples: state.allSamples.splice(
          action.result.assignment - 1,
          0,
          action.result
        )
      })
    case REMOVE_SAMPLE:
      return Object.assign({}, state, {
        allSamples: state.allSamples.splice(action.result.assignment, 1)
      })
    case CREATE_NEW_SAMPLE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
