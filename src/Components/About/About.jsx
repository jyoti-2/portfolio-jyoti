import React from 'react';
import Header from "../Header/Header";
import FooterLink from '../FooterLink/FooterLink';

import aboutme from "./../../assets/aboutme.png";
import "./About.css";

const About = () => {
    return (
        <div className="section-container">
            <Header
                heading='About me'
                detail ='Engineer | Programmer | Techie'
            />
                <img
                    src={aboutme}
                    className='about-vector'
                    alt =' '
            />
            
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toadress='/projects'
            />
       </div>


    );
};

export default About;