import React from 'react'
import { mount } from 'enzyme'
import CreateSample from './CreateSample'

const wrapper = mount(<CreateSample />)

it('renders without crashing', () => {
  expect(wrapper)
})

it('should be able to have two distinct samples in an array', () => {
  console.log(wrapper.state().sampleSum)
  expect(wrapper.state().sampleSum).to.equal([])
})

