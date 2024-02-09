// // import React from 'react';
// import React, { Component } from "react";
// import ScrollReveal from "scrollreveal";
// // import { Sidebar } from '../../sidebar/sidebar';
// import './home.css';
// import "boxicons/css/boxicons.min.css";
// import 'remixicon/fonts/remixicon.css'
// import fti from './fti.png';

import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import fti from "./fti.png";
import "./home.css";
import "boxicons/css/boxicons.min.css";
import 'remixicon/fonts/remixicon.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const config = {
            origin: "top",
            duration: 1000,
            delay: 150,
            distance: "500px",
            scale: 1,
            easing: "ease",
        };

        ScrollReveal().reveal(this.myRef.current, config);
    }

    render() {
        return (
            <>
                <header>
                    <a className="logo">FDFS</a>
                </header>

                <section className="hero">
                    <div className="hero-text">
                        <h3 ref={this.myRef}>Footewar Demand Forecasting System</h3>
                        <p ref={this.myRef}>
                            Step into the future of footwear with our cutting-edge demand prediction and model forecasting AI, guiding you through the next wave of industry trends.
                        </p>
                        <a href="# ">Get Started</a>
                    </div>

                    <div className="hero-img">
                        <img src={fti} alt="card image" className="card-image1" />
                    </div>
                </section>

                <div className="icons">
                    <a href="#"><i className="ri-instagram-line"></i></a>
                    <a href="#"><i className="ri-facebook-box-line"></i></a>
                    <a href="#"><i className="ri-twitter-line"></i></a>
                </div>
            </>
        );
    }
}

<<<<<<< HEAD
export default Home;






// export function Home(props) {

    
//     return (
//         <>
//         <header><a class="logo">FDFS</a></header>
        
        
//         <section className='hero'>
        
//             <div className='hero-text'>
//                 {/* <h1 className='fdfs'>FDFS</h1> */}
//                 <h3>Footewar Demand Forecasting System</h3>
//                 <p>Step into the future of footwear with our cutting-edge demand prediction and model forecasting AI, guiding you through the next wave of industry trends. </p>
//                 <a href='# '>Get Started</a>

//             </div>
            
//             <div className='hero-img'>
//             <img src={fti} alt="card image" className="card-image1" /> 

//             </div>
//         </section>
//         <div className='icons'>
//             <a href='#'><i class="ri-instagram-line"></i></a>
//             <a href='#'><i class="ri-facebook-box-line"></i></a>
//             <a href='#'><i class="ri-twitter-line"></i></a>

//         </div>
        
//         </>
        
//     )
// }
=======
export default Home;
>>>>>>> dev-sandali
