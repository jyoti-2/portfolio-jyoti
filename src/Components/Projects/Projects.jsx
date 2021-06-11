import React from 'react';
import "./Projects.css";
import FooterLink from '../FooterLink/FooterLink';
import { projectsData } from './../../assets/projectsData';
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard.jsx"


const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects.'
                detail='Here are a few cool things I have worked on, do check them out!'
            />

            <div className="project-cards-container">
            {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        projectUrl,
                        videoUrl
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>



        <FooterLink phrase=' Check out  ' link='my skills!' toadress='/skills'/>        
        </div>
    );
};

export default Projects;