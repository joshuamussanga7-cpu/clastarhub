import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent || status === 'loading') return;
    setStatus('loading'); setMessage('');
    try {
      const response = await fetch('/api/newsletter', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({email,consent,source:'website'}) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Subscription could not be saved.');
      setStatus('success'); setMessage(data.message || 'Your subscription request has been recorded.'); setEmail(''); setConsent(false);
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Please try again later.');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] -ml-32 -mb-32" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Ahead of the Curve</h2>
              <p className="text-slate-400 text-lg mb-10">Get considered updates about ClastarHub products, company news and technology insights.</p>
              {status === 'success' ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-4 p-8 glass-card border-accent-green/20">
                  <CheckCircle2 size={48} className="text-accent-green" />
                  <div className="text-center"><h4 className="text-xl font-bold text-white mb-1">Request received</h4><p className="text-slate-400">{message}</p></div>
                  <button onClick={() => {setStatus('idle');setMessage('')}} className="text-sm text-accent-blue hover:underline font-medium">Subscribe another email</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input type="email" required placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent-blue transition-colors text-white text-lg" />
                    <button disabled={status === 'loading' || !consent} className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-lg disabled:opacity-70">
                      {status === 'loading' ? <Loader2 className="animate-spin" size={24} /> : <>Subscribe <Send size={20} /></>}
                    </button>
                  </div>
                  <label className="flex items-start gap-3 text-left text-xs text-slate-400"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-0.5 accent-orange-500" /><span>I agree to receive occasional ClastarHub updates. I understand I can unsubscribe later.</span></label>
                  {status === 'error' && <p role="alert" className="text-sm text-red-400">{message}</p>}
                </form>
              )}
              <p className="text-slate-500 text-xs mt-6">Your email is used for ClastarHub updates. Subscription confirmation and unsubscribe automation must be configured before campaign sending is enabled.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
