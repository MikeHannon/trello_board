import React, { PropTypes } from 'react';
import Card from './Card';
import DragSpace from './DragSpace';
import './card-container.css';

const CardContainer = ({title, cards, updateCardStatus }) => {
  const cardList = cards.map((cardObj) => <Card key={cardObj.id} {...cardObj} updateCardStatus={updateCardStatus}/>)
  return (
    <div className="card-container">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="cards">
        {cardList}
        { (cardList.length === 0) ? <DragSpace status={title} updateCardStatus={updateCardStatus}/> : null}
      </div>
    </div>
  )
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  updateCardStatus: PropTypes.func.isRequired,
}

export default CardContainer;