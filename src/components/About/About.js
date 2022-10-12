import React from 'react';
import './About.css'
import about from '../../images/About.png'
import timeline from '../../images/Timeline.png'
const About = () => {
    return (
        <div className='about-container container'>
            <div className="left-about">
                <img src={about} className='w-50 img-fluid' alt="" />
            </div>
            <div className="right-about">
                <img src={timeline} className='w-75 img-fluid' alt="" />
            </div>
        </div>
    );
};

export default About;