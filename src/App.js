import React, { useState } from 'react'
import { FeelingCard, ListItems, BottomBar } from 'components'
import moment from 'moment'
import classnames from 'classnames'
import './App.scss'

function App() {
  const today = moment().startOf('day')
  const [month, setMonth] = useState(today.month())
  const [trackData, setTrackData] = useState({})
  const [selected, setSelected] = useState(
    trackData[`${today.month()}-${today.date()}`] || {
      rating: 0,
      text: '',
      month: today.month(),
      day: today.date(),
    },
  )

  const onSave = (data) => {
    const { month, day } = data
    setTrackData({
      ...trackData,
      [`${month}-${day}`]: data,
    })
  }

  const onUpdateSelected = (key, value) => {
    setSelected({
      ...selected,
      [key]: value,
    })
  }

  const onSelectDate = (month, day) => {
    setSelected(
      trackData[`${month}-${day}`] || {
        rating: 0,
        text: '',
        month,
        day,
      },
    )
  }

  const appClass = classnames('App', `bg-gradient-${selected.rating}`)
  const items = []
  const yearStart = moment().year(today.year()).month(0).date(1).startOf('day')

  for (var m = yearStart; m.diff(today, 'days') <= 0; m.add(1, 'days')) {
    items.push({
      month: m.month(),
      day: m.date(),
      ...trackData[`${m.month()}-${m.date()}`],
    })
  }

  return (
    <div className={appClass}>
      <span className="logo">Simplejournal</span>
      <div className="main">
        <FeelingCard data={selected} onSave={onSave} onChange={onUpdateSelected} />
      </div>
      <ListItems items={items} current={selected} onEnterMonth={setMonth} onSelect={onSelectDate} />
      <BottomBar month={month} />
    </div>
  )
}

export default App
