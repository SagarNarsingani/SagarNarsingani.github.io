import { useState, useEffect } from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    
    const curr = ref.current;
    if (curr) {
      observer.observe(curr);
    }
    return () => {
      observer.unobserve(curr);
    };
  }); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
