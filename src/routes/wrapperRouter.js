import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Default from '../pages/_layouts/Default'

const WrapperRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Default>
          <Component {...props} />
        </Default>
      )}
    />
  )
}

export default WrapperRoutes

WrapperRoutes.propTypes = {
  component: PropTypes.func.isRequired,
}
