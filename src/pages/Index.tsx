import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WelcomeScreen from '@/components/WelcomeScreen';
import Stars from '@/components/Stars';
import CountdownTimer from '@/components/CountdownTimer';
import ReasonsILoveYou from '@/components/ReasonsILoveYou';
import LoveLetter from '@/components/LoveLetter';
import FinalReveal from '@/components/FinalReveal';
import { Heart } from 'lucide-react';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <title>Happy New Year Janu ❤️ | A Love Surprise from Rahul</title>
      <meta name="description" content="A special New Year 2026 surprise dedicated to my love Janu from Rahul." />

      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onEnter={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-romantic relative overflow-hidden"
        >
          {/* Background stars */}
          <Stars />

          {/* Header */}
          <header className="relative z-10 py-8 px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <Heart className="w-5 h-5 text-rose fill-rose" />
              <h1 className="font-romantic text-2xl md:text-3xl text-gradient-love">
                Janu & Rahul
              </h1>
              <Heart className="w-5 h-5 text-rose fill-rose" />
            </motion.div>
          </header>

          {/* Main content */}
          <main className="relative z-10">
            {/* Hero section */}
            <section className="py-12 px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-quicksand text-foreground/70 tracking-widest text-sm mb-4">
                  ✨ WELCOME TO YOUR SURPRISE ✨
                </p>
                <h2 className="font-romantic text-5xl md:text-7xl text-gradient-love mb-4">
                  Happy New Year 2026
                </h2>
                <p className="font-quicksand text-xl text-foreground/80 max-w-xl mx-auto">
                  My dearest Janu, this is a little world I created just for you, 
                  filled with all my love and the promises of a beautiful year ahead.
                </p>
              </motion.div>
            </section>

            <CountdownTimer />
            
            <ReasonsILoveYou />
            
            <LoveLetter />
            
            <FinalReveal />

            {/* Footer */}
            <footer className="relative z-10 py-12 px-6 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-rose fill-rose" />
                  <span className="font-romantic text-xl text-rose">Made with love by Rahul</span>
                  <Heart className="w-4 h-4 text-rose fill-rose" />
                </div>
                <p className="font-quicksand text-sm text-foreground/60">
                  For the most amazing person in the world — My Janu ❤️
                </p>
                <p className="font-quicksand text-xs text-foreground/40">
                  © 2026 • A Forever Love Story
                </p>
              </motion.div>
            </footer>
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Index;
