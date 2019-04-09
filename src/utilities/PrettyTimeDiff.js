import FormatTimeSince from "./FormatTimeSince";
import GetDatePartsFromMilliseconds from "./GetDatePartsFromMilliseconds";

import differenceInMilliseconds from 'date-fns/difference_in_milliseconds'
import dateParse from 'date-fns/parse'

const PrettyTimeDiff = function (isoDate) {

  const now = new Date()
  const date = dateParse(isoDate)

  const isAfterNow = date > now
  const dateDiffInMs = Math.abs(differenceInMilliseconds(date, now))

  const dateParts = GetDatePartsFromMilliseconds(dateDiffInMs)
  const formattedTimeDifference = FormatTimeSince(dateParts, isAfterNow)

  return formattedTimeDifference
}

export default PrettyTimeDiff
