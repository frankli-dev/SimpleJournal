import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useHorizontalScroll } from 'hooks'
import { calcOpacity, formatDate } from 'utils'
import moment from 'moment'
import './index.scss'

const ListItems = ({ items = [], current, onEnterMonth, onSelect }) => {
  const today = moment().startOf('day')

  const [scrollRef, isHovered, inputRef, currentMonth] = useHorizontalScroll(today.month())

  useEffect(() => {
    onEnterMonth(currentMonth)
  }, [currentMonth])

  return (
    <div className="list-items" ref={scrollRef}>
      {items.map(({ rating, text, day, month }) => {
        const opacity = isHovered ? 0.9 : calcOpacity(current, { month, day })

        const itemClass = classnames('list-item', { active: current.month === month && current.day === day })
        const ratingClass = classnames('rating', { [`fg-color-${rating}`]: rating > 0, zero: !rating })
        const key = `${month}-${day}`

        return (
          <div
            className={itemClass}
            key={key}
            style={{ opacity }}
            ref={(el) => {
              if (day === 1) inputRef.current[month] = el
            }}
            onClick={() => onSelect(month, day)}
          >
            <span className={ratingClass}>{rating}</span>
            <h5>{formatDate(month, day)}</h5>
            <p>{text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListItems
