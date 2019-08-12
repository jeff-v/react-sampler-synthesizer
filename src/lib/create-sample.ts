import { SampleController } from '../types/sample-types'

export const createSample = ({
  oscillator = new AudioContext().createOscillator(),
  play = () => setTimeout(() => {}, 1),
  volume,
  assignment
}: SampleController) => ({
  oscillator,
  play,
  volume,
  assignment
})
