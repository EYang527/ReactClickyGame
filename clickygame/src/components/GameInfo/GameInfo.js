import React from 'react';
import "./GameInfo.css";

const GameInfo = props=>(

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game</h1>
    <p className="alert alert-info" role="alert">
        Message: {props.message}
        </p>
    <p className="lead">Score : {props.Score} | High score: {props.highScore}</p>
  </div>
  <div className="col-md-5 text-center">
  <button className="btn btn-warning" onClick={()=>props.handleClick()} > reset  </button>
  <p> You can only click one time on one single picture to win</p>
  </div>
</div>
)

export default GameInfo;
