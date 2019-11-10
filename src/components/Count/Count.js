/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import styles from './styles'

function Count(props) {
  const {
    date,
    name,
    onClick
  } = props

  return (
    <div
      onClick={onClick}
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
        {date}
      </span>
    </div>
  )
}

Count.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Count.defaultProps = {
  onClick: undefined
}

export default Count
