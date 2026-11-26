import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };
const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role:'assistant', content:'Hello! I am Clastar AI. Ask me about ClastarHub, our projects or digital services.' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    const question=input.trim();
    if(!question||loading)return;
    setMessages(current=>[...current,{role:'user',content:question}]);
    setInput('');setLoading(true);setError('');
    try{
      const response=await fetch('/api/assistant',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({message:question})});
      const data=await response.json();
      if(!response.ok)throw new Error(data.error||'The assistant is temporarily unavailable.');
      setMessages(current=>[...current,{role:'assistant',content:data.reply}]);
    }catch(e){
      setError(e instanceof Error?e.message:'Please try again later.');
    }finally{setLoading(false)}
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{opacity:0,scale:0.8,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.8,y:20}} className="absolute bottom-20 right-0 w-[min(350px,calc(100vw-32px))] md:w-[400px] h-[500px] glass-card shadow-2xl flex flex-col overflow-hidden border-white/20">
            <div className="p-4 bg-gradient-to-r from-accent-blue to-accent-cyan flex justify-between items-center">
              <div className="flex items-center gap-2 text-white"><Sparkles size={20}/><span className="font-bold tracking-tight">Clastar AI Assistant</span></div>
              <button aria-label="Close assistant" onClick={()=>setIsOpen(false)} className="text-white/80 hover:text-white"><X size={20}/></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/40 backdrop-blur-sm" aria-live="polite">
              {messages.map((msg,i)=><div key={i} className={`flex ${msg.role==='user'?'justify-end':'justify-start'}`}>
                <div className={`flex gap-2 max-w-[88%] ${msg.role==='user'?'flex-row-reverse':''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role==='user'?'bg-accent-blue':'bg-white/10'}`}>{msg.role==='user'?<User size={14}/>:<Bot size={14} className="text-accent-cyan"/>}</div>
                  <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap ${msg.role==='user'?'bg-accent-blue text-white rounded-tr-none':'bg-white/10 text-slate-300 rounded-tl-none border border-white/5'}`}>{msg.content}</div>
                </div>
              </div>)}
              {loading&&<div className="flex items-center gap-2 text-slate-400 text-xs"><Loader2 size={14} className="animate-spin"/> Clastar AI is thinking…</div>}
              {error&&<p role="alert" className="text-xs text-red-400">{error}</p>}
            </div>
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&handleSend()} placeholder="Ask about ClastarHub…" aria-label="Message Clastar AI" className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-white text-sm focus:outline-none focus:border-accent-blue"/>
                <button onClick={handleSend} disabled={loading||!input.trim()} aria-label="Send message" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-blue rounded-full text-white disabled:opacity-40"><Send size={16}/></button>
              </div>
              <p className="text-[10px] text-center text-slate-500 mt-3 uppercase tracking-widest">AI-generated · Verify important information</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={()=>setIsOpen(!isOpen)} aria-label={isOpen?'Close Clastar AI':'Open Clastar AI'} className="w-14 h-14 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full flex items-center justify-center text-white shadow-xl shadow-accent-blue/20">
        {isOpen?<X size={24}/>:<MessageSquare size={24}/>}
      </motion.button>
    </div>
  );
};
export default AIChatbot;
