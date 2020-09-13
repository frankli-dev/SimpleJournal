import React from 'react'
import { formatMonth } from 'utils'
import './index.scss'

const BottomBar = ({ month }) => <div className="bottom-bar">{formatMonth(month)}</div>

export default BottomBar
