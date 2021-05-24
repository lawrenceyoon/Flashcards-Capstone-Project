import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { listCards } from '../../utils/api';
import CardList from './CardList';

const View = () => {
  // state
  const [cards, setCards] = useState([]);

  console.log(cards);

  const { params } = useRouteMatch();

  // useEffect (get cards)
  useEffect(() => {
    const getCards = async () => {
      const response = await listCards(params.deckId);
      setCards(response);
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
            Library
          </li>
        </ol>
      </nav>
      <CardList cards={cards} />
    </div>
  );
};

export default View;
