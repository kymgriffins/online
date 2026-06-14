import React, { useState } from 'react';
import ReactGA from 'react-ga4';

function SkillsSummary() {
    const [isSkillSumOpen, setIsSkillSumOpen] = useState(false);

    const toggleSkillSum = () => {
        setIsSkillSumOpen(!isSkillSumOpen);
        ReactGA.event({
            category: 'Intro',
            action: 'Toggled skills summary'
        });
    };

    return (
        <div>
            <span className='link cursor-pointer' onClick={toggleSkillSum} role="button" tabIndex={0} aria-expanded={isSkillSumOpen} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSkillSum(); } }}>
                {isSkillSumOpen ? (
                    <i className="bi bi-chevron-up"></i>
                ) : (
                    <i className="bi bi-chevron-down"></i>
                )} Skills summary
            </span>

            <div className={`skills-summary ${isSkillSumOpen ? 'show' : ''}`}>
                <p className='subtitle'>
                    <strong>Frontend Development:</strong> <span className='text-secondary'>ES6+, React.js, TypeScript, HTML/CSS, Bootstrap</span>
                </p>
                <p className='subtitle'>
                    <strong>Backend & Data Science:</strong> <span className='text-secondary'>Python, Node.js, REST APIs, Database Systems</span>
                </p>
                <p className='subtitle'>
                    <strong>DevOps & Systems:</strong> <span className='text-secondary'>Docker, Git, GitHub Actions, CI/CD, Cloud Infrastructure</span>
                </p>
                <p className='subtitle'>
                    <strong>System Architecture:</strong> <span className='text-secondary'>Microservices, Scalable Design, Multi-Tenant Systems, API Design</span>
                </p>
                <p className='subtitle'>
                    <strong>Security & Data:</strong> <span className='text-secondary'>Access Control, Audit Logging, Data Pipeline Automation, OSINT</span>
                </p>
                <p className='subtitle'>
                    <strong>Design & Productivity:</strong> <span className='text-secondary'>Figma (UX/UI), Notion, Technical Documentation, Product Engineering</span>
                </p>
            </div>

        </div>
    );
}

export default SkillsSummary;
