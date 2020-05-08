import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
        <Route path="/" exact render={() => <div>Dash</div>} />
        <Route path="/screen-1" exact component={Screen1} />
        <Route path="/screen-2" exact component={Screen2} />
        <Route path="/screen-3" exact component={Screen3} />
        <Route path="/screen-4" exact component={Screen4} />
        <Route path="/screen-5" exact component={Screen5} />
        <Route path="/screen-6" exact component={Screen6} />
        <Route path="/screen-7" exact component={Screen7} />
        <Route path="/screen-8" exact component={Screen8} />
      </Switch>
    </Router>
  )
}

export default Routes
