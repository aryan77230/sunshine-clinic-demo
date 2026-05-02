import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import GradientText from '../components/reactbits/GradientText';
import ShinyText from '../components/reactbits/ShinyText';
import TiltedCard from '../components/reactbits/TiltedCard';
import Particles from '../components/reactbits/Particles';

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & Family Physician',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    bio: 'Board-certified in family medicine with 15+ years of experience. Founded Sunrise to bring personal healthcare back to Springfield.',
    specialties: ['Family Medicine', 'Preventive Care', 'Pediatrics'],
  },
  {
    name: 'Dr. James Chen',
    role: 'Internal Medicine',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    bio: 'Specializes in chronic disease management and adult preventive care. Known for his attentive bedside manner.',
    specialties: ['Internal Medicine', 'Chronic Care', 'Geriatrics'],
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
    bio: 'Pediatric specialist passionate about childhood wellness. Trusted by hundreds of Springfield families.',
    specialties: ['Pediatrics', 'Adolescent Care', 'Vaccinations'],
  },
];

const team = [
  { name: 'Ema', role: 'Receptionist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Linda Rodriguez', role: 'Office Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
  { name: 'Marcus Thompson', role: 'Lead Nurse', image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&q=80' },
  { name: 'Aisha Williams', role: 'Medical Assistant', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80' },
];

export default function Doctors() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <Particles count={80} color="#0D9488" speed={0.3} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-4">
              <ShinyText>Meet Our Team</ShinyText>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              <BlurText text="The people who" />
              <br />
              <BlurText text="care for you" delay={0.4} gradient />
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A board-certified team committed to your family's wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="relative py-16">
        <Particles count={70} color="#5EA092" speed={0.22} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {doctors.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 0.15} className="h-full">
                <TiltedCard rotateAmplitude={6} scaleOnHover={1.02} className="h-full">
                  <div className="group h-full flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-ivory via-sage-light/40 to-coral-soft border-2 border-teal/20 shadow-lg shadow-teal/8 hover:shadow-xl hover:shadow-coral/20 hover:border-coral/40 transition-all duration-300">
                    <div className="relative overflow-hidden h-80 flex-shrink-0">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-serif text-2xl">{d.name}</h3>
                        <p className="text-sm opacity-90">{d.role}</p>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{d.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {d.specialties.map(s => (
                          <span
                            key={s}
                            className="text-xs px-3 py-1 rounded-full bg-teal/10 text-teal font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="relative py-24 bg-gradient-to-b from-cream to-teal-light/20">
        <Particles count={60} color="#E07856" speed={0.2} className="absolute inset-0 -z-10 w-full h-full" />
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-teal uppercase mb-3">
              <ShinyText>Support Team</ShinyText>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">The friendly faces</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-serif text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
