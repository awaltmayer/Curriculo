import React from 'react';
import '../styles/fish.css';

export default function SwimmingFish() {
  return (
    <div className="fish-container">
      {/* Fish 1 */}
      <svg className="fish fish-1" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="#00F0FF" />
        <circle cx="60" cy="25" r="8" fill="#00F0FF" />
        <circle cx="65" cy="25" r="3" fill="#000" />
        <polygon points="70,30 85,20 85,40" fill="#00F0FF" />
        <path d="M 30 15 Q 25 10 20 15" stroke="#00D9E8" strokeWidth="2" fill="none" />
      </svg>

      {/* Fish 2 */}
      <svg className="fish fish-2" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="#00F0FF" />
        <circle cx="60" cy="30" r="8" fill="#00F0FF" />
        <circle cx="65" cy="30" r="3" fill="#000" />
        <polygon points="70,30 85,20 85,40" fill="#00F0FF" />
        <path d="M 30 12 Q 25 8 20 12" stroke="#00D9E8" strokeWidth="2" fill="none" />
      </svg>

      {/* Fish 3 */}
      <svg className="fish fish-3" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="#00F0FF" />
        <circle cx="60" cy="28" r="8" fill="#00F0FF" />
        <circle cx="65" cy="28" r="3" fill="#000" />
        <polygon points="70,30 85,18 85,42" fill="#00F0FF" />
        <path d="M 30 14 Q 25 10 20 14" stroke="#00D9E8" strokeWidth="2" fill="none" />
      </svg>

      {/* Fish 4 */}
      <svg className="fish fish-4" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="#00F0FF" />
        <circle cx="60" cy="32" r="8" fill="#00F0FF" />
        <circle cx="65" cy="32" r="3" fill="#000" />
        <polygon points="70,30 85,20 85,40" fill="#00F0FF" />
        <path d="M 30 16 Q 25 12 20 16" stroke="#00D9E8" strokeWidth="2" fill="none" />
      </svg>

      {/* Fish 5 */}
      <svg className="fish fish-5" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="#00F0FF" />
        <circle cx="60" cy="26" r="8" fill="#00F0FF" />
        <circle cx="65" cy="26" r="3" fill="#000" />
        <polygon points="70,30 85,18 85,42" fill="#00F0FF" />
        <path d="M 30 13 Q 25 9 20 13" stroke="#00D9E8" strokeWidth="2" fill="none" />
      </svg>

      {/* Fish 6 */}
      <svg className="fish fish-6" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="#00F0FF" />
        <circle cx="60" cy="30" r="8" fill="#00F0FF" />
        <circle cx="65" cy="30" r="3" fill="#000" />
        <polygon points="70,30 85,20 85,40" fill="#00F0FF" />
        <path d="M 30 15 Q 25 11 20 15" stroke="#00D9E8" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
