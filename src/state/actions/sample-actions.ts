import { SampleAction } from '../../types/sample-types'

export const CHANGE_LENGTH = 'CHANGE_LENGTH'
export const CHANGE_DETUNE = 'CHANGE_DETUNE'
export const CHANGE_FREQUENCY = 'CHANGE_FREQUENCY'
export const CHANGE_VOLUME = 'CHANGE_VOLUME'
export const CHANGE_TYPE = 'CHANGE_TYPE'
export const CHANGE_CONTEXT = 'CHANGE_CONTEXT'

export function changeLength(sampleAction: SampleAction) {
  console.log(sampleAction)
  return {
    type: CHANGE_LENGTH,
    result: sampleAction.result
  }
}

export function changeDetune(sampleAction: SampleAction) {
  return {
    type: CHANGE_DETUNE,
    result: sampleAction.result
  }
}

export function changeFrequency(sampleAction: SampleAction) {
  return {
    type: CHANGE_FREQUENCY,
    result: sampleAction.result
  }
}

export function changeVolume(sampleAction: SampleAction) {
  return {
    type: CHANGE_VOLUME,
    result: sampleAction.result
  }
}

export function changeType(sampleAction: SampleAction) {
  return {
    type: CHANGE_TYPE,
    result: sampleAction.result
  }
}

export function changeContext(sampleAction: SampleAction) {
  return {
    type: CHANGE_CONTEXT,
    result: sampleAction.result
  }
}
