import { motion } from 'framer-motion';
import { Heart, Feather } from 'lucide-react';

const LoveLetter = () => {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-rose/20">
            <div className="font-romantic text-xl md:text-2xl text-foreground leading-relaxed space-y-6">
              <p className="text-rose text-2xl md:text-3xl">My Dearest Janu,</p>
              
              <p>
                As we step into 2026 together, I want you to know that every single moment with you has been a blessing. You came into my life like a beautiful sunrise, and since then, every day has been brighter.
              </p>
              
              <p>
                Your laugh is my favorite sound, your smile my favorite sight. The way you care for everyone around you inspires me to be a better person. I fall more in love with you with each passing day.
              </p>
              
              <p>
                This new year, I promise to:
              </p>
              
              <ul className="list-none space-y-2 pl-4">
                <li>💕 Love you more than yesterday, but less than tomorrow</li>
                <li>💕 Support all your dreams and be your biggest cheerleader</li>
                <li>💕 Create countless beautiful memories with you</li>
                <li>💕 Always be there for you, in sunshine and in rain</li>
                <li>💕 Make you laugh every single day</li>
              </ul>
              
              <p>
                Thank you for being my person, my best friend, and my forever love. Here's to an amazing 2026 together!
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
