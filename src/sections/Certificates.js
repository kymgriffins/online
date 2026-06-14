import { useState } from 'react';

import Section from '../components/Section';
import ReactGA from 'react-ga4';

const certificates = [
  {
    id: 'kcse',
    label: 'KCSE Certificate',
    file: '/griffinskimutaiKcse.pdf',
    downloadName: 'griffinskimutaiKcse.pdf',
    description: 'Kenya Certificate of Secondary Education',
  },
  {
    id: 'bachelors',
    label: 'Bachelor\'s Degree in Information Technology',
    file: '/griffinskimutaiDegree.pdf',
    downloadName: 'griffinskimutaiDegree.pdf',
    description: 'Bachelors Degree in Information Technology',
  },
];

function Certificates() {
  const [expanded, setExpanded] = useState(null);

  const handleDownload = (cert) => {
    ReactGA.event("select_content", {
      content_type: 'Certificate',
      content_id: `${cert.id} Download`,
    });
  };

  return (
    <Section title={"Certificates"} id={"Certificates"}>
      <div className='certificates-section'>
        <p className='subtitle text-secondary mb-3'>
          View or download my academic and professional certificates.
        </p>

        {certificates.map((cert) => (
          <div key={cert.id} className='certificate-entry mb-4'>
            <div className='certificate-header'>
              <span className='certificate-label'>{cert.label}</span>
              <span className='text-secondary certificate-desc'>{cert.description}</span>
            </div>

            <div className='certificate-actions'>
              <a
                href={cert.file}
                download={cert.downloadName}
                className='link text-large'
                onClick={() => handleDownload(cert)}
              >
                <i className="bi bi-download"></i> Download
              </a>

              <span
                className={`link text-large ms-3 cursor-pointer ${expanded === cert.id ? 'active' : ''}`}
                onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === cert.id}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(expanded === cert.id ? null : cert.id); } }}
              >
                <i className={`bi ${expanded === cert.id ? 'bi-chevron-up' : 'bi-eye'}`}></i>
                {expanded === cert.id ? ' Hide' : ' Preview'}
              </span>
            </div>

            {expanded === cert.id && (
              <div className='certificate-preview mt-2'>
                <iframe
                  src={cert.file}
                  title={cert.label}
                  width='100%'
                  height='500px'
                  style={{ border: '1px solid var(--primary-dark-hover)', borderRadius: '0.3rem' }}
                >
                  This browser does not support PDF viewing. Please download the PDF.
                </iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Certificates;
