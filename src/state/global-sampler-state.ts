import { Reducer, createContext, Dispatch } from 'react'
import {
    GlobalSamplerState,
    GlobalSamplerAction,
} from '../types/global-sampler-types'

export const GlobalSampleReducer: Reducer<
    GlobalSamplerState,
    GlobalSamplerAction
> = (state, action) => {
    switch (action.type) {
        case 'allSamples':
            return { allSamples: state.allSamples.concat(action.result) }
        default:
            throw new Error()
    }
}

export const initialSamplerState = {
    allSamples: [],
}

interface SamplerDispatch {
    state: GlobalSamplerState
    dispatch: Dispatch<GlobalSamplerAction>
}

const initialSamplerDispatch: SamplerDispatch = {
    state: initialSamplerState,
    dispatch: () => {},
}

export const SampleContext = createContext(initialSamplerDispatch)
