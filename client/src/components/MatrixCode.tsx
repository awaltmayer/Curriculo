import React, { useEffect, useRef } from 'react';
import '../styles/matrix-code.css';

export default function MatrixCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to use
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');

    // Columns
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    // Colors - using cyan and purple from the theme
    const colors = ['#00F0FF', '#7000FF', '#00D9E8', '#8B2FFF'];

    const draw = () => {
      // More opaque background for cleaner effect
      ctx.fillStyle = 'rgba(30, 30, 30, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Roboto Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Random color from palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        // Add glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Randomly reset drop or move down (slower speed)
        if (drops[i] * fontSize > canvas.height || Math.random() > 0.985) {
          drops[i] = 0;
        } else {
          drops[i] += 0.5;  // Slower movement
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-code-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
