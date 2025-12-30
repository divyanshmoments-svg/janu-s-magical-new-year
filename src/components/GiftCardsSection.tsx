import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import GiftCard from './GiftCard';

const giftCards = [
  {
    title: "Our Beautiful Memories",
    message: "Every moment with you becomes a treasured memory. From our first smile to endless laughter, you make life magical.",
    icon: "heart" as const,
  },
  {
    title: "Why I Love You",
    message: "Your smile lights up my world. Your kindness inspires me. Your love makes me the luckiest person alive.",
    icon: "star" as const,
  },
  {
    title: "My Promise to You",
    message: "I promise to love you more with each passing day, to be your best friend, and to make you smile forever.",
    icon: "gift" as const,
  },
  {
    title: "Our Inside Jokes",
    message: "Remember all those silly moments that only we understand? Those are my favorite! 😄 You make everything fun!",
    icon: "heart" as const,
  },
  {
    title: "Dreams Together",
    message: "2025 is our year to dream bigger, love deeper, and create a beautiful life together. Ready for the adventure?",
    icon: "star" as const,
  },
  {
    title: "You Are My Home",
    message: "No matter where life takes us, being with you feels like coming home. You are my peace, my joy, my everything.",
    icon: "gift" as const,
  },
];

const GiftCardsSection = () => {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gift className="w-7 h-7 text-rose animate-bounce-soft" />
          <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love text-center">
            Love Notes for You
          </h2>
          <Gift className="w-7 h-7 text-rose animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <p className="text-center font-quicksand text-foreground/70 mb-12">
          Click each card to reveal a special message from my heart to yours 💝
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftCards.map((card, index) => (
            <GiftCard
              key={index}
              {...card}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GiftCardsSection;
