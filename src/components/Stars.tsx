import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StarElement {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

const Stars = () => {
  const [stars, setStars] = useState<StarElement[]>([]);

  useEffect(() => {
    const newStars: StarElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: 8 + Math.random() * 12,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Star
            size={star.size}
            className="text-gold fill-gold/50"
          />
        </div>
      ))}
    </div>
  );
};

export default Stars;
