import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface FadeInBlurProps {
  children: ReactNode;
  className?: string;
  amount?: number;
}

export const FadeInBlur: React.FC<FadeInBlurProps> = ({
  children,
  className = "",
  amount = 0.1,
}) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
    className={className}
    style={{ willChange: "opacity, transform" }}
  >
    {children}
  </motion.div>
);

export const FadeItem: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <motion.div 
    variants={itemVariants} 
    className={className}
    style={{ willChange: "opacity, transform" }}
  >
    {children}
  </motion.div>
);
