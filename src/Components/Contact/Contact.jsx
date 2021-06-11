import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from "../Header/Header";
import "./Contact.css";
import github from './../../assets/gh.png';
import devpost from './../../assets/devp.png';
import hackerrank from './../../assets/Hackerrank.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';

const Contact = () => {
    return (
        <div className="section-container">
            <Header
                heading='Get in touch.'
                detail='Interested to collaborate on amazing project? Feel free to drop me an email.'
            />


            <div className="contact-form-container">
                <form className='contact-form'>
                    <input
                        type='email'
                        placeholder='Your Email-id'
                        name='Email'
                        className='input-box email-input'
                        autoComplete='on'
                    />
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>

                </form>
            </div>
            <div className="social-icons-container">
                <a href='https://www.linkedin.com/in/jyoti-kumari2/'
                 className = 'social-icon'>
                    <img src={linkedin} alt ='ghgh'/>
                </a>
                <a href='https://medium.com/@jyotikumari7958'
                 className = 'social-icon'>
                    <img src={medium} alt='yyg'/>
                </a>
                <a href='https://www.hackerrank.com/jyoti_kri_02'
                 className = 'social-icon'>
                    <img src={hackerrank} alt='ffg'/>
                </a>
                <a href='https://www.instagram.com/jyoti_kri_02/'
                 className = 'social-icon'>
                    <img src={instagram} alt='ffg'/>
                </a>
                <a href='https://github.com/jyoti-2'
                        className = 'social-icon'>
                    <img src={github} alt='ggh'/>
                </a>
                <a href='https://devpost.com/jyoti-2?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
                 className = 'social-icon'>
                    <img src={devpost} alt='bb'/>
                </a>
            </div>


        <FooterLink phrase=' Read more ' link='about me!' toadress='/about'/>
        </div>
    );
};

export default Contact;