interface AnimatedIconProps {
  type:
    | 'stethoscope'
    | 'heartbeat'
    | 'syringe'
    | 'clock'
    | 'medical-file'
    | 'document-check'
    | 'shield'
    | 'tube';
  size?: number;
  className?: string;
}

const PRIMARY = '#1A2624';
const ACCENT = '#0D9488';

export default function AnimatedIcon({ type, size = 64, className = '' }: AnimatedIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 100 100',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
  };

  switch (type) {
    case 'stethoscope':
      return (
        <svg {...props}>
          <g style={{ transformOrigin: '50% 30%' }}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-8 50 30; 8 50 30; -8 50 30"
              dur="3s"
              repeatCount="indefinite"
            />
            <path d="M30 20 v25 a12 12 0 0 0 24 0 v-25" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" />
            <path d="M42 70 v-12" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" />
            <circle cx="42" cy="78" r="8" stroke={PRIMARY} strokeWidth="4" />
            <circle cx="58" cy="78" r="3" fill={ACCENT}>
              <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="30" cy="20" r="3" fill={PRIMARY} />
            <circle cx="54" cy="20" r="3" fill={PRIMARY} />
          </g>
        </svg>
      );

    case 'heartbeat':
      return (
        <svg {...props}>
          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1; 1.12; 1; 1.05; 1"
              dur="1.2s"
              repeatCount="indefinite"
              additive="sum"
            />
            <path
              d="M50 80 C50 80, 20 60, 20 38 C20 25, 30 18, 38 18 C44 18, 48 22, 50 28 C52 22, 56 18, 62 18 C70 18, 80 25, 80 38 C80 60, 50 80, 50 80 Z"
              stroke={PRIMARY}
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </g>
          <path d="M28 50 L40 50 L45 38 L52 62 L58 45 L65 55 L72 50" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <animate
              attributeName="stroke-dasharray"
              values="0 200; 100 200; 100 200"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      );

    case 'syringe':
      return (
        <svg {...props}>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -3 3; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
            <line x1="20" y1="80" x2="35" y2="65" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" />
            <rect x="33" y="40" width="36" height="22" rx="3" stroke={PRIMARY} strokeWidth="4" transform="rotate(-45 51 51)" />
            <line x1="68" y1="34" x2="80" y2="22" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" />
            <line x1="62" y1="28" x2="76" y2="14" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round" />
            <line x1="40" y1="73" x2="54" y2="58" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="80" r="2.5" fill={ACCENT}>
              <animate attributeName="opacity" values="1; 0.3; 1" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      );

    case 'clock':
      return (
        <svg {...props}>
          <circle cx="50" cy="50" r="32" stroke={PRIMARY} strokeWidth="4" />
          <line x1="50" y1="50" x2="50" y2="28" stroke={PRIMARY} strokeWidth="4" strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="12s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="50" y1="50" x2="65" y2="50" stroke={ACCENT} strokeWidth="3" strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <circle cx="50" cy="50" r="2.5" fill={PRIMARY} />
        </svg>
      );

    case 'medical-file':
      return (
        <svg {...props}>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -3; 0 0"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <path d="M28 18 h32 l12 12 v52 a4 4 0 0 1 -4 4 h-40 a4 4 0 0 1 -4 -4 v-60 a4 4 0 0 1 4 -4 z" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
            <path d="M60 18 v12 h12" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
            <line x1="44" y1="54" x2="56" y2="54" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="48" x2="50" y2="60" stroke={ACCENT} strokeWidth="3" strokeLinecap="round">
              <animate attributeName="opacity" values="1; 0.4; 1" dur="1.5s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      );

    case 'document-check':
      return (
        <svg {...props}>
          <path d="M28 18 h32 l12 12 v52 a4 4 0 0 1 -4 4 h-40 a4 4 0 0 1 -4 -4 v-60 a4 4 0 0 1 4 -4 z" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
          <path d="M60 18 v12 h12" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
          <path d="M38 56 L46 64 L62 48" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <animate
              attributeName="stroke-dasharray"
              values="0 50; 50 50"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      );

    case 'shield':
      return (
        <svg {...props}>
          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1; 1.05; 1"
              dur="2.5s"
              repeatCount="indefinite"
              additive="sum"
            />
            <path d="M50 12 L78 22 v22 c0 18 -12 32 -28 38 c-16 -6 -28 -20 -28 -38 v-22 z" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
            <path d="M40 48 L48 56 L62 40" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <animate attributeName="opacity" values="1; 0.5; 1" dur="2s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      );

    case 'tube':
      return (
        <svg {...props}>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-3 50 50; 3 50 50; -3 50 50"
              dur="3s"
              repeatCount="indefinite"
            />
            <path d="M38 14 h24 v8 h-24 z" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
            <path d="M40 22 v54 a10 10 0 0 0 20 0 v-54" stroke={PRIMARY} strokeWidth="4" strokeLinejoin="round" />
            <path d="M40 60 v16 a10 10 0 0 0 20 0 v-16 z" fill={ACCENT} opacity="0.5" />
            <circle cx="46" cy="68" r="2" fill={ACCENT}>
              <animate attributeName="cy" values="72; 64; 72" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="54" cy="72" r="1.5" fill={ACCENT}>
              <animate attributeName="cy" values="74; 66; 74" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      );

    default:
      return null;
  }
}
