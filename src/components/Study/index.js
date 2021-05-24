import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { listCards } from '../../utils/api';

const Study = () => {
  const params = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const response = await listCards(params.deckId);
      setCards(response);
    };
    getCards();
  }, [params.deckId]);

  return (
    <div className="Study">
      <h2>Rendering in React: Study</h2>
    </div>
  );
};

export default Study;
