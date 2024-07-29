import React from 'react';
import './Experience.css';

const Experience = ({position, company, dates, description}) => {
    return (
        <div className="experience">
            <div className="experience-header">
                <span className="experience-info">
                    <h3 className="position">{position}</h3>
                    <h5 className="company">{company}</h5>
                </span>
                <span className="experience-dates">
                    <p className="dates">{dates}</p>
                </span>
            </div>
            <div className="experience-description">
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default Experience;