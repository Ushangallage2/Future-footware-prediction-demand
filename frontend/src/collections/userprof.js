import React from 'react';
import './userprof.css';
import { Sidebar } from './sidebar';
import Card from "./usercard";
export function UserProf(props) {
    return (
        <>
       <Sidebar/>
        <div className="user-profile">
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <Card
        // title="My favorite book"
        // subtitle="The Hitchhiker's Guide to the Galaxy"
        body1="Name :- Sandia Perera"
        body2="Age :- 28"
        body3="Position :- Marketing Executive"
        body4="AI trained :- 57 times"
        body5="Demands Predicted :- 140 times"
        body6="New models created :- 50 times"

        

        // image="frontend\src\collections\girl.png"
      />
    </div>
    </>
        // <>
        //     {/* <Sidebar/> */}
        //     {/* <h1>User Profile</h1> */}
        // </>
        
    );
}

export default UserProf;