import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'

import { render } from 'react-dom'

class App extends Component {
  
  handleAdd() {
    this.props.actions.addNum(1)
  }
  
  render() {
    return (
      <div>
        <p>现在Count是:{this.props.count}</p>
        <button onClick={this.handleAdd.bind(this)}>+1s</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
