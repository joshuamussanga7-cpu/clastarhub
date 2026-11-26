import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, MessageCircle, Sparkles, X } from 'lucide-react'

const guideTopics = [
  { id: 'company', title: 'What is ClastarHub?', answer: 'ClastarHub is a digital technology company creating software products and delivering practical digital solutions across mobile, web, connected systems and AI-enabled experiences.' },
  { id: 'mobile', title: 'Can you build a mobile app?', answer: 'Yes. Mobile app development is one of our listed capabilities, including Flutter and Dart applications, Firebase-powered features, testing and release support.' },
  { id: 'web', title: 'Can you build a website?', answer: 'Yes. ClastarHub works on responsive websites and web applications, including React and Next.js experiences, landing pages and company websites.' },
  { id: 'ai', title: 'Do you work with AI?', answer: 'AI integration is a listed service. Examples in the project catalogue include AI-assisted study workflows in University Notes. We discuss each use case before recommending an approach.' },
  { id: 'projects', title: 'Where can I see your work?', answer: 'Explore the Products and Our Work pages to see project descriptions, technologies and recorded development statuses. Each project page links to its public destination when one is available.' },
]
export function ScrollExperience() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const main = document.querySelector('.site-main')
    if (main) main.classList.add('page-enter')
    if (reduce) return
    const targets = document.querySelectorAll('.site-main .section, .site-main .statement-band, .site-main .technology-band, .site-main .insights-strip, .site-main .final-cta, .site-main .project-card, .site-main .service-card, .site-main .capability-card, .site-main .insight-card, .site-main .work-row')
    targets.forEach((el) => el.classList.add('reveal-ready'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  return <div className="reading-progress" aria-hidden="true"><span style={{ width: progress + '%' }} /></div>
}
export function ClastarGuide() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const answer = useMemo(() => guideTopics.find((topic) => topic.id === selected), [selected])
  return <div className="clastar-guide">
    {open && <section className="guide-panel" aria-label="ClastarHub visitor guide">
      <header><span className="guide-mark"><Sparkles size={17}/></span><div><b>Clastar Guide</b><small>Quick help about ClastarHub</small></div><button onClick={() => { setOpen(false); setSelected(null) }} aria-label="Close guide"><X size={18}/></button></header>
      <div className="guide-body">
        {answer ? <><button className="guide-back" onClick={() => setSelected(null)}><ChevronLeft size={14}/> All questions</button><h3>{answer.title}</h3><p>{answer.answer}</p><a href="/start-project" className="guide-cta">Discuss a project <ArrowUpRight size={15}/></a></> : <><p className="guide-intro">Hello. What would you like to know?</p>{guideTopics.map((topic) => <button className="guide-question" key={topic.id} onClick={() => setSelected(topic.id)}>{topic.title}<ChevronRight size={15}/></button>)}</>}
      </div>
      <footer><span>Company information guide</span><a href="/contact">Contact us <ArrowUpRight size={13}/></a></footer>
    </section>}
    <button className={'guide-launcher ' + (open ? 'is-open' : '')} onClick={() => setOpen(!open)} aria-label={open ? 'Close Clastar Guide' : 'Open Clastar Guide'}>{open ? <X size={20}/> : <><MessageCircle size={18}/><span>Ask Clastar</span></>}</button>
  </div>
}
const steps = ['Project basics', 'Scope & budget', 'Your details']
const projectTypes = ['Website or web application', 'Mobile application', 'AI integration', 'Backend or API integration', 'UI/UX and product design', 'Maintenance and optimization', 'Other']
export function ProjectWizard() {
  const [step, setStep] = useState(0)
  const [type, setType] = useState(projectTypes[0])
  const [summary, setSummary] = useState('')
  const [platform, setPlatform] = useState('Web')
  const [features, setFeatures] = useState('')
  const [budget, setBudget] = useState('Not sure yet')
  const [timeline, setTimeline] = useState('Flexible')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [prepared, setPrepared] = useState(false)
  const canContinue = step === 0 ? summary.trim().length >= 12 : step === 1 ? true : name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const prepareEmail = () => {
    const subject = encodeURIComponent('Project enquiry — ' + type)
    const body = encodeURIComponent('PROJECT ENQUIRY\n\nProject type: ' + type + '\nProject summary: ' + summary + '\nPlatform: ' + platform + '\nDesired features: ' + (features || 'Not specified') + '\nBudget: ' + budget + '\nTimeline: ' + timeline + '\n\nName: ' + name + '\nEmail: ' + email + '\nOrganisation: ' + (organisation || 'Not provided'))
    setPrepared(true)
    window.location.href = 'mailto:hello@clastarhub.com?subject=' + subject + '&body=' + body
  }
  return <div className="quote-layout">
    <aside className="quote-aside"><span className="eyebrow">START A PROJECT / BRIEF BUILDER</span><h2>Every good idea<br/><em>starts somewhere.</em></h2><p>Share a few details so we can understand what you want to create. You do not need a complete specification to get started.</p><div className="quote-steps">{steps.map((label, i) => <div className={step === i ? 'active' : step > i ? 'complete' : ''} key={label}><span>{step > i ? <Check size={14}/> : '0' + (i + 1)}</span>{label}</div>)}</div><small className="quote-privacy">Your answers stay in this page until you choose to prepare an email. This form does not send data to a server.</small></aside>
    <section className="quote-card">
      <div className="quote-card-top"><span>STEP 0{step + 1} / 0{steps.length}</span><span>{steps[step]}</span></div>
      {step === 0 && <div className="quote-step-content"><h3>What are we creating?</h3><label>Project type<select value={type} onChange={e => setType(e.target.value)}>{projectTypes.map(x => <option key={x}>{x}</option>)}</select></label><label>Tell us about the idea<textarea rows={5} value={summary} onChange={e => setSummary(e.target.value)} placeholder="What problem should this product solve? Who will use it? What do you have in mind?"/></label><label>Primary platform<select value={platform} onChange={e => setPlatform(e.target.value)}>{['Web','Android','iOS','Web and mobile','Not decided'].map(x => <option key={x}>{x}</option>)}</select></label><small className="field-hint">A short description of at least 12 characters is needed to continue.</small></div>}
      {step === 1 && <div className="quote-step-content"><h3>Shape the scope.</h3><label>Important features or requirements<textarea rows={4} value={features} onChange={e => setFeatures(e.target.value)} placeholder="List any features, integrations or design requirements you already know about."/></label><label>Estimated budget<select value={budget} onChange={e => setBudget(e.target.value)}>{['Not sure yet','Under $500','$500 – $1,500','$1,500 – $5,000','$5,000 – $10,000','Above $10,000','Prefer to discuss'].map(x => <option key={x}>{x}</option>)}</select></label><label>Desired timeline<select value={timeline} onChange={e => setTimeline(e.target.value)}>{['Flexible','As soon as practical','Within 1 month','Within 1–3 months','Within 3–6 months','Planning for later'].map(x => <option key={x}>{x}</option>)}</select></label></div>}
      {step === 2 && <div className="quote-step-content"><h3>How can we reach you?</h3><label>Your name<input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" autoComplete="name"/></label><label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email"/></label><label>Company or organisation <span className="optional-label">OPTIONAL</span><input value={organisation} onChange={e => setOrganisation(e.target.value)} placeholder="Organisation name"/></label>{prepared && <p className="quote-notice">Your email app should open with the project brief. Review it and send when ready.</p>}</div>}
      <div className="quote-actions">{step > 0 ? <button className="quote-back" onClick={() => setStep(step - 1)}><ChevronLeft size={16}/> Back</button> : <a className="quote-back" href="/contact">Prefer a simple enquiry?</a>}{step < 2 ? <button className="quote-next" disabled={!canContinue} onClick={() => setStep(step + 1)}>Continue <ArrowRight size={16}/></button> : <button className="quote-next" disabled={!canContinue} onClick={prepareEmail}>Prepare project email <ArrowUpRight size={16}/></button>}</div>
    </section>
  </div>
}
