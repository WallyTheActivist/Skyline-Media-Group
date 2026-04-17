import { motion } from "framer-motion";

export default function GlowButton({ label, href, className = "" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full border border-white/30 bg-gradient-to-r from-azure to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-halo transition duration-300 hover:shadow-[0_24px_70px_rgba(28,116,217,0.42)] ${className}`.trim()}
    >
      {label}
    </motion.a>
  );
}
