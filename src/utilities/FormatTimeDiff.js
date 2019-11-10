// Helper to add 's' to a number if other than 1
function addS(n) {
  return n === 1 ? '' : 's'
}

const FormatTimeDiff = function(timeSince, isAfterNow, precision = 3) {
  
  const {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds
  } = timeSince

  const parts = []

  if (precision && years) {
    parts.push(years + ' year' + addS(years))
    precision--
  }

  if (precision && months) {
    parts.push(months + ' month' + addS(months))
    precision--
  }

  if (precision && weeks) {
    parts.push(weeks + ' week' + addS(weeks))
    precision--
  }

  if (precision && days) {
    parts.push(days + ' day' + addS(days))
    precision--
  }

  if (precision && hours) {
    parts.push(hours + ' hour' + addS(hours))
    precision--
  }

  if (precision && minutes) {
    parts.push(minutes + ' minute' + addS(minutes))
    precision--
  }

  if (precision && seconds) {
    parts.push(seconds + ' second' + addS(seconds))
    precision--
  }

  const beginning = isAfterNow ? 'in' : ''
  const ending = isAfterNow ? '' : 'ago'

  return `${beginning} ${parts.join(', ')} ${ending}`.trim()
}

export default FormatTimeDiff
