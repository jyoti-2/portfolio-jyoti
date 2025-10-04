import React, { useState } from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from "../Header/Header";
import "./Contact.css";
import "../../styles/common.css";
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import medium from './../../assets/me.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add actual form submission logic here
    };

    return (
        <div id="contact" className="section-container">
            <Header
                heading="Let's Connect"
                detail='Open to discussing opportunities and technical challenges'
            />

            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-card card">
                        <h3 className="text-primary">Professional Contact</h3>
                        <p className="text-secondary">
                            I'm open to discussing technical challenges, career opportunities, 
                            and innovative projects that drive business impact.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-label text-primary">Email:</span>
                                <span className="contact-value text-secondary">jyotikumari7958@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label text-primary">Location:</span>
                                <span className="contact-value text-secondary">India</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label text-primary">Status:</span>
                                <span className="contact-value text-accent">Open to opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type='text'
                                placeholder='Your Name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='input-box'
                                required
                            />
                            <input
                                type='email'
                                placeholder='Your Email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='input-box'
                                required
                            />
                        </div>
                        <input
                            type='text'
                            placeholder='Subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            className='input-box'
                            required
                        />
                        <textarea
                            placeholder='Your Message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className='input-box body-input'
                            rows="5"
                            required
                        ></textarea>
                        <button type='submit' className='contact-btn btn-primary'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="social-section">
                <h3 className="text-primary">Connect With Me</h3>
                <div className="social-icons-container">
                    <a href='https://www.linkedin.com/in/jyoti-kumari2/'
                       className='social-icon'
                       target="_blank"
                       rel="noopener noreferrer"
                       title="LinkedIn">
                        <img src={linkedin} alt='LinkedIn'/>
                        <span>LinkedIn</span>
                    </a>
                    <a href='https://github.com/jyoti-2'
                       className='social-icon'
                       target="_blank"
                       rel="noopener noreferrer"
                       title="GitHub">
                        <img src={github} alt='GitHub'/>
                        <span>GitHub</span>
                    </a>
                    <a href='https://medium.com/@jyotikumari7958'
                       className='social-icon'
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Medium">
                        <img src={medium} alt='Medium'/>
                        <span>Medium</span>
                    </a>
                </div>
            </div>

            <FooterLink phrase='Back to ' link='top' toadress='/'/>
        </div>
    );
};

export default Contact;