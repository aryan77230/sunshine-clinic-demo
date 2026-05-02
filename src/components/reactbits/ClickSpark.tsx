import { useEffect, useRef, ReactNode } from 'react';

interface ClickSparkProps {
  children?: ReactNode;
  sparkColor?: string;
  sparkCount?: number;
  sparkRadius?: number;
  duration?: number;
}

export default function ClickSpark({
  children,
  sparkColor = '#0D9488',
  sparkCount = 10,
  sparkRadius = 20,
  duration = 600,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<{ x: number; y: number; angle: number; startTime: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const click = (e: MouseEvent) => {
      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        sparks.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / sparkCount,
          startTime: now,
        });
      }
    };
    window.addEventListener('click', click);

    let raf = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      sparks.current = sparks.current.filter(s => {
        const elapsed = now - s.startTime;
        if (elapsed >= duration) return false;
        const progress = elapsed / duration;
        const distance = sparkRadius * progress * 3;
        const x1 = s.x + Math.cos(s.angle) * distance;
        const y1 = s.y + Math.sin(s.angle) * distance;
        const x2 = s.x + Math.cos(s.angle) * (distance - 10);
        const y2 = s.y + Math.sin(s.angle) * (distance - 10);
        ctx.strokeStyle = sparkColor;
        ctx.globalAlpha = 1 - progress;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return true;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', click);
    };
  }, [sparkColor, sparkCount, sparkRadius, duration]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
      {children}
    </>
  );
}
