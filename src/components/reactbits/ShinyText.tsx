import { ReactNode } from 'react';

interface ShinyTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ShinyText({ children, speed = 4, className = '' }: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(13,148,136,0.5) 30%, rgba(224,120,86,1) 50%, rgba(13,148,136,0.5) 70%)',
        backgroundSize: '200% 100%',
        animation: `gradient-shift ${speed}s linear infinite`,
      }}
    >
      {children}
    </span>
  );
}
