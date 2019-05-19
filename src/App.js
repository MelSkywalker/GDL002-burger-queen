import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Waiter from './components/Waiter';
import Kitchen from './components/Kitchen';
import Err from './components/Err';
import Food from './components/Food';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/waiter' component={Waiter} />
        <Route path='/kitchen' component={Kitchen} />
        <Route path='/food' component={Food} />
        <Route component={Err} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
