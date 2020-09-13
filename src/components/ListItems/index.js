import React from 'react'
import classnames from 'classnames'
import { useHorizontalScroll } from 'hooks'
import moment from 'moment'
import './index.scss'

const opacityList = [0.9, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1]

const ListItems = ({ items = [], current }) => {
  const [scrollRef, isHovered] = useHorizontalScroll()
  const today = moment().startOf('day')
  const currentYear = today.year()

  return (
    <div className="list-items" ref={scrollRef}>
      {items.map(({ date, rating, text, day, month }) => {
        const diffDate = today.diff(moment().year(currentYear).month(month).date(day).startOf('day'), 'days')
        const opacity = isHovered ? 0.9 : opacityList[Math.min(diffDate, 6)]

        const itemClass = classnames('list-item', { active: current === date })
        const ratingClass = classnames('rating', { [`fg-color-${rating}`]: rating > 0, zero: !rating })

        return (
          <div className={itemClass} key={date} style={{ opacity }}>
            <span className={ratingClass}>{rating}</span>
            <h5>{diffDate <= 0 ? 'Today' : diffDate <= 1 ? 'Yesterday' : date}</h5>
            <p>{text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListItems
