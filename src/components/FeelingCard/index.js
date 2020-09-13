import React from 'react'
import classnames from 'classnames'
import { RatingControl, SaveButton } from 'components'
import { formatDate } from 'utils'
import './index.scss'

const FeelingCard = ({ data: { rating, text, month, day }, onSave, onChange }) => {
  const saveBtnClass = classnames(`fg-color-${rating}`, `border-color-${rating}`, { hide: !rating || !text })
  return (
    <div className="feeling-card">
      <div className="feeling-card-header">
        <h2>How are you feeling today?</h2>
        <RatingControl value={rating} onChange={(v) => onChange('rating', v)} />
      </div>
      <div className="feeling-card-body">
        <textarea defaultValue={text} onChange={(e) => onChange('text', e.target.value)} />
      </div>
      <div className="divider" />
      <div className="feeling-card-footer">
        <span className="date">{formatDate(month, day)}</span>
        <SaveButton className={saveBtnClass} onClick={() => onSave({ month, day, rating, text })}>
          Save
        </SaveButton>
      </div>
    </div>
  )
}

export default FeelingCard
