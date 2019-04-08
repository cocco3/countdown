/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// eslint-disable-next-line
import React from 'react'

import Avatar from '../Avatar'
import Button from '../Button'
import styles from './styles'

function Header() {
  return (
    <header
      css={css`${styles.Header}`}
    >
      <div
        css={css`${styles.HeaderName}`}
      >
        CountDown
      </div>
      <div>
        <Button text="Sign In" />
        <Avatar name="Joe Michael Cocco" />
      </div>
    </header>
  )
}

export default Header
