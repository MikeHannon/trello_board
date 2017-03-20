import React, { PropTypes } from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import './card.css';

const cardSource = {
  beginDrag(props){

  }
}

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

