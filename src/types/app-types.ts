import { SampleController, SampleParams } from './sample-types'

export interface AppState {
  layout: {
    allSamples: SampleController[]
  }
  sample: SampleParams
  app: {
    audioContext: AudioContext
    gainNode: GainNode
  }
}

export interface AppAction {
  type: string
  result: AudioContext | GainNode
}
