
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DATA from '../card_data.json';
import App from './components/App.js';

ReactDOM.render(
  <App cards={DATA.cards}/>,
  document.getElementById('root')
);
