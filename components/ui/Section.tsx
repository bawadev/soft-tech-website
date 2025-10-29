import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  padding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  containerSize = 'lg',
  padding = true,
}) => {
  return (
    <section
      id={id}
      className={`${padding ? 'section-padding' : ''} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};
