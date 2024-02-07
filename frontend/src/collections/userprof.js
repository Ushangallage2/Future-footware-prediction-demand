import React from 'react';
import './userprof.css';
import { Sidebar } from './sidebar';
import Card from "./usercard";
export function UserProf(props) {
    return (
        <>
        <div className="user-profile">
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <Card
        title="My favorite book"
        subtitle="The Hitchhiker's Guide to the Galaxy"
        body="A hilarious and witty sci-fi adventure by Douglas Adams."
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