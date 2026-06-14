import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ children, className, tag = 'div', typingSpeed = 8 }) => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    const current = containerRef.current;
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(children);
      return;
    }
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
  }, [isVisible, currentIndex, children, typingSpeed, prefersReducedMotion]);

  const Tag = tag;

  return (
    <Tag ref={containerRef} className={className} aria-live='polite'>
      {typedText}
    </Tag>
  );
};

export default TypingEffect;
