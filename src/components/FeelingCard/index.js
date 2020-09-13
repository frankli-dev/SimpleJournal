import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { RatingControl, SaveButton } from 'components'
import { formatDate } from 'utils'
import moment from 'moment'
import './index.scss'

const FeelingCard = ({ data: { rating: initialRating, text: initialText, month, day, saved }, onSave, theme, setTheme }) => {
  const [info, setInfo] = useState({
    rating: initialRating,
    text: initialText,
    touched: false,
  })

  const savedClass = classnames('saved', { hide: info.touched || !saved })

  useEffect(() => {
    setInfo({ rating: initialRating, text: initialText, touched: false })
  }, [initialRating, initialText])

  useEffect(() => {
    setTheme(info.rating)
  }, [info.rating])

  return (
    <div className="feeling-card">
      <div className="feeling-card-header">
        <h2>How are you feeling today?</h2>
        <RatingControl value={info.rating} onChange={(rating) => setInfo({ ...info, rating, touched: true })} />
      </div>
      <div className="feeling-card-body">
        <textarea value={info.text} onChange={(e) => setInfo({ ...info, text: e.target.value, touched: true })} />
      </div>
      <div className="divider" />
      <div className="feeling-card-footer">
        <span className="date">{formatDate(month, day)}</span>
        <span className={savedClass}>Saved on {saved}</span>

        <SaveButton
          hide={!info.touched || !info.rating || !info.text}
          theme={theme}
          onClick={() =>
            onSave({ month, day, rating: info.rating, text: info.text, saved: `${moment().format('MMMM DD')} at ${moment().format('m:ssa')}` })
          }
        >
          Save
        </SaveButton>
      </div>
    </div>
  )
}

export default FeelingCard
