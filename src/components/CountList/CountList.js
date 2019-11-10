/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React, { useState } from 'react'

import Count from '../Count'
import styles from './styles'

import PrettyDaysDiff from '../../utilities/PrettyDaysDiff'
import PrettyTimeDiff from '../../utilities/PrettyTimeDiff'

function CountList(props) {
  const {
    events
  } = props

  const [isDays, setFormat] = useState(false);

  return (
    <div
      css={css`${styles.CountList}`}
    >
      {events ? (
        events.map((countdown, i) => {

          const formattedDate = isDays
            ? PrettyDaysDiff(countdown.date)
            : PrettyTimeDiff(countdown.date)

          return (
            <Count
              date={formattedDate}
              key={i}
              name={countdown.name}
              onClick={() => setFormat(!isDays)}
            />
          )
        })
      ) : (
        <p>
          Looks like you don't have any countdowns! Go to <a href="https://calendar.google.com">Google Calendar</a> and update the description for any event with "<code>#countdown</code>".
        </p>
      )}
    </div>
  )
}

CountList.propTypes = {
  events: PropTypes.array
}

export default CountList
