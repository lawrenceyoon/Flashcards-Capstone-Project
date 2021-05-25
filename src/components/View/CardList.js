import React from 'react';
import './CardList.css';
import Card from './Card';

// const CardList = ({ cards }) => {
// helper function
// const renderCards = () => {
//   const mapped = cards.map((card, index) => (
//     <div className="card" key={index}>
//       <div className="card-body">
//         <div className="front">{card.front}</div>
//         <div className="back">{card.back}</div>
//         <div className="buttons">
//           <Button color="btn-secondary" icon="oi oi-pencil" text="Edit" />
//           <Button color="btn-danger" icon="oi oi-trash" />
//         </div>
//       </div>
//     </div>
//   ));
//   return mapped;
// };
// };

const CardList = (props) => {
  // helper functions
  const renderCards = () => {
    console.log(props);
  };

  console.log(props);
  return <div className="card">{renderCards()}</div>;
};

export default CardList;
