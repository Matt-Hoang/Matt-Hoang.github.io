import React, {useState} from 'react';
import styles from './Projects.module.css';

const Projects = ({title, skills, image, description}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.projectContainer}>
            <div className={styles.project} onClick={toggleExpand}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={title + " image" } className={styles.image}/>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.skills}>{skills}</p>
                </div>
            </div>
            {isExpanded && (
                <div className={styles.detailsPanel}>
                    <h4>Details</h4>
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default Projects;