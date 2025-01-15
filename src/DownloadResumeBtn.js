import React from 'react';
import styles from './DownloadResumeBtn.module.css';

import { FaFileDownload } from "react-icons/fa";


function downloadResume() {
    
}

const DownloadResumeBtn = ({ customMargin }) => {
    return (
        <a className={styles.downloadBtn} style={{margin: customMargin}} href="/resume.pdf" download="Matt Hoang's Resume.pdf">
        <FaFileDownload className={styles.downloadIcon}/>
        Download Resume
      </a>
    );
};

export default DownloadResumeBtn;
