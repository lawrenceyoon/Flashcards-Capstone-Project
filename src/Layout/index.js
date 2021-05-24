import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../components/Home';
import View from '../components/View';
import Study from '../components/Study';
import NotFound from './NotFound';

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId">
            <View />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
