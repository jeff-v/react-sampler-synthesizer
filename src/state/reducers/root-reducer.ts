import { combineReducers } from 'redux'
import sampleReducer from './sample-reducer'
import layoutReducer from './layout-reducer'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  sample: sampleReducer,
  layout: layoutReducer
})

export default rootReducer
