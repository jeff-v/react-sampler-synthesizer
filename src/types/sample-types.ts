export interface SampleParams extends OscillatorOptions {
  detune: number
  frequency: number
  length: number
  source?: string
  type: 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'
  volume: number
}

export interface SampleController {
  oscillator: OscillatorNode
  play: () => NodeJS.Timeout
  volume: number
  assignment: number
}

export interface SampleAction {
  type: string
  result: number | string
}
