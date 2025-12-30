import { useEffect, useState } from 'react';
import { Sparkles as SparkleIcon } from 'lucide-react';

interface Sparkle {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      size: 12 + Math.random() * 16,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <SparkleIcon
            size={sparkle.size}
            className="text-gold fill-gold-light"
          />
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
