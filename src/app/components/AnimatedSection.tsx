import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: Props) {
  const initial = direction === "up"
    ? { opacity: 0, y: 40 }
    : direction === "left"
    ? { opacity: 0, x: -40 }
    : { opacity: 0, x: 40 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
