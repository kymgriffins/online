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
                    YOUR NAME
                </TypingEffect>

                <TypingEffect className="text-secondary intro-subtitle mt-0" tag="h2" typingSpeed={50}>
                    YOUR TITLE
                </TypingEffect>

                <p className='subtitle text-secondary'>
                    Write a short description about yourself
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