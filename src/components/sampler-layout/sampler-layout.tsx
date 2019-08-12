import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../types/app-types'
import { SampleController } from '../../types/sample-types'

const SamplerLayout = () => {
  const allSamples = useSelector(
    (state: AppState) => state.layout.allSamples,
    shallowEqual
  )

  const { length } = useSelector((state: AppState) => state.sample)

  function playSample(sample: SampleController) {
    if (sample.oscillator) {
      sample.oscillator.start(0)
      setTimeout(() => {
        sample.oscillator.stop(0)
      }, length * 1000)
    }
  }

  const sampleLayout = allSamples.map((sample, index) => (
    <span>
      {index + 1}
      <button type="button" onClick={() => playSample(sample)} />
    </span>
  ))
  return <>{sampleLayout}</>
}

export default SamplerLayout
