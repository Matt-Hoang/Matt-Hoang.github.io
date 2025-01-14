import React from 'react';
import styles from './SocialsComponent.module.css';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialsComponent = ({ customMargin, customSpacing }) => {
    return (
        <div className={styles.socialIcons} style={{margin: customMargin, justifyContent: customSpacing}}>
            <a href="https://www.linkedin.com/in/matthewhhoang" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/Matt-Hoang" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/matt_hoang/" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
        </div>
    );
};

export default SocialsComponent;
