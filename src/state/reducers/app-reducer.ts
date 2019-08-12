import { CHANGE_CONTEXT, CHANGE_GAIN } from '../actions/app-actions'
import { AppAction } from '../../types/app-types'

const audioCtx = new AudioContext()

export default function appReducer(
  state = {
    audioContext: audioCtx,
    gainNode: audioCtx.createGain()
  },
  action: AppAction
) {
  switch (action.type) {
    case CHANGE_CONTEXT:
      return Object.assign({}, state, {
        audioContext: action.result
      })
    case CHANGE_GAIN:
      return Object.assign({}, state, {
        gainNode: action.result
      })
    default:
      return state
  }
}
