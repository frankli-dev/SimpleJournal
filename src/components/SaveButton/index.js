import React from 'react'
import './index.scss'

const SaveButton = ({ children, onClick }) => {
  return (
    <button className="btn-save" onClick={onClick}>
      {children}
    </button>
  )
}

export default SaveButton
