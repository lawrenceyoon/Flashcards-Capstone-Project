import React from 'react';
import Button from '../../Button';
import '../Create';

const Form = ({ handleFormSubmit, handleCancelClick, deck, setDeck }) => {
  // state

  // helper functions
  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="form-control"
          type="text"
          name="name"
          onChange={handleChange}
          value={deck.name}
          placeholder="Deck Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          name="description"
          onChange={handleChange}
          value={deck.description}
          placeholder="Brief description of the deck"
          required
        ></textarea>

        <Button
          color="btn-secondary"
          text="Cancel"
          onClick={handleCancelClick}
        />
        <Button color="btn-primary" text="Submit" />
      </div>
    </form>
  );
};

export default Form;
