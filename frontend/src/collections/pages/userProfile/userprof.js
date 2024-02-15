import React from 'react';
import './userprof.css';
import { Sidebar } from '../../sidebar/sidebar';
import Card from "./usercard";
export function UserProf(props) {
    return (
        <>
        <div className='user-sec'>
          <Sidebar/>
<<<<<<< HEAD:frontend/src/collections/newModel.js
          <ModelCard/>
=======
          <Card
            body1="Name : - Sandia Perera"
            body2="Age : - 28"
            body3="Position : - Marketing Executive"
            body4="AI Trained : - 57 times"
            body5="Demands Predicted : - 140 times"
            body6="New Models Created : - 50 times"
            body7="Latest Modle Predicted"
            body8="Latest Demand Prediction"
            body9="Model No : - 20138e"
            body10="Model No : - 27hg55"
            body11="Model No : - 773h65"
            body12="Most models will increase in demand by more than 50%"
          />
>>>>>>> main:frontend/src/collections/pages/userProfile/userprof.js
        </div>
    </>
        
    );
}

export default UserProf;