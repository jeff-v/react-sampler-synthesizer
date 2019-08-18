import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SampleParams, SampleController } from '../../types/sample-types'
import { addSample } from '../../state/actions/layout-actions'
import { createSample } from '../../lib/create-sample'

const CreateSample = () => {
  const dispatch = useDispatch()
  const [length, setLength] = useState<SampleParams['length']>(1)
  const [detune, setDetune] = useState<SampleParams['detune']>(0)
  const [frequency, setFrequency] = useState<SampleParams['frequency']>(440)
  const [volume, setVolume] = useState<SampleParams['volume']>(1)
  const [type, setType] = useState<SampleParams['type']>('sine')
  const [assignment, setAssignment] = useState<SampleController['assignment']>(
    1
  )

  function handleLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setLength(Number(event.currentTarget.value))
  }

  function handleDetuneChange(event: ChangeEvent<HTMLInputElement>) {
    setDetune(Number(event.currentTarget.value))
  }

  function handleFrequencyChange(event: ChangeEvent<HTMLInputElement>) {
    setFrequency(Number(event.currentTarget.value))
  }

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    setVolume(Number(event.currentTarget.value))
  }

  function handleWavetypeChange(event: ChangeEvent<HTMLSelectElement>) {
    setType(event.currentTarget.value as SampleParams['type'])
  }

  function handleAssignment(event: ChangeEvent<HTMLInputElement>) {
    setAssignment(Number(event.currentTarget.value))
  }

  function handleSubmit() {
    dispatch(
      addSample({
        type: 'ADD_SAMPLE',
        result: {
          assignment,
          length,
          detune,
          frequency,
          type,
          volume
        }
      })
    )
  }

  function playCurrentSample() {
    const audioContext = new AudioContext()
    const gainNode = audioContext.createGain()

    const sampleOscillator = new OscillatorNode(audioContext, {
      detune,
      frequency,
      type
    })

    sampleOscillator.connect(gainNode)
    sampleOscillator.start(0)
    gainNode.connect(audioContext.destination)
    setTimeout(() => gainNode.disconnect(0), length * 1000)
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
          <select value={type} onChange={handleWavetypeChange}>
            <option value="sine"> sine </option>
            <option value="square"> square </option>
            <option value="sawtooth"> sawtooth </option>
            <option value="triangle"> triangle </option>
          </select>
        </label>
        <label>
          Assignment
          <input value={assignment} onChange={handleAssignment} type="number" />
        </label>
      </form>
      <button type="button" name="current sound" onClick={playCurrentSample} />
      <button type="submit" name="submit" onClick={handleSubmit} />
    </>
  )
}

export default CreateSample
