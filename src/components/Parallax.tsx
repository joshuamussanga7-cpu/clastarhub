import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default Parallax;
