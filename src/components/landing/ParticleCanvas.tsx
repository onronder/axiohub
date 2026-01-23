import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}

export const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const startTimeRef = useRef<number>(Date.now());

  // State management for different screen sizes and performance
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  // Detect mobile devices and screen size
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsVerySmall(width < 400);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Pause animation when tab is not visible (performance optimization)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
      // Reset timer when tab becomes visible again
      if (!document.hidden) {
        startTimeRef.current = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // Don't render on very small screens
    if (isVerySmall) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Don't animate if tab is not visible
    if (!isTabVisible) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      // Reduce particle count on mobile
      const baseCount = isMobile ? 15 : 40;
      const particleCount = Math.min(baseCount, Math.floor(window.innerWidth / (isMobile ? 40 : 30)));

      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Slower movement on mobile to reduce CPU usage
          vx: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
          vy: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const updateConnections = () => {
      connectionsRef.current = [];
      // Reduce connection distance on mobile
      const maxDistance = isMobile ? 100 : 150;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: 1 - distance / maxDistance,
            });
          }
        }
      }
    };

    const animate = () => {
      // Pause animation after 15 seconds on mobile to save battery
      const elapsed = Date.now() - startTimeRef.current;
      if (isMobile && elapsed > 15000) {
        // Draw one final frame and stop
        return;
      }

      // Skip animation if user prefers reduced motion
      if (prefersReducedMotion) {
        ctx.fillStyle = 'hsl(0 0% 2%)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse attraction (subtle) - disabled on mobile for performance
        if (!isMobile) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200 && distance > 0) {
            particle.vx += (dx / distance) * 0.01;
            particle.vy += (dy / distance) * 0.01;
          }
        }

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Speed limit
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        const maxSpeed = isMobile ? 0.5 : 1;
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }
      });

      updateConnections();

      // Draw connections with gradient
      connectionsRef.current.forEach((connection) => {
        const from = particlesRef.current[connection.from];
        const to = particlesRef.current[connection.to];

        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${connection.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, ${connection.opacity * 0.3})`);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw particles
      particlesRef.current.forEach((particle) => {
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2
        );
        gradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Aurora effect overlay (simplified on mobile)
      if (!isMobile) {
        const time = Date.now() * 0.0005;
        const auroraGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        auroraGradient.addColorStop(0, `rgba(139, 92, 246, ${0.02 + Math.sin(time) * 0.01})`);
        auroraGradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.02 + Math.cos(time) * 0.01})`);
        auroraGradient.addColorStop(1, `rgba(139, 92, 246, ${0.02 + Math.sin(time + 1) * 0.01})`);
        ctx.fillStyle = auroraGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Only track mouse on desktop
      if (!isMobile) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    startTimeRef.current = Date.now();
    animate();

    window.addEventListener('resize', handleResize);

    // Only add mouse listener on desktop
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, isVerySmall, isTabVisible]);

  // Render gradient fallback for very small screens
  if (isVerySmall) {
    return (
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(0 0% 2%) 0%, hsl(262 20% 8%) 100%)'
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'hsl(0 0% 2%)' }}
      aria-hidden="true"
    />
  );
};
