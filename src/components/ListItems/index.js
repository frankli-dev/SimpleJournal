import React from 'react'
import classnames from 'classnames'
import { useHorizontalScroll } from 'hooks/index'
import './index.scss'

const ListItems = ({}) => {
  const scrollRef = useHorizontalScroll()
  const items = [
    {
      date: 'Sep 7',
      rating: 1,
      text: 'I told mom that what she said hurt my feelings and',
    },
    { date: 'Sep 7', rating: 2, text: 'I told mom that what she said hurt my feelings and then something' },
    { date: 'Sep 8', rating: 3, text: 'I told mom that what she said hurt my feelings and then something' },
    { date: 'Sep 9', rating: 4, text: 'I told mom that what she said hurt my feelings and then something' },
    { date: 'Sep 10', rating: 5, text: 'I told mom that what she said hurt my feelings and then something' },
    { date: 'Sep 11', rating: 0, text: '' },
    { date: 'Sep 12', rating: 5, text: 'When I was tucking my daughter in for the night' },
  ]

  return (
    <div className="list-items" ref={scrollRef}>
      {items.map(({ date, rating, text }) => (
        <div className="list-item" key={date}>
          <span className={classnames('rating', { [`fg-color-${rating}`]: rating > 0, zero: rating === 0 })}>{rating}</span>
          <h5>{date}</h5>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default ListItems
