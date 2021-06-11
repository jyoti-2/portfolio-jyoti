import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import HomeImage from './../../assets/typing.png';

class Home extends Component{
    render() {
        return (
            <div className="home-container">
                <div className="header-text">
                    <h1> Hey I'm Jyoti Kumari!</h1>
                    <p> Instrumentation and Control Engineer | Web Developer | Avid Learner </p>
                </div>
                <div className="head-btn">
                    <Link to="/about" className= "btn btn-white">
                        <p className="btn-text"> Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-txt">Connect with me</p>
                    </Link>
                </div>
                <div className="home-image">
                    <img src={HomeImage} alt='' className='splash-image'/>
                </div>

            </div>
        )
    }
}

export default Home;
