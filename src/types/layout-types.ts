import { SampleController } from './sample-types'

export interface LayoutParams {
  allSamples: SampleController[]
}

export interface LayoutAction {
  type: string
  result: SampleController
}
