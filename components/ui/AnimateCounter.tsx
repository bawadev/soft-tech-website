'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

interface AnimateCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export const AnimateCounter: React.FC<AnimateCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
  }, [springValue, decimals]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
};
