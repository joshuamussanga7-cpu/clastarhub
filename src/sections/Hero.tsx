import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap, Layout } from 'lucide-react';
import Counter from '../components/Counter';
import MagneticButton from '../components/MagneticButton';

const Hero = () => {
  const stats = [
    { label: 'Products', value: 5, suffix: '+', icon: <Layout className="text-accent-blue" size={20} /> },
    { label: 'Cloud Powered', value: 100, suffix: '%', icon: <Globe className="text-accent-cyan" size={20} /> },
    { label: 'Availability', value: 24, suffix: '/7', icon: <Shield className="text-accent-green" size={20} /> },
    { label: 'Ecosystem Users', value: 50000, suffix: '+', icon: <Zap className="text-yellow-400" size={20} /> },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 3D Animated Grid */}
        <div className="absolute inset-0 bg-grid-3d opacity-20" />

        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/[0.03] rounded-full blur-[150px] animate-pulse-slow" />

        {/* Floating Geometric Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[15%] text-accent-blue/10"
        >
          <Zap size={120} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[10%] text-accent-cyan/10"
        >
          <Globe size={100} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.4
            }}
          >
            <div className="flex justify-center mb-8">
              <span className="px-4 py-1.5 text-sm font-semibold tracking-wider text-accent-blue uppercase bg-accent-blue/10 rounded-full border border-accent-blue/20 animate-pulse-glow flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-blue rounded-full animate-ping" />
                The Next Generation Digital Ecosystem
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
              Building the <span className="text-gradient">Future</span> <br />
              <span className="relative inline-block">
                Through Innovation
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent-blue/20 -z-10 rounded-full"
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Based in <span className="text-white font-semibold">Dodoma</span>, Clastar Investment Hub powers the future through
              <span className="text-white font-semibold"> Clastar Technologies</span> for digital excellence and
              <span className="text-white font-semibold"> Clastar Microfinance</span> for accessible university student loans.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 group text-lg"
                >
                  Explore Ecosystem
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </motion.button>
              </MagneticButton>
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg"
                >
                  Contact Us
                </motion.button>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="glass-card p-6 flex flex-col items-center justify-center group"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
                <div className="mb-3 p-3 bg-white/5 rounded-xl group-hover:rotate-12 group-hover:bg-accent-blue/10 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-white mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-accent-blue transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-colors cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Explore More</span>
            <div className="mouse-scroll">
              <div className="wheel" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
