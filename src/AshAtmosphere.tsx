import { useEffect, useRef } from 'react'

type Particle = { x:number; y:number; radius:number; speed:number; drift:number; opacity:number; ember:boolean }

export default function AshAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !context || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0, width = 0, height = 0
    let particles: Particle[] = []
    const createParticle = (randomY = false): Particle => ({
      x: Math.random() * width, y: randomY ? Math.random() * height : -8,
      radius: Math.random() * 1.45 + .35, speed: Math.random() * .42 + .12,
      drift: (Math.random() - .5) * .34, opacity: Math.random() * .42 + .12,
      ember: Math.random() > .91,
    })
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = window.innerWidth; height = window.innerHeight
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio)
      canvas.style.width = width + 'px'; canvas.style.height = height + 'px'
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      particles = Array.from({length: width < 700 ? 24 : 54}, () => createParticle(true))
    }
    const draw = () => {
      context.clearRect(0, 0, width, height)
      particles.forEach((particle, index) => {
        particle.y += particle.speed
        particle.x += particle.drift + Math.sin((particle.y + index * 13) * .008) * .12
        if (particle.y > height + 10 || particle.x < -10 || particle.x > width + 10) {
          particles[index] = createParticle(); return
        }
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = particle.ember
          ? 'rgba(255, 145, 55, ' + particle.opacity * .8 + ')'
          : 'rgba(190, 195, 201, ' + particle.opacity + ')'
        context.shadowBlur = particle.ember ? 9 : 3
        context.shadowColor = particle.ember ? 'rgba(255, 125, 35, .5)' : 'rgba(210, 215, 220, .18)'
        context.fill()
      })
      context.shadowBlur = 0
      frame = window.requestAnimationFrame(draw)
    }
    resize(); frame = window.requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])
  return <div className="ash-atmosphere" aria-hidden="true">
    <div className="ash-smoke ash-smoke-one" />
    <div className="ash-smoke ash-smoke-two" />
    <canvas ref={canvasRef} className="ash-particle-canvas" />
  </div>
}
