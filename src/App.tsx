import React from 'react'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import './App.css'

import Sampler from './components/sampler/sampler'
import rootReducer from './state/reducers/root-reducer'

const store = createStore(rootReducer, devToolsEnhancer({}))
const App = () => {
  return (
    <Provider store={store}>
      <Sampler />
    </Provider>
  )
}

export default App
