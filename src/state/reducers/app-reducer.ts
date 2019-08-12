import { NEW_AUDIO_CONTEXT } from '../actions/app-actions'
import { AppAction } from '../../types/app-types'

export default function appReducer(
  state = {
    app: undefined
  },
  action: AppAction
) {
  switch (action.type) {
    case NEW_AUDIO_CONTEXT:
      return Object.assign({}, state, {
        audioContext: new AudioContext()
      })
    default:
      return state
  }
}
