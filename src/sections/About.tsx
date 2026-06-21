import { motion } from 'framer-motion';
import { Target, Shield, Rocket, Code, Landmark } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create groundbreaking solutions that solve real-world problems.',
      icon: <Rocket className="text-accent-blue" />,
    },
    {
      title: 'Excellence',
      description: 'Commitment to the highest standards of quality and performance in everything we build.',
      icon: <Target className="text-accent-cyan" />,
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency, ethical practices, and reliable technology.',
      icon: <Shield className="text-accent-green" />,
    },
    {
      title: 'Growth',
      description: 'Dedicated to empowering students and partners to achieve their full potential.',
      icon: <Rocket className="text-purple-500" />,
    },
    {
      title: 'Security',
      description: 'Prioritizing data protection and system reliability in our enterprise-grade solutions.',
      icon: <Shield className="text-red-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent-blue font-semibold tracking-wider uppercase mb-4 text-sm">Our Strategic Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Clastar Investment Hub
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Based in <strong>Dodoma, Tanzania</strong>, Clastar Investment Hub is a multi-faceted organization dedicated to
              digital innovation and financial empowerment. We operate through two specialized branches
              designed to meet the unique needs of our community.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 glass-card border-accent-blue/20 bg-accent-blue/5">
                <div className="mt-1 p-3 bg-accent-blue/10 rounded-xl">
                  <Code className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Clastar Technologies</h4>
                  <p className="text-slate-400 text-sm">
                    Our specialized digital arm focused on mobile app development, website creation,
                    and enterprise software solutions for businesses and startups.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 glass-card border-accent-green/20 bg-accent-green/5">
                <div className="mt-1 p-3 bg-accent-green/10 rounded-xl">
                  <Landmark className="text-accent-green" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Clastar Microfinance</h4>
                  <p className="text-slate-400 text-sm">
                    Dedicated to supporting university students by providing accessible simple interest
                    loans for tuition and academic development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className={`p-8 glass-card group relative overflow-hidden ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-accent-blue/20 group-hover:rotate-12 transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
