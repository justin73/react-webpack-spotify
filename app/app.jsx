import React, {Component} from 'react'
import AwesomeComponent from './AwesomeComponent.jsx'
import './app.scss'
class App extends Component {
  render () {
    return (
      <div>
        <p> Hello React Project</p>
        <AwesomeComponent />
      </div>
    )
  }
}

export default App
