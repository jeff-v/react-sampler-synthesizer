import { SampleParams } from './sample-types'

export interface AppState {
  layout: {
    allSamples: SampleParams[]
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
