import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  colors?: string[];
  animationSpeed?: number;
  className?: string;
}

export default function GradientText({
  children,
  colors = ['#134E4A', '#0D9488', '#E07856', '#B8462C', '#134E4A'],
  animationSpeed = 8,
  className = '',
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: '300% 100%',
        animation: `gradient-shift ${animationSpeed}s linear infinite`,
      }}
    >
      {children}
    </span>
  );
}
