import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  padding = 'md',
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hoverable
    ? 'hover:shadow-2xl hover:-translate-y-1'
    : '';

  return (
    <div
      className={`card ${paddingStyles[padding]} ${hoverStyles} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
