import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, CheckCircle, Zap } from 'lucide-react';

const activities = [
  { text: "New user joined Savi Finance", icon: <CheckCircle size={14} className="text-accent-green" /> },
  { text: "University Notes reached 10k downloads", icon: <Zap size={14} className="text-yellow-400" /> },
  { text: "Clastar Tech deployed a new Enterprise solution", icon: <Bell size={14} className="text-accent-blue" /> },
  { text: "Uni Connect: 50+ new listings today", icon: <CheckCircle size={14} className="text-accent-cyan" /> },
];

const NotificationToast = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 3000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-24 right-6 z-[40] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="glass-card p-4 flex items-center gap-4 border-white/20 shadow-2xl pointer-events-auto"
          >
            <div className="p-2 bg-white/5 rounded-full">
              {activities[current].icon}
            </div>
            <div className="pr-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">Live Activity</p>
              <p className="text-sm font-medium text-white">{activities[current].text}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
            <div className="absolute bottom-0 left-0 h-0.5 bg-accent-blue/30 w-full animate-[progress_8s_linear]" />
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default NotificationToast;
