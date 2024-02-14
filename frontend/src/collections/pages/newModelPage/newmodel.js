import React from 'react';
import './newmodel.css';
import { Sidebar } from '../../sidebar/sidebar';
import SearchAppBar from './searchbar';
import shoe01 from '../Shoe_Images/shoe01.png';
import shoe02 from '../Shoe_Images/shoe02.png';
import shoe03 from '../Shoe_Images/shoe03.png';
import shoe04 from '../Shoe_Images/shoe04.png';

export function NewModel(props) {
  return (
    <>
    <div className='user-sec'>
        <Sidebar/>
    </div>
    <div className='model-container'>
        <h1>New Models</h1>
      <div className="search-bar">
        <SearchAppBar/>
      </div>
      <p>New models designed according to the model number submitted</p>
      <div className='old-models'>
        {/* <dev className="shoepics"> */}
        <img src={shoe01} alt="pic1" className='pic1'/>
        <img src={shoe02} alt="pic1" className='pic2'/>
        <img src={shoe03} alt="pic1" className='pic3'/>
        <img src={shoe04} alt="pic1" className='pic4'/>
        {/* </dev> */}
      </div>
    </div>
    </>
  )
}

export default NewModel;
