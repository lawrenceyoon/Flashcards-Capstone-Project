import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import StudyCard from './StudyCard';
import NotEnoughCards from './NotEnoughCards';

const Study = () => {
  // useRouteMatch, useHistory
  const { params } = useRouteMatch();
  const history = useHistory();

  // state
  const [deck, setDeck] = useState({});
  const [count, setCount] = useState(0);
  const [cardDisplay, setCardDisplay] = useState(true);
  const [firstFlip, setFirstFlip] = useState(false);

  // useEffect (readDeck)
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);

  // event handlers
  const handleFlipClick = () => {
    setCardDisplay(!cardDisplay);
    setFirstFlip(true);
  };

  const handleNextClick = () => {
    if (count + 1 < deck.cards.length) {
      console.log(count);
      setCount(count + 1);
      setCardDisplay(true);
      setFirstFlip(false);
    } else {
      const message = `Restart cards?\n\nClick 'cancel' to return to the home page.`;
      const doesConfirm = window.confirm(message);
      if (!doesConfirm) {
        history.push('/');
      } else {
        setCount(0);
        setCardDisplay(true);
        setFirstFlip(false);
      }
    }
  };

  if (!deck.id) {
    return <p>Loading...</p>;
  }

  let cardDescription;
  if (deck.cards.length) {
    cardDescription = cardDisplay ? (
      <p>{deck.cards[count].front}</p>
    ) : (
      <p>{deck.cards[count].back}</p>
    );
  }

  // don't show next button on inital load
  let renderNextButton = firstFlip && (
    <button className="btn btn-primary" onClick={handleNextClick}>
      Next
    </button>
  );

  // DISPLAY CARDS IF deck.cards.length >= 3
  const renderContent =
    deck.cards.length >= 3 ? (
      <StudyCard
        deck={deck}
        count={count}
        cardDisplay={cardDisplay}
        cardDescription={cardDescription}
        handleFlipClick={handleFlipClick}
        renderNextButton={renderNextButton}
      />
    ) : (
      <NotEnoughCards deck={deck} deckId={params.deckId} />
    );

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
      {renderContent}
    </div>
  );
};

export default Study;
