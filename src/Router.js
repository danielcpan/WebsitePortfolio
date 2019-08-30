import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

// import AppToolBar from './components/AppToolBar';
// import Home from './views/Home';
// import Analytics from './views/Analytics';
import Terminal from './components/Terminal';
import HeroContent2 from './components/HeroContent2';
import HeroContent from './components/HeroContent';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Terminal} />
      <Route path="/projects" exact component={HeroContent} />
    </Switch>
  </BrowserRouter>
);
