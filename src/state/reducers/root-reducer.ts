import { combineReducers } from 'redux'
import sampleReducer from './sample-reducers'
import layoutReducer from './layout-reducers'

const rootReducer = combineReducers({
    sample: sampleReducer,
    layout: layoutReducer,
})

export default rootReducer
