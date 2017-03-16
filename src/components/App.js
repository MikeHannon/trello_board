import React, { Component, PropTypes } from 'react';
import CardContainer from './CardContainer';
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

    this.state = { statuses }
  }

  filterCards(statusFilter){
    return this.props.cards.filter((card) => {
      return card.status === statusFilter;
    });
  }
  render() {
    const cardContainers = Array
                          .from(this.state.statuses)
                          .map( status => { 
                            return <CardContainer title={status} key={status} cards={this.filterCards(status)} /> 
                          });
    return (
      <div className="app-container">
        {cardContainers}
      </div>
    )
  }
}
export default App

