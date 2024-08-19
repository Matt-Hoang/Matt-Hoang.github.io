import React from 'react';
import styles from './Projects.module.css';

const Projects = ({title, skills, image, description, links=[]}) => {
    return (
        <div className={styles.projectContainer}>
            <div>
                <img src={image} alt={title + "image"} className={styles.image}/>
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.skills}>{skills}</p>
                <p className={styles.description}>{description}</p>
                
                {links.length > 0 &&
                    <div className={styles.linksContainer}>
                        <p>Links: </p>
                        <ul className={styles.linkList}>
                            {links.map((link, index) => (
                                <li key={index} className={styles.linkItem}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.text}
                                    </a>
                                    {index < links.length - 1 && ' • '}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Projects;

