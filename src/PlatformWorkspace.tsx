import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Bot, CheckCircle2, ChevronRight, CircleDot, FileText, FlaskConical, LayoutDashboard, LockKeyhole, Mail, MessageSquare, Plus, Search, ShieldCheck, Sparkles, Users, Workflow } from 'lucide-react'
import './platform-workspace.css'

type Mode = 'labs' | 'portal' | 'admin' | 'ai'
const experiments = [
  {name:'Clastar AI Assistant',type:'AI experience',status:'Prototype',desc:'A grounded assistant for company, services and project discovery.'},
  {name:'Project Brief Builder',type:'Productivity',status:'Concept',desc:'Turn a visitor conversation into a structured project brief.'},
  {name:'Interactive Product Explorer',type:'Web experience',status:'Experimental',desc:'A richer way to explore products, technology and project stories.'},
]
const leads = [
  {name:'Website redesign enquiry',source:'Project form',status:'New',date:'Demo record'},
  {name:'Mobile application concept',source:'Contact page',status:'Qualified',date:'Demo record'},
  {name:'AI integration discussion',source:'AI assistant',status:'Contacted',date:'Demo record'},
]
const articles = [
  {title:'Building useful AI into digital products',status:'Published',type:'Insight'},
  {title:'From concept to workflow: product thinking',status:'Draft',type:'Article'},
  {title:'Inside Clastar Labs',status:'Review',type:'Announcement'},
]
const nav = [{id:'labs',label:'Labs',icon:FlaskConical},{id:'portal',label:'Client portal',icon:Users},{id:'admin',label:'Admin workspace',icon:LayoutDashboard},{id:'ai',label:'Clastar AI',icon:Bot}] as const

export default function PlatformWorkspace({mode}:{mode:Mode}) {
  const [active,setActive]=useState(mode)
  const [query,setQuery]=useState('')
  const [notice,setNotice]=useState('')
  const filtered=useMemo(()=>leads.filter(x=>(x.name+' '+x.source+' '+x.status).toLowerCase().includes(query.toLowerCase())),[query])
  const current=nav.find(x=>x.id===active)!
  const showNotice=(message:string)=>{setNotice(message);window.setTimeout(()=>setNotice(''),3200)}
  return <main className="platform-shell">
    <header className="platform-topbar">
      <a className="platform-brand" href="/"><span className="platform-mark">C</span><span>CLASTAR<span>HUB</span><small>PLATFORM</small></span></a>
      <a className="platform-back" href="/"><ArrowLeft size={15}/> Back to company website</a>
    </header>
    <div className="platform-layout">
      <aside className="platform-sidebar">
        <div className="platform-side-label">PLATFORM AREAS</div>
        {nav.map(item=><button key={item.id} className={active===item.id?'active':''} onClick={()=>{setActive(item.id as Mode);setNotice('')}}><item.icon size={17}/>{item.label}<ChevronRight size={14}/></button>)}
        <div className="platform-side-note"><ShieldCheck size={17}/><span>Development preview<br/><b>Not connected to live client data</b></span></div>
      </aside>
      <section className="platform-content">
        <div className="platform-heading">
          <div><span className="platform-eyebrow">CLASTARHUB / {current.label.toUpperCase()}</span><h1>{active==='labs'?'Explore what we are testing.':active==='portal'?'Your project, in one place.':active==='admin'?'Operate the ClastarHub platform.':'A smarter way to start.'}</h1><p>{active==='labs'?'Experiments, prototypes and ideas in progress. We label every stage clearly.':active==='portal'?'A preview of the secure client workspace planned for project collaboration.':active==='admin'?'A unified workspace concept for content, enquiries and platform operations.':'An AI-assisted entry point for discovering services and shaping project requirements.'}</p></div>
          <span className="platform-preview-pill"><CircleDot size={9}/> PREVIEW ENVIRONMENT</span>
        </div>
        {active==='labs'&&<div className="platform-card-grid">{experiments.map((item,i)=><article className="platform-card" key={item.name}><div className="platform-card-icon"><FlaskConical/></div><span className="platform-eyebrow">EXPERIMENT 0{i+1} · {item.type.toUpperCase()}</span><h2>{item.name}</h2><p>{item.desc}</p><div className="platform-card-foot"><span>{item.status}</span><span>Details soon <ArrowUpRight size={14}/></span></div></article>)}</div>}
        {active==='portal'&&<><div className="platform-stat-grid"><div><small>ACTIVE PROJECTS</small><b>—</b><span>Client data not connected</span></div><div><small>UPCOMING MILESTONES</small><b>—</b><span>Awaiting project setup</span></div><div><small>UNREAD MESSAGES</small><b>—</b><span>Messaging not connected</span></div></div><div className="platform-panel"><div className="platform-panel-head"><div><span className="platform-eyebrow">CLIENT WORKSPACE</span><h2>Project collaboration</h2></div><LockKeyhole size={20}/></div><div className="platform-empty"><Users size={28}/><h3>Your workspace will appear here</h3><p>Client accounts, project milestones, deliverables, approvals and messages will be enabled after authentication and database integration are configured.</p><a href="/start-project">Start a project <ArrowUpRight size={14}/></a></div></div></>}
        {active==='admin'&&<><div className="platform-stat-grid"><div><small>ENQUIRIES</small><b>03</b><span>Illustrative records</span></div><div><small>CONTENT ITEMS</small><b>03</b><span>Illustrative records</span></div><div><small>LAB EXPERIMENTS</small><b>03</b><span>Illustrative records</span></div></div><div className="platform-panel"><div className="platform-panel-head"><div><span className="platform-eyebrow">LEAD MANAGEMENT</span><h2>Recent enquiries</h2></div><label className="platform-search"><Search size={14}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search demo enquiries"/></label></div><div className="platform-table">{filtered.map((lead,i)=><div className="platform-table-row" key={lead.name}><span>0{i+1}</span><b>{lead.name}</b><small>{lead.source}</small><em>{lead.status}</em></div>)}</div><p className="platform-disclaimer">These are sample interface records, not real enquiries. Live lead capture, storage, email notifications and permissions still require backend configuration.</p></div><div className="platform-panel"><div className="platform-panel-head"><div><span className="platform-eyebrow">CONTENT MANAGEMENT</span><h2>Editorial queue</h2></div><FileText size={20}/></div>{articles.map(a=><div className="platform-article-row" key={a.title}><span><FileText size={16}/></span><b>{a.title}</b><em>{a.status}</em></div>)}<p className="platform-disclaimer">CMS editing, publishing, media storage and revision history are not connected yet.</p></div></>}
        {active==='ai'&&<div className="platform-ai-panel"><div className="platform-ai-mark"><Sparkles size={28}/></div><span className="platform-eyebrow">CLASTAR AI · FOUNDATION</span><h2>Tell us what you want to build.</h2><p>The planned assistant will help visitors explore services, clarify requirements and create a project brief. A live AI model and server-side API are not configured in this preview.</p><div className="platform-ai-actions"><a href="/start-project">Use the project brief builder <ArrowUpRight size={15}/></a><a href="/services">Explore services <ArrowUpRight size={15}/></a></div><div className="platform-ai-note"><Bot size={16}/> AI responses will be grounded in approved ClastarHub content and clearly labelled.</div></div>}
      </section>
    </div>
    {notice&&<div className="platform-toast"><CheckCircle2 size={16}/>{notice}</div>}
    <footer className="platform-footer"><span>© {new Date().getFullYear()} ClastarHub</span><span>Designed in the approved editorial visual system</span><a href="mailto:hello@clastarhub.com"><Mail size={13}/> Contact</a></footer>
  </main>
}
