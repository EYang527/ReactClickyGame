import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
      <div className ="card" onClick={()=>props.handleClick(props.id)}>
      <div className="img-container">
      <img alt={props.name} src={props.image} className=" card-img-top img-thumbnail img-fluid" data-id={props.id}/>      
      </div>
      </div>
);

export default FriendCard;
