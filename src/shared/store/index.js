import { createStore } from 'redux'
import rootReducer from '../reducer'
import { applyMiddlewares } from 'redux'
import { createLogger } from 'redux-logger'

const preState = window.__INIT_STATE__

export default createStore(rootReducer, preState)
