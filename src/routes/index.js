import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';
import Example from '../pages/example';
import Home from '../pages/home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/example" exact component={Example} />
        <Route path="/home" exact component={Home} />

        <Route path="/" exact component={Example} />
      </Switch>
    </BrowserRouter>
  );
}
