import React from 'react';
import { useHistory } from 'react-router-dom';

const Form = ({ card, setCard, url, handleFormSubmit }) => {
  // useHistory
  const history = useHistory();

  // if url includes "edit" show cancel text, if url includes "new" show done button
  const arrUrl = url.split('/');
  let firstButtonText = arrUrl.includes('new') ? 'Done' : 'Cancel';

  // event handlers
  const handleChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const handleDoneClick = () => {
    history.goBack();
  };

  return (
    <form className="CardForm" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          className="form-control"
          name="front"
          onChange={handleChange}
          value={card.front}
          placeholder="Front side of card"
          required
        ></textarea>
        <label htmlFor="back">Back</label>
        <textarea
          id="back"
          className="form-control"
          name="back"
          onChange={handleChange}
          value={card.back}
          placeholder="Back side of card"
          required
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="btn btn-secondary mr-2"
          type="button"
          onClick={handleDoneClick}
        >
          {firstButtonText}
        </button>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
