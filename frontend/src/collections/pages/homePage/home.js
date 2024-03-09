// // import React from 'react';
// import React, { Component } from "react";
// import ScrollReveal from "scrollreveal";
// // import { Sidebar } from '../../sidebar/sidebar';
// import './home.css';
// import "boxicons/css/boxicons.min.css";
// import 'remixicon/fonts/remixicon.css'
// import fti from './fti.png';

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import fti from "./fti.png";
import fdfs from "../../sidebar/fdfs.png";
import "./home.css";
import "boxicons/css/boxicons.min.css";
import 'remixicon/fonts/remixicon.css';
import sound from "./buttonaudio.mp3";

const Home = () => {
    const myRef = useRef(null);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            origin: "top",
            duration: 800,
            delay: 1,
            distance: "80px",
            scale: 1,
            easing: "ease",
        };

        ScrollReveal().reveal(myRef.current, config);
    }, [value]);

    const play = () => {
        new Audio(sound).play();
    }

    const navigateToLoginPage = () => {
        navigate("/loginPage");
     
    }

    return (
        
        <>
            <header>
                <img src={fdfs} alt="logo" className="logo" />
            </header>

            <section className="hero">
                <div className="hero-text">
                    <h3 ref={myRef}>Footwear Demand Forecasting System</h3>
                    <p ref={myRef}>
                        Step into the future of footwear with our cutting-edge demand prediction and model forecasting AI, guiding you through the next wave of industry trends.
                    </p>
                    <button onClick={() => { setValue(value + 1); play(); navigateToLoginPage(); }} type="button">Get Started</button>
                </div>

                <div className="hero-img">
                    <img src={fti} alt="card image" className="card-image1" />
                </div>
            </section>
        </>
    );
}

export default Home;
