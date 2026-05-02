import { ReactNode, CSSProperties } from 'react';

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
  borderRadius?: number;
  intensity?: 'light' | 'medium' | 'strong';
  style?: CSSProperties;
}

export default function GlassSurface({
  children,
  className = '',
  borderRadius = 20,
  intensity = 'medium',
  style,
}: GlassSurfaceProps) {
  const blurMap = { light: 6, medium: 10, strong: 14 };
  const opacityMap = { light: 0.25, medium: 0.4, strong: 0.55 };

  return (
    <div
      className={`relative ${className}`}
      style={{
        borderRadius,
        background: `linear-gradient(135deg, rgba(255,254,249,${opacityMap[intensity]}) 0%, rgba(204,251,241,${opacityMap[intensity] - 0.15}) 100%)`,
        backdropFilter: `blur(${blurMap[intensity]}px) saturate(1.6)`,
        WebkitBackdropFilter: `blur(${blurMap[intensity]}px) saturate(1.6)`,
        border: '1px solid rgba(13,148,136,0.18)',
        boxShadow:
          '0 6px 24px rgba(13,148,136,0.12), 0 2px 6px rgba(13,148,136,0.06), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(13,148,136,0.04)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
