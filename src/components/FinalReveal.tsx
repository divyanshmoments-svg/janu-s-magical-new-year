import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const FinalReveal = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lavender/30 rounded-full blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Animated stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-gold fill-gold animate-twinkle"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                width: 12 + Math.random() * 12,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose to-lavender rounded-full shadow-glow animate-pulse-glow">
            <Heart className="w-12 h-12 text-primary-foreground fill-current animate-heartbeat" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-gold animate-sparkle" />
            <span className="text-gold font-quicksand font-semibold tracking-widest text-sm">
              FINAL SURPRISE
            </span>
            <Sparkles className="w-6 h-6 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="font-romantic text-4xl md:text-6xl lg:text-7xl text-gradient-love mb-6 leading-tight">
            Thank You, Janu
          </h2>

          <p className="font-romantic text-2xl md:text-3xl text-rose mb-8">
            For Making My Life Beautiful ✨
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-cream/80 to-rose-light/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-card border border-gold/30 max-w-2xl mx-auto"
          >
            <p className="font-quicksand text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              You are not just my girlfriend, you are my best friend, my confidant, my partner in crime, and the love of my life. Every day with you is a gift I cherish.
            </p>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose fill-rose" />
              <Heart className="w-6 h-6 text-rose fill-rose" />
              <Heart className="w-5 h-5 text-rose fill-rose" />
            </div>

            <p className="font-romantic text-3xl md:text-4xl text-gradient-love">
              I Love You, Janu!
            </p>

            <p className="font-romantic text-2xl text-rose mt-4">
              Forever & Always Yours,
            </p>

            <p className="font-romantic text-4xl md:text-5xl text-gradient-love mt-2">
              Rahul ❤️
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom decorative hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="text-rose fill-rose animate-float"
              style={{
                width: 20 + Math.abs(2 - i) * 8,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalReveal;
