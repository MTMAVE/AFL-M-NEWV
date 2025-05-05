import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  style?: React.CSSProperties;
  interval?: number;
  loop?: boolean;
}

const AnimatedText = ({ words, className = '', style = {}, interval = 3000, loop = true }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!loop && currentIndex === words.length - 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, loop, currentIndex]);

  return (
    <div className={`relative ${className}`} style={style}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full text-center"
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;