import React from 'react';
import './newmodel.css';
import { Sidebar } from '../../sidebar/sidebar';

export function NewModel(props) {
  return (
    <>
    <div className='user-sec'>
        <Sidebar/>
    </div>
    <div className='model-container'>
        <h1>New Models</h1>
    <div className="search-bar">
        <p>Search bar</p>
    </div>
    <div className='old-models'>
        <p>New models designed according to the model number submitted</p>
        <img src="#" alt="pic1" className='pic1'/>
        <img src="#" alt="pic2" className='pic2'/>
        <img src="#" alt="pic3" className='pic3'/>
        <img src="#" alt="pic4" className='pic4'/>
        </div>
    </div>
    </>
  )
}

export default NewModel;
