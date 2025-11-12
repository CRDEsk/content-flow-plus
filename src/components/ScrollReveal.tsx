import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0,
  className = "" 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
  };

  const variant = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={isVisible ? variant.animate : variant.initial}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

