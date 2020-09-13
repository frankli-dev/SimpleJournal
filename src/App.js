import React, { useState } from 'react'
import { FeelingCard, ListItems, BottomBar } from 'components'
import { formatDate } from 'utils'
import classnames from 'classnames'
import './App.scss'

function App() {
  const formattedToday = formatDate()
  const [trackData, setTrackData] = useState({})
  const [selected, setSelected] = useState(
    trackData[formattedToday] || {
      date: formattedToday,
      rating: 0,
      text: '',
    },
  )

  const onSave = (data) => {
    console.log('onSave', data)
    setTrackData({
      ...trackData,
      [data.date]: data,
    })
  }

  const onUpdateSelected = (key, value) => {
    setSelected({
      ...selected,
      [key]: value,
    })
  }

  const appClass = classnames('App', `bg-gradient-${selected.rating}`)

  return (
    <div className={appClass}>
      <span className="logo">Simplejournal</span>
      <div className="main">
        <FeelingCard data={selected} onSave={onSave} onChange={onUpdateSelected} />
      </div>
      <ListItems />
      <BottomBar />
    </div>
  )
}

export default App
