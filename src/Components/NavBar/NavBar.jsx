import React from 'react';
import "./NavBar.css";
import { Link} from "react-scroll";
//import { slide as Menu } from 'react-burger-menu';
import {withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    render() {
        // const { location } = this.props;
        // const homeClass = location.pathname === '/' ? 'active-item' : '';
        // const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        // const projectsClass = location.pathname === '/projects' ? 'active-item' : '';
        // const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        // const contactClass = location.pathname === '/contact' ? 'active-item' : '';
  
        return (
            // <Menu>
            //     {/* We won't use anchor tag becaue it refreshes the web application
            //      <a id="home" className="menu-item" href="/">Home</a>*/}
                
            //     <Link to="/" className={`menu-item ${homeClass}`}>
            //         Home
            //     </Link>
            //     <Link to="/about" className={`menu-item ${aboutClass}`}>
            //         About
            //     </Link>
            //     <Link to="/projects" className = {`menu-item ${projectsClass}`}>
            //          Projects
            //     </Link>
            //     <Link to="/skills" className={`menu-item ${skillsClass}`}>
            //         Skills
            //     </Link>
            //     <Link to="/contact" className={`menu-item ${contactClass}`}>
            //         Contact
            //     </Link>
            //     </Menu>
                 <div className="nav-container"> 
           
            <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
            >       Home
                </Link>
                            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >   About
                    </Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                    > Projects
                        </Link>
            <Link
                activeClass="active"
                to="skill"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                        > Skills
                            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > Contact
                                </Link>
           
                                </div>    
                                
        );
    }
}

export default withRouter(NavBar);