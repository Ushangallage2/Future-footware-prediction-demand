import React from 'react';
// import { Sidebar } from './sidebar';
import './home.css';
import "boxicons/css/boxicons.min.css";
import 'remixicon/fonts/remixicon.css'
import logo from './fdfs.png';



export function Home(props) {
    
    return (
        <>
        <img className= 'slidebarIcon' src={logo} alt = "logo" />
        {/* <a class="logo">FDFS</a> */}
        </>
        
    )
}