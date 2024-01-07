import React from 'react';

import TypingEffect from '../components/TypingEffect'


function OpenSourceCard(props) {
    const { imgPath, title, description, url } = props.data;

    return (
        <section className='mb-3 display-card'>
            <div className='row card-row'>

                <div className='col-12 col-md-4'>
                    <img
                        className='display-img'
                        src={imgPath}
                        alt=""
                    />
                </div>

                <div className='col-12 col-md-8'>
                    <TypingEffect tag="h3" typingSpeed={30}>
                        {title}
                    </TypingEffect>

                    <p>
                        {description}
                    </p>

                    <div className='badge-container'>
                        {props.data['url'] ?
                            <a href={url} target="_blank" className='link text-large'>
                                <i className="bi bi-link-45deg"></i> View project
                            </a>
                            : null}
                    </div>

                </div>

            </div>

        </section>
    );
}

export default OpenSourceCard;