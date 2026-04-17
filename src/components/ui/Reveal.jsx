import { motion } from "framer-motion";

const defaultTransition = { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] };

export default function Reveal({ children, delay = 0, y = 28, once = true, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
