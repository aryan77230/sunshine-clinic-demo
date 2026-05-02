import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import GradientText from '../components/reactbits/GradientText';
import ShinyText from '../components/reactbits/ShinyText';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import Particles from '../components/reactbits/Particles';
import TiltedCard from '../components/reactbits/TiltedCard';

const services: Array<{
  title: string;
  desc: string;
  iconUrl: string;
  accent: string;
  big?: boolean;
}> = [
  {
    title: 'General Check-ups',
    desc: 'Annual wellness exams to keep you and your family healthy year-round.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/1219-stethoscope.gif',
    accent: '#0D9488',
    big: true,
  },
  {
    title: 'Family Medicine',
    desc: 'Personalized care for every family member, from newborns to grandparents.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/1249-heart-beat.gif',
    accent: '#F59E0B',
  },
  {
    title: 'Vaccinations',
    desc: 'Complete immunization including flu shots, childhood and travel vaccines.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/1237-vaccination.gif',
    accent: '#5EA092',
  },
  {
    title: 'Sick Visits',
    desc: 'Same-day appointments when you or your family members feel unwell.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/45-clock-time.gif',
    accent: '#0D9488',
  },
  {
    title: 'Minor Procedures',
    desc: 'In-office wound care, skin biopsies, and joint injections.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/1228-medical-file.gif',
    accent: '#F59E0B',
  },
  {
    title: 'Physicals',
    desc: 'Sports, school, and employment physicals with fast turnaround.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/14-doc-ok.gif',
    accent: '#5EA092',
  },
  {
    title: 'Preventive Care',
    desc: 'Screenings, health assessments, and lifestyle counseling.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/457-shield-security.gif',
    accent: '#0D9488',
    big: true,
  },
  {
    title: 'Lab Referrals',
    desc: 'Convenient referrals to trusted lab partners for blood work and diagnostics.',
    iconUrl: 'https://media.lordicon.com/icons/wired/outline/1216-tube.gif',
    accent: '#F59E0B',
  },
];

const BOOKING_URL = 'https://link.apisystem.tech/widget/form/BXLhQVmQF2y1cMcGcFey';

export default function Services() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <Particles count={80} color="#0D9488" speed={0.3} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-4">
              <ShinyText>What We Offer</ShinyText>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              <BlurText text="Comprehensive care," />
              <br />
              <BlurText text="under one roof" delay={0.4} gradient />
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From routine check-ups to specialized treatments — every service designed around what your family needs.
            </p>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="relative pb-24">
        <Particles count={70} color="#E07856" speed={0.2} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:auto-rows-[280px]">
            {services.map((s, i) => (
              <ScrollReveal
                key={s.title}
                delay={i * 0.05}
              >
                <TiltedCard rotateAmplitude={6} scaleOnHover={1.02} className="h-full">
                  <SpotlightCard
                    spotlightColor={`${s.accent}33`}
                    className="group relative isolate h-full pt-10 pb-7 px-7 rounded-3xl bg-gradient-to-br from-ivory via-sage-light/40 to-coral-soft border-2 border-teal/20 shadow-lg shadow-teal/8 hover:shadow-xl hover:shadow-coral/20 hover:border-coral/40 transition-all duration-300 text-center"
                  >
                    <div className="relative h-full flex flex-col items-center">
                      <div className="mb-5 transition-transform group-hover:scale-110">
                        <img
                          src={s.iconUrl}
                          alt=""
                          width={64}
                          height={64}
                          style={{ filter: 'url(#dropWhite)' }}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <div
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: s.accent }}
                      >
                        Learn more <span>→</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <Particles count={50} color="#5EA092" speed={0.2} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-teal via-teal-dark to-charcoal p-8 sm:p-12 md:p-16 text-center text-white">
              <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,158,11,0.4), transparent 50%), radial-gradient(circle at 80% 30%, rgba(94,160,146,0.4), transparent 50%)',
              }} />
              <div className="relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl mb-4">
                  Not sure which service?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Book a consultation and our team will guide you to the right care.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-teal-dark bg-white shadow-2xl hover:scale-105 transition-transform"
                >
                  Book a Consultation
                  <span>→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
