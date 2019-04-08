/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// eslint-disable-next-line
import React from 'react'

import Avatar from '../Avatar'
import styles from './styles'

function Header() {
  return (
    <header
      css={css`${styles.Header}`}
    >
      <span
        css={css`${styles.HeaderName}`}
      >
        CountDown
      </span>
      <span>
        <Avatar name="Joe Michael Cocco" />
      </span>
    </header>
  )
}

export default Header
