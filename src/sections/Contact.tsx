import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones, BarChart3, GraduationCap } from 'lucide-react';

const Contact = () => {
  const contactCards = [
    {
      title: 'Technical Support',
      description: 'Need help with Clastar Technologies services?',
      icon: <Headphones className="text-accent-blue" />,
      email: 'joshuamussanga7@gmail.com',
    },
    {
      title: 'Microfinance Help',
      description: 'Questions about student loans and applications?',
      icon: <GraduationCap className="text-accent-green" />,
      email: 'joshuamussanga7@gmail.com',
    },
    {
      title: 'General Inquiries',
      description: 'General questions about Clastar Investment Hub.',
      icon: <MessageSquare className="text-accent-cyan" />,
      email: 'joshuamussanga7@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-semibold tracking-wider uppercase mb-4 text-sm"
          >
            Contact Us
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Connect with our specialized teams at Clastar Technologies and Clastar Microfinance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12"
            >
              <form
                action="https://formspree.io/joshuamussanga7@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-blue transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-blue transition-colors text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Department</label>
                  <select
                    name="department"
                    className="w-full px-6 py-4 bg-[#121826] border border-white/10 rounded-xl focus:outline-none focus:border-accent-blue transition-colors text-white"
                  >
                    <option>Clastar Technologies</option>
                    <option>Clastar Microfinance</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="How can we assist you today?"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-blue transition-colors text-white resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col gap-4 group hover:border-white/20 transition-all"
            >
              <div className="p-3 bg-white/5 w-fit rounded-xl group-hover:bg-white/10 transition-colors">
                <Phone className="text-accent-blue" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Call Us</h4>
                <p className="text-slate-400 text-sm mb-3">Speak directly with our team in Dodoma.</p>
                <a href="tel:+255657811904" className="text-accent-blue font-medium hover:underline flex items-center gap-2">
                  <Phone size={16} /> +255 657 811 904
                </a>
              </div>
            </motion.div>

            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col gap-4 group hover:border-white/20 transition-all"
              >
                <div className="p-3 bg-white/5 w-fit rounded-xl group-hover:bg-white/10 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">{card.title}</h4>
                  <p className="text-slate-400 text-sm mb-3">{card.description}</p>
                  <a href={`mailto:${card.email}`} className="text-accent-blue font-medium hover:underline flex items-center gap-2">
                    <Mail size={16} /> {card.email}
                  </a>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-center gap-4 border-accent-blue/20"
            >
              <div className="p-3 bg-accent-blue/10 rounded-xl">
                <MapPin className="text-accent-blue" />
              </div>
              <div>
                <h4 className="font-bold text-white">Dodoma, Tanzania</h4>
                <p className="text-slate-400 text-sm">Headquarters</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
