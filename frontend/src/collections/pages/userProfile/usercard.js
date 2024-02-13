import React from "react";
import "./usercard.css";
import userimg from './girl.png';
import usershoe from './usershoe.png'

function Card(props) {
    return (
      //create main container
      <div className="container"> 

        {/* create container1 inside main container */}
        <div class="ucontainer1">
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
        </div>

        {/* create container2 inside main container */}
        <div class="ucontainer2">
          {/* create card2 componant in container2 */}
          <div class="ucard2">

            {/* insert an image and card-content2 to card2 */}
            <div className="card-content2">
              <p className="card-body">{props.body7}</p>
            </div>
              <img src={usershoe} alt="card image" className="card-image2" />
          </div>

          {/* create card3 componant in container2 */}
          <div class="card3">
            {/* insert card-content2 to card3 */}
            <div className="card-content2">
              <p className="card-body">{props.body8}</p>
            </div>

             {/* insert card-content3 in card3 */}
            <div className="card-content3">
              <p className="card-body">{props.body9}</p>
              <p className="card-body">{props.body10}</p>
              <p className="card-body">{props.body11}</p>
              <p className="card-body">{props.body12}</p>
            </div>
          </div>
        </div>
      </div>
    );
    }
    
    export default Card;   
