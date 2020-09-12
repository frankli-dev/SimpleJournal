import React from 'react'
import { SaveButton, RatingControl, FeelingCard, ListItems } from './components'
import './App.scss'

function App() {
  return (
    <div className="App">
      <FeelingCard rating={5} text="When I was tucking my daughter in for the night, she said unprompted, “Daddy, you’re the best!”" />
      <ListItems />
    </div>
  )
}

export default App
