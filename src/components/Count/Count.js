/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { format } from 'timeago.js';
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import styles from './styles'

function Count(props) {
  const {
    date,
    name
  } = props

  const formattedDate = format(date)

  return (
    <div
      css={css`${styles.Count}`}
    >
      <span
        css={css`${styles.CountName}`}
      >
        {name}
      </span>
      <span
        css={css`${styles.CountDate}`}
      >
        {formattedDate}
      </span>
    </div>
  )
}

Count.propTypes = {
  date: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
}

export default Count
