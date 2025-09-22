import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  duration?: number; // ms
  suffix?: string;
  className?: string;
  max?: number; // for syncing counters
  active?: boolean; // only animate when true
}


// Hook to detect if element is in view
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
};

const Counter = ({ to, duration = 2000, suffix = "", className = "", max, active = true }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3 });
  // Calculate the number of steps based on the max value, so all finish together
  const steps = Math.ceil((max ?? to) / (duration / 30));
  const step = Math.max(1, Math.ceil(to / steps));

  useEffect(() => {
    if (!(active && inView)) return;
    let start = 0;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.min(start, to));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [to, step, inView, active]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
};

export default Counter;
