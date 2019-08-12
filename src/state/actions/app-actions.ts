import { AppAction } from '../../types/app-types'

export const CHANGE_CONTEXT = 'CHANGE_CONTEXT'
export const CHANGE_GAIN = 'CHANGE_GAIN'

export function changeContext(appAction: AppAction) {
  return {
    type: CHANGE_CONTEXT,
    result: appAction.result
  }
}

export function changeGain(appAction: AppAction) {
  return {
    type: CHANGE_GAIN,
    result: appAction.result
  }
}
