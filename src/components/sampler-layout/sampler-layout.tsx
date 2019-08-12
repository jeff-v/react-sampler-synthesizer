import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../types/app-types'

const SamplerLayout = () => {
  const allSamples = useSelector(
    (state: AppState) => state.layout.allSamples,
    shallowEqual
  )

  const sampleLayout = allSamples.map((sample, index) => (
    <span>
      {index + 1}
      <button
        type="button"
        onClick={() => {
          if (sample.oscillator) return sample.oscillator.start(0)
          return ''
        }}
      />
    </span>
  ))
  return <>{sampleLayout}</>
}

export default SamplerLayout
