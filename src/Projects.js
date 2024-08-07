import React from 'react';
import styles from './Projects.module.css';

const Projects = ({title, skills, image}) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title + " image" } className={styles.image}/>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.skills}>{skills}</p>
            </div>
        </div>
    );
};

export default Projects;