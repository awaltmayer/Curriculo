import React, { useEffect, useRef } from 'react';

interface Fish {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  direction: 1 | -1;
  rotation: number;
}

export default function AnimatedKoiFish() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fishRef = useRef<Fish[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize fish
    if (fishRef.current.length === 0) {
      for (let i = 0; i < 6; i++) {
        fishRef.current.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.7) + canvas.height * 0.15,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 20 + 25,
          direction: Math.random() > 0.5 ? 1 : -1,
          rotation: 0,
        });
      }
    }

    const drawKoiFish = (ctx: CanvasRenderingContext2D, fish: Fish) => {
      ctx.save();
      ctx.translate(fish.x, fish.y);
      ctx.rotate(fish.rotation);

      if (fish.direction === -1) {
        ctx.scale(-1, 1);
      }

      // Body
      ctx.fillStyle = '#00F0FF';
      ctx.beginPath();
      ctx.ellipse(0, 0, fish.size, fish.size * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.fillStyle = '#00D9E8';
      ctx.beginPath();
      ctx.arc(fish.size * 0.4, 0, fish.size * 0.35, 0, Math.PI * 2);
      ctx.fill();

      // Eye
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(fish.size * 0.55, -fish.size * 0.15, fish.size * 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(fish.size * 0.58, -fish.size * 0.17, fish.size * 0.05, 0, Math.PI * 2);
      ctx.fill();

      // Gill
      ctx.strokeStyle = '#00D9E8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(fish.size * 0.15, -fish.size * 0.25, fish.size * 0.15, 0, Math.PI);
      ctx.stroke();

      // Tail
      ctx.fillStyle = '#00F0FF';
      ctx.beginPath();
      ctx.moveTo(-fish.size * 0.3, 0);
      ctx.lineTo(-fish.size * 0.7, -fish.size * 0.35);
      ctx.lineTo(-fish.size * 0.7, fish.size * 0.35);
      ctx.closePath();
      ctx.fill();

      // Tail detail
      ctx.strokeStyle = '#00D9E8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-fish.size * 0.5, -fish.size * 0.15);
      ctx.lineTo(-fish.size * 0.7, -fish.size * 0.3);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-fish.size * 0.5, fish.size * 0.15);
      ctx.lineTo(-fish.size * 0.7, fish.size * 0.3);
      ctx.stroke();

      // Dorsal fin
      ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.beginPath();
      ctx.moveTo(0, -fish.size * 0.4);
      ctx.lineTo(-fish.size * 0.2, -fish.size * 0.6);
      ctx.lineTo(fish.size * 0.1, -fish.size * 0.35);
      ctx.closePath();
      ctx.fill();

      // Glow effect
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(0, 0, fish.size + 3, fish.size * 0.5 + 3, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      // Clear with transparency
      ctx.fillStyle = 'rgba(30, 30, 30, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw fish
      fishRef.current.forEach((fish) => {
        // Update position
        fish.x += fish.vx;
        fish.y += fish.vy;

        // Add slight wave motion
        fish.vy += Math.sin(Date.now() * 0.001 + fish.id) * 0.05;

        // Bounce off walls
        if (fish.x - fish.size < 0 || fish.x + fish.size > canvas.width) {
          fish.vx *= -1;
          fish.direction = fish.vx > 0 ? 1 : -1;
        }

        if (fish.y - fish.size < 0 || fish.y + fish.size > canvas.height) {
          fish.vy *= -1;
        }

        // Clamp position
        fish.x = Math.max(fish.size, Math.min(canvas.width - fish.size, fish.x));
        fish.y = Math.max(fish.size, Math.min(canvas.height - fish.size, fish.y));

        // Update rotation based on velocity
        fish.rotation = Math.atan2(fish.vy, fish.vx);

        // Draw fish
        drawKoiFish(ctx, fish);
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
