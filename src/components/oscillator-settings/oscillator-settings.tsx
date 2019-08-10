import React from 'react'

interface OscillatorProps {
    detune: number
    frequency: number
    handleSampleChange: () => void
    id: string
    length: number
    type: 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'
}

const OscillatorSettings = ({
    frequency = 440,
    detune = 0,
    handleSampleChange = () => {},
    id = '',
    length = 1,
    type = 'sine',
}: OscillatorProps) => {
    return (
        <form>
            <label>
                Frequency:
                <input
                    id={id}
                    name="frequency"
                    type="text"
                    value={frequency}
                    onChange={handleSampleChange}
                />
            </label>
            <label>
                Wave type:
                <select
                    id={id}
                    name="type"
                    value={type}
                    onChange={handleSampleChange}
                >
                    <option value="sine">Sine</option>
                    <option value="square">Square</option>
                    <option value="sawtooth">Sawtooth</option>
                    <option value="triangle">Triangle</option>
                </select>
            </label>
            <label>
                Detune:
                <input
                    id={id}
                    name="detune"
                    type="text"
                    value={detune}
                    onChange={handleSampleChange}
                />
            </label>
            <label>
                Length
                <input
                    id={id}
                    name="length"
                    type="text"
                    value={length}
                    onChange={handleSampleChange}
                />
            </label>
        </form>
    )
}

export default OscillatorSettings
