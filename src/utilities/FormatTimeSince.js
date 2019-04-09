// Helper to add 's' to a number if other than 1
function addS(n) {
  return n === 1 ? '' : 's'
}

const FormatTimeSince = function(timeSince, isAfterNow) {
  
  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  } = timeSince

  let final = {}

  if (years) {
    final = { years, months, days }
  } else if (months) {
    final = { months, days, hours }
  } else if (days) {
    final = { days, hours, minutes }
  } else if (hours) {
    final = { hours, minutes, seconds }
  } else if (minutes) {
    final = { minutes, seconds }
  } else if (seconds) {
    final = { seconds }
  }

  return format(final, isAfterNow)
}

const format = function (final, isAfterNow) {
  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  } = final

  const parts = []

  if (years) {
    parts.push(years + ' year' + addS(years))
  }

  if (months) {
    parts.push(months + ' month' + addS(months))
  }

  if (days) {
    parts.push(days + ' day' + addS(days))
  }

  if (hours) {
    parts.push(hours + ' hour' + addS(hours))
  }

  if (minutes) {
    parts.push(minutes + ' minute' + addS(minutes))
  }

  if (seconds) {
    parts.push(seconds + ' second' + addS(seconds))
  }

  const beginning = isAfterNow ? 'in' : ''
  const ending = isAfterNow ? '' : 'ago'

  return `${beginning} ${parts.join(', ')} ${ending}`.trim()
}

export default FormatTimeSince
