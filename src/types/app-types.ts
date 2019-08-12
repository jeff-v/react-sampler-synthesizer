import { SampleController, SampleParams } from './sample-types'

export interface AppState {
  layout: {
    allSamples: SampleController[]
  }
  sample: SampleParams
  audioContext: AudioContext
}

export interface AppAction {
  type: string
  result: AudioContext
}