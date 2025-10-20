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
                    I operate at the unique intersection of software engineering and financial risk management. With 4+ years of experience, I don't just build applications—I architect systems with risk intelligence embedded in their DNA. My dual expertise allows me to create solutions that are not only technically sound but also financially resilient.</p>

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