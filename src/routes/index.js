import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';
import Example from '../pages/example';
import Home from '../pages/home';
import Teste from '../pages/teste';
import Products from '../pages/products';
import Login from '../pages/login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/example" exact component={Example} />
        <Route path="/teste" exact component={Teste} />

        <Route path="/" isPrivate exact component={Home} />
        <Route path="/home" isPrivate exact component={Home} />
        <Route path="/products" isPrivate exact component={Products} />

        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
