import { useEffect, useState } from 'react';

interface Fish {
  id: number;
  size: number;
  startY: number;
  duration: number;
  delay: number;
  path: number;
}

const SwimmingFish = () => {
  const [fish, setFish] = useState<Fish[]>([]);

  useEffect(() => {
    // Generate 8-12 fish with random properties
    const fishCount = Math.floor(Math.random() * 5) + 8;
    const newFish: Fish[] = [];

    for (let i = 0; i < fishCount; i++) {
      newFish.push({
        id: i,
        size: Math.random() * 40 + 30, // Size between 30-70px
        startY: Math.random() * 100, // Random vertical position (%)
        duration: Math.random() * 20 + 15, // Duration between 15-35s
        delay: Math.random() * 10, // Random delay up to 10s
        path: Math.floor(Math.random() * 3), // Different swimming paths
      });
    }

    setFish(newFish);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {fish.map((f) => (
        <div
          key={f.id}
          className="absolute"
          style={{
            top: `${f.startY}%`,
            animation: `swim-${f.path} ${f.duration}s linear ${f.delay}s infinite`,
            width: `${f.size}px`,
            height: `${f.size * 0.6}px`,
          }}
        >
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            }}
          >
            {/* Koi Fish Body */}
            <ellipse
              cx="50"
              cy="30"
              rx="28"
              ry="18"
              fill="rgba(59, 130, 246, 0.7)"
              className="fish-body"
            />
            
            {/* Tail */}
            <path
              d="M 78 30 Q 88 20, 95 15 Q 88 30, 95 45 Q 88 40, 78 30 Z"
              fill="rgba(59, 130, 246, 0.6)"
              className="fish-tail"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 78 30"
                to="15 78 30"
                dur="0.6s"
                repeatCount="indefinite"
                values="0 78 30; 15 78 30; 0 78 30; -15 78 30; 0 78 30"
              />
            </path>

            {/* Top Fin */}
            <path
              d="M 45 15 Q 48 8, 52 10 Q 50 15, 50 15 Z"
              fill="rgba(59, 130, 246, 0.5)"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 48 15"
                to="10 48 15"
                dur="1.2s"
                repeatCount="indefinite"
                values="0 48 15; 10 48 15; 0 48 15"
              />
            </path>

            {/* Bottom Fin */}
            <path
              d="M 40 40 Q 38 48, 42 48 Q 42 43, 42 40 Z"
              fill="rgba(59, 130, 246, 0.5)"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 40 44"
                to="-10 40 44"
                dur="1.2s"
                repeatCount="indefinite"
                values="0 40 44; -10 40 44; 0 40 44"
              />
            </path>

            {/* Side Fins */}
            <ellipse cx="35" cy="32" rx="8" ry="4" fill="rgba(59, 130, 246, 0.4)" opacity="0.6">
              <animate
                attributeName="rx"
                values="8;10;8"
                dur="1s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Eye */}
            <circle cx="30" cy="28" r="3" fill="rgba(255, 255, 255, 0.9)" />
            <circle cx="31" cy="28" r="1.5" fill="rgba(0, 0, 0, 0.8)" />

            {/* Highlight on body */}
            <ellipse
              cx="42"
              cy="25"
              rx="12"
              ry="8"
              fill="rgba(147, 197, 253, 0.3)"
            />

            {/* Mouth */}
            <circle cx="25" cy="30" r="1.5" fill="rgba(30, 58, 138, 0.6)" />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes swim-0 {
          0% {
            transform: translateX(-10vw) translateY(0px);
          }
          100% {
            transform: translateX(110vw) translateY(30px);
          }
        }

        @keyframes swim-1 {
          0% {
            transform: translateX(-10vw) translateY(0px);
          }
          25% {
            transform: translateX(25vw) translateY(-20px);
          }
          50% {
            transform: translateX(50vw) translateY(10px);
          }
          75% {
            transform: translateX(75vw) translateY(-15px);
          }
          100% {
            transform: translateX(110vw) translateY(0px);
          }
        }

        @keyframes swim-2 {
          0% {
            transform: translateX(-10vw) translateY(0px);
          }
          33% {
            transform: translateX(30vw) translateY(15px);
          }
          66% {
            transform: translateX(70vw) translateY(-25px);
          }
          100% {
            transform: translateX(110vw) translateY(5px);
          }
        }

        .fish-body {
          animation: body-pulse 2s ease-in-out infinite;
        }

        @keyframes body-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );
};

export default SwimmingFish;
