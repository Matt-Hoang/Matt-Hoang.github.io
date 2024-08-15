import React from 'react';
import styles from './Projects.module.css';

const Projects = ({title, skills, image, description}) => {
    return (
        <div className={styles.projectContainer}>
            <div>
                <img src={image} alt={title + "image"} className={styles.image}/>
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.skills}>{skills}</p>
                <p className={styles.description}>{description}</p>
            </div>
            
        </div>
    );
};

export default Projects;

