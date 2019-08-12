import React, { ChangeEvent, useEffect } from 'react'
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
import { addSample, removeSample } from '../../state/actions/layout-actions'

const CreateSample = () => {
  const dispatch = useDispatch()
  const { length, detune, frequency, volume, type } = useSelector(
    (state: AppState) => state.sample,
    shallowEqual
  )
  const assignment = useSelector((state: AppState) => state.layout.allSamples)
    .length
  const audioContext = useSelector((state: AppState) => state.app.audioContext)

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
        type: 'CHANGE_DETUNE',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleFrequencyChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeFrequency({
        type: 'CHANGE_FREQUENCY',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeVolume({
        type: 'CHANGE_VOLUME',
        result: Number(event.currentTarget.value)
      })
    )
  }

  function handleWavetypeChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeType({ type: 'CHANGE_TYPE', result: event.currentTarget.value })
    )
  }

  function createOscillator() {
    const gainNode = audioContext.createGain()
    const oscillator = new OscillatorNode(audioContext, {
      type,
      detune,
      frequency
    })
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    gainNode.gain.value = volume
    return oscillator
  }

  function returnSample(oscillator: OscillatorNode) {
    return createSample({
      oscillator,
      play: () => (
        oscillator.start(0), setTimeout(() => oscillator.stop, length * 1000)
      ),
      volume,
      assignment
    })
  }

  useEffect(() => {
    dispatch(
      removeSample({
        type: 'REMOVE_SAMPLE',
        result: returnSample(createOscillator())
      })
    )
    dispatch(
      addSample({
        type: 'ADD_SAMPLE',
        result: returnSample(createOscillator())
      })
    )
  }, [])

  function handleSubmit() {
    const newSample = returnSample(createOscillator())
    dispatch(
      addSample({
        type: 'ADD_SAMPLE',
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
      </form>
      <button type="submit" name="submit" onClick={handleSubmit} />
    </>
  )
}

export default CreateSample
