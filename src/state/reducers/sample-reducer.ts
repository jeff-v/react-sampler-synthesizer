import {
  CHANGE_LENGTH,
  CHANGE_DETUNE,
  CHANGE_FREQUENCY,
  CHANGE_VOLUME,
  CHANGE_TYPE
} from '../actions/sample-actions'
import { SampleParams, SampleAction } from '../../types/sample-types'

const initialSampleState: SampleParams = {
  length: 1,
  source: '',
  detune: 0,
  frequency: 440,
  volume: 1,
  type: 'sine'
}

export default function sampleReducer(
  state = initialSampleState,
  action: SampleAction
) {
  switch (action.type) {
    case CHANGE_LENGTH:
      return Object.assign({}, state, { length: action.result })
    case CHANGE_DETUNE:
      return Object.assign({}, state, { detune: action.result })
    case CHANGE_FREQUENCY:
      return Object.assign({}, state, { frequency: action.result })
    case CHANGE_VOLUME:
      return Object.assign({}, state, { volume: action.result })
    case CHANGE_TYPE:
      return Object.assign({}, { type: action.result })
    default:
      return state
  }
}