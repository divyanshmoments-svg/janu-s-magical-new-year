import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-romantic"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glowing background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-light rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lavender-light rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {showContent && (
          <div className="relative z-10 text-center px-6">
            {/* Floating hearts around the title */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="absolute -top-20 left-1/2 -translate-x-1/2"
            >
              <Heart className="w-16 h-16 text-rose fill-rose animate-heartbeat" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Sparkles className="w-8 h-8 text-gold animate-sparkle" />
              <span className="text-xl font-quicksand text-rose font-semibold tracking-widest">
                ✨ 2025 ✨
              </span>
              <Sparkles className="w-8 h-8 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-love mb-6 leading-tight"
            >
              Happy New Year,
              <br />
              <span className="text-6xl md:text-8xl lg:text-9xl">My Love Janu</span>
            </motion.h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="flex justify-center items-center gap-2 mb-10"
            >
              <Heart className="w-8 h-8 text-rose fill-rose animate-pulse" />
              <Heart className="w-10 h-10 text-rose fill-rose animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-8 h-8 text-rose fill-rose animate-pulse" style={{ animationDelay: '0.4s' }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl font-quicksand text-foreground/80 mb-10 max-w-md mx-auto"
            >
              A special surprise awaits you inside...
              <br />
              <span className="text-rose font-semibold">From Rahul, with all my love ❤️</span>
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              onClick={onEnter}
              className="group relative px-10 py-4 bg-gradient-to-r from-rose to-lavender rounded-full font-quicksand font-semibold text-primary-foreground text-lg shadow-romantic hover:shadow-glow transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Open Your Surprise
                <Heart className="w-5 h-5 fill-current group-hover:animate-heartbeat" />
              </span>
            </motion.button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeScreen;
