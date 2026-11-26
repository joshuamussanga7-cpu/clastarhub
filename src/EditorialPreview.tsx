import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Blocks, BrainCircuit, Code2, Menu, MonitorSmartphone, Sparkles, Workflow, X, Zap } from 'lucide-react'
import './editorial-preview.css'

const projects = [
  { number: '01', name: 'University Notes', type: 'EDUCATION TECHNOLOGY', status: 'COMPLETED', copy: 'A connected learning platform bringing academic resources, student community and AI-assisted study tools into one experience.', tags: ['Android', 'Web', 'AI'], href: 'https://uninotes.clastarhub.com', accent: 'blue' },
  { number: '02', name: 'SAVI', type: 'DIGITAL REWARDS PLATFORM', status: 'IN DEVELOPMENT', copy: 'A global rewards platform concept built around tasks, offers, validation and reward workflows.', tags: ['Web', 'Product systems'], href: '#contact', accent: 'orange' },
  { number: '03', name: 'UniPlanner', type: 'STUDENT PRODUCTIVITY', status: 'IN DEVELOPMENT', copy: 'A student productivity project for organizing academic schedules, tasks, exams and everyday university activities.', tags: ['Mobile', 'Planning'], href: '#contact', accent: 'violet' },
  { number: '04', name: 'IQ Booster', type: 'INTERACTIVE PRODUCT', status: 'COMPLETED', copy: 'A brain-training game project exploring thinking, memory, problem-solving and player improvement.', tags: ['Android', 'Game design'], href: 'https://github.com/joshuamussanga7-cpu/IQ-booster', accent: 'lime' },
]
const services = [
  { icon: MonitorSmartphone, title: 'Mobile applications', text: 'Android-first and cross-platform products shaped around clear user journeys.' },
  { icon: Code2, title: 'Websites & platforms', text: 'Responsive websites and web applications that make services easier to use.' },
  { icon: Workflow, title: 'Backend & systems', text: 'Connected workflows, integrations and cloud-backed product foundations.' },
  { icon: BrainCircuit, title: 'AI integration', text: 'Practical AI capabilities embedded where they make the experience more useful.' },
]
const reveal = { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0 } }

export default function EditorialPreview() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const nav = [['01', 'Products', '#products'], ['02', 'Capabilities', '#capabilities'], ['03', 'Approach', '#approach'], ['04', 'Company', '#company']]
  const closeMenu = () => setMenuOpen(false)
  return <div className="editorial-site">
    <div className="ed-grain" aria-hidden="true" />
    <header className="ed-header">
      <a className="ed-wordmark" href="#top" aria-label="ClastarHub home"><span className="ed-symbol">C<span>.</span></span><span>CLASTAR<span>HUB</span></span></a>
      <nav className="ed-desktop-nav">{nav.map(([n, label, href]) => <a key={n} href={href}><small>{n}</small>{label}</a>)}</nav>
      <a className="ed-header-cta" href="#contact">Start a project <ArrowUpRight size={15}/></a>
      <button className="ed-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    {menuOpen && <nav className="ed-mobile-nav">{nav.map(([n,label,href])=><a key={n} href={href} onClick={closeMenu}><small>{n}</small>{label}<ArrowUpRight size={17}/></a>)}<a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={17}/></a></nav>}
    <main id="top">
      <section className="ed-hero">
        <div className="ed-hero-topline"><span>INDEPENDENT DIGITAL TECHNOLOGY COMPANY</span><span>BUILDING FROM TANZANIA · WORKING EVERYWHERE</span></div>
        <div className="ed-hero-main">
          <motion.div className="ed-hero-copy" initial="hidden" animate="visible" variants={reveal} transition={{duration: reduceMotion ? 0 : .8, ease:[.22,.8,.25,1]}}>
            <div className="ed-kicker"><i/> TECHNOLOGY WITH INTENTION</div>
            <h1>Ideas deserve<br/><em>better</em> technology<span className="ed-period">.</span></h1>
            <p>We design and build digital products, intelligent systems and experiences that turn ambitious ideas into something useful.</p>
            <div className="ed-hero-actions"><a className="ed-button ed-button-dark" href="#products">Explore what we build <ArrowDown size={16}/></a><a className="ed-text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div>
          </motion.div>
          <motion.div className="ed-hero-art" initial={{opacity:0,scale:.88,rotate:5}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.1,delay:.2,ease:'easeOut'}} aria-hidden="true">
            <div className="ed-art-orbit ed-orbit-one"/><div className="ed-art-orbit ed-orbit-two"/><div className="ed-art-orbit ed-orbit-three"/>
            <div className="ed-art-cross ed-cross-one"/><div className="ed-art-cross ed-cross-two"/>
            <div className="ed-art-core"><span>C</span><small>MAKE IT<br/>MATTER</small></div>
            <div className="ed-art-tag tag-one"><Sparkles size={15}/> DIGITAL PRODUCTS</div><div className="ed-art-tag tag-two"><Zap size={15}/> INTELLIGENT SYSTEMS</div>
          </motion.div>
        </div>
        <div className="ed-hero-bottom"><span>SCROLL TO EXPLORE</span><div className="ed-scroll-line"/><span>01 / 04</span></div>
      </section>

      <section className="ed-manifesto">
        <div className="ed-section-index"><span>01</span><span>OUR POINT OF VIEW</span></div>
        <div className="ed-manifesto-content"><h2>Not technology<br/>for its own sake.<br/><em>Technology that moves things forward.</em></h2><div className="ed-manifesto-aside"><span className="ed-aside-mark">↗</span><p>ClastarHub is a technology company focused on the intersection of product thinking, thoughtful design and practical engineering.</p><a href="#approach">How we think <ArrowRight size={15}/></a></div></div>
      </section>

      <section id="products" className="ed-products ed-section">
        <div className="ed-section-head"><div><div className="ed-kicker"><i/> 02 / SELECTED PRODUCTS</div><h2>Built to be<br/><em>used.</em></h2></div><p>A growing ecosystem of digital products and experiments. Each has its own purpose, audience and journey.</p></div>
        <div className="ed-project-list">{projects.map((project,i)=><motion.a key={project.number} href={project.href} target={project.href.startsWith('http')?'_blank':undefined} rel={project.href.startsWith('http')?'noreferrer':undefined} className={'ed-project ed-'+project.accent} initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}} variants={reveal} transition={{duration:reduceMotion?0:.65,delay:i*.06}}><div className="ed-project-number">{project.number}</div><div className="ed-project-visual"><div className="ed-visual-frame"><div className="ed-visual-top"><i/><i/><i/><span>{project.type}</span></div><div className="ed-visual-content"><div className="ed-visual-brand">{project.name.split(' ')[0]}<b>.</b></div><div className="ed-visual-lines"><i/><i/><i/></div><div className="ed-visual-block"/></div></div><span className="ed-visual-orbit"/></div><div className="ed-project-info"><div className="ed-project-meta"><span>{project.type}</span><span className="ed-status">{project.status}</span></div><h3>{project.name}</h3><p>{project.copy}</p><div className="ed-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="ed-project-arrow"><ArrowUpRight size={22}/></div></motion.a>)}</div>
        <div className="ed-project-footnote"><span>MORE IN THE ECOSYSTEM</span><p>Explore the wider ClastarHub portfolio, including business websites and interactive experiments.</p><a href="#contact">Ask about our work <ArrowUpRight size={15}/></a></div>
      </section>

      <section id="capabilities" className="ed-capabilities ed-section">
        <div className="ed-section-index"><span>03</span><span>WHAT WE DO</span></div>
        <div className="ed-cap-heading"><h2>From first thought<br/>to <em>working product.</em></h2><p>We bring strategy, design and engineering together to create digital experiences that solve real problems.</p></div>
        <div className="ed-service-grid">{services.map((service,i)=>{const Icon=service.icon;return <motion.article key={service.title} className="ed-service" initial="hidden" whileInView="visible" viewport={{once:true,amount:.25}} variants={reveal} transition={{duration:reduceMotion?0:.6,delay:i*.07}}><div className="ed-service-top"><span>0{i+1}</span><Icon size={22}/></div><h3>{service.title}</h3><p>{service.text}</p><span className="ed-service-rule"/></motion.article>})}</div>
        <div className="ed-cap-bottom"><span>PRODUCT THINKING</span><b>×</b><span>DESIGN CRAFT</span><b>×</b><span>ENGINEERING</span></div>
      </section>

      <section id="approach" className="ed-approach ed-section">
        <div className="ed-section-index"><span>04</span><span>HOW WE WORK</span></div>
        <div className="ed-approach-layout"><div><h2>Make it clear.<br/>Make it useful.<br/><em>Make it last.</em></h2><p>Good technology begins with understanding the problem. We keep the process focused, collaborative and grounded in what the product needs to do.</p></div><div className="ed-steps">{[['01','Understand','Define the problem, audience and desired outcome.'],['02','Shape','Map the experience, product structure and technical direction.'],['03','Build','Design, engineer and test the working experience.'],['04','Improve','Learn from use and refine what matters.']].map(([n,t,d])=><div className="ed-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={17}/></div>)}</div></div>
      </section>

      <section id="company" className="ed-company ed-section"><div className="ed-company-stamp">CH<span>·</span>26</div><div className="ed-company-copy"><div className="ed-kicker"><i/> 05 / THE COMPANY</div><h2>Built with curiosity.<br/><em>Driven by purpose.</em></h2><p>ClastarHub brings together digital products, client solutions and technology experiments under one company identity. We build with a long view: useful work, thoughtful execution and room to evolve.</p><a href="https://portifolio.clastarhub.com/" className="ed-text-link">Meet the people behind the work <ArrowUpRight size={16}/></a></div></section>

      <section id="contact" className="ed-contact ed-section"><div className="ed-contact-top"><span>HAVE AN IDEA, A CHALLENGE OR A QUESTION?</span><span>LET'S MAKE THE NEXT THING COUNT.</span></div><h2>Let's make<br/><em>something matter.</em></h2><div className="ed-contact-bottom"><p>Tell us what you're trying to build. We'll help you think through the next step.</p><a className="ed-button ed-button-light" href="mailto:hello@clastarhub.com">Start a conversation <ArrowUpRight size={17}/></a></div><div className="ed-contact-mark" aria-hidden="true">C.</div></section>
    </main>
    <footer className="ed-footer"><a className="ed-wordmark" href="#top"><span className="ed-symbol">C<span>.</span></span><span>CLASTAR<span>HUB</span></span></a><span>WE ENJOY YOUR GROWTH.</span><span>© 2026 CLASTARHUB</span><a href="mailto:hello@clastarhub.com">HELLO@CLASTARHUB.COM <ArrowUpRight size={13}/></a></footer>
  </div>
}
