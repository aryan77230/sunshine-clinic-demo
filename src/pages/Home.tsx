import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aurora from '../components/reactbits/Aurora';
import BlurText from '../components/reactbits/BlurText';
import GradientText from '../components/reactbits/GradientText';
import ShinyText from '../components/reactbits/ShinyText';
import Magnet from '../components/reactbits/Magnet';
import CountUp from '../components/reactbits/CountUp';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import TiltedCard from '../components/reactbits/TiltedCard';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import Stepper from '../components/reactbits/Stepper';
import Particles from '../components/reactbits/Particles';

const BOOKING_URL = 'https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey';

const previewServices = [
  {
    title: 'Family Medicine',
    desc: 'Personalized care for every family member.',
    icon: '🩺',
  },
  {
    title: 'Preventive Care',
    desc: 'Screenings and wellness to prevent illness.',
    icon: '🛡️',
  },
  {
    title: 'Same-Day Visits',
    desc: 'Sick visits when you need us most.',
    icon: '⚡',
  },
];

const steps = [
  {
    number: 1,
    title: 'Fill Out the Form',
    description: 'Click "Book Your Appointment" and fill in your details. It only takes a minute.',
  },
  {
    number: 2,
    title: 'Get a Call from Ema',
    description: 'Our receptionist Ema will call you to confirm details and find your perfect time slot.',
  },
  {
    number: 3,
    title: "You're All Set",
    description: 'Your appointment is confirmed. You will receive a reminder before your visit.',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Aurora colorStops={['#0D9488', '#5EA092', '#E07856']} amplitude={0.9} blend={0.5} />
        </div>
        <div className="absolute inset-0 bg-cream/40 -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-teal/20 text-sm text-teal font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Accepting New Patients
              </motion.div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                <BlurText text="Your Family's Health," delay={0.2} />
                <br />
                <BlurText text="Our Priority" delay={0.6} gradient />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-lg leading-relaxed mb-8"
              >
                At Sunrise Family Clinic, we build lasting relationships with our patients. Experience personalized care from a team that truly knows you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Magnet padding={80} magnetStrength={5}>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-b from-teal to-teal-dark shadow-xl shadow-teal/40 hover:shadow-2xl hover:shadow-teal/50 transition-all"
                  >
                    Book Your Appointment
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Magnet>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-teal border-2 border-teal/30 hover:border-teal bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex flex-wrap gap-6 sm:gap-10 pt-6 border-t border-teal/15"
              >
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-teal">
                    <CountUp to={15} />+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-teal">
                    <CountUp to={5000} />+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Patients Served</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-teal">
                    <CountUp to={4.9} decimals={1} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Patient Rating</div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative"
              >
                <TiltedCard rotateAmplitude={8} scaleOnHover={1.02}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=80"
                      alt="Doctor consultation"
                      className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
                    />
                    <div className="absolute bottom-5 left-5 right-5 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-md flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-semibold text-charcoal">Receptionist Available 24/7</span>
                    </div>
                  </div>
                </TiltedCard>

                {/* Decorative floating cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-coral text-white shadow-xl shadow-coral/30"
                >
                  <div className="text-xs font-medium opacity-80">Board Certified</div>
                  <div className="font-serif text-lg">Dr. Mitchell</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl bg-teal/95 text-white shadow-xl"
                >
                  <div className="text-2xl font-serif">98%</div>
                  <div className="text-xs">Satisfaction</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-20 sm:py-28 md:py-32">
        <Particles count={80} color="#0D9488" speed={0.3} className="absolute inset-0 -z-10 w-full h-full" />

        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
              <ShinyText>What We Offer</ShinyText>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 md:whitespace-nowrap">
              Comprehensive care,{' '}
              <span className="italic text-coral whitespace-nowrap">tailored to you</span>
            </h2>
            <p className="text-gray-600">From routine check-ups to specialized care — everything your family needs under one roof.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {previewServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.15}>
                <SpotlightCard className="h-full p-8 rounded-3xl bg-gradient-to-br from-ivory via-sage-light/40 to-coral-soft border-2 border-teal/20 shadow-lg shadow-teal/8 hover:shadow-xl hover:shadow-coral/20 hover:border-coral/40 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white/70 border border-teal/15 text-4xl">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-4 transition-all"
            >
              View all services
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-b from-cream via-teal-light/30 to-cream">
        <Particles count={60} color="#E07856" speed={0.25} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
              <ShinyText>How It Works</ShinyText>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Book in <span className="italic text-coral">3 simple steps</span>
            </h2>
            <p className="text-gray-600">Our smart booking system makes scheduling your visit effortless.</p>
          </ScrollReveal>

          <Stepper steps={steps} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal via-teal-dark to-teal -z-10" />
        <div className="absolute inset-0 -z-10 opacity-20">
          <Particles count={120} color="#ffffff" speed={0.4} className="w-full h-full" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center text-white">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-6">
              Ready to put your <br />
              <span className="italic">health first?</span>
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Join thousands of families who trust Sunrise Family Clinic for their healthcare needs.
            </p>
            <Magnet padding={80} magnetStrength={4}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-teal-dark bg-white shadow-2xl hover:scale-105 transition-transform"
              >
                Book Your Appointment Today
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Magnet>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
