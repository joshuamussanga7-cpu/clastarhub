import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Github, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Mission', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Our Branches',
      links: [
        { name: 'Clastar Technologies', href: '#services' },
        { name: 'Clastar Microfinance', href: '#services' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'University Notes', href: '#products' },
        { name: 'Uni Connect', href: '#products' },
        { name: 'Savi Finance', href: '#products' },
        { name: 'Math Challenge', href: '#products' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#080E1E] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                CLASTAR <span className="text-accent-blue">INVESTMENT HUB</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Empowering the digital and financial landscape of Tanzania through
              world-class software development and inclusive student microfinance.
            </p>
            <div className="mb-8 space-y-2">
              <a href="tel:+255657811904" className="text-slate-400 hover:text-accent-blue transition-colors text-sm flex items-center gap-2">
                <Phone size={16} /> +255 657 811 904
              </a>
              <a href="mailto:info@clastarhub.com" className="text-slate-400 hover:text-accent-blue transition-colors text-sm flex items-center gap-2">
                <Mail size={16} /> info@clastarhub.com
              </a>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Instagram size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Github size={20} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent-blue hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <div key={i} className="col-span-1">
              <h4 className="text-white font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-accent-blue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} CLASTAR INVESTMENT HUB. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
