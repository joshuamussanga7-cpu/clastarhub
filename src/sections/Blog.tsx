import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const blogPosts = [
  {
    title: 'The Future of Digital Banking in Africa',
    excerpt: 'Exploring how mobile-first solutions are reshaping the financial landscape across the continent...',
    author: 'Sarah Johnson',
    date: 'Oct 24, 2023',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'EdTech Trends: Personalized Learning Paths',
    excerpt: 'How AI and data analytics are helping students achieve better academic results through tailored content...',
    author: 'Michael Chen',
    date: 'Oct 20, 2023',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Building Scalable Software for Emerging Markets',
    excerpt: 'Technical insights into developing robust applications that perform under varying network conditions...',
    author: 'David Okoro',
    date: 'Oct 15, 2023',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-accent-blue font-semibold tracking-wider uppercase mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Latest from Clastar Hub</h3>
            <p className="text-slate-400 text-lg">
              Stay updated with the latest trends in technology, finance, and education. Our team shares insights and stories from the heart of innovation.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-3 glass-card hover:bg-white/10 transition-all border-white/10 group"
          >
            View All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard className="overflow-hidden flex flex-col h-full border-white/5 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent-blue text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  </div>

                  <h4 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-white font-semibold hover:text-accent-blue transition-colors group/link mt-auto">
                    Read Story <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
