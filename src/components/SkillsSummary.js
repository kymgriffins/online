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
            <a className='link cursor-pointer' onClick={toggleSkillSum}>
                {isSkillSumOpen ? (
                    <i className="bi bi-chevron-up"></i>
                ) : (
                    <i className="bi bi-chevron-down"></i>
                )} Skills summary
            </a>

            <div className={`skills-summary ${isSkillSumOpen ? 'show' : ''}`}>
                <p className='subtitle'>
                    <strong>Core Languages:</strong> <span className='text-secondary'>Software Development: JavaScript, Python</span>
                </p>
                <p className='subtitle'>
                    <strong>Trading & Finance:</strong> <span className='text-secondary'>Algorithmic Trading, Backtesting, Market Data Analysis, Mentorship</span>
                </p>

                <p className='subtitle'>
                    <strong>Infrastructure & DevOps:</strong> <span className='text-secondary'>AWS, Docker, Kubernetes, CI/CD, GitHub Actions</span>
                </p>
                <p className='subtitle'>
                    <strong>Data Science & Analytics:</strong> <span className='text-secondary'>Pandas, NumPy, scikit-learn, APIs, Power BI</span>
                </p>
                <p className='subtitle'>
                    <strong>Trading & Finance:</strong> <span className='text-secondary'>Algorithmic Trading, Backtesting, Market Data Analysis, Automation</span>
                </p>
                <p className='subtitle'>
                    <strong>Design & Productivity:</strong> <span className='text-secondary'>Figma, Adobe Suite, Notion</span>
                </p>
            </div>

        </div>
    );
}

export default SkillsSummary;
