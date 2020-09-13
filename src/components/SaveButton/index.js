import React, { useState } from 'react'
import classnames from 'classnames'
import './index.scss'

const SaveButton = ({ children, hide, onClick, theme }) => {
  const [isHover, setHover] = useState(false)
  const btnClass = classnames('btn-save', `border-color-${theme}`, {
    [`fg-color-${theme}`]: !isHover,
    [`bg-color-${theme}`]: isHover,
    'fg-color-white': isHover,
    hide,
  })

  return (
    <button className={btnClass} onClick={onClick} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      {children}
    </button>
  )
}

export default SaveButton
