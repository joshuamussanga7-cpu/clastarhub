import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowRight, Book, Globe, Shield, Wallet } from 'lucide-react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const togglePalette = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePalette]);

  const results = [
    { name: 'University Notes', category: 'Products', icon: <Book size={18} /> },
    { name: 'Uni Connect', category: 'Products', icon: <Globe size={18} /> },
    { name: 'Savi Finance', category: 'Products', icon: <Wallet size={18} /> },
    { name: 'Documentation', category: 'Resources', icon: <Shield size={18} /> },
    { name: 'Contact Support', category: 'Help', icon: <Search size={18} /> },
  ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <div className="fixed bottom-8 left-8 z-[100] hidden md:block">
        <button
          onClick={togglePalette}
          className="flex items-center gap-3 px-4 py-2 glass-card hover:bg-white/10 transition-all border-white/20 group"
        >
          <Command size={16} className="text-slate-400 group-hover:text-accent-blue" />
          <span className="text-xs font-medium text-slate-400">Press <kbd className="font-sans text-accent-blue">⌘K</kbd> to search</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl glass-card overflow-hidden shadow-2xl border-white/20"
            >
              <div className="p-4 border-b border-white/10 flex items-center gap-4">
                <Search className="text-slate-400" size={20} />
                <input
                  autoFocus
                  type="text"
                  placeholder="What are you looking for?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 py-2"
                />
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4">
                {results.length > 0 ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 mb-3">Quick Search</h3>
                      <div className="space-y-1">
                        {results.map((item, i) => (
                          <button
                            key={i}
                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-2 bg-white/5 rounded-lg group-hover:text-accent-blue transition-colors">
                                {item.icon}
                              </div>
                              <div className="text-left">
                                <div className="text-sm font-semibold text-white">{item.name}</div>
                                <div className="text-xs text-slate-500">{item.category}</div>
                              </div>
                            </div>
                            <ArrowRight size={16} className="text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-slate-400">No results found for "{query}"</p>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/5 border-t border-white/10 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">ESC</kbd> to close
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">↵</kbd> to select
                  </div>
                </div>
                <div className="text-[10px] text-slate-500">
                  Search powered by <span className="text-accent-blue font-bold">CLASTAR AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
