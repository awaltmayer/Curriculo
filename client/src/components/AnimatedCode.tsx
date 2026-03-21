import React from 'react';
import '../styles/animated-code.css';

export default function AnimatedCode() {
  const codeSnippets = [
    {
      id: 'code-1',
      code: `const developer = {
  name: "Augusto",
  skills: ["React", "TypeScript"],
  passion: "Web Dev"
};`,
      top: '10%',
      left: '5%',
      delay: '0s',
    },
    {
      id: 'code-2',
      code: `function buildAwesome() {
  return <Portfolio />;
}`,
      top: '25%',
      right: '8%',
      delay: '1s',
    },
    {
      id: 'code-3',
      code: `const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React"
];`,
      bottom: '30%',
      left: '10%',
      delay: '2s',
    },
    {
      id: 'code-4',
      code: `if (passionate && creative) {
  return "Full-Stack Developer";
}`,
      bottom: '15%',
      right: '5%',
      delay: '1.5s',
    },
    {
      id: 'code-5',
      code: `const projects = [
  { name: "Portfolio", tech: "React" },
  { name: "Games", tech: "Unity" }
];`,
      top: '50%',
      right: '15%',
      delay: '2.5s',
    },
    {
      id: 'code-6',
      code: `while (learning) {
  improve();
  innovate();
}`,
      top: '65%',
      left: '8%',
      delay: '0.5s',
    },
  ];

  return (
    <div className="animated-code-container">
      {codeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="code-snippet"
          style={{
            top: snippet.top,
            bottom: snippet.bottom,
            left: snippet.left,
            right: snippet.right,
            animationDelay: snippet.delay,
          }}
        >
          <pre>
            <code>{snippet.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}
