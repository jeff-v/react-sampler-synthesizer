import { SampleController } from '../types/sample-types'

export const createSample = ({
    oscillator = new AudioContext().createOscillator(),
    stop = () => setTimeout(() => {}, 1),
    volume = 1,
}: SampleController) => ({
    oscillator,
    stop,
    volume,
    setSample(
        oscillator: OscillatorNode,
        stop: () => NodeJS.Timeout,
        volume: number
    ) {
        this.oscillator = oscillator
        this.stop = stop
        this.volume = volume
        return this
    },
})
