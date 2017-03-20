import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import './card.css';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  }
};

function collectDrop(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget()
  }
}

function collectDrag(connect, monitor){
  return {
    connectDragSource: connect.dragSource()
  }
}

const cardTarget = {
  drop(props, monitor) {
    props.updateCardStatus({
      droppedCardId: monitor.getItem().id,
      status: props.status,
      targetId: props.id
    })
  }
};

const Card = ({status, title, description, connectDragSource, connectDropTarget}) => {
  return connectDropTarget(connectDragSource(
    <div className={`card ${status}`}>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header> 
    </div>
  ))
}

Card.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
}


export default DropTarget(ItemTypes.CARD, cardTarget, collectDrop)(DragSource(ItemTypes.CARD, cardSource, collectDrag)(Card));

