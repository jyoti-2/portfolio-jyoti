import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterLink.css";

const FooterLink = ({ phrase, link, toaddress }) => {
    return (
        <div className="footer-link">
            {phrase}
            <Link to={toaddress} className='footer-link-element'>
                {link}
                <Link />
            </Link>
        </div>
    );
};

export default FooterLink;