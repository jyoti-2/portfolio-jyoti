import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
    technologies = []
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link' target="_blank" rel="noopener noreferrer">
                    <img
                        src={imageUrl}
                        alt={projectName}
                        className='project-image'
                    />
                    <div className='project-overlay'>
                        <span>View Project</span>
                    </div>
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                
                {technologies.length > 0 && (
                    <div className='technologies-container'>
                        {technologies.map((tech, index) => (
                            <span key={index} className='tech-tag'>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                
                <div className='project-links'>
                    <a href={projectUrl} className='project-link' target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href={videoUrl} className='project-link' target="_blank" rel="noopener noreferrer">
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;