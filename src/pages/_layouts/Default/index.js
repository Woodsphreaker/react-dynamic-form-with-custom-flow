import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content } from './styles'

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
