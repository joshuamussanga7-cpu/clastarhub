import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ShoppingCart, Wallet, Cpu, Landmark, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const categories = ['All', 'EdTech', 'Marketplace', 'FinTech', 'Software'];

const products = [
  {
    title: 'University Notes',
    category: 'EdTech',
    description: 'The ultimate academic companion. Digitize your studies with AI-powered note refining, Groq-integrated summaries, and a collaborative student ecosystem.',
    icon: <BookOpen className="text-accent-blue" />,
    features: ['Six AI Assistant', 'Module Management', 'Student Community Feed'],
    color: 'accent-blue',
    link: '#',
  },
  {
    title: 'Uni Connect',
    category: 'Marketplace',
    description: 'The bridge between campus life and commerce. A secure marketplace for students and local businesses to trade products and services.',
    icon: <ShoppingCart className="text-accent-cyan" />,
    features: ['Vendor Dashboards', 'Safe Campus Trading', 'Product Showcasing'],
    color: 'accent-cyan',
    link: '#',
  },
  {
    title: 'Savi Finance',
    category: 'FinTech',
    description: 'Smart goal-based savings and financial management. Helping users build wealth through automated saving habits and deep spending insights.',
    icon: <Wallet className="text-accent-green" />,
    features: ['Goal Tracking', 'Automated Savings', 'Financial Analytics'],
    color: 'accent-green',
    link: '#',
  },
  {
    title: 'Math Challenge (IQ Booster)',
    category: 'EdTech',
    description: 'An interactive gamified learning platform designed to sharpen mathematical skills through competitive challenges and cognitive exercises.',
    icon: <Cpu className="text-purple-500" />,
    features: ['Competitive Ranking', 'Mental Math Drills', 'Progressive Difficulty'],
    color: 'purple-500',
    link: '#',
  },
  {
    title: 'Clastar Microfinance',
    category: 'FinTech',
    description: 'Empowering the next generation. Providing accessible simple interest loans specifically designed for university students to support their academic journey.',
    icon: <Landmark className="text-red-400" />,
    features: ['Simple Interest Loans', 'Student Focused', 'Fast Digital Approval'],
    color: 'red-400',
    link: '#',
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-primary-lighter/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent-blue font-bold tracking-[0.2em] uppercase mb-4 text-sm">Clastar Investment Hub</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6">Proprietary Product Ecosystem</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Explore our range of high-impact digital platforms owned and managed under the Clastar Investment Hub division.
            </p>

            {/* Smart Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="p-1.5 glass-card flex flex-wrap gap-2 border-white/5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
                onClick={() => setSelectedProduct(product)}
              >
                <SpotlightCard className="p-8 group transition-all duration-500 relative flex flex-col h-full border-white/5 hover:border-accent-blue/30 cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      {product.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-slate-500 border border-white/5">
                      {product.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold mb-4">{product.title}</h4>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-white font-semibold hover:text-accent-blue transition-colors group/btn">
                    Learn More <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={20} />
                  </button>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-primary/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl glass-card p-8 md:p-12 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowUpRight size={24} className="rotate-45" />
                </button>

                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl">
                    {selectedProduct.icon}
                  </div>
                  <div>
                    <span className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-2 block">
                      {selectedProduct.category}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-bold text-white">{selectedProduct.title}</h4>
                  </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="space-y-4">
                    <h5 className="font-bold text-white uppercase text-sm tracking-widest">Key Features</h5>
                    {selectedProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400">
                        <div className="w-2 h-2 rounded-full bg-accent-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h5 className="font-bold text-white mb-2">Impact Goal</h5>
                    <p className="text-sm text-slate-400">
                      Designed to drive digital transformation and financial inclusion across Tanzania.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1 py-4">Launch Platform</button>
                  <button onClick={() => setSelectedProduct(null)} className="btn-secondary flex-1 py-4">Close Details</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
