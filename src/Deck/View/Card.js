import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { deleteDeck } from '../../utils/api';
import './Card.css';

const Card = ({ card }) => {
  // useRouteMatch
  const { url, params } = useRouteMatch();

  // useEffect (readCard) //

  // event handlers
  const handleDelete = async () => {
    try {
      const doesConfirm = window.confirm(
        'Delete this card?\n\nYou will not be able to recover it.'
      );
      if (!doesConfirm) return;
      // await deleteCard(cardId)
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="Card card">
      <div className="card-body">
        <div className="front">{card.front}</div>
        <div className="back">{card.back}</div>
        <div className="buttons">
          <Link to={`${url}/cards/${card.id}/edit`}>
            <button className="btn btn-secondary mr-2">
              <span className="oi oi-pencil">&nbsp;</span>Edit
            </button>
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            <span className="oi oi-trash">&nbsp;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
