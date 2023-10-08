import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../views/About';
import Shows from '../views/Shows'
import Music from '../views/Music';
import Personnel from '../views/Personnel';

export default function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/about" component={About} />
      <Route exact path="/music" component={Music} />
      <Route exact path="/personnel" component={Personnel} />
    </Switch>
  );
}