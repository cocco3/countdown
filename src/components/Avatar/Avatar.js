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

  const initials = Initials(name)

  return (
    <div
      css={css`${styles.Avatar}`}
    >
      {initials}
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
}

export default Avatar
