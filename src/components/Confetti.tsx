import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const colors = [
  'hsl(340, 82%, 72%)',
  'hsl(270, 60%, 85%)',
  'hsl(45, 100%, 60%)',
  'hsl(350, 100%, 88%)',
  'hsl(340, 100%, 92%)',
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 8,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti rounded-sm"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size * 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
