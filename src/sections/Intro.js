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

                <TypingEffect className="mb-2" tag="h1" typingSpeed={10}>
                    Kiplagat Griffins Kimutai
                </TypingEffect>

                <TypingEffect className="text-secondary intro-subtitle mt-0" tag="h2" typingSpeed={10}>
                    Information Technology Consultant
                </TypingEffect>

                <p className='subtitle text-secondary'>
                    Software engineer with four years of experience shipping systems that serve tens of thousands of users and generate significant recurring revenue. I specialize in taking unclear business requirements and delivering production-ready platforms that reduce cost, eliminate manual work, and scale without breaking. I have led technical direction for teams, owned full product lifecycles from concept to revenue, and consistently translate technical decisions into business outcomes that non-technical stakeholders understand and trust.</p>

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

                    <ContactIcon url={ContactData.Website.url} type={'Website'}>
                        <i className={ContactData.Website.iconClassName}></i>
                    </ContactIcon>
                </div>

            </div>
        </IntroSection>
    );
}

export default Intro;
