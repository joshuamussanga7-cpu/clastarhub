import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    title: 'The Foundation',
    description: 'Clastar Hub was founded with a vision to bridge the gap in digital education and accessibility in Africa.',
  },
  {
    year: '2023',
    title: 'First Products Launch',
    description: 'Launch of University Notes and Uni Connect, establishing our presence in EdTech and E-commerce.',
  },
  {
    year: '2024',
    title: 'Ecosystem Expansion',
    description: 'Introduction of Savi and Clastar Technologies, expanding into FinTech and enterprise software solutions.',
  },
  {
    year: '2025',
    title: 'Financial Services',
    description: 'Obtained licenses for Clastar Microfinance, bringing accessible credit and financial inclusion to thousands.',
  },
  {
    year: '2026',
    title: 'Future Innovation',
    description: 'Scaling our ecosystem globally and integrating advanced AI to further empower our growing user base.',
  },
];

const Timeline = () => {
  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-primary-lighter/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-semibold tracking-wider uppercase mb-4"
          >
            Our Journey
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Growth & Milestones</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-green opacity-20 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Desktop spacing */}
                <div className="hidden md:block w-5/12" />

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 hidden md:block" />

                {/* Content */}
                <div className="w-full md:w-5/12 glass-card p-8 hover:border-accent-blue/30 transition-all duration-300">
                  <span className="text-accent-blue font-bold text-xl mb-2 block">{item.year}</span>
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
