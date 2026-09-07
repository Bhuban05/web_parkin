import { useEffect, useRef, useState, useCallback } from "react";

/**
 * useScrollReveal — IntersectionObserver-based visibility hook
 * Triggers once when element enters viewport; respects prefers-reduced-motion
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    margin = "0px 0px -8% 0px",
    triggerOnce = true,
  } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: margin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, margin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * useReducedMotion — returns true if user prefers reduced motion
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
