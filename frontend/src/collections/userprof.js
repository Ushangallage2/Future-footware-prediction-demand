import React from 'react';
import './userprof.css';
import { Sidebar } from './sidebar';
import Card from "./usercard";
export function UserProf(props) {
    return (
        <>
        <div className='user-sec'>
          <Sidebar/>
          <Card
            body1="Name :- Sandia Perera"
            body2="Age :- 28"
            body3="Position :- Marketing Executive"
            body4="AI trained :- 57 times"
            body5="Demands Predicted :- 140 times"
            body6="New models created :- 50 times"
            body7="Latest modle predicted"
            body8="Latest demand predicted"
            body9="Model no :- 20138e"
            body10="Model no :- 27hg55"
            body11="Model no :- 773h65"
            body12="Most models will increase in demand by more than 50%"
          />
        </div>
       
        {/* <div className="user-profile">
          <h1>{props.name}</h1>
          <p>{props.bio}</p>
        </div> */}
    </>
        
    );
}

export default UserProf;