import React from 'react';
import Header from "../Header/Header";
import FooterLink from '../FooterLink/FooterLink';
import aboutme from "./../../assets/aboutme.png";
import "./About.css";
import "../../styles/common.css";

const About = () => {
    return (
        <div id="about" className='about-section'>
            <Header
                heading='About Me'
                detail='Software Engineer & Technical Leader'
            />
            
            <div className="about-content">
                <div className="about-image">
                    <img
                        src={aboutme}
                        className='about-vector'
                        alt='Jyoti Kumari'
                    />
                </div>
                
                <div className="about-text">
                    <div className="about-intro">
                        <h3>Hello! 👋</h3>
                        <p>
                            I'm a <strong>software engineer with 3+ years of experience</strong> delivering 
                            end-to-end features across frontend, backend, and core business logic layers.
                        </p>
                    </div>
                    
                    <div className="about-experience card">
                        <div className="section-header">
                            <h4>Professional Impact</h4>
                            <p>
                                At <strong>McKinsey</strong>, I played a key role in developing the 
                                <strong> Promotion Advisor tool</strong>, a client-facing platform that supports 
                                promotion decisions at scale. My work spanned coding, testing, deployment, and 
                                performance optimization while engaging with stakeholders to ensure adoption and 
                                business impact.
                            </p>
                        </div>
                    </div>
                    
                    <div className="about-skills card">
                        <div className="section-header">
                            <h4>Technical Toolkit</h4>
                            <div className="skills-grid grid-2">
                                <div className="skill-category">
                                    <h5>Frontend</h5>
                                    <span>React, TypeScript, JavaScript, HTML5, CSS3</span>
                                </div>
                                <div className="skill-category">
                                    <h5>Backend</h5>
                                    <span>Node.js, Python, GraphQL, REST APIs</span>
                                </div>
                                <div className="skill-category">
                                    <h5>Database & Cloud</h5>
                                    <span>PostgreSQL, MongoDB, Azure, AWS</span>
                                </div>
                                <div className="skill-category">
                                    <h5>Tools & Methods</h5>
                                    <span>Git, Docker, Agile, Performance Optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-focus card">
                        <div className="section-header">
                            <h4>My Approach</h4>
                            <p>
                                Beyond technical depth, I focus on building systems that are not only 
                                <strong> reliable and scalable</strong> but also drive <strong>fairness and 
                                measurable business outcomes</strong>.
                            </p>
                            <p>
                                I thrive in roles where I can grow by owning features end-to-end, scaling systems, 
                                collaborating across teams, and delivering tangible impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toadress='/projects'
            />
        </div>
    );
};

export default About;