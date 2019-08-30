import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Cliente from './views/Cliente';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/dashboard/cliente' component={Cliente} />
    </Switch>
  )
}