import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const reasons = [
  "Your beautiful smile that lights up my world",
  "The way you laugh at my silly jokes",
  "The way you make ordinary moments magical",
  "Your strength and determination",
  "How you always believe in me",
  "The comfort I feel just being with you",
];

const ReasonsILoveYou = () => {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-7 h-7 text-rose fill-rose" />
          <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love text-center">
            Reasons I Love You
          </h2>
          <Heart className="w-7 h-7 text-rose fill-rose" />
        </div>
        
        <p className="text-center font-quicksand text-foreground/70 mb-10">
          Just a few of the million reasons why you're so special to me 💕
        </p>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-rose/20 hover:border-rose/40 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose to-rose-light rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="font-quicksand text-lg text-foreground/90">{reason}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center font-romantic text-2xl text-rose mt-8"
        >
          ...and so many more! ❤️
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ReasonsILoveYou;
