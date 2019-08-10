import { SampleParams } from './sample-types'

export interface GlobalSamplerState {
    allSamples: SampleParams[]
}
export type GlobalSamplerAction =
    | { type: 'allSamples'; result: SampleParams[] }
    | { type: 'audioContext'; result: AudioContext }
