import React from 'react'
import { FeelingCard, ListItems, BottomBar } from './components'
import './App.scss'

function App() {
  return (
    <div className="App">
      <span className="logo">Simplejournal</span>
      <div className="main">
        <FeelingCard rating={5} text="When I was tucking my daughter in for the night, she said unprompted, “Daddy, you’re the best!”" />
      </div>
      <ListItems />
      <BottomBar />
    </div>
  )
}

export default App
