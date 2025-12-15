
import { motion } from "framer-motion";

export const GradientText = ({ children, colors, className, animationSpeed = 8, showBorder = false }) => {
  const gradientStyle = {
    backgroundSize: "300%",
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
  };

  const borderGradientStyle = showBorder
    ? {
        borderWidth: "2px",
        borderStyle: "solid",
        borderImage: `linear-gradient(90deg, ${colors.join(", ")}) 1`,
      }
    : {};

  return (
    <motion.span
      className={className}
      style={{
        ...gradientStyle,
        ...borderGradientStyle,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: animationSpeed,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
};