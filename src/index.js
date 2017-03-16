
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DATA from '../card_data.json';

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
