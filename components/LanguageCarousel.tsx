'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const languages = [
  // { name: 'JavaScript', icon: 'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png' },
  { name: 'SQL Server', icon: 'https://cdn-icons-png.freepik.com/512/5968/5968306.png' },
  { name: 'React', icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg' },
  { name: 'Node.js', icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp' },
  // { name: 'Next.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s' },
];

export default function LanguageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + languages.length) % languages.length);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h3 className="text-2xl font-semibold text-center mb-8">Technologies We Work With</h3>
      
      <div className="relative h-80 overflow-hidden">
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-full"
          >
            <div className="text-center">
              <div className="w-60 h-60 mx-auto relative mb-2">
                <Image
                  src={languages[currentIndex].icon}
                  alt={languages[currentIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <p className="text-lg font-medium">{languages[currentIndex].name}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {languages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
