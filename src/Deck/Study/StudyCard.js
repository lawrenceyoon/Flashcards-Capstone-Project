import React from 'react';

const StudyButton = ({
  deck,
  count,
  cardDisplay,
  cardDescription,
  handleFlipClick,
  renderNextButton,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4>
          Card {count + 1} of {deck.cards.length} (
          {cardDisplay ? 'Front' : 'Back'} side)
        </h4>
        {cardDescription}
        <button className="btn btn-secondary mr-2" onClick={handleFlipClick}>
          Flip
        </button>
        {renderNextButton}
      </div>
    </div>
  );
};

export default StudyButton;
