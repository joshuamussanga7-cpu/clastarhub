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

    // Enhanced AI Response Logic
    setTimeout(() => {
      const q = input.toLowerCase();
      let response = "That's an interesting question! As Clastar AI, I can tell you that we are committed to digital transformation in Tanzania. Would you like to know more about our Technologies branch or Microfinance loans?";

      if (q.includes('loan') || q.includes('finance') || q.includes('money') || q.includes('tuition')) {
        response = "Clastar Microfinance provides accessible tuition loans for university students in Tanzania with simple interest. You can apply directly through our platform once you have your admission details. Would you like to know the requirements?";
      } else if (q.includes('requirement') || q.includes('apply') || q.includes('how to')) {
        response = "To apply for a Clastar Microfinance loan, you typically need: 1. A valid Student ID/Admission letter, 2. A guarantor, and 3. Your basic national ID details. The process is fully digital!";
      } else if (q.includes('tech') || q.includes('software') || q.includes('website') || q.includes('app')) {
        response = "Clastar Technologies is our digital powerhouse! We build high-performance mobile apps (Android/iOS), professional websites, and custom enterprise software. We even do UI/UX design and branding. Do you have a project in mind?";
      } else if (q.includes('product') || q.includes('apps you made')) {
        response = "We've built an incredible ecosystem: \n• University Notes (with Six AI) \n• Uni Connect (Student networking) \n• Savi Finance (Personal finance) \n• Math Challenge (IQ Booster). \nWhich one should I explain first?";
      } else if (q.includes('university notes') || q.includes('six ai')) {
        response = "University Notes is our flagship EdTech app. It uses 'Six AI' to help students summarize long lectures and generate study quizzes automatically. It's a game-changer for Tanzanian students!";
      } else if (q.includes('location') || q.includes('where') || q.includes('office') || q.includes('dodoma')) {
        response = "Our headquarters are located in the heart of Dodoma, Tanzania. We are the central hub for innovation in the capital!";
      } else if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('call')) {
        response = "You can reach us at +255 657 811 904 or email info@clastarhub.com. You can also use the contact form on this page to send us a direct message!";
      } else if (q.includes('who are you') || q.includes('what is clastar')) {
        response = "Clastar Investment Hub is a dual-branch company based in Dodoma. We bridge the gap between Technology (Software & IT) and Finance (Student Loans) to empower the next generation.";
      } else if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
        response = "Hello! I'm Clastar AI. I can help you with information about our software services, student loans, or our digital products. How can I assist you today?";
      } else if (q.includes('thanks') || q.includes('thank you')) {
        response = "You're very welcome! Is there anything else Clastar AI can help you with today?";
      }

      setMessages([...newMessages, { role: 'assistant', content: response }]);
    }, 800);
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
