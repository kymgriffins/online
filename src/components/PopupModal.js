import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect'

function PopupModal(props) {
    const { imgPath, title, tags, description, repoLink, demoLink, tabs } = props;

    const tabsKeys = Object.keys(tabs);

    // Set the initial active tab based on what is available in the object
    function getInitialActive() {
        let initialActive;

        if ('video' in tabs) {
            initialActive = 'video';
        }
        else if ('screenshots' in tabs) {
            initialActive = 'screenshots';
        }
        else if ('about' in tabs) {
            initialActive = 'about';
        }
        else {
            initialActive = '';
        }

        return initialActive;
    }

    const [activeTab, setActiveTab] = useState(getInitialActive());


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='modal' style={{ display: 'block' }}>
            <div className='modal-content'>

                <div className='row'>
                    <div className='col-md-6'>

                        <img src={imgPath} className='modal-img display-img-border' alt='' />

                    </div>

                    <div className='col-md-6'>

                        <TypingEffect tag='h2' className={'my-2'} typingSpeed={30}>
                            {title}
                        </TypingEffect>

                        <div className='badge-container'>
                            {tags.map((tag, index) => (
                                <span key={index} className='badge'>{tag}</span>
                            ))}
                        </div>

                        <p>{description}</p>

                        <div className='badge-container'>
                            <a href={repoLink} target='_blank' className='link text-large'>
                                <i className='bi bi-github'></i> Repo
                            </a>
                            {demoLink && (
                                <a href={demoLink} target='_blank' className='link text-large'>
                                    <i className='bi bi-globe2'></i> Live demo
                                </a>
                            )}
                        </div>

                    </div>
                </div>

                <div className='row mt-3 mb-2'>
                    <div className='col-md-12'>
                        <div className='tab-container'>
                            {tabsKeys.map((tab) => (
                                <a
                                    key={tab}
                                    className={activeTab === tab ? 'active tab-link text-x-large' : 'tab-link text-x-large'}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize the first letter */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {activeTab === 'about' &&
                    <div className='row'>
                        <div className='col-md-8 mx-auto'>
                            <div>
                                {tabs['about'].map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                    </div>
                }

                {activeTab === 'video' &&
                    <div className='row'>

                        <figure className='col-md-12 mb-3'>
                            <img src={imgPath} className='modal-img' alt='' />
                        </figure>

                    </div>
                }

                {activeTab === 'screenshots' && (
                    <div className='row'>

                        {tabs['screenshots'].map((screenshot, index) => (
                            <figure key={index} className='col-md-6 mb-4'>
                                <img src={screenshot.img} className='modal-img mb-2' alt='' />
                                <figcaption>
                                    <strong>{screenshot.title}</strong> {screenshot.description}
                                </figcaption>
                            </figure>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
}

export default PopupModal;