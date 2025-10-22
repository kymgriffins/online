import { useEffect, useState } from 'react';

function ArticlePopupModal({ article, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle smooth opening animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // Don't render if no article
  if (!article) {
    return null;
  }

  // Custom markdown renderer
  const renderMarkdown = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="blog-h1">{paragraph.substring(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="blog-h2">{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="blog-h3">{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('![')) {
        // Handle images
        const altText = paragraph.match(/!\[(.*?)\]/)?.[1] || '';
        const src = paragraph.match(/\((.*?)\)/)?.[1] || '';
        return <img key={index} src={src} alt={altText} className="blog-image" />;
      } else if (paragraph.startsWith('- ')) {
        return <li key={index} className="blog-li">{paragraph.substring(2)}</li>;
      } else if (paragraph.startsWith('1. ')) {
        return <li key={index} className="blog-li">{paragraph.substring(3)}</li>;
      } else {
        // Handle bold text
        const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <p
            key={index}
            className="blog-p"
            dangerouslySetInnerHTML={{ __html: formattedParagraph }}
          />
        );
      }
    });
  };

  // Prepare content
  const { title, description, imgPath, repoLink, tabs } = article;
  let aboutContent = tabs?.about || [];

  // Remove any about entries that are just the title or subtitle
  if (aboutContent[0] && aboutContent[0].replace(/^# /, '').trim() === title.trim()) {
    aboutContent = aboutContent.slice(1);
  }
  if (aboutContent[0] && (aboutContent[0].replace(/^## /, '').trim() === description.trim() || aboutContent[0].startsWith('## '))) {
    aboutContent = aboutContent.slice(1);
  }

  const markdownContent = [
    `![${title}](${imgPath})`,
    `# ${title}`,
    description,
    ...aboutContent
  ].join('\n\n');

  return (
    <div
      className={`article-modal-overlay ${isVisible ? 'visible' : ''} ${isClosing ? 'closing' : ''}`}
      onClick={handleBackdropClick}
    >
      <div
        className='article-modal-container'
        onClick={e => e.stopPropagation()}
      >
        <button
          className='article-modal-close'
          aria-label='Close article'
          onClick={handleClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className='article-modal-content-scrollable'>
          <div className="blog-post">
            {renderMarkdown(markdownContent)}
            {repoLink && (
              <div className="blog-footer">
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="video-link">
                  Watch Video Version
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 20px;
        }

        .article-modal-overlay.visible {
          opacity: 1;
        }

        .article-modal-overlay.closing {
          opacity: 0;
        }

        .article-modal-container {
          position: relative;
          background: #111;
          color: #fff;
          border-radius: 2.2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
          max-width: 1100px;
          width: 98vw;
          min-height: 80vh;
          max-height: 96vh;
          overflow: hidden;
          transform: scale(0.97) translateY(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .article-modal-overlay.visible .article-modal-container {
          transform: scale(1) translateY(0);
        }

        .article-modal-overlay.closing .article-modal-container {
          transform: scale(0.95) translateY(20px);
        }

        .article-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          color: #666;
          backdrop-filter: blur(10px);
        }

        .article-modal-close:hover {
          background: #f8f9fa;
          color: #333;
          transform: scale(1.1);
        }

        .article-modal-close:active {
          transform: scale(0.95);
        }

        .article-modal-content-scrollable {
          height: 100%;
          overflow-y: auto;
          padding: 2.5rem;
        }

        /* Blog post styles */
        .blog-post {
          color: #fff;
          background: transparent;
          min-height: 70vh;
          box-sizing: border-box;
        }

        .blog-h1 {
          font-size: 2.5rem;
          margin: 1.5rem 0 1rem 0;
          font-weight: 700;
          line-height: 1.2;
        }

        .blog-h2 {
          font-size: 2rem;
          margin: 1.5rem 0 1rem 0;
          font-weight: 600;
          line-height: 1.3;
        }

        .blog-h3 {
          font-size: 1.5rem;
          margin: 1.25rem 0 0.75rem 0;
          font-weight: 600;
          line-height: 1.4;
        }

        .blog-p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 1rem 0;
          color: #e0e0e0;
        }

        .blog-li {
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0.5rem 0;
          color: #e0e0e0;
        }

        .blog-image {
          max-width: 100%;
          border-radius: 1rem;
          margin: 1.5rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .blog-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
        }

        .video-link {
          color: #fff;
          text-decoration: underline;
          font-size: 1.1rem;
          transition: color 0.2s ease;
        }

        .video-link:hover {
          color: #4dabf7;
        }

        /* Scrollbar styling */
        .article-modal-content-scrollable::-webkit-scrollbar {
          width: 6px;
        }

        .article-modal-content-scrollable::-webkit-scrollbar-track {
          background: #333;
        }

        .article-modal-content-scrollable::-webkit-scrollbar-thumb {
          background: #666;
          border-radius: 3px;
        }

        .article-modal-content-scrollable::-webkit-scrollbar-thumb:hover {
          background: #888;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .article-modal-overlay {
            padding: 10px;
          }

          .article-modal-container {
            max-height: 95vh;
            border-radius: 1rem;
          }

          .article-modal-close {
            top: 12px;
            right: 12px;
            width: 36px;
            height: 36px;
          }

          .article-modal-content-scrollable {
            padding: 1.5rem;
          }

          .blog-h1 {
            font-size: 2rem;
          }

          .blog-h2 {
            font-size: 1.75rem;
          }

          .blog-h3 {
            font-size: 1.25rem;
          }

          .blog-p, .blog-li {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .article-modal-overlay {
            padding: 5px;
          }

          .article-modal-container {
            border-radius: 0.75rem;
          }

          .article-modal-content-scrollable {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ArticlePopupModal;