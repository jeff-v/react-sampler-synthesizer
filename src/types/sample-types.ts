export interface SampleParams extends OscillatorOptions {
    detune: number
    frequency: number
    length: number
    source?: string
    type: 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'
    volume: number
    audioContext: AudioContext
}

export interface SampleController {
    oscillator: OscillatorNode
    stop: () => NodeJS.Timeout
    volume: number
}

export type SampleReducerAction =
    | { type: 'length'; result: number }
    | { type: 'source'; result: string | undefined }
    | { type: 'detune'; result: number }
    | { type: 'frequency'; result: number }
    | { type: 'volume'; result: number }
    | { type: 'type'; result: string }
    | { type: 'audioContext'; result: AudioContext }
    | { type: 'createSample'; result: SampleController }
