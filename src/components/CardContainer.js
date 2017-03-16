import React, { PropTypes } from 'react';
import Card from './Card';
import './card-container.css';
const CardContainer = ({title, cards}) => {
  const cardList = cards.map((cardObj) => <Card key={cardObj.id} {...cardObj} />)
  return (
    <div className="card-container">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="cards">
        {cardList}
      </div>
    </div>
  )
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
}

export default CardContainer;