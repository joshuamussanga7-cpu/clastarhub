import { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface CounterProps {
  value: number;
  direction?: 'up' | 'down';
  suffix?: string;
}

const Counter = ({ value, direction = 'up', suffix = '' }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export default Counter;
