
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js'
import './App.css';
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
  filterCards=(status)=>{
    return this.props.cards.filter((cards)=>{
      return cards.status === status
    })
  }
  
  render() {
    const cardContainers = Array.from(this.state.statuses).map( 
      status => <CardContainer 
      title={status} 
      key={status}
      cards={this.filterCards(status)} 
      />) 

    return (
      <div className="app-container">
        {cardContainers}
      </div>
    )
  }
}
export default App


