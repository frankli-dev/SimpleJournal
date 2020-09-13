import React, { useState } from 'react'
import { FeelingCard, ListItems, BottomBar } from 'components'
import { formatDate } from 'utils'
import moment from 'moment'
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
  const items = []
  const today = moment().startOf('day')
  const yearStart = moment().year(today.year()).month(0).date(1).startOf('day')

  for (var m = yearStart; m.diff(today, 'days') <= 0; m.add(1, 'days')) {
    const formatted = formatDate(m)
    items.push({
      date: formatted,
      month: m.month(),
      day: m.date(),
      ...trackData[formatted],
    })
  }

  return (
    <div className={appClass}>
      <span className="logo">Simplejournal</span>
      <div className="main">
        <FeelingCard data={selected} onSave={onSave} onChange={onUpdateSelected} />
      </div>
      <ListItems items={items} />
      <BottomBar />
    </div>
  )
}

export default App
