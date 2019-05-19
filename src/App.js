import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Kitchen from './components/Kitchen';
import Err from './components/Err';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/kitchen' component={Kitchen} />
        <Route component={Err} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
