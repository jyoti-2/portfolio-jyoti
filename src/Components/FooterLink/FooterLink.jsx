import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterLink.css";

const FooterLink = ({ phrase, link, toadress }) => {
    return (
        <div className="footer-link-componenet">
            {phrase}
            <Link to={toadress} target="_blank" className='footer-link-element'>
                {link}
            </Link>
        </div>
    );
};

export default FooterLink;