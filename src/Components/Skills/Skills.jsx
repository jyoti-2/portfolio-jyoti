import React from 'react';
import "./Skills.css";
import { skillList } from './../../assets/skillsData';
import FooterLink from '../FooterLink/FooterLink';
import Header from "../Header/Header";
import SkillCard from './SkillCard';
import skillsVector from './../../assets/skills_vector.png';
import "../../styles/common.css";

const Skills = () => {
    // Group skills by category
    const skillsByCategory = skillList.reduce((acc, skill) => {
        const category = skill.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <div id="skill" className="section-container">
            <Header
                heading='Technical Skills'
                detail='Technologies and tools I work with to build scalable solutions'
            />
            
            <div className="skills-content">
                <div className="skills-categories">
                    {Object.entries(skillsByCategory).map(([category, skills]) => (
                        <div key={category} className="skill-category card fade-in">
                            <h3 className="category-title text-primary">{category}</h3>
                            <div className="skill-card-container grid-2">
                                {skills.map(({ skillName, skillUrl }, index) => (
                                    <SkillCard 
                                        key={`${category}-${index}`}
                                        skillName={skillName} 
                                        skillUrl={skillUrl} 
                                    />                   
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='skills-vector-frame'>
                    <img
                        src={skillsVector}
                        alt='skills'
                        className='skills-vector'
                    />
                </div>
            </div>

            <FooterLink phrase='Get in ' link='touch!' toadress='/contact'/>
        </div>
    );
};

export default Skills;