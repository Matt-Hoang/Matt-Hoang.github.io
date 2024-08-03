import React from 'react';
import exp from './Experience.module.css';

const Experience = ({ position, company, dates, description }) => {
  return (
    <div className={exp.experience}>
      <div className={exp.experienceHeader}>
        <span className={exp.experienceInfo}>
          <h3 className={exp.position}>{position}</h3>
          <h5 className={exp.company}>{company}</h5>
        </span>
        <span className={exp.experienceDates}>
          <p className={exp.dates}>{dates}</p>
        </span>
      </div>
      <div className={exp.experienceDescription}>
        <p className={exp.description}>{description}</p>
      </div>
    </div>
  );
};

export default Experience;
