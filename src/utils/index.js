import moment from 'moment'

const opacityList = [0.9, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1]

const today = moment().startOf('day')
const currentYear = today.year()

const formatDate = (month, day) => {
  const itemDate = moment().year(currentYear).month(month).date(day).startOf('day')
  const diffDate = today.diff(itemDate, 'days')

  if (diffDate === 1) return 'Yesterday'
  if (diffDate === 0) return 'Today'

  return itemDate.format('MMM DD')
}

const formatMonth = (month) => {
  return moment().year(currentYear).month(month).day(1).format('MMMM YYYY')
}

const calcOpacity = (active, item) => {
  const activeDate = moment().year(currentYear).month(active.month).date(active.day).startOf('day')
  const itemDate = moment().year(currentYear).month(item.month).date(item.day).startOf('day')
  const diffDate = Math.abs(activeDate.diff(itemDate, 'days'))

  return opacityList[Math.min(diffDate, 6)]
}

export { formatDate, formatMonth, calcOpacity }
