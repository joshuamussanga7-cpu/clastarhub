import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden border-white/10">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] -ml-32 -mb-32" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Ahead of the Curve</h2>
              <p className="text-slate-400 text-lg mb-10">
                Join our exclusive newsletter and get the latest updates on fintech innovation,
                educational breakthroughs, and technology trends directly in your inbox.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center gap-4 p-8 glass-card border-accent-green/20"
                >
                  <CheckCircle2 size={48} className="text-accent-green" />
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-1">Welcome to the Ecosystem!</h4>
                    <p className="text-slate-400">Please check your email to confirm your subscription.</p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-accent-blue hover:underline font-medium"
                  >
                    Subscribe another email
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent-blue transition-colors text-white text-lg"
                  />
                  <button
                    disabled={status === 'loading'}
                    className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-lg disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>Subscribe Now <Send size={20} /></>
                    )}
                  </button>
                </form>
              )}
              <p className="text-slate-500 text-xs mt-6">
                By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
