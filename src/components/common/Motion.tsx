import { useState } from "react";
import { useAnimation } from "@/hooks/use-animation";

interface MotionProps {
  children: React.ReactNode;
  initial?: string;
  animate?: string;
  whileHover?: string;
  whileTap?: string;
  transition?: string;
  delay?: number;
  className?: string;
  onClick?: () => void;
}

export function Motion({ children, initial = "hidden", animate = "visible", whileHover = "", whileTap = "", transition = "smooth", delay = 0, className = "", onClick }: MotionProps) {
  const [ref, isInVisible] = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getAnimationClass = () => {
    let classes = [];

    // Initial & Animate states
    if (isInVisible) {
      switch (animate) {
        case "slideUp":
          classes.push("translate-y-0 opacity-100");
          break;
        case "slideLeft":
          classes.push("translate-x-0 opacity-100");
          break;
        case "slideRight":
          classes.push("-translate-x-0 opacity-100");
          break;
        case "fadeIn":
          classes.push("opacity-100");
          break;
        case "scaleIn":
          classes.push("scale-100 opacity-100");
          break;
        case "rotateIn":
          classes.push("rotate-0 opacity-100");
          break;
        default:
          classes.push("translate-y-0 opacity-100");
      }
    } else {
      switch (initial) {
        case "slideUp":
          classes.push("translate-y-12 opacity-0");
          break;
        case "slideLeft":
          classes.push("-translate-x-12 opacity-0");
          break;
        case "slideRight":
          classes.push("translate-x-12 opacity-0");
          break;
        case "fadeIn":
          classes.push("opacity-0");
          break;
        case "scaleIn":
          classes.push("scale-95 opacity-0");
          break;
        case "rotateIn":
          classes.push("rotate-12 opacity-0");
          break;
        default:
          classes.push("translate-y-12 opacity-0");
      }
    }

    // Hover states
    if (isHovered && whileHover) {
      switch (whileHover) {
        case "scale":
          classes.push("scale-105");
          break;
        case "lift":
          classes.push("-translate-y-2");
          break;
        case "rotate":
          classes.push("rotate-3");
          break;
        case "glow":
          classes.push("shadow-2xl");
          break;
      }
    }

    // Tap states
    if (isPressed && whileTap) {
      switch (whileTap) {
        case "scale":
          classes.push("scale-95");
          break;
        case "shrink":
          classes.push("scale-90");
          break;
      }
    }

    // Transition classes
    switch (transition) {
      case "smooth":
        classes.push("transition-all duration-700 ease-out");
        break;
      case "spring":
        classes.push("transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]");
        break;
      case "bounce":
        classes.push("transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]");
        break;
      case "fast":
        classes.push("transition-all duration-300 ease-out");
        break;
      default:
        classes.push("transition-all duration-500 ease-out");
    }

    return classes.join(" ");
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: isInVisible ? `${delay}ms` : "0ms",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({ children, staggerDelay = 100 }: { children: React.ReactNode; staggerDelay?: number }) {
  return (
    <div className="space-y-4">
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <Motion key={index} delay={index * staggerDelay} animate="slideUp">
            {child}
          </Motion>
        ))
      ) : (
        <Motion animate="slideUp">{children}</Motion>
      )}
    </div>
  );
}
