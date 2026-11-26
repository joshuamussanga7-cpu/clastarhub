import { useState } from 'react'
import './handwritten-type-study.css'

const styles = [
  {id:'caveat',n:'01',name:'Natural handwriting',font:'Caveat',mood:'RELAXED · HUMAN · PERSONAL',headline:'Ideas deserve better technology.',accent:'A loose, confident handwritten feel.'},
  {id:'patrick',n:'02',name:'Everyday hand lettering',font:'Patrick Hand',mood:'FRIENDLY · CLEAR · APPROACHABLE',headline:'Ideas deserve better technology.',accent:'Like neat notes written by hand.'},
  {id:'kalam',n:'03',name:'Expressive pen lettering',font:'Kalam',mood:'WARM · CREATIVE · DISTINCTIVE',headline:'Ideas deserve better technology.',accent:'A lively pen-written character.'},
  {id:'marker',n:'04',name:'Bold marker lettering',font:'Permanent Marker',mood:'LOUD · PLAYFUL · CONFIDENT',headline:'Ideas deserve better technology.',accent:'Strong marker strokes with attitude.'},
  {id:'rocksalt',n:'05',name:'Rough sketch lettering',font:'Rock Salt',mood:'RAW · SKETCHED · EXPERIMENTAL',headline:'Ideas deserve better technology.',accent:'An intentionally imperfect hand-drawn look.'},
]

export default function HandwrittenTypeStudy(){
 const [selected,setSelected]=useState('caveat')
 const [showAll,setShowAll]=useState(true)
 const current=styles.find(s=>s.id===selected) || styles[0]
 return <main className="hand-study">
  <header className="hs-header"><a href="/typography-comparison"><b>C<span>.</span></b> CLASTARHUB</a><span>TYPOGRAPHY EXPERIMENT / 02</span><a href="https://clastarhub.com">LIVE WEBSITE ↗</a></header>
  <section className="hs-intro"><div className="hs-kicker">CLASTARHUB · HAND-DRAWN TYPE STUDY</div><h1>Made by hand.<br/><em>Built for ideas.</em></h1><p>Five handwritten and sketched lettering directions, tested against the same ClastarHub homepage content. The supporting text stays clean and readable so you can judge the display type fairly.</p><div className="hs-controls"><button className={showAll?'active':''} onClick={()=>setShowAll(true)}>Compare all five</button><button className={!showAll?'active':''} onClick={()=>setShowAll(false)}>Focus on one</button></div></section>
  {!showAll && <nav className="hs-picker">{styles.map(s=><button key={s.id} className={selected===s.id?'chosen':''} onClick={()=>setSelected(s.id)}>{s.n} / {s.name}</button>)}</nav>}
  <section className="hs-list">{(showAll?styles:[current]).map(s=><article className={'hs-sample hs-'+s.id} key={s.id}>
   <div className="hs-sample-head"><div><span>{s.n} / TYPE DIRECTION</span><h2>{s.name}</h2><p>{s.mood}</p></div><div className="hs-font-meta"><small>DISPLAY FONT</small><b>{s.font}</b><small>SUPPORTING FONT</small><b>Inter</b></div></div>
   <div className="hs-page">
    <nav className="hs-nav"><b> C<span>.</span> CLASTARHUB</b><div>PRODUCTS　 CAPABILITIES　 COMPANY</div><button>START A PROJECT ↗</button></nav>
    <section className="hs-hero"><div className="hs-copy"><small>● TECHNOLOGY WITH INTENTION</small><h3>Ideas deserve<br/><em>better technology.</em></h3><p>We design and build digital products, intelligent systems and experiences that turn ambitious ideas into something useful.</p><div className="hs-actions"><b>EXPLORE WHAT WE BUILD ↘</b><span>HAVE A PROJECT IN MIND? ↗</span></div></div><div className="hs-art"><div className="hs-orbit"/><div className="hs-core">C<span>.</span></div><small>MAKE IT<br/>MATTER</small></div></section>
    <section className="hs-manifesto"><small>01 / OUR POINT OF VIEW</small><h4>Not technology for its own sake.<br/><em>Technology that moves things forward.</em></h4></section>
    <section className="hs-bottom"><div><small>02 / SELECTED PRODUCT</small><h4>University Notes</h4><p>A connected learning platform bringing academic resources, student community and AI-assisted study tools into one experience.</p><a href="https://uninotes.clastarhub.com">EXPLORE PRODUCT ↗</a></div><div><small>03 / CAPABILITIES</small><h4>From first thought<br/>to <em>working product.</em></h4><p>Mobile applications　/　Websites & platforms　/　AI integration</p></div></section>
   </div>
   <div className="hs-foot"><span>{s.accent}</span><button onClick={()=>{setSelected(s.id);setShowAll(false)}}>Focus on this style ↗</button></div>
  </article>)}</section>
  <footer className="hs-footer"><b>CLASTARHUB<span>.</span></b><span>FIVE HANDWRITTEN DIRECTIONS · PREVIEW ONLY</span><a href="/typography-comparison">BACK TO FIVE ORIGINAL FONT SYSTEMS ↗</a></footer>
 </main>
}
