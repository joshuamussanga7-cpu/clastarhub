import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Image as ImageIcon, X } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

type Project = {
  id: string;
  title: string;
  category: 'Mobile' | 'Web' | 'Game' | 'Business';
  status: string;
  description: string;
  tech: string[];
  endProduct?: string;
  github?: string;
  screenshots?: string[];
  tags: string[];
};

const portfolioBase = 'https://raw.githubusercontent.com/joshuamussanga7-cpu/sitta-jared-portfolio/main/public/projects';
const img = (name: string) => `${portfolioBase}/${encodeURIComponent(name)}`;

const projects: Project[] = [
  {
    id: 'university-notes', title: 'University Notes', category: 'Mobile', status: 'LIVE',
    description: 'A student learning ecosystem combining academic resources, past papers, community features and Six AI.',
    tech: ['Flutter', 'Firebase', 'AI', 'Next.js'], tags: ['AI', 'EdTech', 'Student'],
    endProduct: 'https://webuni.clastarhub.com',
    screenshots: ['University Notes-1.jpg','University Notes-2.jpg','University Notes-3.jpg','University Notes-4.jpg','University Notes-5.jpg','University Notes-6.jpg','University Notes-10.jpg'],
  },
  {
    id: 'savi', title: 'SAVI', category: 'Web', status: 'IN DEVELOPMENT',
    description: 'A global digital rewards platform built around tasks, offers, validation, withdrawals and trust.',
    tech: ['Next.js', 'React', 'TypeScript', 'Firebase'], tags: ['Rewards', 'Web', 'Business'],
    endProduct: 'https://savi.clastarhub.com',
  },
  {
    id: 'uni-connect', title: 'Uni Connect', category: 'Mobile', status: 'IN DEVELOPMENT',
    description: 'A marketplace experience connecting buyers and sellers through listings, discovery and communication.',
    tech: ['Flutter', 'Firebase', 'Firestore'], tags: ['Marketplace', 'Commerce', 'Mobile'],
  },
  {
    id: 'uniplanner', title: 'UniPlanner', category: 'Mobile', status: 'ACTIVE',
    description: 'A student productivity system for schedules, exams, tasks, reminders and academic organization.',
    tech: ['Flutter', 'Firebase', 'Dart', 'Provider'], tags: ['Productivity', 'EdTech', 'Mobile'],
    screenshots: ['Screenshot_20260409_163417_uni planner.jpg','Screenshot_20260409_163426_uni planner.jpg','Screenshot_20260409_163432_uni planner.jpg','Screenshot_20260409_163447_uni planner.jpg'],
  },
  {
    id: 'loan-manager', title: 'Clastar Microfinance / Loan Manager', category: 'Mobile', status: 'PRODUCT',
    description: 'A financial-management product for organizing lending workflows, customers and loan operations.',
    tech: ['Flutter', 'Firebase', 'Dart'], tags: ['FinTech', 'Loans', 'Business'],
    screenshots: ['Screenshot_20260409_163231_Loan manager app.jpg','Screenshot_20260409_163302_Loan manager app.jpg','Screenshot_20260409_163319_Loan manager app.jpg','Screenshot_20260409_163329_Loan manager app.jpg'],
  },
  {
    id: 'iq-booster', title: 'IQ Booster', category: 'Game', status: 'COMPLETE',
    description: 'An interactive brain-training game focused on thinking, problem solving, memory and player improvement.',
    tech: ['Android', 'Game Development', 'UI/UX'], tags: ['Game', 'Education', 'Android'],
    github: 'https://github.com/joshuamussanga7-cpu/IQ-booster',
  },
  {
    id: 'hoop-shot', title: 'Hoop Shot', category: 'Game', status: 'COMPLETE',
    description: 'A basketball-themed interactive game exploring accessible mobile entertainment and gameplay.',
    tech: ['Android', 'Game Development', 'UI/UX'], tags: ['Game', 'Sports', 'Android'],
    github: 'https://github.com/joshuamussanga7-cpu/hoop-shot',
  },
  {
    id: 'stack-hop', title: 'Stack Hop', category: 'Game', status: 'COMPLETE',
    description: 'A casual game project exploring simple gameplay, interaction and iterative product development.',
    tech: ['Android', 'Game Development', 'UI/UX'], tags: ['Game', 'Casual', 'Android'],
    github: 'https://github.com/joshuamussanga7-cpu/stack-hop1',
  },
  {
    id: 'mayra-tour', title: 'MAYRA TOUR', category: 'Business', status: 'LIVE',
    description: 'A tourism-focused digital presence for presenting travel services and a professional travel brand.',
    tech: ['React', 'Web Development', 'Responsive UI'], tags: ['Travel', 'Business', 'Web'],
    endProduct: 'https://mayra-tours.vercel.app',
  },
  {
    id: 'kaymex', title: 'KAYMEX COMPANY LIMITED', category: 'Business', status: 'LIVE',
    description: 'A corporate digital presence designed around professional business identity and service presentation.',
    tech: ['React', 'Web Development', 'Responsive UI'], tags: ['Corporate', 'Business', 'Web'],
    endProduct: 'https://kaymex-company-limited.vercel.app',
  },
  {
    id: 'kaya-homes', title: 'KAYA HOMES LIMITED', category: 'Business', status: 'LIVE',
    description: 'A property-focused digital experience for presenting a real-estate and housing brand online.',
    tech: ['React', 'Web Development', 'Responsive UI'], tags: ['Real Estate', 'Business', 'Web'],
    endProduct: 'https://kaya-homes-limited.vercel.app',
  },
  {
    id: 'red-apple', title: 'Red Apple Events & Decor', category: 'Business', status: 'IN DEVELOPMENT',
    description: 'A visual business website for an events and decoration-focused brand.',
    tech: ['React', 'Web Development', 'Responsive UI'], tags: ['Events', 'Business', 'Web'],
  },
];

const blogPosts = [
  ['Building SAVI: From Product Idea to a Real Web Platform', 'SAVI', 'building-savi-web-platform'],
  ['Building University Notes with AI', 'University Notes', 'building-university-notes-with-ai'],
  ['Building Stack Hop', 'Stack Hop', 'building-stack-hop'],
  ['Designing Hoop Shot', 'Hoop Shot', 'designing-hoop-shot'],
  ['How I Built IQ Booster', 'IQ Booster', 'how-i-built-iq-booster'],
  ['From Idea to Production Web App', 'ClastarHub', 'from-idea-to-production-web-app'],
  ['Firebase for Real-World Apps', 'Technology', 'firebase-for-real-world-apps'],
  ['Flutter vs Next.js: Product Decisions', 'Technology', 'flutter-vs-nextjs-product-decisions'],
  ['How to Build a Game UI', 'Games', 'how-to-build-a-game-ui'],
  ['Optimizing Mobile Games for Low-End Devices', 'Games', 'optimizing-mobile-games-for-low-end-devices'],
  ['Responsive Web Design', 'Technology', 'responsive-web-design'],
];

export default function CompanyPortfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter]);

  return (
    <section id="portfolio" className="section-pad" style={{ borderTop: '1px solid rgba(255,255,255,.08)', background: '#070707' }}>
      <div className="container">
        <div className="section-head">
          <div><p className="section-kicker">08 / COMPANY PORTFOLIO</p><h2>Our work.<br /><span>Our products.</span></h2></div>
          <p>Every project is presented as a ClastarHub company product, with its development story, visual evidence and a direct path to the end product.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
          {['All','Mobile','Web','Game','Business'].map(item => (
            <button key={item} onClick={() => setFilter(item)} style={{ border: '1px solid rgba(255,255,255,.1)', background: filter === item ? '#f59e0b' : 'rgba(255,255,255,.035)', color: filter === item ? '#080808' : '#aaa', borderRadius: 999, padding: '9px 15px', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}>{item}</button>
          ))}
        </div>

        <div className="work-grid">
          {filtered.map((project, index) => (
            <motion.button key={project.id} type="button" onClick={() => setSelected(project)} whileHover={{ y: -6 }} className="work-card" style={{ textAlign: 'left', cursor: 'pointer' }}>
              <div className="work-visual" style={{ aspectRatio: '16/11', padding: project.screenshots?.length ? 0 : '13%' }}>
                {project.screenshots?.[0] ? <img src={img(project.screenshots[0])} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /> : <div className="work-window"><div className="window-bar"><i/><i/><i/></div><div className="window-lines"><b/><b/><b/></div><div className="window-block"/></div>}
              </div>
              <div className="work-label"><div><span>{project.category} · {project.status}</span><h3>{project.title}</h3></div><ArrowUpRight size={19}/></div>
            </motion.button>
          ))}
        </div>

        <div style={{ marginTop: 120 }}>
          <div className="section-head" style={{ marginBottom: 45 }}><div><p className="section-kicker">09 / INSIGHTS</p><h2>Build logs.<br /><span>Ideas & lessons.</span></h2></div><p>The portfolio's engineering stories now become ClastarHub company knowledge, connected back to the products they describe.</p></div>
          <div className="capability-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {blogPosts.map(([title, related], index) => (
              <a key={title} href={`https://github.com/joshuamussanga7-cpu/sitta-jared-portfolio/blob/main/content/blog/${blogPosts[index][2]}.md`} target="_blank" rel="noreferrer" className="capability" style={{ minHeight: 180, textDecoration: 'none' }}>
                <ImageIcon size={22}/><small style={{ color: '#777', display: 'block', marginBottom: 12 }}>CLASTARHUB · {related}</small><h3>{title}</h3><p>Company engineering insight connected to the related product.</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,.82)', backdropFilter: 'blur(18px)', overflowY: 'auto', padding: 20 }}>
          <motion.div initial={{ opacity: 0, y: 35, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} onClick={e => e.stopPropagation()} style={{ maxWidth: 1050, margin: '5vh auto', background: '#0b0b0b', border: '1px solid rgba(255,255,255,.1)', borderRadius: 28, padding: 28, position: 'relative' }}>
            <button onClick={() => setSelected(null)} aria-label="Close" style={{ position: 'absolute', right: 20, top: 20, border: 0, background: 'rgba(255,255,255,.06)', color: '#fff', borderRadius: 999, width: 42, height: 42, cursor: 'pointer' }}><X size={20}/></button>
            <p className="section-kicker">CLASTARHUB · {selected.category} · {selected.status}</p>
            <h2 style={{ fontSize: 'clamp(42px,7vw,80px)', maxWidth: 800 }}>{selected.title}</h2>
            <p style={{ color: '#999', lineHeight: 1.8, maxWidth: 750, fontSize: 16, margin: '25px 0' }}>{selected.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 25 }}>{selected.tags.map(t => <span key={t} style={{ border: '1px solid rgba(255,255,255,.1)', padding: '7px 10px', borderRadius: 999, fontSize: 10, color: '#aaa' }}>{t}</span>)}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>{selected.tech.map(t => <span key={t} style={{ background: 'rgba(245,158,11,.08)', color: '#f59e0b', padding: '8px 11px', borderRadius: 9, fontSize: 11, fontWeight: 800 }}>{t}</span>)}</div>
            {selected.screenshots?.length ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, margin: '25px 0 30px' }}>{selected.screenshots.map(s => <img key={s} src={img(s)} alt={`${selected.title} screenshot`} style={{ width: '100%', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)' }} loading="lazy" />)}</div> : null}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {selected.endProduct && <a className="primary-cta" href={selected.endProduct} target="_blank" rel="noreferrer">Open end product <ExternalLink size={17}/></a>}
              {selected.github && <a className="primary-cta" style={{ background: '#fff' }} href={selected.github} target="_blank" rel="noreferrer">View source <Github size={17}/></a>}
              {!selected.endProduct && !selected.github && <button className="primary-cta" onClick={() => setSelected(null)}>Product details recorded · launch link pending <ArrowUpRight size={17}/></button>}
            </div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
