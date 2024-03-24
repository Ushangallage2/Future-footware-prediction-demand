import React from "react";
import "./usercard.css";
import userimg from './girl.png';
import usershoe from './usershoe.png'

function Card(props) {
    return (
      //create main container
      <div className="container"> 

        {/* create container1 inside main container */}
          {/* create card1 componant in container1 */}
          <div className="ucard1">
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

        {/* create container2 inside main container */}
        <div class="ucontainer2">
          <div class="ucard2">

            {/* insert an image and card-content2 to card2 */}
            <img src={usershoe} alt="card image" className="card-image2" />
            <div className="card-content2">
              <p className="card-topic1">{props.body7}</p>
              <p className="card-topic1">{props.body7}</p>
              <p className="card-topic1">{props.body7}</p>
            </div>
          </div> 
        </div>
      </div>
    );
    }
    
    export default Card;   