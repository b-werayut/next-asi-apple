'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const languages = [
  { name: 'JavaScript', icon: 'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png' },
  { name: 'SQL Server', icon: 'https://cdn-icons-png.freepik.com/512/5968/5968306.png' },
  { name: 'React', icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg' },
  { name: 'Node.js', icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp' },
  { name: 'Next.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s' },
];

export default function LanguageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h3 className="text-2xl font-semibold text-center mb-8">Technologies We Work With</h3>
      
      <div className="relative h-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto relative mb-2">
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
        
        <div className="flex justify-center mt-6 space-x-2">
          {languages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}