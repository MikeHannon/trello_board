import React, { Component, PropTypes } from 'react';
import CardContainer from './CardContainer';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './app.css';

class App extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  }

  constructor(props){
    super(props);
    
    const statuses = new Set()
    props.cards.forEach((cardObj) => {
      statuses.add(cardObj.status);
    });

    this.state = { 
        statuses,
        cards: props.cards
    }
  }

  filterCards(statusFilter){
    return this.state.cards.filter((card) => {
      return card.status === statusFilter;
    });
  }

  updateCardStatus = ({droppedCardId, status, targetId}) => {
    targetId = targetId || 0;
    const cardToMove = this.state.cards.find((card) => card.id === droppedCardId);
    const newCard = {
      ...cardToMove,
      status
    }
    const newCards = this.state.cards.filter((card) => card !== cardToMove)
    const newPosition = newCards.findIndex((card) => card.id === targetId);
    
    newCards.splice(newPosition, 0, newCard);

    this.setState({
      cards: newCards
    });
  }
  render() {
    const cardContainers = Array
                          .from(this.state.statuses)
                          .map( status => { 
                            return <CardContainer 
                              title={status} 
                              key={status} 
                              cards={this.filterCards(status)}
                              updateCardStatus={this.updateCardStatus} 
                              /> 
                          });
    return (
      <div className="app-container">
        {cardContainers}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);

