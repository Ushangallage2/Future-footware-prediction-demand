import React from 'react';
import { Sidebar } from '../../sidebar/sidebar';
import './home.css';
import "boxicons/css/boxicons.min.css";
import 'remixicon/fonts/remixicon.css'

export function Home(props) {
    
    return (
        <>
        {/* <p className='p'>Home page</p> */}
        <Sidebar/>

        {/* <img className= 'slidebarIcon' src={logo} alt = "logo" /> */}
        {/* <a class="logo">FDFS</a> */}
        </>
        
    )
}