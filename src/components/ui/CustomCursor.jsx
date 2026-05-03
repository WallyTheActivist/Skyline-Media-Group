import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot — tight spring, near-instant follow
  const dotX = useSpring(mouseX, { stiffness: 700, damping: 32, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 700, damping: 32, mass: 0.3 });

  // Ring — loose spring, lags behind for premium feel
  const ringX = useSpring(mouseX, { stiffness: 130, damping: 20, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 130, damping: 20, mass: 0.6 });

  useEffect(() => {
    // Only activate on precise-pointer devices (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setActive(true);

    function onMove(e) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    }

    function onLeave() {
      setVisible(false);
    }

    function onEnter() {
      setVisible(true);
    }

    function checkHover(e) {
      const el = e.target;
      setHovering(
        !!el.closest(
          "a, button, [role='button'], input, select, textarea, label"
        )
      );
    }

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", checkHover);

    document.body.classList.add("hide-cursor");

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", checkHover);
      document.body.classList.remove("hide-cursor");
    };
  }, [mouseX, mouseY]);

  if (!active) return null;

  return (
    <>
      {/* Outer ring — lags with spring, expands on hover */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          borderColor: hovering
            ? "rgba(28,116,217,0.75)"
            : "rgba(28,116,217,0.38)",
          backgroundColor: hovering
            ? "rgba(28,116,217,0.07)"
            : "transparent",
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Inner dot — tight follow, hides on hover so ring takes focus */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[7px] w-[7px] rounded-full bg-azure"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </>
  );
}
