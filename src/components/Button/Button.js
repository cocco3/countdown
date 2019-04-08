/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import styles from './styles'

function Button(props) {
  const {
    onClick,
    text
  } = props

  return (
    <button
      css={css`${styles.Button}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
