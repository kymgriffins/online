import { useState } from 'react';

import PopupModal from './PopupModal';
import { getProjectImage } from '../utils/projectImage';

import ReactGA from 'react-ga4';

function ProjectCard(props) {
    const { title, period, tags, description, demoLink, tabs } = props.data;

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
        <div className='timeline-entry'>
            <div className='timeline-marker'>
                <span className='timeline-period'>{period}</span>
                <div className='timeline-dot'></div>
            </div>

            <div
                className='timeline-card cursor-pointer'
                onClick={openModal}
            >
                <div className='timeline-card-inner'>
                    <div className='timeline-img-wrapper'>
                        <img
                            className='timeline-img'
                            src={imgSrc}
                            alt=''
                        />
                    </div>

                    <div className='timeline-card-body'>
                        <div className='badge-container'>
                            {tags.map(function (tag, index) {
                                return <span key={index} className='badge'>{tag}</span>;
                            })}
                        </div>

                        <p className='timeline-description'>
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
        </div>
    );
}

export default ProjectCard;
