/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line
import React from 'react'

import Initials from '../../utilities/Initials'
import styles from './styles'

function Avatar(props) {
  const {
    name,
    src
  } = props

  const initials = name ? Initials(name) : null

  const imgStyle = src && { backgroundImage: `url(${src})` }

  return (
    <span
      css={css`${styles.Avatar}`}
      style={imgStyle || null}
    >
      {imgStyle ? null : initials}
    </span>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}

export default Avatar
