import { ArrowLeft, ArrowUpRight, BrainCircuit, Check, Code2, Layers3, Rocket, Sparkles } from 'lucide-react'

const products = {
  'university-notes': {
    name: 'University Notes',
    eyebrow: 'DIGITAL PRODUCT · LIVE',
    headline: 'A connected learning experience for modern students.',
    description: 'A learning ecosystem that brings study resources, community and AI-assisted tools into one experience.',
    tags: ['Education', 'AI', 'Community', 'Web + Android'],
    capabilities: ['Study resources', 'AI-assisted learning', 'Document intelligence', 'Student community'],
    cta: 'Open University Notes',
    href: 'https://webuni.clastarhub.com',
  },
  savi: {
    name: 'SAVI',
    eyebrow: 'PRODUCT · IN DEVELOPMENT',
    headline: 'A smarter student organizer built around action and accountability.',
    description: 'A student platform focused on organizing tasks, rewards, validation and trusted workflows in one place.',
    tags: ['Productivity', 'Students', 'Rewards', 'Web + Mobile'],
    capabilities: ['Task organization', 'Reward workflows', 'Validation systems', 'Trust & safety controls'],
    cta: 'Talk about SAVI',
    href: '#contact',
  },
  kaymex: {
    name: 'KAYMEX',
    eyebrow: 'DIGITAL SOLUTION · SELECTED WORK',
    headline: 'A corporate digital experience designed around clarity.',
    description: 'A focused web experience built to communicate a company, its value and its digital presence with confidence.',
    tags: ['Corporate', 'Web', 'Brand Experience', 'Digital'],
    capabilities: ['Responsive experience', 'Information architecture', 'Modern UI', 'Performance-minded delivery'],
    cta: 'Discuss a similar build',
    href: '#contact',
  },
} as const

type ProductKey = keyof typeof products

function ProductIndex() {
  return (
    <main className="clastar-product-page">
      <header className="product-nav"><a href="/" className="product-brand">CLASTARHUB</a><a href="/" className="product-back"><ArrowLeft size={16}/> Back to ClastarHub</a></header>
      <section className="product-index-hero"><span className="v2-kicker">THE CLASTARHUB ECOSYSTEM</span><h1>Products built to solve <em>real problems.</em></h1><p>Explore the products and digital experiences we are building, shipping and evolving.</p></section>
      <section className="product-index-grid">
        {(Object.keys(products) as ProductKey[]).map((key) => { const p = products[key]; return <a className="product-index-card" href={`/products/${key}`} key={key}><div className="product-icon"><Sparkles size={20}/></div><span>{p.eyebrow}</span><h2>{p.name}</h2><p>{p.description}</p><div className="product-card-footer"><b>Explore product</b><ArrowUpRight size={18}/></div></a> })}
      </section>
      <section className="product-bottom-cta"><span className="v2-kicker">BUILD WITH US</span><h2>Have a problem worth solving?</h2><a className="v2-btn v2-btn-primary" href="/#contact">Start a conversation <ArrowUpRight size={16}/></a></section>
    </main>
  )
}

function ProductDetail({ product }: { product: typeof products[ProductKey] }) {
  return <main className="clastar-product-page">
    <header className="product-nav"><a href="/" className="product-brand">CLASTARHUB</a><a href="/products" className="product-back"><ArrowLeft size={16}/> All products</a></header>
    <section className="product-detail-hero"><div><span className="v2-kicker">{product.eyebrow}</span><h1>{product.headline}</h1><p>{product.description}</p><div className="product-tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="v2-btn v2-btn-primary" href={product.href}>{product.cta} <ArrowUpRight size={16}/></a></div><div className="product-visual"><div className="product-orb"><Layers3 size={44}/></div><div className="product-visual-label">CLASTARHUB<br/><strong>{product.name}</strong></div></div></section>
    <section className="product-capabilities"><div><span className="v2-kicker">WHAT IT DOES</span><h2>Designed as a system, not just a screen.</h2></div><div className="product-cap-grid">{product.capabilities.map((cap, i) => <div className="product-cap" key={cap}><span>0{i + 1}</span><Check size={17}/><h3>{cap}</h3><p>Purposeful functionality designed around the product's core workflow.</p></div>)}</div></section>
    <section className="product-build"><div className="product-build-icon"><BrainCircuit size={26}/></div><div><span className="v2-kicker">HOW WE BUILD</span><h2>From idea to useful technology.</h2><p>We combine product thinking, interface design, engineering and AI capabilities to create experiences that can evolve with their users.</p></div><div className="product-build-icon"><Code2 size={26}/></div></section>
    <section className="product-bottom-cta"><Rocket size={24}/><h2>Build the next thing with ClastarHub.</h2><a className="v2-btn v2-btn-primary" href="/#contact">Start a conversation <ArrowUpRight size={16}/></a></section>
  </main>
}

export default function ClastarProductPages() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/products') return <ProductIndex />
  const key = path.split('/').pop() as ProductKey
  const product = products[key]
  return product ? <ProductDetail product={product} /> : <ProductIndex />
}
