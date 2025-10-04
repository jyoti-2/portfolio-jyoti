import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NavBar.css";
import "../../styles/common.css";

const NavBar = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="nav-container">
            <Link to="/" className="nav-header text-primary">
                JYOTI KUMARI
            </Link>
            <nav className="nav-links">
                <Link 
                    to="/about" 
                    className={`nav-link ${isActive('/about')}`}
                >
                    About Me
                </Link>
                <Link 
                    to="/projects" 
                    className={`nav-link ${isActive('/projects')}`}
                >
                    Projects
                </Link>
                <Link 
                    to="/skills" 
                    className={`nav-link ${isActive('/skills')}`}
                >
                    Skills
                </Link>
                <Link 
                    to="/contact" 
                    className={`nav-link ${isActive('/contact')}`}
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;