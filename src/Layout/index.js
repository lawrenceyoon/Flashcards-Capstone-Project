import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomeDeck from '../Deck/Home';
import CreateDeck from '../Deck/Create';
import ViewDeck from '../Deck/View';
import EditDeck from '../Deck/Edit';
import StudyDeck from '../Deck/Study';
import CreateCard from '../Card/Create';
import EditCard from '../Card/Edit';
import NotFound from './NotFound';

// deleting card is refreshing page with go(0). is that okay?

// Edit Card Component updateCard BREAKING. WHY? ALSO NOT SHOWING DEFAULT ON FORMS: FRONT: CARD1, BACK: CARD1

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <HomeDeck />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          {/* Catch all */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
