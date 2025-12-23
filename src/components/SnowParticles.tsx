import { useEffect, useState, useRef, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
}

const SnowParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Generate particles based on screen size
  const particles = useMemo(() => {
    if (dimensions.width === 0) return [];
    
    const particleCount = Math.min(80, Math.floor((dimensions.width * dimensions.height) / 15000));
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 20 + 10,
        drift: Math.random() * 10 - 5
      });
    }
    
    return newParticles;
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes snow-fall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift));
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: var(--base-opacity);
          }
          50% {
            opacity: calc(var(--base-opacity) * 1.5);
          }
        }
      `}</style>
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            '--base-opacity': particle.opacity,
            '--drift': `${particle.drift}px`,
            animation: `snow-fall ${particle.speed}s linear infinite, twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `-${Math.random() * particle.speed}s`,
            boxShadow: particle.size > 2 ? '0 0 4px rgba(255, 255, 255, 0.3)' : 'none'
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default SnowParticles;
