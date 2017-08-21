import React from 'react'
import { render } from 'react-dom'
import App from '../shared/App'
import { Provider } from 'react-redux'
import store from '../shared/store'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))