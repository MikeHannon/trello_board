
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DATA from '../card_data.json';

ReactDOM.render(
  <App cards={DATA.cards}/>,
  document.getElementById('root')
);
