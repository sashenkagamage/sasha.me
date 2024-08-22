import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import "./HeroSection.css";
import "../App.css";
function HeroSection(){
    return(
        <div className='hero-container'>
            <video src='/video-1.mp4' autoPlay loop muted/>
            <h1>Hey! </h1>
            <p>I am Sashenka Gamage</p>
            
        </div>
    )
}
export default HeroSection;