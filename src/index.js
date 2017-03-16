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

import './card-container.css';
const CardContainer = ({title, cards}) => {
  const cardList = cards.map((cardObj) => <Card key={cardObj.id} {...cardObj} />)
  return (
    <div className="card-container">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="cards">
        {cardList}
      </div>
    </div>
  )
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
}


const Card = (props) => {
  return <p>{JSON.stringify(props)}</p>
}
// const CardHeader = (props) => {
//   return <h1>CardHeader</h1>
// }
// const CardChecklist = (props) => {
//   return <h1>CardChecklist</h1>
// }

ReactDOM.render(
  <App cards={DATA.cards}/>,
  document.getElementById('root')
);
