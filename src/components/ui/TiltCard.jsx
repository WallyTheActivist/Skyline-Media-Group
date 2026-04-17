import { useState } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) * 2 - 1) * 6;
    const rotateX = -((y / rect.height) * 2 - 1) * 6;

    setRotate({ x: rotateX, y: rotateY });
  }

  function handleLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ translateY: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{ transform: `perspective(1100px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-7 shadow-soft backdrop-blur-md transition ${className}`.trim()}
    >
      {children}
    </motion.article>
  );
}
