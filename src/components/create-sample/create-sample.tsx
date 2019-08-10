import React, { useContext, ChangeEvent } from 'react'
import { SampleContext } from '../../state/sample-state'
import { createSample } from '../../lib/create-sample'

const CreateSample = () => {
    const { state, dispatch } = useContext(SampleContext)
    const { audioContext, length, detune, frequency, volume, type } = state

    function handleLengthChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'length', result: Number(event.currentTarget.value) })
    }

    function handleSourceChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'source', result: event.currentTarget.value })
    }

    function handleDetuneChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'detune', result: Number(event.currentTarget.value) })
    }

    function handleFrequencyChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: 'frequency',
            result: Number(event.currentTarget.value),
        })
    }

    function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'volume', result: Number(event.currentTarget.value) })
    }

    function handleWavetypeChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'type', result: event.currentTarget.value })
    }

    function createOscillator() {
        return new OscillatorNode(audioContext, {
            type,
            detune,
            frequency,
        })
    }

    function returnSample(oscillator: OscillatorNode) {
        return createSample({
            oscillator,
            stop: () => setTimeout(() => oscillator.stop, length * 1000),
            volume,
        })
    }

    function handleSubmit() {
        dispatch({
            type: 'createSample',
            result: returnSample(createOscillator()),
        })
    }

    return (
        <>
            <form>
                <label>
                    Length
                    <input
                        type="number"
                        name="length"
                        value={state.length}
                        onChange={handleLengthChange}
                    />
                </label>
                <label>
                    Detune
                    <input
                        type="number"
                        name="detune"
                        value={state.detune}
                        onChange={handleDetuneChange}
                    />
                </label>
                <label>
                    Source
                    <input
                        type="number"
                        name="source"
                        value={state.source}
                        onChange={handleSourceChange}
                    />
                </label>
                <label>
                    Volume
                    <input
                        type="number"
                        name="volume"
                        value={state.volume}
                        onChange={handleVolumeChange}
                    />
                </label>
                <label>
                    Frequency
                    <input
                        type="number"
                        name="frequency"
                        value={state.frequency}
                        onChange={handleFrequencyChange}
                    />
                </label>
                <label>
                    Wavetype
                    <input
                        type="number"
                        name="wavetype"
                        value={state.type}
                        onChange={handleWavetypeChange}
                    />
                </label>
                <input type="submit" name="submit" onSubmit={handleSubmit} />
            </form>
        </>
    )
}

export default CreateSample
