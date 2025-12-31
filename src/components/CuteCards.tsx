import { motion } from 'framer-motion';
import { useState } from 'react';

const cards = [
  {
    emoji: "🐻",
    title: "My Teddy Bear",
    message: "You're my cuddle buddy forever!",
    bg: "from-rose/20 to-rose-light/20"
  },
  {
    emoji: "🌙",
    title: "My Moon",
    message: "You light up my darkest nights",
    bg: "from-lavender/20 to-rose/20"
  },
  {
    emoji: "🦋",
    title: "My Butterfly",
    message: "You give me butterflies every day",
    bg: "from-rose-light/20 to-lavender/20"
  },
  {
    emoji: "🍰",
    title: "My Sweetie",
    message: "Life is sweeter with you!",
    bg: "from-cream/30 to-rose/20"
  },
];

const CuteCards = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love text-center mb-4">
          Tap to Reveal 💝
        </h2>
        <p className="text-center font-quicksand text-foreground/70 mb-10">
          Each card holds a little surprise for you, Janu!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => toggleCard(index)}
              className="cursor-pointer perspective-1000"
            >
              <motion.div
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-40 md:h-48"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.bg} backdrop-blur-sm rounded-2xl border border-rose/30 flex flex-col items-center justify-center gap-2 backface-hidden`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <motion.span 
                    className="text-5xl md:text-6xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {card.emoji}
                  </motion.span>
                  <p className="font-quicksand text-sm text-foreground/60">Tap me!</p>
                </div>

                {/* Back */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.bg} backdrop-blur-sm rounded-2xl border border-rose/30 flex flex-col items-center justify-center p-4 text-center`}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <h3 className="font-romantic text-xl text-rose mb-2">{card.title}</h3>
                  <p className="font-quicksand text-sm text-foreground/80">{card.message}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CuteCards;
