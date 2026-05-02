import { motion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

interface StepperProps {
  steps: Step[];
  className?: string;
}

export default function Stepper({ steps, className = '' }: StepperProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Connecting line */}
      <div className="absolute top-10 left-[10%] right-[10%] h-0.5 hidden md:block">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-full origin-left bg-gradient-to-r from-teal via-coral to-teal"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="text-center relative z-10"
          >
            <div className={`w-20 h-20 rounded-full text-white text-3xl font-serif flex items-center justify-center mx-auto mb-6 ring-8 ring-cream shadow-lg ${i % 2 === 0 ? 'bg-gradient-to-br from-teal to-teal-dark shadow-teal/30' : 'bg-gradient-to-br from-coral to-amber shadow-coral/30'}`}>
              {step.number}
            </div>
            <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
