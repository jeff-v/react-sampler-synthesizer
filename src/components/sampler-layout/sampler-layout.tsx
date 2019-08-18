import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../types/app-types'
import { SampleParams } from '../../types/sample-types'
import { createSample } from '../../lib/create-sample'

const SamplerLayout = () => {
  const [audioContext] = useState(new AudioContext())
  const allSamples = useSelector(
    (state: AppState) => state.layout.allSamples,
    shallowEqual
  )

  function newSample(actionResult: SampleParams) {
    const { assignment, detune, frequency, length, type, volume } = actionResult

    const sampleOscillator = new OscillatorNode(audioContext, {
      detune,
      frequency,
      type
    })

    const gainNode = audioContext.createGain()
    sampleOscillator.connect(gainNode)
    sampleOscillator.start(0)

    return createSample({
      oscillator: sampleOscillator,
      play: () => {
        gainNode.connect(audioContext.destination)
        return setTimeout(() => gainNode.disconnect(0), length * 1000)
      },
      volume,
      assignment
    })
  }

  const sampleControllers = allSamples.map(sampleParams =>
    newSample(sampleParams)
  )

  const sampleLayout = sampleControllers.map((sample, index) => (
    <span>
      {index + 1}
      <button type="button" onClick={() => sample.play()} />
    </span>
  ))
  return <>{sampleLayout}</>
}

export default SamplerLayout
