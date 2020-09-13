import React from 'react'
import classnames from 'classnames'
import './index.scss'

const SaveButton = ({ children, className, onClick }) => {
  return (
    <button className={classnames('btn-save', className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default SaveButton
