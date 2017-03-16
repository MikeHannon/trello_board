
import React, { Component, PropTypes } from 'react';
import Card from './Card.js'
import "./card-container.css";

const CardContainer = ({title,cards}) => {
  const cardList = cards.map((cardObj) => <Card key={cardObj.id} {...cardObj} />)
  return (
    <div className={`card-container ${title}`}>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="cards">
        {cardList}
      </div>
    </div>
  )
}

export default CardContainer
