import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { RatingControl, SaveButton } from 'components'
import { formatDate } from 'utils'
import moment from 'moment'
import './index.scss'

const FeelingCard = ({ data: { rating: initialRating, text: initialText, month, day, saved }, onSave, theme, setTheme }) => {
  const [rating, setRating] = useState(initialRating)
  const [text, setText] = useState(initialText)
  const touched = rating !== initialRating || text !== initialText

  console.log(touched)

  const saveBtnClass = classnames(`fg-color-${theme}`, `border-color-${theme}`, { hide: !touched || !rating || !text })
  const savedClass = classnames('saved', { hide: touched || !saved })

  useEffect(() => {
    setRating(initialRating)
    setText(initialText)
  }, [initialRating, initialText])

  useEffect(() => {
    setTheme(rating)
  }, [rating])

  return (
    <div className="feeling-card">
      <div className="feeling-card-header">
        <h2>How are you feeling today?</h2>
        <RatingControl value={rating} onChange={(v) => setRating(v)} />
      </div>
      <div className="feeling-card-body">
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="divider" />
      <div className="feeling-card-footer">
        <span className="date">{formatDate(month, day)}</span>
        <span className={savedClass}>Saved on {saved}</span>

        <SaveButton
          className={saveBtnClass}
          onClick={() => onSave({ month, day, rating, text, saved: `${moment().format('MMMM DD')} at ${moment().format('m:ssa')}` })}
        >
          Save
        </SaveButton>
      </div>
    </div>
  )
}

export default FeelingCard
