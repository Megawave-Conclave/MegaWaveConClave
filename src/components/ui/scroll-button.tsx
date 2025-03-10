import React from 'react';

export const ScrollButton: React.FC = () => {
  const scrollToGameModes = () => {
    const gameModes = document.getElementById('game-modes');
    if (gameModes) {
      gameModes.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToGameModes}
      className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      aria-label="Scroll to game modes"
    >
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </button>
  );
};