import React from 'react';
import ReactGA from 'react-ga4';

function ContactLink(props) {

    const recordGAEvent = (type) => {
        // Record the 'select content' recommended event for GA
        ReactGA.event("select_content", {
            content_type: 'Footer Contact Link',
            content_id: type
        });
    };

    return (
        <a href={props.link} onClick={recordGAEvent(props.text)} target='_blank' className='link text-x-large'>
            <i className={props.iconName}></i> {props.text}
        </a>
    );
}

export default ContactLink;