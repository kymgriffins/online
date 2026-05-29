import { useState } from 'react';

import Section from '../components/Section';
import ReactGA from 'react-ga4';

function Resume() {
    const [expanded, setExpanded] = useState(false);

    const handleDownload = () => {
        ReactGA.event("select_content", {
            content_type: 'Resume',
            content_id: 'Resume Download'
        });
    };

    return (
        <Section title={"Resume & CV"} id={"Resume"}>
            <div className='resume-section'>
                <p className='subtitle text-secondary mb-3'>
                    Download my full resume or view it inline below.
                </p>

                <a
                    href='/resume.pdf'
                    download='Griffins_Kimutai_IT_Consultant.pdf'
                    className='link text-large resume-download-btn'
                    onClick={handleDownload}
                >
                    <i className="bi bi-download"></i> Download Resume (PDF)
                </a>

                <span
                    className={`link text-large ms-3 cursor-pointer ${expanded ? 'active' : ''}`}
                    onClick={() => setExpanded(!expanded)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') setExpanded(!expanded); }}
                >
                    <i className={`bi ${expanded ? 'bi-chevron-up' : 'bi-eye'}`}></i>
                    {expanded ? ' Hide PDF' : ' Preview PDF'}
                </span>

                {expanded && (
                    <div className='resume-preview mt-3'>
                        <iframe
                            src='/resume.pdf'
                            title='Resume PDF'
                            width='100%'
                            height='700px'
                            style={{ border: '1px solid var(--primary-dark-hover)', borderRadius: '0.3rem' }}
                        >
                            This browser does not support PDF viewing. Please download the PDF.
                        </iframe>
                    </div>
                )}
            </div>
        </Section>
    );
}

export default Resume;
