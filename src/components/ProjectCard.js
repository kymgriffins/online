import React, { useState } from 'react';

import TypingEffect from '../components/TypingEffect'
import PopupModal from './PopupModal';

import ReactGA from 'react-ga4';

function ProjectCard(props) {
    const { imgPath, title, tags, description, repoLink, demoLink, tabs } = props.data;

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility and close only when clicked outside the modal content
    const toggleModal = (event) => {
        const isClickInsideModal = event.target.closest('.modal-content');
        if (!isClickInsideModal) {
            setIsModalOpen(!isModalOpen);
        }

        // Record the 'select content' recommended event for GA
        ReactGA.event("select_content", {
            content_type: 'Project',
            content_id: title
        });
    };

    return (
        <section
            className='mb-3 display-card cursor-pointer'
            onClick={toggleModal}
        >
            <div className='row card-row'>
                <div className='col-12 col-md-4'>
                    <img
                        className='display-img align-self-center display-img-border'
                        src={imgPath}
                        alt=''
                    />
                </div>

                <div className='col-12 col-md-8'>
                    <TypingEffect tag='h3' typingSpeed={30}>
                        {title}
                    </TypingEffect>

                    <div className='badge-container'>
                        {tags.map(function (tag, index) {
                            return <span key={index} className='badge'>{tag}</span>;
                        })}
                    </div>

                    <p>
                        {description}
                    </p>


                    <div className='badge-container'>
                        <a className='link text-large'>
                            <i className="bi bi-text-paragraph"></i> More info
                        </a>

                        <a href={repoLink} target='_blank' className='link text-large'>
                            <i className='bi bi-github'></i> Repo
                        </a>

                        {props.data['demoLink'] ?
                            <a href={demoLink} target='_blank' className='link text-large'>
                                <i className='bi bi-globe2'></i> Live demo
                            </a>
                            : null}
                    </div>

                    {isModalOpen && (
                        <PopupModal
                            imgPath={imgPath}
                            title={title}
                            tags={tags}
                            description={description}
                            repoLink={repoLink}
                            demoLink={demoLink}
                            tabs={tabs}
                        />
                    )}

                </div>
            </div>
        </section>
    );
}

export default ProjectCard;