import React from 'react';

function IntroSection(props) {
    return (
        <div className='row py-5 align-items-center intro-section' id={props.id}>
            <div className='col-12'>
                {props.children}
            </div>
        </div>
    );
}

export default IntroSection;