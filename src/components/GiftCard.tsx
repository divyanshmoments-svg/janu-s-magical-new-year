import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Star } from 'lucide-react';

interface GiftCardProps {
  title: string;
  message: string;
  icon: 'heart' | 'gift' | 'star';
  delay?: number;
}

const icons = {
  heart: Heart,
  gift: Gift,
  star: Star,
};

const GiftCard = ({ title, message, icon, delay = 0 }: GiftCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flip-card cursor-pointer h-64 md:h-72"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner w-full h-full ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <div className="flip-card-front absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-rose-light/90 to-lavender-light/90 backdrop-blur-sm rounded-3xl shadow-card border border-rose/20 flex flex-col items-center justify-center p-6 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
            <div className="w-16 h-16 bg-gradient-to-br from-rose to-lavender rounded-full flex items-center justify-center mb-4 animate-bounce-soft">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-romantic text-2xl text-gradient-love mb-2">{title}</h3>
            <p className="text-sm font-quicksand text-foreground/60">Tap to reveal ✨</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-lavender-light/95 to-rose-light/95 backdrop-blur-sm rounded-3xl shadow-card border border-lavender/30 flex flex-col items-center justify-center p-6">
            <Heart className="w-8 h-8 text-rose fill-rose mb-4 animate-heartbeat" />
            <p className="font-romantic text-xl md:text-2xl text-center text-foreground leading-relaxed">
              {message}
            </p>
            <p className="mt-4 text-sm font-quicksand text-rose font-semibold">— Rahul ❤️</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftCard;
