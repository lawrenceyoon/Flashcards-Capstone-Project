import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './index.css';
import { readDeck } from '../../utils/api';
import Button from '../Button';
import CardList from './CardList';

const View = () => {
  // state
  const [deck, setDeck] = useState({});

  // routeMatch
  const { params, url, path } = useRouteMatch();

  console.log(url);

  // useEffect (get cards)
  useEffect(() => {
    const getCards = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getCards();
  }, [params.deckId]);

  return (
    <div className="View">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div className="buttons">
        <Link to={`${url}/edit`}>
          <Button color="btn-secondary" icon="oi oi-pencil" text="Edit" />
        </Link>
        <Button color="btn-primary" icon="oi oi-book" text="Study" />
        <Button color="btn-primary" icon="oi oi-plus" text="Add Cards" />
      </div>
      <h3>Cards</h3>
      <CardList cards={deck.cards} />
    </div>
  );
};

export default View;
