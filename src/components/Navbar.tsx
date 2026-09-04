import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const links = [
    ['Products', 'products'],
    ['Work', 'work'],
    ['Technology', 'technology'],
    ['Company', 'company'],
  ];

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="glass-nav">
      <div className="nav-inner">
        <motion.button className="brand" whileHover={{ scale: 1.03 }} onClick={() => scrollTo('home')}>
          <span className="brand-symbol">C</span><span>CLASTAR<span className="brand-accent">HUB</span></span>
        </motion.button>
        <div className="nav-links">
          {links.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
        </div>
        <button className="nav-contact" onClick={() => scrollTo('contact')}>Let’s talk <ArrowUpRight size={15} /></button>
      </div>
    </nav>
  );
};

export default Navbar;
