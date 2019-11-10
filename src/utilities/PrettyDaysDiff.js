import FormatTimeDiff from "./FormatTimeDiff";

import difference_in_seconds from 'date-fns/difference_in_seconds'
import dateParse from 'date-fns/parse'

const PrettyDaysDiff = function (isoDate) {

  const now = new Date()
  const date = dateParse(isoDate)

  const isAfterNow = date > now
  const dateDiffInSeconds = Math.abs(difference_in_seconds(date, now))

  const days = dateDiffInSeconds / 86400.0

  const dateParts = { days: days.toFixed(2) }
  const formattedTimeDifference = FormatTimeDiff(dateParts, isAfterNow, 1)

  return formattedTimeDifference
}

export default PrettyDaysDiff
