import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import Card from '../View/Card';

// WORK ON NEXT

const Study = () => {
  // useRouteMatch, useHistory
  const { params } = useRouteMatch();
  const history = useHistory();

  // state
  const [deck, setDeck] = useState([]);
  const [count, setCount] = useState(0);
  const [cardDisplay, setCardDisplay] = useState(false);

  // useEffect (readDeck)
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);

  console.log(deck.cards);

  // event handlers
  const handleFlipClick = () => {
    setCardDisplay(!cardDisplay);
  };

  const handleNextClick = () => {
    if (count + 1 < deck.cards.length) {
      console.log(count);
      setCount(count + 1);
    } else {
      const doesConfirm = window.confirm('Restart cards?');
      if (!doesConfirm) {
        history.push('/');
      } else {
        setCount(0);
      }
    }
  };

  // if cardDisplay is true show back, else if false show front
  let cardDescription;

  if (deck.cards) {
    if (cardDisplay) {
      cardDescription = <p>{deck.cards[count].back}</p>;
    } else if (!cardDisplay) {
      cardDescription = <p>{deck.cards[count].front}</p>;
    }
  }

  let frontOrBack;
  if (deck.cards) {
    // if cardDisplay is true say back, else if false say front
    if (cardDisplay) {
      frontOrBack = 'Back';
    } else {
      frontOrBack = 'Front';
    }
  }

  if (deck.cards) {
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
              <Link to={`/decks/${params.deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h2>{deck.name}: Study</h2>
        <div className="card">
          <div className="card-body">
            <h4>
              Card {count + 1} of {deck.cards.length} ({`${frontOrBack} side`})
            </h4>
            {cardDescription}
            <button
              className="btn btn-secondary mr-2"
              onClick={handleFlipClick}
            >
              Flip
            </button>
            <button className="btn btn-primary" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Study;
