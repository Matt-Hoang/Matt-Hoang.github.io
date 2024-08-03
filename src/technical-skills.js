import React from 'react';
import styles from './technical-skills.module.css'; // Renamed import to `styles`

const TechnicalSkills = ({ title, subsections }) => {
    return (
        <div className={styles.technicalSkills}>
            <h3>{title}</h3>
            <ul>
                {subsections.map((subsection, index) => (
                    <li key={index}>
                        <b>{subsection.title}:</b> {subsection.skills.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechnicalSkills;
