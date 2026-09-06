import { ReactNode, useCallback, useRef } from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

export default function GlassmorphicCard({ children, className = '', hover = true, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--fluid-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--fluid-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
    card.style.setProperty('--fluid-opacity', '1');
  }, []);

  const onLeave = useCallback(() => {
    ref.current?.style.setProperty('--fluid-opacity', '0');
  }, []);

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`portfolio-glass ${hover ? 'portfolio-glass-hover' : ''} ${className}`} {...props}>
      <div className="portfolio-glass-ripple" aria-hidden="true" />
      <div className="portfolio-glass-sheen" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
