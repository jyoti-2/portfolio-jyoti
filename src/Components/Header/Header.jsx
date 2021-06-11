import React from 'react';
import "./Header.css";

const Header = ({ heading, detail }) => {
    return (
        <div className="header-container">
            <h1> {heading} </h1>
            <p> {detail} </p>
        </div>
    );
};

export default Header;