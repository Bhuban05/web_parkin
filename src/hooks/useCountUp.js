import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 to target with easing
 * @param {number} target - final value
 * @param {number} duration - animation duration in ms (default 2200)
 * @param {boolean} shouldCount - whether to start counting
 * @param {number} decimals - decimal places (default 0)
 * @returns {{ count: number, formatted: string }}
 */
export function useCountUp(target = 100, duration = 2200, shouldCount = true, decimals = 0) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!shouldCount) {
      setCount(0);
      return;
    }

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo for satisfying deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * target;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startRef.current = null;
    };
  }, [target, duration, shouldCount, decimals]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : count.toLocaleString();

  return { count, formatted };
}
