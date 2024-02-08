import React from "react";
import "./newModel.css";
import userimg from './girl.png';

function ModelCard(props) {
    return (
      //create main container
      <div className="container"> 

        {/* create container1 inside main container */}
        <div class="container1">
          {/* create card1 componant in container1 */}
          <div className="card1">
          {/* insert an image and card-content1 to card1 */}
          <img src={userimg} alt="card image" className="card-image1" /> 
            <div className="card-content1">
              <p className="card-body">{props.body1}</p>
              <p className="card-body">{props.body2}</p>
              <p className="card-body">{props.body3}</p>
              <p className="card-body">{props.body4}</p>
              <p className="card-body">{props.body5}</p>
              <p className="card-body">{props.body6}</p>
            </div>
          </div>
        </div>
      </div>
    );
    }
    
    export default ModelCard;   
