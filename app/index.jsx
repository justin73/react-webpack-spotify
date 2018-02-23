import React from 'react'
import {render} from 'react-dom'
import App from './app.jsx'

const state = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true}
  ]
}
render(<App todos={state.todos} />, document.getElementById('app'))
