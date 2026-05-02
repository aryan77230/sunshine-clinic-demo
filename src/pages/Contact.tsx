import BlurText from '../components/reactbits/BlurText';
import GradientText from '../components/reactbits/GradientText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import ShinyText from '../components/reactbits/ShinyText';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import Magnet from '../components/reactbits/Magnet';
import AnimatedList from '../components/reactbits/AnimatedList';
import Particles from '../components/reactbits/Particles';

const BOOKING_URL = 'https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey';

const info = [
  {
    title: 'Address',
    value: '123 Health Ave\nSpringfield, IL 62704',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
  },
  {
    title: 'Phone',
    value: '(555) 123-4567',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@sunrisefamilyclinic.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    ),
  },
  {
    title: 'Hours',
    value: 'Mon — Fri\n8:00 AM — 5:00 PM',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
];

const faqs = [
  { question: 'How do I book my first appointment?', answer: 'Click the Book Appointment button anywhere on this site. Fill out the quick form, and our receptionist Ema will call you within minutes to confirm your details and find the best time slot.' },
  { question: 'Do you accept my insurance?', answer: 'We accept most major insurance providers including Blue Cross, Aetna, Cigna, and Medicare. Call us with your insurance card handy to verify coverage before your visit.' },
  { question: 'What ages do you treat?', answer: 'All ages! From newborns to grandparents, our family medicine practice serves the entire family with specialists in pediatrics, adult care, and geriatrics.' },
  { question: 'Do you offer same-day visits?', answer: 'Yes — we reserve appointments daily for sick visits and urgent care needs. Call us in the morning or book online to find a same-day slot.' },
  { question: 'Is there parking on-site?', answer: 'Yes, we have free patient parking in the lot directly in front of the clinic, plus accessible spaces near the entrance.' },
];

export default function Contact() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <Particles count={80} color="#0D9488" speed={0.3} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-4">
              <ShinyText>Visit Us</ShinyText>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              <BlurText text="We are here" />
              <br />
              <BlurText text="for you" delay={0.4} gradient />
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conveniently located in the heart of Springfield. Reach out anytime — we'll get back to you fast.
            </p>
          </div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="relative pb-16">
        <Particles count={70} color="#5EA092" speed={0.22} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4 content-start">
              {info.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <SpotlightCard className="h-full p-6 rounded-3xl bg-gradient-to-br from-ivory via-sage-light/40 to-coral-soft border-2 border-teal/20 shadow-lg shadow-teal/8 hover:shadow-xl hover:shadow-coral/20 hover:border-coral/40 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/70 border border-teal/15 text-teal flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-1">{item.title}</div>
                    <div className="font-medium text-sm sm:text-base whitespace-pre-line break-words [overflow-wrap:anywhere] w-full">{item.value}</div>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.7!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Clinic location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <Particles count={50} color="#0D9488" speed={0.25} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Ready to book?</h2>
            <p className="text-gray-600 mb-8">Schedule online in under a minute.</p>
            <Magnet padding={80} magnetStrength={4}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-b from-teal to-teal-dark shadow-xl shadow-teal/40 hover:scale-105 transition-transform"
              >
                Book Your Appointment
                <span>→</span>
              </a>
            </Magnet>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-gradient-to-b from-cream to-teal-light/20">
        <Particles count={60} color="#E07856" speed={0.2} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
              <ShinyText>Got Questions?</ShinyText>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">Frequently asked</h2>
          </ScrollReveal>
          <AnimatedList items={faqs} />
        </div>
      </section>
    </>
  );
}
