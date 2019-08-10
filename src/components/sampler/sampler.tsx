import React, { useReducer } from 'react'
import {
    SampleContext,
    sampleReducer,
    initialSampleState,
} from '../../state/sample-state'
import {} from '../../state/global-sampler-state'
import CreateSample from '../create-sample/create-sample'

const Sampler = () => {
    const [state, dispatch] = useReducer(sampleReducer, initialSampleState)

    return (
        <SampleContext.Provider value={{ state, dispatch }}>
            <CreateSample />
        </SampleContext.Provider>
    )
}

export default Sampler
