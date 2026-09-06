import { motion } from 'framer-motion';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import './navbar.css';
import { useEffect, useState } from 'react';

const links = [
  ['Products', 'products'], ['Portfolio', 'portfolio'], ['Insights', 'insights'],
  ['Work', 'work'], ['Technology', 'technology'], ['Company', 'company'],
];

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('clastar-theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('clastar-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="glass-nav">
      <div className="nav-inner">
        <motion.button className="brand" whileHover={{ scale: 1.03 }} onClick={() => scrollTo('home')}>
          <span className="brand-symbol">C</span>
          <span>CLASTAR<span className="brand-accent">HUB</span></span>
        </motion.button>
        <div className="nav-links">
          {links.map(([label, id]) => <button key={label} onClick={() => scrollTo(id)}>{label}</button>)}
        </div>
        <button className="theme-button" onClick={() => setDark(v => !v)} aria-label="Toggle theme" title="Toggle light/dark mode">
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="nav-contact" onClick={() => scrollTo('contact')}>Let’s talk <ArrowUpRight size={15} /></button>
      </div>
    </nav>
  );
}
