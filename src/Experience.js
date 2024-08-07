import React from 'react';
import styles from './Experience.module.css';

const Experience = ({ position, company, dates, description }) => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceHeader}>
        <span className={styles.experienceInfo}>
          <h3 className={styles.position}>{position}</h3>
          <h5 className={styles.company}>{company}</h5>
        </span>
        <span className={styles.experienceDates}>
          <p className={styles.dates}>{dates}</p>
        </span>
      </div>
      <div className={styles.experienceDescription}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Experience;
