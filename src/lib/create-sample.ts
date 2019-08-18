import { SampleController } from '../types/sample-types'

export const createSample = ({
  oscillator,
  play,
  volume,
  assignment
}: SampleController) => ({
  oscillator,
  play,
  volume,
  assignment
})
