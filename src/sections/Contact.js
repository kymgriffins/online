import React from 'react';
import Section from '../components/Section'
import ContactLink from '../components/ContactLink'

import ContactData from '../data/ContactData.json';

function Contact() {
    return (
        <Section title={"Contact"} id={"Contact"}>

            <div className='row'>
                <div className='col-sm-6 mt-2'>
                    <ContactLink
                        link={ContactData.Email.url}
                        iconName={ContactData.Email.iconClassName}
                        text="Email"
                    />
                </div>

                <div className='col-sm-6 mt-2'>
                    <ContactLink
                        link={ContactData.LinkedIn.url}
                        iconName={ContactData.LinkedIn.iconClassName}
                        text="LinkedIn"
                    />
                </div>

                <div className='col-sm-6 mt-2'>
                    <ContactLink
                        link={ContactData.GitHub.url}
                        iconName={ContactData.GitHub.iconClassName}
                        text="GitHub"
                    />
                </div>

                <div className='col-sm-6 mt-2'>
                    <ContactLink
                        link={ContactData.Medium.url}
                        iconName={ContactData.Medium.iconClassName}
                        text="Medium"
                    />
                </div>

            </div>

        </Section>
    );
}

export default Contact;