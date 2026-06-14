import React, { useState, useRef, useEffect, useCallback } from 'react';
import TypingEffect from '../components/TypingEffect';

function PopupModal(props) {
    const { imgPath, title, tags, description, demoLink, tabs, onClose } = props;

    // Safe handling for tabs - default to empty object if undefined
    const safeTabs = tabs || {};
    const tabsKeys = Object.keys(safeTabs);

    // Set the initial active tab based on what is available in the object
    function getInitialActive() {
        let initialActive;

        if ('video' in safeTabs) {
            initialActive = 'video';
        }
        else if ('screenshots' in safeTabs) {
            initialActive = 'screenshots';
        }
        else if ('about' in safeTabs) {
            initialActive = 'about';
        }
        else if ('features' in safeTabs) {
            initialActive = 'features';
        }
        else if ('technical' in safeTabs) {
            initialActive = 'technical';
        }
        else {
            initialActive = '';
        }

        return initialActive;
    }

    const [activeTab, setActiveTab] = useState(getInitialActive());
    const [isClosing, setIsClosing] = useState(false);
    const modalRef = useRef(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            if (onClose) onClose();
        }, 200);
    }, [onClose]);

    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleEsc);

        const previouslyFocused = document.activeElement;
        const timer = setTimeout(() => {
            const first = modalRef.current?.querySelector(focusableSelector);
            if (first) first.focus();
        }, 50);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            clearTimeout(timer);
            if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
        };
    }, [handleClose]);

    useEffect(() => {
        const handleTabTrap = (e) => {
            if (e.key !== 'Tab' || !modalRef.current) return;
            const focusable = modalRef.current.querySelectorAll(focusableSelector);
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        window.addEventListener('keydown', handleTabTrap);
        return () => window.removeEventListener('keydown', handleTabTrap);
    }, []);

    // Close modal when clicking outside content
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) handleClose();
    };

    return (
        <div className={`modal enhanced-modal${isClosing ? ' fadeOut' : ' fadeIn'}`} style={{ display: 'block' }} onClick={handleBackdropClick} ref={modalRef}>
            <div className='modal-content enhanced-modal-content'>
                <button className='modal-close-btn' aria-label='Close' onClick={handleClose}>&times;</button>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={imgPath} className='modal-img display-img-border' alt={title || 'Project image'} />
                    </div>
                    <div className='col-md-6'>
                        <TypingEffect tag='h2' className={'my-2'} typingSpeed={30}>
                            {title}
                        </TypingEffect>
                        <div className='badge-container'>
                            {tags && tags.map((tag, index) => (
                                <span key={index} className='badge'>{tag}</span>
                            ))}
                        </div>

                        <p>{description}</p>

                        <div className='badge-container'>
                            {demoLink && (
                                <a href={demoLink} target='_blank' rel="noreferrer" className='link text-large'>
                                    <i className='bi bi-globe2'></i> Live site
                                </a>
                            )}
                        </div>

                    </div>
                </div>

                {/* Only show tabs if there are any */}
                {tabsKeys.length > 0 && (
                    <>
                        <div className='row mt-3 mb-2'>
                            <div className='col-md-12'>
                                <div className='tab-container'>
                                    {tabsKeys.map((tab) => (
                                        <button
                                            key={tab}
                                            className={`${activeTab === tab ? 'active ' : ''}tab-link text-x-large`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {activeTab === 'about' && safeTabs['about'] && (
                            <div className='row'>
                                <div className='col-md-8 mx-auto'>
                                    <div>
                                        {safeTabs['about'].map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'video' && safeTabs['video'] && (
                            <div className='row'>
                                <figure className='col-md-12 mb-3'>
                                    <img src={imgPath} className='modal-img' alt='' />
                                </figure>
                            </div>
                        )}

                        {activeTab === 'screenshots' && safeTabs['screenshots'] && (
                            <div className='row'>
                                {safeTabs['screenshots'].map((screenshot, index) => (
                                    <figure key={index} className='col-md-6 mb-4'>
                                        <img src={screenshot.img} className='modal-img mb-2' alt='' />
                                        <figcaption>
                                            <strong>{screenshot.title}</strong> {screenshot.description}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        )}

                        {/* NEW: Features Section */}
                        {activeTab === 'features' && safeTabs['features'] && (
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='features-container'>
                                        {safeTabs['features'].map((featureGroup, index) => (
                                            <div key={index} className='feature-group mb-4'>
                                                <h4 className='feature-group-title'>{featureGroup.title}</h4>
                                                <ul className='feature-list'>
                                                    {featureGroup.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className='feature-item'>
                                                            <i className='bi bi-check-circle-fill text-success me-2'></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* NEW: Technical Section */}
                        {activeTab === 'technical' && safeTabs['technical'] && (
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='technical-container'>
                                        <div className='technical-grid'>
                                            <div className='tech-item'>
                                                <strong>Analysis Methodology:</strong>
                                                <span>{safeTabs.technical.analysis_methodology}</span>
                                            </div>
                                            <div className='tech-item'>
                                                <strong>Supported Assets:</strong>
                                                <span>{safeTabs.technical.supported_assets?.join(', ')}</span>
                                            </div>
                                            <div className='tech-item'>
                                                <strong>Data Sources:</strong>
                                                <span>{safeTabs.technical.data_sources?.join(', ')}</span>
                                            </div>
                                            <div className='tech-item'>
                                                <strong>Key Metrics:</strong>
                                                <span>{safeTabs.technical.key_metrics?.join(', ')}</span>
                                            </div>
                                            <div className='tech-item'>
                                                <strong>Analysis Timeframes:</strong>
                                                <span>{safeTabs.technical.analysis_timeframes?.join(', ')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    );
}

export default PopupModal;