import React from 'react'
import moment from 'moment'
import './index.scss'

const BottomBar = ({ year, month }) => <div className="bottom-bar">{moment().year(year).month(month).date(1).format('MMMM YYYY')}</div>

export default BottomBar
