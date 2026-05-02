import { motion } from 'framer-motion';
import FluidGlass from '../reactbits/FluidGlass';

const BOOKING_URL = 'https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey';

const items = [
  {
    label: 'Call',
    href: 'tel:5551234567',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:info@sunrisefamilyclinic.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Book',
    href: BOOKING_URL,
    primary: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function Dock() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-6 left-1/2 z-40 hidden md:block"
    >
      <FluidGlass
        width="auto"
        height="auto"
        borderRadius={999}
        backgroundOpacity={0.2}
        saturation={1.5}
        blur={11}
        displace={0.6}
        distortionScale={-150}
        redOffset={0}
        greenOffset={8}
        blueOffset={18}
        brightness={50}
        opacity={0.93}
        className="px-3 py-2"
      >
        <div className="flex items-center gap-2">
          {items.map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-125 ${
                item.primary
                  ? 'bg-gradient-to-b from-coral to-orange-500 text-white shadow-lg shadow-coral/30'
                  : 'bg-white text-teal-dark border border-teal/30 shadow-sm shadow-teal/15 hover:bg-teal hover:text-white hover:border-teal'
              }`}
              title={item.label}
            >
              {item.icon}
              <span className="absolute -top-9 px-2 py-1 rounded text-xs bg-charcoal text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </FluidGlass>
    </motion.div>
  );
}
