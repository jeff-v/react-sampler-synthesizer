import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CreateSample from '../create-sample/create-sample'
import SamplerLayout from '../sampler-layout/sampler-layout'

const Sampler = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    const audioCtx = new AudioContext()
    dispatch({ type: 'NEW_AUDIO_CONTEXT', result: audioCtx })
  }, [])
  return (
    <>
      <CreateSample />
      <SamplerLayout />
    </>
  )
}

export default Sampler
