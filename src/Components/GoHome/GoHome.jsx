import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./GoHome.css";

import WhiteHomeicon from "./../../assets/home_white.png";
import BlackHomeicon from "./../../assets/home_black.png";

class GoHome extends Component{
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';
        return (
            <button
                className={`go-home-btn ${
                whiteBtn ? 'white-bkg' : 'gradient-bkg'
            }`}
                onClick={this.navigateToHome}>
                <img
                    className="home-icon"
                    src= {whiteBtn ? BlackHomeicon: WhiteHomeicon}
                    alt='home-icon'
                />
            </button>
            
        );
    }
}

export default withRouter(GoHome);
    



