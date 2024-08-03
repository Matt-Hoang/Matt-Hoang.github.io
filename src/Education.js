import React from 'react';
import edu from './Education.module.css';

const Education = ({school, degree, dates, gpa}) => {
    return (
        <div className={edu.education}>
            <span className={edu.educationInfo}>
                <h3 className={edu.school}>{school}</h3>
                <h5 className={edu.degree}>{degree}</h5>
            </span>
            <span className={edu.educationDates}>
                <p className={edu.dates}>{dates}</p>
                <p className={edu.gpa}>GPA: {gpa}</p>
            </span>
        </div>
    );
};

export default Education;