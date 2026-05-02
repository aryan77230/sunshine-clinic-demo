import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassSurface from '../reactbits/GlassSurface';
import Magnet from '../reactbits/Magnet';

const BOOKING_URL = 'https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl"
      >
        <GlassSurface
          intensity={scrolled ? 'strong' : 'medium'}
          borderRadius={24}
          className="px-4 sm:px-6 py-2.5 sm:py-3"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-serif text-base sm:text-lg lg:text-xl text-teal">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="sm:w-8 sm:h-8 flex-shrink-0">
                <circle cx="16" cy="16" r="14" fill="#0D9488" opacity="0.12" />
                <path d="M16 6C16 6 8 14 8 20a8 8 0 0016 0c0-6-8-14-8-14z" fill="#0D9488" />
                <circle cx="16" cy="19" r="3" fill="#fff" />
              </svg>
              <span className="hidden sm:inline">Sunrise Family Clinic</span>
              <span className="sm:hidden">Sunrise</span>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <div className="relative flex items-center">
                {links.map(link => {
                  const active = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                        active ? 'text-white' : 'text-charcoal/70 hover:text-charcoal'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-bubble"
                          className="absolute inset-0 rounded-full bg-gradient-to-b from-teal to-teal-dark shadow-lg shadow-teal/40"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              <Magnet padding={50} magnetStrength={6}>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-b from-teal to-teal-dark shadow-lg shadow-teal/40 hover:shadow-xl hover:shadow-teal/50 transition-all"
                >
                  Book Appointment
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Magnet>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <div className="w-6 h-0.5 bg-charcoal mb-1.5" />
              <div className="w-6 h-0.5 bg-charcoal mb-1.5" />
              <div className="w-6 h-0.5 bg-charcoal" />
            </button>
          </div>
        </GlassSurface>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-3 right-3 z-50 lg:hidden"
      >
        <GlassSurface borderRadius={20} intensity="strong" className="p-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 px-4 text-base font-medium border-b border-teal/10 last:border-0 ${
                location.pathname === link.to ? 'text-teal' : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-teal"
          >
            Book Appointment
          </a>
        </GlassSurface>
      </motion.div>
    </>
  );
}
