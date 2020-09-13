import React, { useState } from 'react'
import { FeelingCard, ListItems, BottomBar } from 'components'
import moment from 'moment'
import classnames from 'classnames'
import { useLocalStorage } from 'hooks'
import './App.scss'

function App() {
  const today = moment().startOf('day')
  const [trackData, setTrackData] = useLocalStorage('simplejournal', {})

  const initialData = trackData[`${today.month()}-${today.date()}`] || {
    rating: 0,
    text: '',
    month: today.month(),
    day: today.date(),
  }

  const [calendarMonth, setMonth] = useState(today.month())
  const [selected, setSelected] = useState(initialData)
  const [theme, setTheme] = useState(initialData.rating)

  const onSave = (data) => {
    const { month, day } = data
    setTrackData({
      ...trackData,
      [`${month}-${day}`]: data,
    })
    setSelected(data)
  }

  const onSelectDate = (month, day) => {
    const data = trackData[`${month}-${day}`] || {
      rating: 0,
      text: '',
      month,
      day,
    }
    setSelected(data)
    setTheme(data.rating)
  }

  const appClass = classnames('App', `bg-gradient-${theme}`)
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
        <FeelingCard data={selected} onSave={onSave} theme={theme} setTheme={setTheme} />
      </div>
      <ListItems items={items} current={selected} onEnterMonth={setMonth} onSelect={onSelectDate} />
      <BottomBar month={calendarMonth} />
    </div>
  )
}

export default App
