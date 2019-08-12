import { AppAction } from '../../types/app-types'

export const NEW_AUDIO_CONTEXT = 'NEW_AUDIO_CONTEXT'

export function createNewContext(appAction: AppAction) {
  return {
    type: NEW_AUDIO_CONTEXT,
    result: appAction.result
  }
}
