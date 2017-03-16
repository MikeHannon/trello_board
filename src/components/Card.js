import React, { PropTypes } from 'react';
import './card.css';

const Card = ({status, title, description}) => {
  return (
    <div className={`card ${status}`}>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header> 
    </div>
  )
}

Card.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Card;