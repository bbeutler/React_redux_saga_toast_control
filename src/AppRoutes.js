// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TestRoute from './pages/TestRoute'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/test-route" component={TestRoute} />
        <Route path="*" component={NotFound} />
      </Switch>
</div>
  )
}

export default Main