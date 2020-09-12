import React from 'react'
import { SaveButton, RatingControl, FeelingCard } from './components'
import './App.scss'

function App() {
  return (
    <div className="App">
      <SaveButton>Save</SaveButton>
      <RatingControl value={3} />
      <FeelingCard rating={5} text="When I was tucking my daughter in for the night, she said unprompted, “Daddy, you’re the best!”" />
    </div>
  )
}

export default App
