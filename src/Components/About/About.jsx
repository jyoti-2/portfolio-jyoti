import React from 'react';
import Header from "../Header/Header";
import FooterLink from '../FooterLink/FooterLink';

import aboutme from "./../../assets/aboutme.png";
import "./About.css";

const About = () => {
    return (
        <div id = "about" className='about-section'>
            {/* <Header
                heading='About me'
                detail ='Engineer | Programmer | Techie'
            /> */}
                <img
                    src={aboutme}
                    className='about-vector'
                    alt =' '
            />
            <div className="about-header">
            <p><b>Hello there!👋</b><br/>

                This is Jyoti Kumari. I hold a bachelors degree in Instrumentation and Control Engineering and minor degree in Computer science from National Institute of Technology Tiruchirappalli, Tamil Nadu India.<br/>

                I am a front-end developer and have working experience with MERN techstack. I currently work as a Junior Digital Analyst for McKinsey & Company.<br/>

                In my spare time, I like to read self-help and personal development books, listen to music and podcasts, and tutor my younger brother.

                </p>
            </div>
            {/* <FooterLink
                phrase='Check out my '
                link='projects!'
                toadress='/projects'
            /> */}
       </div>


    );
};

export default About;