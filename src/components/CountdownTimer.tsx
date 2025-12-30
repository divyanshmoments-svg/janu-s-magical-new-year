import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYear = new Date(2026, 0, 1); // January 1, 2026
      
      const difference = newYear.getTime() - now.getTime();

      if (difference <= 0) {
        setIsNewYear(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-card/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-card border border-rose/20">
          <span className="font-romantic text-4xl md:text-5xl text-gradient-love">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-2 text-sm font-quicksand font-medium text-foreground/70">{label}</span>
    </motion.div>
  );

  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-rose" />
          <h2 className="font-romantic text-3xl md:text-4xl text-gradient-love">
            {isNewYear ? "It's 2026!" : "Counting Down to Our Year"}
          </h2>
        </div>

        {isNewYear ? (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="py-10"
          >
            <p className="text-2xl md:text-3xl font-romantic text-rose mb-4">
              🎉 Happy New Year 2026, Janu! 🎉
            </p>
            <p className="text-lg font-quicksand text-foreground/70">
              A brand new year full of love and beautiful moments awaits us!
            </p>
          </motion.div>
        ) : (
          <>
            <p className="font-quicksand text-foreground/70 mb-8">
              Until we celebrate our new beginning together ✨
            </p>

            <div className="flex justify-center gap-4 md:gap-6">
              <TimeBlock value={timeLeft.days} label="Days" />
              <TimeBlock value={timeLeft.hours} label="Hours" />
              <TimeBlock value={timeLeft.minutes} label="Minutes" />
              <TimeBlock value={timeLeft.seconds} label="Seconds" />
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
