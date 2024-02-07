import React from "react";
import "./usercard.css";
import userimg from './girl.png';

function Card(props) {
    return (
        <div className="card">
          <img src={userimg} alt="card image" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{props.title}</h3>
            <h4 className="card-subtitle">{props.subtitle}</h4>
            <p className="card-body">{props.body}</p>
          </div>
        </div>
      );
    }
    
    export default Card;   
