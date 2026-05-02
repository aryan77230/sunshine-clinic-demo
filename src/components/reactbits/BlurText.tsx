interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  gradient?: boolean;
}

export default function BlurText({
  text,
  delay = 0,
  className = '',
  animateBy = 'words',
  gradient = false,
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const isWords = animateBy === 'words';

  return (
    <span className={className} style={{ display: 'inline' }}>
      {elements.map((el, i) => (
        <span
          key={`${text}-${i}`}
          className={gradient ? 'blur-text-gradient' : 'blur-text-word'}
          style={{
            animationDelay: gradient
              ? `${delay + i * 0.08}s, 0s`
              : `${delay + i * 0.08}s`,
            marginRight: isWords && i < elements.length - 1 ? '0.25em' : 0,
          }}
        >
          {el}
        </span>
      ))}
    </span>
  );
}
