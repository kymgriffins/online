import { useState } from 'react';

import PopupModal from './PopupModal';
import { getProjectImage } from '../utils/projectImage';

import ReactGA from 'react-ga4';

function ProjectCard(props) {
    const { title, tags, description, demoLink, tabs } = props.data;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        ReactGA.event("select_content", {
            content_type: 'Project',
            content_id: title
        });
    };

    const closeModal = () => setIsModalOpen(false);

    const imgSrc = getProjectImage(title);

    return (
        <section
            className='mb-4 display-card cursor-pointer'
            onClick={openModal}
        >
            <div className='project-card-inner'>
                <div className='project-img-wrapper'>
                    <img
                        className='project-img'
                        src={imgSrc}
                        alt=''
                    />
                </div>

                <div className='project-card-body'>
                    <div className='badge-container'>
                        {tags.map(function (tag, index) {
                            return <span key={index} className='badge'>{tag}</span>;
                        })}
                    </div>

                    <p className='project-description'>
                        {description}
                    </p>

                    <div className='badge-container'>
                        <span className='link text-large cursor-pointer'>
                            <i className="bi bi-text-paragraph"></i> More info
                        </span>

                        {demoLink ?
                            <a href={demoLink} target='_blank' rel="noreferrer" className='link text-large'>
                                <i className='bi bi-globe2'></i> Live site
                            </a>
                            : null}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <PopupModal
                    imgPath={imgSrc}
                    title={title}
                    tags={tags}
                    description={description}
                    demoLink={demoLink}
                    tabs={tabs}
                    onClose={closeModal}
                />
            )}

        </section>
    );
}

export default ProjectCard;
