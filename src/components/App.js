import React from 'react'
import { connect } from 'react-redux'
import { randomUser } from '../redux/user'
import './App.scss'

const App = ({ user, randomUser }) => (
  <div>
  <div className="app">
    
    <h1>Hello, World!</h1>
  </div>

<div>
    
<h1>Hello, World!</h1>
</div>
</div>
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { randomUser })(App)
