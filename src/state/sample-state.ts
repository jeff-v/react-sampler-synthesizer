import { Reducer, createContext, Dispatch } from 'react'
import { SampleParams, SampleReducerAction } from '../types/sample-types'

export const initialSampleState: SampleParams = {
    audioContext: new AudioContext(),
    length: 1,
    source: '',
    detune: 0,
    frequency: 440,
    volume: 1,
    type: 'sine',
}

export const sampleReducer: Reducer<SampleParams, SampleReducerAction> = (
    state,
    action
) => {
    switch (action.type) {
        case 'length':
            return ({ length: action.result } = initialSampleState)
        case 'source':
            return ({ source: action.result } = initialSampleState)
        case 'detune':
            return ({ detune: action.result } = initialSampleState)
        case 'frequency':
            return ({ frequency: action.result } = initialSampleState)
        case 'volume':
            return ({ volume: action.result } = initialSampleState)
        case 'type':
            return ({ type: action.result } = initialSampleState)
        case 'audioContext':
            return ({ audioContext: action.result } = initialSampleState)
        default:
            throw new Error()
    }
}

interface SampleDispatch {
    state: SampleParams
    dispatch: Dispatch<SampleReducerAction>
}

const initialSampleDispatch: SampleDispatch = {
    state: initialSampleState,
    dispatch: () => {},
}

export const SampleContext = createContext(initialSampleDispatch)
