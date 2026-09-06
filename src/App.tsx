import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Bot, Cloud, Code2, Cpu, Globe2, Layers3, Menu, Smartphone, Sparkles, X, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import CompanyPortfolio from './components/CompanyPortfolio';
import GlassmorphicCard from './components/GlassmorphicCard';

const products = [
  { name: 'University Notes', category: 'EdTech · AI', status: 'LIVE', platform: 'Web · Android', tech: 'React · Firebase · AI', description: 'A digital learning ecosystem for university students, combining study materials, past papers, community features and Six AI.', href: 'https://webuni.clastarhub.com', accent: 'amber', features: ['Study materials', 'Past papers', 'Six AI assistant', 'Student community'] },
  { name: 'SAVI', category: 'Student Finance · Productivity', status: 'IN DEVELOPMENT', platform: 'Web · Mobile', tech: 'Next.js · React · Firebase', description: 'A global digital rewards platform designed around tasks, validation, withdrawals and trusted user workflows.', href: 'https://savi.clastarhub.com', accent: 'orange', features: ['Tasks and offers', 'Validation', 'Rewards', 'Withdrawal workflow'] },
  { name: 'Uni Connect', category: 'Marketplace · Mobile', status: 'IN DEVELOPMENT', platform: 'Mobile', tech: 'Flutter · Firebase', description: 'A campus marketplace connecting students with products, vendors and useful services in one digital ecosystem.', href: '#portfolio', accent: 'amber', features: ['Campus marketplace', 'Vendor tools', 'Product discovery', 'Services'] },
  { name: 'UniPlanner', category: 'Productivity · Mobile', status: 'ACTIVE', platform: 'Mobile', tech: 'Flutter · Firebase', description: 'A focused student organizer for planning, time management and keeping academic life under control.', href: '#portfolio', accent: 'orange', features: ['Planning', 'Time management', 'Academic organization', 'Reminders'] },
  { name: 'Clastar Microfinance', category: 'FinTech', status: 'IN DEVELOPMENT', platform: 'Digital platform', tech: 'Web · Cloud · Data', description: 'Digital financial services built around accessible, practical products for the communities Clastar serves.', href: '#portfolio', accent: 'amber', features: ['Digital finance', 'Customer workflows', 'Financial tools', 'Scalable infrastructure'] },
];

const games = [['IQ Booster', 'Educational game'], ['Stack Hop', 'Casual game'], ['Hoop Shot', 'Sports game'], ['FanSport Race', 'Sports / racing game']];
const work = [['Achim Tech', 'Technology website'], ['Mayra Tour', 'Travel website'], ['Red Apple Tech', 'Technology website'], ['KAM Limited', 'Business website'], ['KAYMEX', 'Corporate website'], ['KAYA Homes', 'Real estate website'], ['Furniture Center', 'Commerce website'], ['Flower Printer', 'Business website'], ['Mr Furniture', 'Business website']];
const capabilities: Array<[LucideIcon, string, string]> = [
  [Bot, 'AI & Intelligent Systems', 'AI assistants, automation, agents and intelligent product experiences.'],
  [Code2, 'Web Platforms', 'High-performance websites and scalable digital products built for real users.'],
  [Smartphone, 'Mobile Applications', 'Android-first products and mobile experiences designed for everyday use.'],
  [Cloud, 'Cloud & Infrastructure', 'Reliable cloud-backed systems, deployment pipelines and connected services.'],
  [Layers3, 'Digital Products', 'From product strategy to polished interfaces, we turn ideas into usable systems.'],
  [Zap, 'Automation', 'Systems that remove repetitive work and connect people, data and tools.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);
  const { scrollYProgress } = useScroll();
  const objectY = useTransform(scrollYProgress, [0, 0.35], [0, 260]);
  const objectRotate = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const objectScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.68]);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return (
    <div className="clastar-site">
      <CustomCursor /><ScrollProgress /><Navbar />
      <div className="mobile-nav-trigger"><button onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button></div>
      {menuOpen && <div className="mobile-menu">{[['Products','products'],['Portfolio','portfolio'],['Insights','insights'],['Work','work'],['Technology','technology'],['Company','company'],['Contact','contact']].map(([label,id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>}

      <main>
        <section id="home" className="hero-section">
          <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" /><div className="hero-grid" />
          <motion.div className="hero-orb" style={{ y: objectY, rotate: objectRotate, scale: objectScale }}><div className="orb-core" /><div className="orb-ring orb-ring-a" /><div className="orb-ring orb-ring-b" /><div className="orb-ring orb-ring-c" /></motion.div>
          <div className="container hero-content">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="eyebrow"><span /> CLASTAR HUB · TECHNOLOGY COMPANY</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .1 }}>Building technology<br /><em>for what comes next.</em></motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .3 }}>We build digital products, intelligent systems and connected experiences that make ambitious ideas useful in the real world.</motion.p>
            <div className="hero-actions"><button className="primary-cta" onClick={() => go('portfolio')}>Explore our products <ArrowUpRight size={18} /></button><button className="text-cta" onClick={() => go('contact')}>Start a project <span>↗</span></button></div>
            <div className="hero-meta"><span>AI</span><span>WEB</span><span>MOBILE</span><span>CLOUD</span><span>AUTOMATION</span></div>
          </div><div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="statement-section"><div className="container"><GlassmorphicCard className="p-8 sm:p-12"><div className="statement"><div><p className="section-kicker">01 / WHAT WE BUILD</p><h2>Technology should feel <span>effortless.</span></h2></div><p className="statement-copy">Clastar Hub brings product thinking, engineering and emerging technology together to create digital systems people can actually use.</p></div></GlassmorphicCard></div></section>

        <section id="products" className="products-section section-pad"><div className="container"><div className="section-head"><div><p className="section-kicker">02 / PRODUCTS</p><h2>Our digital <span>ecosystem.</span></h2></div><p>Products built by Clastar Hub, each solving a real problem with technology.</p></div><div className="product-list">{products.map((product, i) => <motion.button type="button" onClick={() => setSelectedProduct(product)} key={product.name} className="product-row" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .06 }}><span className="product-number">0{i + 1}</span><div className="product-info"><div className="product-topline"><span>{product.category}</span><b>{product.status}</b></div><h3>{product.name}</h3><p>{product.description}</p><small>{product.platform} · {product.tech}</small></div><div className={`product-orb ${product.accent}`}><Sparkles size={24} /></div><ArrowUpRight className="product-arrow" /></motion.button>)}</div></div></section>

        <CompanyPortfolio />

        <section id="interactive" className="games-section section-pad"><div className="container"><div className="section-head"><div><p className="section-kicker">10 / INTERACTIVE</p><h2>Interactive <span>experiences.</span></h2></div><p>Games and experiments are presented alongside the company products they belong to.</p></div><div className="game-strip">{games.map(([name, type], i) => <GlassmorphicCard key={name} className="game-card" hover><span>0{i + 1}</span><div><small>{type}</small><h3>{name}</h3></div><span className="complete">COMPLETE</span></GlassmorphicCard>)}</div></div></section>

        <section id="work" className="work-section section-pad"><div className="container"><div className="section-head"><div><p className="section-kicker">11 / SELECTED WORK</p><h2>Built for <span>business.</span></h2></div><p>Web experiences and digital systems created for companies and organizations.</p></div><div className="work-grid">{work.map(([name, type], i) => <GlassmorphicCard key={name} className="work-card" hover><div className="work-visual"><div className="work-window"><div className="window-bar"><i/><i/><i/></div><div className="window-lines"><b/><b/><b/></div><div className="window-block"/></div></div><div className="work-label"><div><span>{type}</span><h3>{name}</h3></div><ArrowUpRight size={19}/></div></GlassmorphicCard>)}</div></div></section>

        <section id="technology" className="technology-section section-pad"><div className="container"><div className="section-head"><div><p className="section-kicker">12 / TECHNOLOGY</p><h2>The stack is a <span>means.</span></h2></div><p>We choose technology around the problem — not the other way around.</p></div><div className="capability-grid">{capabilities.map(([Icon, title, text]) => <GlassmorphicCard key={title} className="capability" hover><Icon size={25}/><h3>{title}</h3><p>{text}</p></GlassmorphicCard>)}</div><div className="tech-line"><Globe2 size={18}/> React · TypeScript · Flutter · Firebase · Cloud · AI · Automation</div></div></section>

        <section id="company" className="company-section section-pad"><div className="container"><GlassmorphicCard className="p-8 sm:p-12"><div className="company-layout"><div><p className="section-kicker">13 / COMPANY</p><h2>One hub.<br/><span>Many possibilities.</span></h2></div><div className="company-copy"><p>Clastar Hub is a technology company building products and digital infrastructure across education, finance, productivity, marketplaces, business websites and interactive experiences.</p><p>Every project in the portfolio is treated as part of the company ecosystem, with its own product story, visual evidence and end-product path.</p><div className="company-mark"><Cpu size={22}/> CLASTAR HUB</div></div></div></GlassmorphicCard></div></section>

        <section id="contact" className="contact-section"><div className="contact-glow"/><div className="container contact-inner"><GlassmorphicCard className="p-9 sm:p-14"><p className="section-kicker">14 / CONTACT</p><h2>Let’s build<br/><span>what’s next.</span></h2><p>Have an idea, a product or a problem worth solving? Let’s talk.</p><a href="mailto:hello@clastarhub.com" className="primary-cta">Start a conversation <ArrowUpRight size={18}/></a></GlassmorphicCard></div></section>
      </main>
      <footer><div className="container footer-inner"><strong>CLASTAR<span>HUB</span></strong><span>Technology · Products · Possibility</span><span>© 2026 Clastar Hub</span></div></footer>

      <AnimatePresence>{selectedProduct && <motion.div className="project-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProduct(null)}><motion.div className="project-modal" initial={{ y: 40, opacity: 0, scale: .97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: .98 }} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close project details"><X/></button><div className={`modal-orb ${selectedProduct.accent}`}><Sparkles size={34}/></div><p className="section-kicker">PRODUCT · {selectedProduct.status}</p><h2>{selectedProduct.name}</h2><p className="modal-description">{selectedProduct.description}</p><div className="modal-meta"><div><small>PLATFORM</small><strong>{selectedProduct.platform}</strong></div><div><small>TECHNOLOGY</small><strong>{selectedProduct.tech}</strong></div></div><div className="modal-features"><h3>Capabilities</h3><div>{selectedProduct.features.map(feature => <span key={feature}>✓ {feature}</span>)}</div></div>{selectedProduct.href.startsWith('http') ? <a className="primary-cta" href={selectedProduct.href} target="_blank" rel="noreferrer">Visit live product <ArrowUpRight size={18}/></a> : <button className="primary-cta" onClick={() => {setSelectedProduct(null);go('portfolio')}}>Explore product portfolio <ArrowUpRight size={18}/></button>}</motion.div></motion.div>}</AnimatePresence>
    </div>
  );
}

export default App;
