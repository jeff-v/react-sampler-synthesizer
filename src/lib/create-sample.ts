import { SampleController } from '../types/sample-types'

export const createSample = ({
  oscillator = new AudioContext().createOscillator(),
  start = () => {},
  stop = () => setTimeout(() => {}, 1),
  volume,
  assignment
}: SampleController) => ({
  oscillator,
  start,
  stop,
  volume,
  assignment
})
