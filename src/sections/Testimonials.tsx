import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'University Student',
    content: 'University Notes has completely transformed how I study. Having all my course materials organized and accessible in one place saved me so much time during finals.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'David Okafor',
    role: 'SME Owner',
    content: 'Uni Connect helped me reach customers I never thought possible. The platform is secure, easy to use, and has significantly boosted my monthly sales.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Tech Entrepreneur',
    content: 'The team at Clastar Technologies delivered our mobile app ahead of schedule. Their attention to detail and technical expertise is truly enterprise-grade.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-semibold tracking-wider uppercase mb-4"
          >
            Testimonials
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={60} />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-accent-blue/20"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
