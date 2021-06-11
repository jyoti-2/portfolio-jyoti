import React from 'react';
import "./Projects.css";
import FooterLink from '../FooterLink/FooterLink';
import Header from "../Header/Header";


const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects.'
                detail='Here are a few cool things I have worked on, do check them out!'
            />



        <FooterLink phrase=' Check out  ' link='my skills!' toadress='/skills'/>        
        </div>
    );
};

export default Projects;