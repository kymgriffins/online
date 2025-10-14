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
                    Information Technology Consultant & Algorithmic Trader
                </TypingEffect>

                <p className='subtitle text-secondary'>
                    Tech-savvy and versatile IT Consultant with expertise in full-stack development, automation, and data-driven systems. Experienced in designing and deploying end-to-end digital solutions, from responsive web platforms to intelligent backend architectures. Brings hands-on exposure to financial markets, algorithmic trading, and data analytics, applying technical precision to volatile and fast-moving environments. Adept at transforming emerging technologies into scalable, resilient, and innovative systems. Committed to continuous learning, disciplined problem-solving, and delivering impactful software that thrives even under market pressure.
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