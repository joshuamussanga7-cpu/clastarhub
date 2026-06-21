import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Clastar Hub?",
    answer: "Clastar Hub is a digital ecosystem company focused on developing innovative software solutions, educational platforms, financial services, and business technologies. We create products that solve real-world challenges while improving accessibility and efficiency for individuals and organizations."
  },
  {
    question: "What products does Clastar Hub offer?",
    answer: "Our current ecosystem includes University Notes (EdTech), Uni Connect (Marketplace), Savi (FinTech), Clastar Technologies (Software Services), and Clastar Microfinance (Financial Services)."
  },
  {
    question: "How can I access Clastar products?",
    answer: "Most of our products are available through their respective web and mobile platforms. You can explore our ecosystem section on this website and click 'Learn More' on any product to visit its specific platform."
  },
  {
    question: "How secure are Clastar services?",
    answer: "Security is one of our core values. We use enterprise-grade encryption, secure cloud infrastructure, and multi-factor authentication across all our platforms to ensure your data and financial transactions are always protected."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team through the contact form below, via email at support@clastarhub.com, or through our social media channels. We offer 24/7 assistance for all our ecosystem products."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-primary-lighter/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-blue font-semibold tracking-wider uppercase mb-4"
            >
              Support
            </motion.h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {activeIndex === index ? (
                    <Minus className="text-accent-blue" size={20} />
                  ) : (
                    <Plus className="text-slate-500" size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
