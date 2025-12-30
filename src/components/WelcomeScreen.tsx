import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-romantic"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Subtle glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose/10 rounded-full blur-3xl" />
        </div>

        {showContent && (
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-6"
            >
              <Heart className="w-16 h-16 text-rose fill-rose mx-auto animate-heartbeat" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Sparkles className="w-6 h-6 text-gold" />
              <span className="text-lg font-quicksand text-gold font-semibold tracking-widest">
                ✨ 2026 ✨
              </span>
              <Sparkles className="w-6 h-6 text-gold" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-love mb-6 leading-tight"
            >
              Happy New Year,
              <br />
              <span className="text-6xl md:text-8xl lg:text-9xl">My Love Janu</span>
            </motion.h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="flex justify-center items-center gap-2 mb-8"
            >
              <Heart className="w-6 h-6 text-rose fill-rose" />
              <Heart className="w-8 h-8 text-rose fill-rose" />
              <Heart className="w-6 h-6 text-rose fill-rose" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl font-quicksand text-foreground/80 mb-10 max-w-md mx-auto"
            >
              A special surprise awaits you inside...
              <br />
              <span className="text-rose font-semibold">From Rahul, with all my love ❤️</span>
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              onClick={onEnter}
              className="px-10 py-4 bg-gradient-to-r from-rose to-rose-light rounded-full font-quicksand font-semibold text-primary-foreground text-lg shadow-romantic hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Open Your Surprise
                <Heart className="w-5 h-5 fill-current" />
              </span>
            </motion.button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeScreen;
