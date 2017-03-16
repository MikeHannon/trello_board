import React, { PropTypes } from 'react';
import './card.css';

const Card = ({status, title, description}) => {
  return (
    <div className={`card ${status}`}>
      <h1>{title}</h1>
      <p>{description}</p>      
    </div>
  )
}

Card.propTypes = {
  status: PropTypes.string.isRequired
}

export default Card;

