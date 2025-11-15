import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, duration = 2, className = "" }: AnimatedNumberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Extract numeric value and suffix (e.g., "10+" -> 10, "+")
  const extractNumber = (str: string): { num: number; suffix: string } => {
    const match = str.match(/^(\d+)(.*)$/);
    if (match) {
      return { num: parseInt(match[1], 10), suffix: match[2] };
    }
    return { num: 0, suffix: str };
  };

  useEffect(() => {
    if (!isInView) return;

    const { num, suffix } = extractNumber(value);
    if (num === 0) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNum = Math.floor(easeOutQuart * num);

      setDisplayValue(`${currentNum}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;



