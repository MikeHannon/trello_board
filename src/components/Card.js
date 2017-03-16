import React, { Component, PropTypes } from 'react';
import "./Card.css";
const Card = (props) => {
    const clickedOn = (e)=>{
        console.log('Clicked')
    } 
  return (
      <div className="card" onClick={clickedOn}>
      <p>{JSON.stringify(props)} </p>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      </div>
      )
}
// const CardHeader = (props) => {
//   return <h1>CardHeader</h1>
// }
// const CardChecklist = (props) => {
//   return <h1>CardChecklist</h1>
// }

export default Card