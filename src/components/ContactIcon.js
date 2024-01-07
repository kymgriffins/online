import React from 'react';
import ReactGA from 'react-ga4';

function ContactIcon(props) {

    const recordGAEvent = (type) => {
        // Record the 'select content' recommended event for GA
        ReactGA.event("select_content", {
            content_type: 'Intro Contact Link',
            content_id: type
        });
    };

    return (
        <a href={props.url} onClick={recordGAEvent(props.type)} className='link text-x-large'>
            {props.children}
        </a>
    );
}

export default ContactIcon;