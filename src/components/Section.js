import React from 'react';

import TypingEffect from '../components/TypingEffect'

function Section(props) {
    return (
        <div className='row py-5' id={props.id}>
            
            <hr className='mb-4' />

            <div className='col-md-4 col-xl-5'>
                {props.title ?
                    <TypingEffect className="m-0 sticky-title" tag="h2" typingSpeed={50}>
                        {props.title}
                    </TypingEffect>
                    : null}
            </div>
            <div className='col-md-8 col-xl-7'>
                {props.children}
            </div>
        </div>
    );
}

export default Section;