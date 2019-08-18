import { SampleParams } from './sample-types'

export interface LayoutParams {
  allSamples: SampleParams[]
}

export interface LayoutAction {
  type: string
  result: SampleParams
}
