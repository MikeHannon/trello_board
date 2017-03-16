import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const target = {
  drop(props, monitor) {
    props.updateCardStatus({
      droppedCardId: monitor.getItem().id,
      status: props.status
    });
  }
};

const DragSpace = ({status, connectDropTarget}) => {
  return connectDropTarget(
    <div className={`card ${status} empty`}>
        <header>
          <h1>Drag cards here</h1>
        </header> 
    </div>
  )
}

DragSpace.propTypes = {
    status: PropTypes.string.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    updateCardStatus: PropTypes.func.isRequired
}

export default DropTarget(ItemTypes.CARD, target, collect)(DragSpace);