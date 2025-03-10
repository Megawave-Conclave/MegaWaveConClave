import React from 'react';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export const TextShimmer: React.FC<TextShimmerProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer ${className}`}>
      {children}
    </span>
  );
};