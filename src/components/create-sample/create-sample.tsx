import React, { ChangeEvent } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { createSample } from '../../lib/create-sample'
import { AppState } from '../../types/app-types'
import {
  changeLength,
  changeDetune,
  changeFrequency,
  changeVolume,
  changeType
} from '../../state/actions/sample-actions'
import { createNewSample } from '../../state/actions/layout-actions'

const CreateSample = () => {
  const dispatch = useDispatch()
  const { audioContext, length, detune, frequency, volume, type } = useSelector(
    (state: AppState) => state.sample,
    shallowEqual
  )
  const assignment =
    useSelector((state: AppState) => state.layout.allSamples).length + 1

  function handleLengthChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeLength({
        type: 'CHANGE_LENGTH',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleDetuneChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeDetune({
        type: 'detune',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleFrequencyChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeFrequency({
        type: 'frequency',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeVolume({
        type: 'volume',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleWavetypeChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeType({ type: 'type', result: event.currentTarget.value }))
  }

  function createOscillator() {
    console.log(audioContext, 'audio context')
    if (audioContext) {
      return new OscillatorNode(audioContext, {
        type,
        detune,
        frequency
      })
    }
    return new OscillatorNode(new AudioContext(), {
      type,
      detune,
      frequency
    })
  }

  function returnSample(oscillator: OscillatorNode) {
    return createSample({
      oscillator,
      start: () => oscillator.start,
      stop: () => setTimeout(() => oscillator.stop, length * 1000),
      volume,
      assignment
    })
  }

  function handleSubmit() {
    console.log('hi')
    const newSample = returnSample(createOscillator())
    dispatch(
      createNewSample({
        type: 'createSample',
        result: newSample
      })
    )
  }

  return (
    <>
      <form>
        <label>
          Length
          <input
            type="number"
            name="length"
            value={length}
            onChange={handleLengthChange}
          />
        </label>
        <label>
          Detune
          <input
            type="number"
            name="detune"
            value={detune}
            onChange={handleDetuneChange}
          />
        </label>
        <label>
          Volume
          <input
            type="number"
            name="volume"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
        <label>
          Frequency
          <input
            type="number"
            name="frequency"
            value={frequency}
            onChange={handleFrequencyChange}
          />
        </label>
        <label>
          Wavetype
          <input
            type="text"
            name="wavetype"
            value={type}
            onChange={handleWavetypeChange}
          />
        </label>
        <button type="submit" name="submit" onClick={handleSubmit} />
      </form>
    </>
  )
}

export default CreateSample
