import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import HomeImage from './../../assets/typing.png';
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import Skills from "./../Skills/Skills";
import Contact from "./../Contact/Contact";

class Home extends Component{
    render() {
        return (
            <div id = "home" className="home-container">
                <div className="header-text">
                    <h1> Hello I'm Jyoti Kumari</h1>
                    <p>Web Developer | Junior Digital Analyst @ McKinsey & Company</p>
                </div>
                {/* <div className="head-btn">
                    <Link to="/about" className= "btn btn-white">
                        <p className="btn-text"> Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-txt">Connect with me</p>
                    </Link>
                </div> */}
                {/* <div className="home-image">
                    <img src={HomeImage} alt='' className='splash-image'/>
                </div> */}
                <About />
                <Projects />
                <Skills />
                <Contact/>
            </div>
        )
    }
}

export default Home;
