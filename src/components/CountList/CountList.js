/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import Count from '../Count'
import styles from './styles'

function CountList(props) {
  const {
    events
  } = props

  return (
    <div
      css={css`${styles.CountList}`}
    >
      {events ? (
        events.map((countdown, i) =>
          <Count
            date={countdown.date}
            key={i}
            name={countdown.name}
          />
        )
      ) : (
        <div>
          Looks like you don't have any countdowns! Go to <a href="https://calendar.google.com">Google Calendar</a> and update the description for any event with "<code>#countdown</code>".
        </div>
      )}
    </div>
  )
}

CountList.propTypes = {
  events: PropTypes.array
}

export default CountList
