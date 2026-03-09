import React, { useEffect, useRef, useState } from 'react';

interface Fish {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  direction: 1 | -1;
}

export default function InteractiveFishBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fish, setFish] = useState<Fish[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const fishCountRef = useRef(8);
  const animationIdRef = useRef<number>();

  // Initialize fish
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initialFish: Fish[] = [];
    for (let i = 0; i < fishCountRef.current; i++) {
      initialFish.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 15 + 10,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }
    setFish(initialFish);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(30, 30, 30, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw fish
      setFish((prevFish) => {
        const updatedFish = prevFish.map((f) => {
          let newFish = { ...f };

          // Movement
          newFish.x += newFish.vx;
          newFish.y += newFish.vy;

          // Bounce off walls
          if (newFish.x - newFish.size < 0 || newFish.x + newFish.size > canvas.width) {
            newFish.vx *= -1;
            newFish.direction = newFish.vx > 0 ? 1 : -1;
          }
          if (newFish.y - newFish.size < 0 || newFish.y + newFish.size > canvas.height) {
            newFish.vy *= -1;
          }

          // Clamp position
          newFish.x = Math.max(newFish.size, Math.min(canvas.width - newFish.size, newFish.x));
          newFish.y = Math.max(newFish.size, Math.min(canvas.height - newFish.size, newFish.y));

          // Attraction to mouse (gentle)
          const dx = mousePos.x - newFish.x;
          const dy = mousePos.y - newFish.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const angle = Math.atan2(dy, dx);
            newFish.vx += Math.cos(angle) * 0.1;
            newFish.vy += Math.sin(angle) * 0.1;
          }

          // Speed limit
          const speed = Math.sqrt(newFish.vx ** 2 + newFish.vy ** 2);
          if (speed > 3) {
            newFish.vx = (newFish.vx / speed) * 3;
            newFish.vy = (newFish.vy / speed) * 3;
          }

          // Draw fish
          drawFish(ctx, newFish);

          return newFish;
        });

        return updatedFish;
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [mousePos]);

  const drawFish = (ctx: CanvasRenderingContext2D, f: Fish) => {
    ctx.save();
    ctx.translate(f.x, f.y);

    // Rotate fish based on direction
    if (f.direction === -1) {
      ctx.scale(-1, 1);
    }

    // Calculate rotation angle based on velocity
    const angle = Math.atan2(f.vy, f.vx);
    ctx.rotate(angle);

    // Draw fish body (cyan color)
    ctx.fillStyle = '#00F0FF';
    ctx.beginPath();
    ctx.ellipse(0, 0, f.size, f.size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw fish eye
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(f.size * 0.4, -f.size * 0.2, f.size * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Draw fish tail
    ctx.fillStyle = '#00F0FF';
    ctx.beginPath();
    ctx.moveTo(-f.size, 0);
    ctx.lineTo(-f.size - f.size * 0.5, -f.size * 0.4);
    ctx.lineTo(-f.size - f.size * 0.5, f.size * 0.4);
    ctx.closePath();
    ctx.fill();

    // Add glow effect
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, f.size + 2, f.size * 0.6 + 2, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
