import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
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
  amount = 0.2,
}) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeItem: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);
