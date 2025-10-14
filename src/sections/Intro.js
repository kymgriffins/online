import React from 'react';
import ContactIcon from '../components/ContactIcon';
import IntroSection from '../components/IntroSection';
import SkillsSummary from '../components/SkillsSummary';
import TypingEffect from '../components/TypingEffect';

import ContactData from '../data/ContactData.json';

function Intro() {
    return (
        <IntroSection id={"Intro"}>
            <div className='intro'>

                <TypingEffect className="mb-2" tag="h1" typingSpeed={100}>
                    Griffins Kimutai
                </TypingEffect>

                <TypingEffect className="text-secondary intro-subtitle mt-0" tag="h2" typingSpeed={50}>
                    Information Technology Consultant & Algorithmic Proprietary Trader
                </TypingEffect>

                <p className='subtitle text-secondary'>
                    IT Consultant with strong expertise in full-stack development, automation, and data-driven systems. Experienced in designing and deploying end-to-end digital solutions, ranging from responsive web platforms to intelligent backend architectures. Brings hands-on exposure to financial markets, algorithmic trading, and data analytics, applying technical precision within volatile and fast-moving trading environments.

                    Proven track record as a proprietary trader, having successfully passed trading challenges and managed capital in live markets. Skilled at leveraging market insights, executing strategic trades, and managing risk efficiently. Adept at transforming emerging technologies into scalable, resilient, and innovative systems that deliver impactful software solutions thriving under market pressures.

Committed to continuous learning, disciplined problem-solving, and bridging the gap between technology and finance to drive advanced trading automation and software innovation.                </p>

                <SkillsSummary />

                <div className='badge-container mt-4'>
                    <ContactIcon url={ContactData.LinkedIn.url} type={'LinkedIn'}>
                        <i className={ContactData.LinkedIn.iconClassName}></i>
                    </ContactIcon>

                    <ContactIcon url={ContactData.GitHub.url} type={'GitHub'}>
                        <i className={ContactData.GitHub.iconClassName}></i>
                    </ContactIcon>

                    <ContactIcon url={ContactData.Email.url} type={'Email'}>
                        <i className={ContactData.Email.iconClassName}></i>
                    </ContactIcon>
                </div>

            </div>
        </IntroSection>
    );
}

export default Intro;