import React, { useState } from 'react';
import ReactGA from 'react-ga4';

function SkillsSummary() {
    // State to manage modal visibility
    const [isSkillSumOpen, setIsSkillSumOpen] = useState(false);

    // This function toggles open/closed the skills summary
    const toggleSkillSum = () => {
        setIsSkillSumOpen(!isSkillSumOpen);

        // Record event for GA
        ReactGA.event({
            category: 'Intro',
            action: 'Toggled skills summary'
        });
    }


    return (
        <div>
            <a className='link cursor-pointer' onClick={toggleSkillSum}>
                {
                    isSkillSumOpen ?
                        <i className="bi bi-chevron-up"></i>
                        :
                        <i className="bi bi-chevron-down"></i>
                } Skills summary
            </a>
            <div className={`skills-summary ${isSkillSumOpen ? 'show' : ''}`}>
                <p className='subtitle'>
                    Languages: <span className='text-secondary'>JavaScript, Python, PHP, SQL, HTML/CSS</span>
                </p>
                <p className='subtitle'>
                    Frameworks: <span className='text-secondary'>React, Next.js, Node, Django, Bootstrap, Wordpress</span>
                </p>
                <p className='subtitle'>
                    Dev tools: <span className='text-secondary'>Git/GitHub, Figma, Adobe suite</span>
                </p>
            </div>
        </div>
    );
}

export default SkillsSummary;