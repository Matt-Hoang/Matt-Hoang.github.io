import React from 'react';
import styles from './technical-skills.module.css';

const TechnicalSkills = ({ title, subsections }) => {
    return (
        <div className={styles.technicalSkills}>
            <h3>{title}</h3>
            <ul>
                {subsections.map((subsection, index) => (
                    <li key={index}>
                        <b>{subsection.title}:</b>
                        <span className={styles.skillList}>
                            {subsection.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={styles.skillItem}>
                                    {skill.logo && (
                                        <img src={skill.logo} alt={`${skill.name} logo`} className={styles.skillLogo} />
                                    )}                                    
                                    {skill.name}
                                    {skillIndex < subsection.skills.length - 1 && ', '}
                                </span>
                            ))}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechnicalSkills;
