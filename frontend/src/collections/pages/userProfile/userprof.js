import React from 'react';
import './userprof.css';
import { Sidebar } from '../../sidebar/sidebar';
import Card from "./usercard";
export function UserProf(props) {
    return (
        <>
        <div className='user-sec'>
          <Sidebar/>
          <Card
            body1="ID : - Sandia silva"
            body2="First Name : - 28"
            body3="Last Name : - Marketing Executive"
            body4="Email : - 57 times"
            body5="Address : - 140 times"
            body6="Department : - 50 times"
          />
        </div>
    </>
        
    );
}

export default UserProf;