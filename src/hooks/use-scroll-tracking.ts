import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

/**
 * Hook to track scroll depth at key thresholds (25%, 50%, 75%, 100%)
 * Each threshold is only tracked once per page load
 */
export const useScrollTracking = () => {
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrolled = (window.scrollY / scrollHeight) * 100;
      
      // Track at 25%, 50%, 75%, 100% thresholds
      const thresholds = [25, 50, 75, 100];
      thresholds.forEach((threshold) => {
        if (scrolled >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
