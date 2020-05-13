import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import WrapperRoutes from './wrapperRouter'

import Dashboard from '../pages/Dashboard'
import Screen1 from '../pages/Screen-1'
import Screen2 from '../pages/Screen-2'
import Screen3 from '../pages/Screen-3'
import Screen4 from '../pages/Screen-4'
import Screen5 from '../pages/Screen-5'
import Screen6 from '../pages/Screen-6'
import Screen7 from '../pages/Screen-7'
import Screen8 from '../pages/Screen-8'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <WrapperRoutes path="/" exact component={Dashboard} />
        <WrapperRoutes path="/screen-1" exact component={Screen1} />
        <WrapperRoutes path="/screen-2" exact component={Screen2} />
        <WrapperRoutes path="/screen-3" exact component={Screen3} />
        <WrapperRoutes path="/screen-4" exact component={Screen4} />
        <WrapperRoutes path="/screen-5" exact component={Screen5} />
        <WrapperRoutes path="/screen-6" exact component={Screen6} />
        <WrapperRoutes path="/screen-7" exact component={Screen7} />
        <WrapperRoutes path="/screen-8" exact component={Screen8} />
      </Switch>
    </Router>
  )
}

export default Routes
