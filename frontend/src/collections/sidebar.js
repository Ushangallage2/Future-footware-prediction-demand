import React from 'react';
import '../App.css';
import { sidebarData } from './sidebarData';
import logo from './fdfs.png';

export function Sidebar(props) {
    return (
        <div className='sidebar'>
        <img className= 'slidebarIcon' src={logo} alt = "logo" />
        <ul className='sidebarList'>
            {sidebarData.map((val,key)=>{
            return (
                <li 
                key={key}
                className="row"
                id = {window.location.pathname === val.link ? "active" : ""}
                onClick={()=>{
                    window.location.pathname = val.link;
                    }}
                > 
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
                 </li>
            )
        })}
        </ul>
        </div>
    )
}
