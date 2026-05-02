import { useRef, useState, ReactNode, MouseEvent } from 'react';

interface TiltedCardProps {
  children: ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  className?: string;
}

export default function TiltedCard({
  children,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  className = '',
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -rotateAmplitude;
    const ry = ((x - rect.width / 2) / rect.width) * rotateAmplitude;
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scaleOnHover})`);
  };

  const onLeave = () => setTransform('perspective(1000px) rotateX(0) rotateY(0) scale(1)');

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        transform,
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
