import React from 'react';
import "./Skills.css";
import { skillList } from './../../assets/skillsData';
import FooterLink from '../FooterLink/FooterLink';
import Header from "../Header/Header";
import SkillCard from './SkillCard';
import skillsVector from './../../assets/skills_vector.png';


const Skills = () => {
    return (
        <div className="section-container">
            <Header
                heading ='My Skills'
                detail='Passionate about new technologies, I keep exploring stuff. Here is the tech stack I have worked with!' />
            
            <div className="skill-card-container">
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />                   
                ))}
            </div>

            <FooterLink phrase=' Get in ' link='touch' toadress='/contact'/>
            
            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
        
    );
};

export default Skills;