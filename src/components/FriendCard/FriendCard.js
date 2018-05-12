import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    
      <img alt={props.name} className="img" src={props.image} />
   
    
  </div>
);

export default FriendCard;
