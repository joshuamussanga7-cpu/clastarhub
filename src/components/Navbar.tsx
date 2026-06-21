import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Smart Section Tracking
      const sections = ['home', 'about', 'products', 'services', 'ecosystem', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center shadow-lg shadow-accent-blue/20 animate-pulse-glow">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            CLASTAR <span className="text-accent-blue">INVESTMENT HUB</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative ${
                activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button
            className="text-slate-400 hover:text-white transition-colors p-2"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <Search size={20} />
          </button>
          <div className="h-6 w-px bg-white/10" />
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary flex items-center gap-2 text-sm px-6 py-2.5"
          >
            Get Started <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="text-slate-400 p-2"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-semibold py-2 transition-colors ${
                    activeSection === link.id ? 'text-accent-blue' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-6 mt-2 border-t border-white/10">
                <button className="btn-primary w-full py-4 text-lg">Get Started</button>
                <button className="btn-secondary w-full py-4 text-lg">Client Login</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
