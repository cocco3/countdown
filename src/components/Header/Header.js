/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import Avatar from '../Avatar'
import Button from '../Button'
import styles from './styles'

function Header(props) {
  const {
    isSignedIn,
    name,
    photo,
    onSignInClick
  } = props

  return (
    <header
      css={css`${styles.Header}`}
    >
      <div
        css={css`${styles.HeaderName}`}
      >
        CountDownApp
      </div>

      <div
        css={css`${styles.HeaderUser}`}
      >
        {isSignedIn ? (
          <React.Fragment>
            <Avatar name={name} src={photo} />
            <span>{name}</span>
          </React.Fragment>
        ) : (
          <Button text="Sign In" onClick={onSignInClick} />
        )}
      </div>

    </header>
  )
}

Header.propTypes = {
  isSignedIn: PropTypes.bool,
  name: PropTypes.string,
  photo: PropTypes.string,
  onSignInClick: PropTypes.func
}

export default Header
