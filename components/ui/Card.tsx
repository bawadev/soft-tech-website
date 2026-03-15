import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'flat' | 'highlight';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  padding = 'md',
  variant = 'default',
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: '',
    elevated: 'shadow-xl border border-secondary-100',
    flat: 'shadow-none border border-secondary-200',
    highlight: 'border-2 border-primary-200 bg-primary-50/50',
  };

  const hoverStyles = hoverable
    ? 'hover:shadow-2xl hover:-translate-y-1'
    : '';

  return (
    <div
      className={`card ${paddingStyles[padding]} ${variantStyles[variant]} ${hoverStyles} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
