import { Link } from 'react-router-dom';

const BOOKING_URL = 'https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey';

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-warmwhite/80 mt-32">
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="container mx-auto px-6 pt-20 pb-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 font-serif text-xl text-warmwhite">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#0D9488" opacity="0.3" />
                <path d="M16 6C16 6 8 14 8 20a8 8 0 0016 0c0-6-8-14-8-14z" fill="#0D9488" />
                <circle cx="16" cy="19" r="3" fill="#fff" />
              </svg>
              Sunrise Family Clinic
            </div>
            <p className="text-sm leading-relaxed text-warmwhite/60 max-w-xs">
              Compassionate, comprehensive family healthcare in Springfield since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-warmwhite mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-teal transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-teal transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-teal transition-colors">Doctors</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-warmwhite mb-4">Visit Us</h4>
            <address className="not-italic text-sm leading-relaxed">
              123 Health Ave<br />
              Springfield, IL 62704<br />
              <a href="tel:5551234567" className="hover:text-teal transition-colors">(555) 123-4567</a>
            </address>
          </div>

          <div>
            <h4 className="font-serif text-lg text-warmwhite mb-4">Hours</h4>
            <ul className="text-sm space-y-1">
              <li>Mon — Fri: 8AM — 5PM</li>
              <li>Sat — Sun: Closed</li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-teal text-white hover:bg-teal-dark transition-colors"
            >
              Book Now →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warmwhite/50">
          <span>© 2026 Sunrise Family Clinic. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal transition-colors">Terms</a>
            <a href="#" className="hover:text-teal transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
