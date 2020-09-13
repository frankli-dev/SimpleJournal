import moment from 'moment'

const formatDate = (date = moment()) => {
  return date.format('MMM DD')
}

export { formatDate }
