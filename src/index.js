import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DATA from '../card_data.json';

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
  render() {
    const cardContainers = Array.from(this.state.statuses).map( status => <CardContainer title={status} key={status} /> )

    return (
      <div className="app-container">
        {cardContainers}
      </div>
    )
  }
}

import './card-container.css';
const CardContainer = ({title}) => {
  return (
    <div className="card-container">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="cards">
      </div>
    </div>
  )
}
const Card = (props) => {
  return <h1>Card</h1>
}
const CardHeader = (props) => {
  return <h1>CardHeader</h1>
}
const CardChecklist = (props) => {
  return <h1>CardChecklist</h1>
}

ReactDOM.render(
  <App cards={DATA.cards}/>,
  document.getElementById('root')
);
