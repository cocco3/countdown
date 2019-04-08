/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import styles from './styles'

function Button(props) {
  const {
    text
  } = props

  return (
    <button
      type="button"
      css={css`${styles.Button}`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
