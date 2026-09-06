import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Layers3, Menu, Moon, Orbit, Smartphone, Sparkles, Sun, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const destinations = [
  { number: '01', title: 'Digital Products', description: 'Apps and platforms built around people, workflows and everyday problems.', icon: Smartphone, accent: 'cyan', href: '#products' },
  { number: '02', title: 'Digital Solutions', description: 'Websites, business systems and connected experiences made to move work forward.', icon: Code2, accent: 'blue', href: '#solutions' },
  { number: '03', title: 'AI & Technology', description: 'Intelligent interfaces, automation and emerging technology turned into useful tools.', icon: BrainCircuit, accent: 'violet', href: '#technology' },
  { number: '04', title: 'Interactive Lab', description: 'Games, experiments and digital experiences where we test what technology can become.', icon: Orbit, accent: 'orange', href: '#lab' },
];

const featured = [
  { title: 'University Notes', type: 'DIGITAL PRODUCT', description: 'A learning ecosystem for university students, combining study resources, community and AI.', meta: 'LIVE · WEB + ANDROID', href: 'https://webuni.clastarhub.com', accent: 'cyan', visual: 'education' },
  { title: 'SAVI', type: 'PRODUCT · IN DEVELOPMENT', description: 'A student-focused digital platform built around tasks, rewards, validation and trusted workflows.', meta: 'IN DEVELOPMENT · WEB + MOBILE', href: '#contact', accent: 'violet', visual: 'finance' },
  { title: 'KAYMEX', type: 'DIGITAL SOLUTION', description: 'A corporate web experience designed to present a serious industrial brand with clarity.', meta: 'SELECTED WORK · WEB', href: '#solutions', accent: 'blue', visual: 'business' },
  { title: 'IQ Booster', type: 'INTERACTIVE LAB', description: 'An interactive game experiment turning learning into a fast, playful digital experience.', meta: 'COMPLETE · GAME', href: '#lab', accent: 'orange', visual: 'game' },
];

const solutionItems = ['Business websites', 'Web applications', 'Dashboards & portals', 'Custom digital systems'];
const techItems = ['AI assistants', 'Document intelligence', 'Automation', 'Cloud-connected workflows'];
const labItems = ['IQ Booster', 'Stack Hop', 'Hoop Shot', 'FanSport Race'];
const stats = [['13+', 'products & builds'], ['4', 'technology disciplines'], ['1', 'connected ecosystem']];

export default function ClastarHomeV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 0.4], [0, 220]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const smoothOrbY = useSpring(orbY, { stiffness: 70, damping: 18 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${Math.round((event.clientX / window.innerWidth) * 100)}%`);
      document.documentElement.style.setProperty('--pointer-y', `${Math.round((event.clientY / window.innerHeight) * 100)}%`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [theme]);

  const go = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="clastar-v2">
      <header className="v2-nav">
        <a className="v2-brand" href="#home" aria-label="ClastarHub home">
          <span className="brand-mark">C</span><span>CLASTAR<span>HUB</span></span>
        </a>
        <nav className="v2-nav-links" aria-label="Primary navigation">
          <button onClick={() => go('#what-we-do')}>What we do</button>
          <button onClick={() => go('#featured')}>Work</button>
          <button onClick={() => go('#company')}>Company</button>
          <button onClick={() => go('#contact')}>Contact</button>
        </nav>
        <div className="v2-nav-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <button className="nav-cta" onClick={() => go('#contact')}>Start a conversation <ArrowUpRight size={16} /></button>
        </div>
      </header>

      {menuOpen && <div className="v2-mobile-menu">{['#what-we-do', '#featured', '#solutions', '#technology', '#lab', '#company', '#investment', '#contact'].map(item => <button key={item} onClick={() => go(item)}>{item.slice(1).replaceAll('-', ' ')}</button>)}</div>}

      <main>
        <section id="home" className="v2-hero">
          <div className="v2-hero-grid" /><div className="v2-hero-glow v2-glow-a" /><div className="v2-hero-glow v2-glow-b" />
          <motion.div className="v2-orbit" style={{ y: smoothOrbY, rotate: orbRotate }} aria-hidden="true">
            <div className="orbit-core"><Sparkles size={24} /></div><div className="orbit-line orbit-line-1" /><div className="orbit-line orbit-line-2" /><div className="orbit-line orbit-line-3" />
          </motion.div>
          <div className="v2-container v2-hero-inner">
            <motion.div className="v2-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}><span className="eyebrow-dot" /> CLASTARHUB · TECHNOLOGY COMPANY</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>We turn bold ideas<br /><em>into useful technology.</em></motion.h1>
            <motion.p className="v2-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>ClastarHub builds digital products, business systems, AI experiences and new ventures for the real world.</motion.p>
            <motion.div className="v2-hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .26 }}><button className="v2-primary" onClick={() => go('#what-we-do')}>Explore what we build <ArrowRight size={18} /></button><button className="v2-secondary" onClick={() => go('#featured')}>See selected work <ArrowUpRight size={18} /></button></motion.div>
            <div className="v2-stat-row">{stats.map(([value, label]) => <div key={label} className="v2-stat"><strong>{value}</strong><span>{label}</span></div>)}</div>
          </div>
        </section>

        <section id="what-we-do" className="v2-section v2-destinations"><div className="v2-container">
          <div className="v2-section-intro"><div><span className="v2-kicker">01 / WHAT WE DO</span><h2>Four ways into<br /><span>ClastarHub.</span></h2></div><p>Explore the parts of the ecosystem that matter to you. Each destination leads to deeper work instead of putting everything on the homepage.</p></div>
          <div className="v2-destination-grid">{destinations.map((item, i) => { const Icon = item.icon; return <motion.button key={item.title} className={`v2-destination-card accent-${item.accent}`} onClick={() => go(item.href)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .06 }}><span className="card-number">{item.number}</span><div className="card-icon"><Icon size={22} /></div><div className="card-copy"><h3>{item.title}</h3><p>{item.description}</p></div><span className="card-link">Explore <ArrowUpRight size={16} /></span></motion.button>})}</div>
        </div></section>

        <section id="featured" className="v2-section v2-featured"><div className="v2-container">
          <div className="v2-section-intro compact"><div><span className="v2-kicker">02 / SELECTED WORK</span><h2>A few things<br /><span>we've built.</span></h2></div><button className="v2-inline-link" onClick={() => go('#solutions')}>Explore the ecosystem <ArrowRight size={16} /></button></div>
          <div className="v2-featured-grid">{featured.map((item, i) => <motion.a key={item.title} className={`v2-project-card project-${item.accent}`} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .06 }}><div className={`project-visual visual-${item.visual}`}><div className="visual-window"><div className="visual-top"><i /><i /><i /></div><div className="visual-content"><div className="visual-pill" /><div className="visual-bars"><b /><b /><b /><b /></div><div className="visual-panel" /></div></div></div><div className="project-body"><span className="project-type">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p><div className="project-footer"><span>{item.meta}</span><ArrowUpRight size={17} /></div></div></motion.a>)}</div>
        </div></section>

        <section id="solutions" className="v2-section v2-split-section"><div className="v2-container"><div className="v2-split-card"><div className="v2-split-copy"><span className="v2-kicker">03 / DIGITAL SOLUTIONS</span><h2>Software that fits<br /><span>the real world.</span></h2><p>From first idea to a working system, we build web experiences and business technology around the way people actually work.</p><button className="v2-secondary dark" onClick={() => go('#contact')}>Discuss a solution <ArrowRight size={18} /></button></div><div className="v2-list-panel">{solutionItems.map((item, i) => <div key={item} className="v2-list-row"><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={16} /></div>)}</div></div></div></section>

        <section id="technology" className="v2-section v2-tech-section"><div className="v2-container"><div className="v2-section-intro compact"><div><span className="v2-kicker">04 / AI & TECHNOLOGY</span><h2>We use technology<br /><span>with a reason.</span></h2></div><p>AI is a capability inside the ecosystem, not a decoration. We apply it where it makes products smarter, faster or easier to use.</p></div><div className="v2-tech-grid">{techItems.map((item, i) => <div key={item} className="v2-tech-chip"><span>0{i + 1}</span><strong>{item}</strong><Zap size={15} /></div>)}</div></div></section>

        <section id="lab" className="v2-section v2-lab-section"><div className="v2-container"><div className="v2-lab-head"><div><span className="v2-kicker">05 / INTERACTIVE LAB</span><h2>We also build<br /><span>to experiment.</span></h2></div><p>Games and interactive prototypes give us a place to explore interaction, performance and playful technology.</p></div><div className="v2-lab-grid">{labItems.map((item, i) => <div key={item} className="v2-lab-card"><div className="lab-index">0{i + 1}</div><div className="lab-orb"><Layers3 size={21} /></div><div><span>INTERACTIVE</span><h3>{item}</h3></div><b>COMPLETE</b></div>)}</div></div></section>

        <section id="investment" className="v2-section v2-investment"><div className="v2-container"><div className="v2-investment-card"><div><span className="v2-kicker">06 / CLASTAR INVESTMENT</span><h2>Technology creates opportunity.<br /><span>So should we.</span></h2><p>Clastar Investment is the financial initiative within the ecosystem, exploring simple digital loan experiences for university students.</p></div><button className="v2-primary" onClick={() => go('#contact')}>Learn more <ArrowRight size={18} /></button></div></div></section>

        <section id="company" className="v2-section v2-company"><div className="v2-container"><div className="v2-company-grid"><div><span className="v2-kicker">07 / THE COMPANY</span><h2>Not just a collection<br /><span>of projects.</span></h2></div><div><p>ClastarHub is an ecosystem for products, solutions, experiments and ventures. Some ideas become software. Some become businesses. Some become lessons that shape what we build next.</p><p className="muted">We build. We experiment. We solve. We grow.</p></div></div></div></section>

        <section id="contact" className="v2-section v2-contact"><div className="v2-container"><div className="v2-contact-card"><div><span className="v2-kicker">08 / CONTACT</span><h2>Have something<br /><span>worth building?</span></h2><p>Bring us the idea, the problem or the opportunity. We'll start from there.</p></div><a className="v2-primary" href="mailto:hello@clastarhub.com">Start a conversation <ArrowUpRight size={18} /></a></div></div></section>
      </main>

      <footer className="v2-footer"><div className="v2-container v2-footer-inner"><a href="#home" className="v2-footer-brand">CLASTAR<span>HUB</span></a><span>Digital products · solutions · AI · interactive technology</span><span>© 2026 ClastarHub</span></div></footer>
    </div>
  );
}
