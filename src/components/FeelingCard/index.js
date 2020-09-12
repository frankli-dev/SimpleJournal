import React from 'react'
import RatingControl from '../RatingControl'
import SaveButton from '../SaveButton'
import './index.scss'

const FeelingCard = ({ rating, text, date }) => {
  return (
    <div className="feeling-card">
      <div className="feeling-card-header">
        <h2>How are you feeling today?</h2>
        <RatingControl value={rating} />
      </div>
      <div className="feeling-card-body">
        <textarea defaultValue={text} />
      </div>
      <div className="divider" />
      <div className="feeling-card-footer">
        <span className="date">Jul 23</span>
        <SaveButton>Save</SaveButton>
      </div>
    </div>
  )
}

export default FeelingCard
