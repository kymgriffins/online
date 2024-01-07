import React from 'react';

import TypingEffect from '../components/TypingEffect'

function ArticleCard(props) {
    const { imgPath, title, description, repoLink } = props.data;

    return (
        <section className='mb-3 display-card'>
            <div className='row card-row'>

                    <div className='col-12 col-md-4'>
                        <img
                            className='display-img'
                            src={imgPath}
                            alt="Article cover image"
                        />
                    </div>

                    <div className='col-12 col-md-8'>
                        <TypingEffect tag="h3" typingSpeed={30}>
                            {title}
                        </TypingEffect>

                        <p>
                            {description}
                        </p>

                        <a href={repoLink} target="_blank" className='link text-large'>
                            <i className="bi bi-medium"></i> View article
                        </a>
                    </div>

            </div>

        </section>
    );
}

export default ArticleCard;