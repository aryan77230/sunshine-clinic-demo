import { motion } from 'framer-motion';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import GradientText from '../components/reactbits/GradientText';
import ShinyText from '../components/reactbits/ShinyText';
import CountUp from '../components/reactbits/CountUp';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import Particles from '../components/reactbits/Particles';

const values = [
  {
    title: 'Compassion First',
    icon: '💝',
    desc: 'Every patient is treated like family. We listen, understand, and care.',
  },
  {
    title: 'Excellence',
    icon: '⭐',
    desc: 'Board-certified physicians and the latest medical practices.',
  },
  {
    title: 'Accessibility',
    icon: '🌅',
    desc: 'Same-day appointments, evening hours, and 24/7 support.',
  },
  {
    title: 'Innovation',
    icon: '🔬',
    desc: 'Modern tools and AI-assisted scheduling for seamless care.',
  },
];

const milestones = [
  { year: '2010', event: 'Sunrise Family Clinic founded by Dr. Sarah Mitchell' },
  { year: '2014', event: 'Expanded to serve over 1,000 families' },
  { year: '2018', event: 'Added pediatric and geriatric specialty services' },
  { year: '2022', event: 'Launched 24/7 receptionist services for instant booking' },
  { year: '2026', event: 'Serving 5,000+ patients across the Springfield area' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <Particles count={70} color="#0D9488" speed={0.25} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-4">
              <ShinyText>About Us</ShinyText>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              <BlurText text="A clinic built on" />
              <br />
              <BlurText text="trust & warmth" delay={0.4} gradient />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed mx-auto"
            >
              For over 15 years, Sunrise Family Clinic has been more than a medical practice — we are a family healthcare home in the heart of Springfield.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24">
        <Particles count={60} color="#5EA092" speed={0.22} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-coral/40 -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80"
                  alt="Our clinic"
                  className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-ivory border-2 border-teal/30 shadow-xl shadow-teal/20">
                  <div className="text-3xl font-serif text-teal-dark"><CountUp to={15} />+</div>
                  <div className="text-xs text-gray-600 font-medium">Years of Care</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                Founded with a simple mission: <span className="italic text-teal">care that feels like home</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Dr. Sarah Mitchell founded Sunrise Family Clinic in 2010 after spending a decade in large hospital systems. She believed healthcare could be more personal, more accessible, and more compassionate.
                </p>
                <p>
                  What started as a single-doctor practice has grown into a trusted family medicine home for thousands of Springfield residents — but our values have not changed. We still know our patients by name. We still take the time to listen.
                </p>
                <p>
                  Today, we combine that personal touch with modern technology — including a 24/7 AI-powered receptionist that helps you book instantly without the phone tag.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-gradient-to-b from-cream to-teal-light/20">
        <Particles count={60} color="#E07856" speed={0.2} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
              <ShinyText>What Drives Us</ShinyText>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Our values</h2>
            <p className="text-gray-600">The principles that guide every interaction, every treatment, every day.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <SpotlightCard className="p-8 h-full rounded-3xl bg-gradient-to-br from-ivory via-sage-light/40 to-coral-soft border-2 border-teal/20 shadow-lg shadow-teal/8 hover:shadow-xl hover:shadow-coral/20 hover:border-coral/40 hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white/70 border border-teal/15 text-4xl">
                    {v.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24">
        <Particles count={70} color="#0D9488" speed={0.25} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
              <ShinyText>Our Journey</ShinyText>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">15 years of growth</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-amber to-teal -translate-x-1/2" />
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="font-serif text-3xl text-teal mb-1">{m.year}</div>
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral ring-4 ring-cream" />
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
