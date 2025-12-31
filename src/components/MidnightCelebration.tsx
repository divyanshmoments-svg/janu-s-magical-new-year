import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const MidnightCelebration = () => {
  const [isAfterMidnight, setIsAfterMidnight] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      // After midnight (12 AM) until 6 AM
      setIsAfterMidnight(hours >= 0 && hours < 6);
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAfterMidnight) {
      setShowFireworks(true);
      const timer = setTimeout(() => setShowFireworks(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [isAfterMidnight]);

  if (!isAfterMidnight) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {showFireworks && (
          <>
            {/* Firework bursts */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 1.5, 2],
                  opacity: [1, 1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: 3,
                  repeatDelay: 2
                }}
                className="absolute w-20 h-20 rounded-full"
                style={{
                  left: `${15 + (i * 10)}%`,
                  top: `${10 + (i % 3) * 20}%`,
                  background: `radial-gradient(circle, ${
                    ['hsl(var(--rose))', 'hsl(var(--lavender))', 'hsl(var(--cream))'][i % 3]
                  } 0%, transparent 70%)`,
                }}
              />
            ))}

            {/* Sparkle particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                initial={{ 
                  opacity: 0,
                  y: Math.random() * 100 + 50,
                  x: Math.random() * window.innerWidth
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: -100,
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: 5
                }}
                className="absolute text-2xl"
              >
                ✨
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Floating celebration emojis */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`emoji-${i}`}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ 
            y: '-10vh',
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 8,
            delay: i * 3,
            repeat: Infinity,
          }}
          className="absolute text-3xl"
          style={{ left: `${10 + i * 15}%` }}
        >
          {['🎆', '🎇', '🎉', '💖', '🥳', '🎊'][i]}
        </motion.div>
      ))}
    </div>
  );
};

export default MidnightCelebration;
