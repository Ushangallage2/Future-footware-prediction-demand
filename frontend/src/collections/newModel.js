import React from 'react';
import './newModel.css';
import { Sidebar } from './sidebar';
import ModelCard from "./newmodelCard";

export function NewModel(props) {
    return (
        <>
        <div className='user-sec'>
          <Sidebar/>
          <ModelCard/>
        </div>
    </>
        
    );
}

export default NewModel;