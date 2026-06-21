import { motion } from 'framer-motion';

const techStack = [
  "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js",
  "AWS Cloud", "Docker", "Kubernetes", "PostgreSQL", "Redis",
  "GraphQL", "Python AI", "TensorFlow", "PyTorch"
];

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/[0.02] py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        {techStack.map((tech, i) => (
          <span key={i} className="mx-8 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-accent-blue transition-colors">
            {tech}
          </span>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
        {techStack.map((tech, i) => (
          <span key={i} className="mx-8 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-accent-blue transition-colors">
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
