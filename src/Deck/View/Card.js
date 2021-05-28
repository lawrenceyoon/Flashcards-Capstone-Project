import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import './Card.css';
import { deleteCard } from '../../utils/api';

const Card = ({ card }) => {
  // useRouteMatch, useHistory
  const { url } = useRouteMatch();
  const history = useHistory();

  // event handlers
  const handleDelete = async () => {
    try {
      const doesConfirm = window.confirm(
        'Delete this card?\n\nYou will not be able to recover it.'
      );
      if (!doesConfirm) return;
      await deleteCard(card.id);
      history.go(0);
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
          <Link
            className="btn btn-secondary mr-2"
            to={`${url}/cards/${card.id}/edit`}
          >
            <span className="oi oi-pencil">&nbsp;</span>Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <span className="oi oi-trash">&nbsp;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
