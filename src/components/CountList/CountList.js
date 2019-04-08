import PropTypes from 'prop-types'
import React from 'react'

import Count from '../Count'

function CountList(props) {
  const {
    events
  } = props

  return (
    events.map((countdown, i) =>
      <Count
        date={countdown.date}
        key={i}
        name={countdown.name}
      />
    )
  )
}

CountList.propTypes = {
  events: PropTypes.array.isRequired
}

export default CountList
