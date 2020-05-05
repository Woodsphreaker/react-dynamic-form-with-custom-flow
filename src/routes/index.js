import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Screen1 from '../pages/Screen-1'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <div>Dash</div>} />
        <Route path="/screen-1" exact component={Screen1} />
        <Route path="/screen-2" exact render={() => <div>Screen - 2</div>} />
        <Route path="/screen-3" exact render={() => <div>Screen - 3</div>} />
        <Route path="/screen-4" exact render={() => <div>Screen - 4</div>} />
        <Route path="/screen-5" exact render={() => <div>Screen - 5</div>} />
        <Route path="/screen-6" exact render={() => <div>Screen - 6</div>} />
        <Route path="/screen-7" exact render={() => <div>Screen - 7</div>} />
        <Route path="/screen-8" exact render={() => <div>Screen - 8</div>} />
      </Switch>
    </Router>
  )
}

export default Routes
