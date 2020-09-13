import React from 'react'
import classnames from 'classnames'
import './index.scss'

const RatingControl = ({ value, onChange }) => {
  return (
    <div className="rating-control">
      <span className="prefix">Awful</span>
      <div>
        {[...new Array(5)].map((_, index) => {
          const label = index + 1
          const itemClass = classnames('rating-control-item', { selected: label === value, [`bg-color-${label}`]: label === value })
          return (
            <span key={index} className={itemClass} onClick={() => onChange(label)}>
              {index + 1}
            </span>
          )
        })}
      </div>
      <span className="suffix">Amazing</span>
    </div>
  )
}

export default RatingControl
