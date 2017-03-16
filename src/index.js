import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DATA from '../card_data.json';

class App extends Component {
  render() {
    const cardTitles = DATA.cards.map((card) => <p key={card.id}>{card.title}</p>);
    return (
      <div>
        {cardTitles}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
