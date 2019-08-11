import { SampleController, SampleParams } from './sample-types'

export interface AppState {
    layout: {
        allSamples: SampleController[]
    }
    sample: SampleParams
}
