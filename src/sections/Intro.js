import React from 'react';
import IntroSection from '../components/IntroSection';
import ContactIcon from '../components/ContactIcon';
import TypingEffect from '../components/TypingEffect';
import SkillsSummary from '../components/SkillsSummary';

import ContactData from '../data/ContactData.json';

function Intro() {
    return (
        <IntroSection id={"Intro"}>
            <div className='intro'>

                <TypingEffect className="mb-2" tag="h1" typingSpeed={100}>
                    Griffins Kimutai
                </TypingEffect>

                <TypingEffect className="text-secondary intro-subtitle mt-0" tag="h2" typingSpeed={50}>
                    Information Technology Consultant & Algorithmic Trader
                </TypingEffect>

                <p className='subtitle text-secondary'>
                    Tech-savvy and versatile IT Consultant skilled in full-stack development, automation, and data-driven systems.
                    Experienced in designing and deploying complete digital solutions — from web apps to intelligent backend infrastructure.
                    Passionate about learning emerging technologies and solving complex problems through innovative, scalable software.
                </p>

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