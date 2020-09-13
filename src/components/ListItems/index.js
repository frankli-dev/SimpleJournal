import React from 'react'
import classnames from 'classnames'
import { useHorizontalScroll } from 'hooks/index'
import moment from 'moment'
import './index.scss'

const ListItems = ({ items = [] }) => {
  const scrollRef = useHorizontalScroll()
  const today = moment().startOf('day')
  const currentYear = today.year()

  return (
    <div className="list-items" ref={scrollRef}>
      {items.map(({ date, rating, text, day, month }) => {
        const diffDate = today.diff(moment().year(currentYear).month(month).date(day).startOf('day'), 'days')
        const itemClass = classnames('rating', { [`fg-color-${rating}`]: rating > 0, zero: !rating })
        return (
          <div className="list-item" key={date}>
            <span className={itemClass}>{rating}</span>
            <h5>{diffDate <= 0 ? 'Today' : diffDate <= 1 ? 'Yesterday' : date}</h5>
            <p>{text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListItems
