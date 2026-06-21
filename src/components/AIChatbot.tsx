import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am Clastar AI. How can I help you explore our ecosystem today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
      let response = "That's a great question! Clastar Hub, based in Dodoma, is focused on bridging the gap between technology and accessibility across Tanzania and Africa. Would you like to learn more about our FinTech or EdTech solutions?";
      if (input.toLowerCase().includes('product')) {
        response = "Our ecosystem includes: University Notes (with Six AI), Uni Connect, Savi Finance, Math Challenge (IQ Booster), and Clastar Microfinance. Which one interests you?";
      } else if (input.toLowerCase().includes('location') || input.toLowerCase().includes('where')) {
        response = "We are proudly headquartered in Dodoma, Tanzania!";
      } else if (input.toLowerCase().includes('service') || input.toLowerCase().includes('create')) {
        response = "We specialize in professional App Creation and Website Creation tailored for modern businesses. Would you like to discuss a project?";
      }
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-card shadow-2xl flex flex-col overflow-hidden border-white/20"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-accent-blue to-accent-cyan flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <Sparkles size={20} />
                <span className="font-bold tracking-tight">Clastar AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/40 backdrop-blur-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-accent-blue' : 'bg-white/10'
                    }`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-accent-cyan" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-accent-blue text-white rounded-tr-none'
                        : 'bg-white/10 text-slate-300 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-white text-sm focus:outline-none focus:border-accent-blue transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-blue rounded-full text-white hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-500 mt-3 uppercase tracking-widest">
                Powered by Clastar LLM-1
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full flex items-center justify-center text-white shadow-xl shadow-accent-blue/20 group relative"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-green rounded-full border-2 border-primary animate-pulse" />
      </motion.button>
    </div>
  );
};

export default AIChatbot;
