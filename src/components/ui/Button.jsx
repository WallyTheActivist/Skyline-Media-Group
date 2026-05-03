import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

const variantClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost"
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  motionEnabled = true,
  type = "button",
  ...props
}) {
  const classes = cn(variantClasses[variant] ?? variantClasses.primary, className);
  const isInternal = typeof href === "string" && href.startsWith("/");

  if (href) {
    if (isInternal) {
      const node = <Link to={href} className={classes} {...props}>{children}</Link>;
      return motionEnabled ? <MotionWrap>{node}</MotionWrap> : node;
    }

    const node = (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );

    return motionEnabled ? <MotionWrap>{node}</MotionWrap> : node;
  }

  const node = (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );

  return motionEnabled ? <MotionWrap>{node}</MotionWrap> : node;
}

function MotionWrap({ children }) {
  return (
    <motion.span
      whileHover={{ y: -2.5, scale: 1.02 }}
      whileTap={{ scale: 0.96, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  );
}
