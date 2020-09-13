import React, { useEffect, useState } from 'react'
import RatingControl from '../RatingControl'
import SaveButton from '../SaveButton'
import './index.scss'

const FeelingCard = ({ data: { rating, text, date }, onSave, onChange }) => (
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
      <span className="date">{date}</span>
      <SaveButton onClick={() => onSave({ date, rating, text })}>Save</SaveButton>
    </div>
  </div>
)

export default FeelingCard
