
// import React from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import Card from "./usercard";
import React, { useState } from 'react';
import './userprof.css';
import { Sidebar } from '../../sidebar/sidebar';
import Card from './usercard';
import EditProfileForm from './EditProfileForm'; // Import your EditProfileForm component

function UserProf(props) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSettingsClick = () => {
    setShowEditForm(!showEditForm);
  };
  const handleEditClick = () => {
    setShowEditForm(true);
  };

    return (
        <>
        <div className='user-sec'>
          <Sidebar/>
          <Card
            // body1="Name : - Sandia silva"
            // body2="Age : - 28"
            // body3="Position : - Marketing Executive"
            // body4="AI Trained : - 57 times"
            // body5="Demands Predicted : - 140 times"
            // body6="New Models Created : - 50 times"
            // body7="Latest Modle Predicted"
            // body8="Latest Demand Prediction"
            // body9="Model No : - 20138e"
            // body10="Model No : - 27hg55"
            // body11="Model No : - 773h65"
            // body12="Most models will increase in demand by more than 50%"
          />
          <button onClick={handleEditClick}>Edit Profile</button>

{/* Conditionally render EditProfileForm */}
{showEditForm && <EditProfileForm />}

{/* <button className='settings' onClick={handleSettingsClick}>Settings</button>
        {showEditForm && <EditProfileForm />}

 */}



        </div>
    </>
        
    );
}

export default UserProf;