import { motion } from 'framer-motion';
import {
  Smartphone, Globe, Code, Palette,
  Landmark, GraduationCap, Wallet, ShieldCheck,
  ArrowRight
} from 'lucide-react';

const technologyServices = [
  {
    title: 'Mobile App Development',
    description: 'Developing high-performance, native and cross-platform mobile applications for Android and iOS.',
    icon: <Smartphone className="text-accent-blue" />,
  },
  {
    title: 'Website Creation',
    description: 'Crafting responsive, secure, and scalable websites using modern technologies like React and Next.js.',
    icon: <Globe className="text-accent-cyan" />,
  },
  {
    title: 'Software Engineering',
    description: 'Providing robust enterprise-grade software solutions tailored to solve complex business challenges.',
    icon: <Code className="text-accent-green" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually stunning user interfaces that prioritize user experience.',
    icon: <Palette className="text-purple-500" />,
  }
];

const microfinanceServices = [
  {
    title: 'Student Tuition Loans',
    description: 'Providing simple interest loans specifically designed to help university students cover their tuition fees.',
    icon: <GraduationCap className="text-accent-green" />,
  },
  {
    title: 'Simple Interest Credit',
    description: 'Transparent and affordable financial support with no hidden charges for the academic community.',
    icon: <Landmark className="text-accent-blue" />,
  },
  {
    title: 'Digital Onboarding',
    description: 'A fast and secure digital application process, allowing students to apply for funds from anywhere.',
    icon: <Wallet className="text-accent-cyan" />,
  },
  {
    title: 'Financial Inclusion',
    description: 'Ensuring that financial constraints do not hinder the educational journey of students in Tanzania.',
    icon: <ShieldCheck className="text-orange-500" />,
  }
];

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone, Globe, Code, Palette,
  Landmark, GraduationCap, Wallet, ShieldCheck,
  ArrowRight, X
} from 'lucide-react';

const technologyServices = [
  {
    title: 'Mobile App Development',
    description: 'Developing high-performance, native and cross-platform mobile applications for Android and iOS using Flutter and React Native.',
    icon: <Smartphone className="text-accent-blue" />,
    details: 'Our mobile team focuses on creating seamless user experiences with high performance. We handle everything from UI design to API integration and App Store deployment.',
    color: 'accent-blue'
  },
  {
    title: 'Website Creation',
    description: 'Crafting responsive, secure, and scalable websites using modern technologies like React, Next.js, and Tailwind CSS.',
    icon: <Globe className="text-accent-cyan" />,
    details: 'We build SEO-optimized, lightning-fast websites that help businesses grow. Our stack includes React, TypeScript, and high-end animations with Framer Motion.',
    color: 'accent-cyan'
  },
  {
    title: 'Software Engineering',
    description: 'Providing robust enterprise-grade software solutions tailored to solve complex business challenges.',
    icon: <Code className="text-accent-green" />,
    details: 'From custom CRM systems to complex data processing tools, our software engineering branch builds the backend infrastructure your business needs to scale.',
    color: 'accent-green'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually stunning user interfaces that prioritize user experience and brand identity.',
    icon: <Palette className="text-purple-500" />,
    details: 'User-centric design is at the heart of what we do. We create wireframes, prototypes, and high-fidelity designs that convert visitors into customers.',
    color: 'purple-500'
  }
];

const microfinanceServices = [
  {
    title: 'Student Tuition Loans',
    description: 'Providing simple interest loans specifically designed to help university students cover their tuition fees.',
    icon: <GraduationCap className="text-accent-green" />,
    details: 'We understand the financial pressure on students. Our tuition loans offer flexible repayment schedules and the lowest interest rates in Dodoma.',
    color: 'accent-green'
  },
  {
    title: 'Simple Interest Credit',
    description: 'Transparent and affordable financial support with no hidden charges for the academic community.',
    icon: <Landmark className="text-accent-blue" />,
    details: 'Clear terms, no hidden fees. We believe in ethical lending that empowers students to focus on their studies without financial stress.',
    color: 'accent-blue'
  },
  {
    title: 'Digital Onboarding',
    description: 'A fast and secure digital application process, allowing students to apply for funds from anywhere.',
    icon: <Wallet className="text-accent-cyan" />,
    details: 'Forget long queues. Apply from your phone, upload your documents securely, and get approval within 24-48 hours.',
    color: 'accent-cyan'
  },
  {
    title: 'Financial Inclusion',
    description: 'Ensuring that financial constraints do not hinder the educational journey of students in Tanzania.',
    icon: <ShieldCheck className="text-orange-500" />,
    details: 'We are committed to making sure every Tanzanian student has the chance to graduate. Our mission is 100% academic completion.',
    color: 'orange-500'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent-blue font-bold tracking-[0.2em] uppercase mb-4 text-sm">Clastar Investment Hub</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6">Our Specialized Branches</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Empowering the future through world-class technology solutions and accessible student financial support.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Branch 1: Clastar Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-2xl flex items-center justify-center border border-accent-blue/30">
                <Code className="text-accent-blue" size={24} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">Clastar Technologies</h4>
                <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest">IT & Software Solutions</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {technologyServices.map((service, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedService(service)}
                  className="glass-card p-6 group cursor-pointer hover:border-accent-blue/30 transition-all duration-300"
                >
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-accent-blue/10 transition-colors">
                    {service.icon}
                  </div>
                  <h5 className="font-bold mb-2 group-hover:text-accent-blue transition-colors">{service.title}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-xs text-accent-blue font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    LEARN MORE <ArrowRight size={14} />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Branch 2: Clastar Microfinance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-green/20 rounded-2xl flex items-center justify-center border border-accent-green/30">
                <GraduationCap className="text-accent-green" size={24} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">Clastar Microfinance</h4>
                <p className="text-accent-green text-sm font-semibold uppercase tracking-widest">Student Financial Loans</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {microfinanceServices.map((service, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedService(service)}
                  className="glass-card p-6 group cursor-pointer hover:border-accent-green/30 transition-all duration-300"
                >
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-accent-green/10 transition-colors">
                    {service.icon}
                  </div>
                  <h5 className="font-bold mb-2 group-hover:text-accent-green transition-colors">{service.title}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-xs text-accent-green font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    LEARN MORE <ArrowRight size={14} />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green rounded-[2rem] overflow-hidden"
        >
          <div className="bg-primary rounded-[1.9rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
            <h4 className="text-3xl font-bold mb-6 relative z-10 text-white">Ready to start your journey with us?</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href="#contact" className="btn-primary group inline-flex items-center">
                Contact Technologies <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">Apply for Microfinance</a>
            </div>
          </div>
        </motion.div>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-primary/90 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg glass-card p-10 overflow-hidden border-white/20 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>

                <div className={`p-4 bg-white/5 w-fit rounded-2xl mb-8 border border-white/10`}>
                  {selectedService.icon}
                </div>

                <h4 className="text-3xl font-black text-white mb-4">{selectedService.title}</h4>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {selectedService.details}
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="btn-primary text-center py-4"
                  >
                    Get Started with this Service
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;

export default Services;
