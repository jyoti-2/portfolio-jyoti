import React from 'react';
import "./Projects.css";
import { projectsData } from './../../assets/projectsData';
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard.jsx";
import "../../styles/common.css";


const Projects = () => {
    return (
        <div id= "projects" className='section-container'>
            <Header
                heading='Featured Projects'
                detail="End-to-end solutions I've built and delivered"
            />

            <div className="project-cards-container">
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        projectUrl,
                        videoUrl,
                        technologies
                    }, index) => {
                        return (
                            <div key={index} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                                <ProjectCard
                                    projectName={projectName}
                                    projectDescription={projectDescription}
                                    projectUrl={projectUrl}
                                    imageUrl={imageUrl}
                                    videoUrl={videoUrl}
                                    technologies={technologies}
                                />
                            </div>
                        );
                    }
                )}
            </div>



        {/* <FooterLink phrase=' Check out  ' link='my skills!' toadress='/skills'/>         */}
        </div>
    );
};

export default Projects;