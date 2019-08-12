import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../types/app-types'
import { SampleController } from '../../types/sample-types'

const SamplerLayout = () => {
  const [oscillating, setOscillating] = useState(false)
  const [playing, setPlaying] = useState(false)
  const allSamples = useSelector(
    (state: AppState) => state.layout.allSamples,
    shallowEqual
  )

  const { audioContext } = useSelector((state: AppState) => state.app)

  const { length } = useSelector((state: AppState) => state.sample)

  function handleOscillator(sample: SampleController) {
    sample.oscillator.start(0)
    setOscillating(true)
  }

  function handlePlaying(sample: SampleController) {
    if (!oscillating) {
      handleOscillator(sample)
    }
    if (!playing) {
      setPlaying(true)
      sample.oscillator.connect(audioContext.destination)
      setTimeout(() => {
        if (playing) {
          sample.oscillator.disconnect(audioContext.destination)
          setPlaying(false)
        }
      }, length * 1000)
    } else {
      sample.oscillator.disconnect(audioContext.destination)
      setPlaying(false)
    }
  }

  const sampleLayout = allSamples.map((sample, index) => (
    <span>
      {index + 1}
      <button type="button" onClick={() => handlePlaying(sample)} />
    </span>
  ))
  return <>{sampleLayout}</>
}

export default SamplerLayout
