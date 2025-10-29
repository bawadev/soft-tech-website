'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`font-bold text-gradient flex items-baseline ${sizeClasses[size]} ${className}`}>
      <span>Soft</span>
      <span
        className="mx-0.5"
        style={{
          fontFamily: 'SpaceX, sans-serif',
          fontSize: '1.2em',
          lineHeight: '0.8',
          letterSpacing: '-0.02em'
        }}
      >
        X
      </span>
      <span className="ml-1">World</span>
    </div>
  );
};
