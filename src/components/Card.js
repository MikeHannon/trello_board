import React, { PropTypes } from 'react';
import './card.css';

const Card = ({status}) => {
  return (
    <div className={`card ${status}`}>
      {status}      
    </div>
  )
}

Card.propTypes = {
  status: PropTypes.string.isRequired
}

export default Card;