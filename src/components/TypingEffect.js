import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ children, className, tag = 'div', typingSpeed = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < children.length) {
      const interval = setInterval(() => {
        setTypedText(prevTypedText => prevTypedText + children[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);

        if (currentIndex === children.length - 1) {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [isVisible, currentIndex, children, typingSpeed]);

  const Tag = tag;

  return (
    <Tag ref={containerRef} className={className}>
      {typedText}
    </Tag>
  );
};

export default TypingEffect;
