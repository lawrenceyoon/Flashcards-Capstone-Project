import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { readDeck } from '../../utils/api';

const Study = () => {
  const { params, url } = useRouteMatch();
  const [deck, setDeck] = useState([]);

  // useEffect (getCards)
  useEffect(() => {
    const getCards = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getCards();
  }, [params.deckId]);

  return (
    <div className="Study">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={url}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h2>{deck.name}: Study</h2>
    </div>
  );
};

export default Study;
