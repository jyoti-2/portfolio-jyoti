import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import "../../styles/common.css";

const Home = () => {
    return (
        <div id="home" className="home-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hello, I'm <span className="highlight">Jyoti Kumari</span>
                    </h1>
                    <p className="hero-subtitle">
                        Software Engineer | Technical Leader | McKinsey
                    </p>
                    <p className="hero-description">
                        I build scalable systems and deliver end-to-end features across frontend, backend, 
                        and core business logic layers. Currently developing client-facing platforms at McKinsey.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/about" className="btn btn-primary">
                            Learn More About Me
                        </Link>
                        <Link to="/projects" className="btn btn-secondary">
                            View My Work
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-container">
                        <div className="floating-card card">
                            <div className="card-content">
                                <h3 className="text-primary">Core Technologies</h3>
                                <div className="tech-items grid-2">
                                    <span className="text-accent">React</span>
                                    <span className="text-accent">TypeScript</span>
                                    <span className="text-accent">Node.js</span>
                                    <span className="text-accent">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
                <span>Scroll to explore</span>
            </div>
        </div>
    );
};

export default Home;
