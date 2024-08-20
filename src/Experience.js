import React, { useRef, useEffect, useState } from 'react';
import styles from './Experience.module.css';

const Experience = ({ company, positions }) => {
  const [lineHeights, setLineHeights] = useState([]);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    // Update line heights based on the height of experience descriptions
    const newHeights = descriptionRefs.current.map(ref => ref ? ref.offsetHeight : 0);
    setLineHeights(newHeights);
  }, [positions]);

  return (
    <div className={styles.experience}>
      <div className={styles.companyDetails}>
        <img className={styles.companyImage} src={company.logo} alt={company.name + " Logo"} />
        <h5 className={styles.company}>{company.name}</h5>
      </div>
      <div className={styles.positionsContainer}>
        {positions.map((position, index) => (
          <div key={index} className={styles.positionItem}>
            {positions.length > 1 && (
              <div className={styles.dotLine}>
                <div className={styles.dot}></div>
                {index < positions.length - 1 && (
                  <div
                    className={styles.line}
                    style={{ height: (lineHeights[index] + 25) + 'px' }}
                  ></div>
                )}
              </div>
            )}
            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <span className={styles.experienceInfo}>
                  <h3 className={styles.position}>{position.position}</h3>
                </span>
                <span className={styles.experienceDates}>
                  <p className={styles.dates}>{position.dates}</p>
                </span>
              </div>
              <div
                className={styles.experienceDescription}
                ref={el => descriptionRefs.current[index] = el}
              >
                <p className={styles.description}>{position.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
