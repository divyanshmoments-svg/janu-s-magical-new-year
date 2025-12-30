import { motion } from 'framer-motion';
import { Heart, Feather } from 'lucide-react';

const LoveLetter = () => {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Feather className="w-6 h-6 text-rose" />
          <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love">
            A Letter For You
          </h2>
          <Feather className="w-6 h-6 text-rose" style={{ transform: 'scaleX(-1)' }} />
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative corner hearts */}
          <Heart className="absolute -top-4 -left-4 w-8 h-8 text-rose/40 fill-rose/40 animate-pulse" />
          <Heart className="absolute -top-4 -right-4 w-8 h-8 text-rose/40 fill-rose/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Heart className="absolute -bottom-4 -left-4 w-8 h-8 text-rose/40 fill-rose/40 animate-pulse" style={{ animationDelay: '1s' }} />
          <Heart className="absolute -bottom-4 -right-4 w-8 h-8 text-rose/40 fill-rose/40 animate-pulse" style={{ animationDelay: '1.5s' }} />

          <div className="bg-gradient-to-br from-cream/90 to-rose-light/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-gold/20">
            <div className="font-romantic text-xl md:text-2xl text-foreground leading-relaxed space-y-6">
              <p className="text-rose text-2xl md:text-3xl">My Dearest Janu,</p>
              
              <p>
                As we step into 2025 together, I want you to know that every single moment with you has been a blessing. You came into my life like a beautiful sunrise, and since then, every day has been brighter.
              </p>
              
              <p>
                Your laugh is my favorite sound, your smile my favorite sight. The way you care for everyone around you inspires me to be a better person. I fall more in love with you with each passing day.
              </p>
              
              <p>
                This new year, I promise to:
              </p>
              
              <ul className="list-none space-y-2 pl-4">
                <li>💝 Love you more than yesterday, but less than tomorrow</li>
                <li>💝 Support all your dreams and be your biggest cheerleader</li>
                <li>💝 Create countless beautiful memories with you</li>
                <li>💝 Always be there for you, in sunshine and in rain</li>
                <li>💝 Make you laugh every single day</li>
              </ul>
              
              <p>
                Thank you for being my person, my best friend, and my forever love. Here's to an amazing 2025 together!
              </p>
              
              <div className="text-right pt-4">
                <p className="text-rose text-2xl md:text-3xl">Forever Yours,</p>
                <p className="text-gradient-love text-3xl md:text-4xl mt-2">Rahul ❤️</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
