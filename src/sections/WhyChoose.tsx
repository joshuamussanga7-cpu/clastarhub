import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, Users, Cpu, Clock } from 'lucide-react';

const advantages = [
  {
    title: 'Innovation-First',
    description: 'We leverage cutting-edge technologies like AI, Cloud Computing, and Blockchain to build future-ready solutions.',
    icon: <Cpu className="text-accent-blue" />,
  },
  {
    title: 'Bank-Grade Security',
    description: 'Our platforms are built with multi-layered security protocols to ensure the highest level of data protection and privacy.',
    icon: <Shield className="text-accent-cyan" />,
  },
  {
    title: 'Seamless Scalability',
    description: 'Designed to grow with you. Our architecture supports rapid expansion and high-traffic volume without performance loss.',
    icon: <TrendingUp className="text-accent-green" />,
  },
  {
    title: 'Enterprise Reliability',
    description: 'We guarantee 99.9% uptime across all our digital platforms, ensuring your business stays online 24/7.',
    icon: <Clock className="text-purple-500" />,
  },
  {
    title: 'User-Centric Design',
    description: 'We prioritize the end-user experience, creating intuitive interfaces that drive engagement and satisfaction.',
    icon: <Users className="text-red-400" />,
  },
  {
    title: 'Agile Execution',
    description: 'Our development process is fast and efficient, allowing us to bring innovative ideas to market ahead of the competition.',
    icon: <Zap className="text-yellow-400" />,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-semibold tracking-wider uppercase mb-4"
          >
            Why Clastar Hub
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Clastar Advantage
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Empowering the digital era with robust, secure, and innovative solutions
            tailored for growth and excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass-card border-white/5 hover:border-accent-blue/20 transition-all duration-300 group"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
