import { Variants, Target } from "framer-motion";

// variant for animation

export const animationVariant = (
  direction: "x" | "y",
  distance: number,
  rotate?: number,
  duration?: number,
  delay?: number
): Variants => ({
  offscreen: {
    [direction]: distance,
    opacity: 0,
    rotate: rotate ?? 0,
  } as Target,
  onscreen: {
    [direction]: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: delay ?? 0.1,
      type: "spring" as const,
      bounce: 0.4,
      duration: duration ?? 3,
    },
  } as Target,
});

// Add half flip animation (from top to normal)
export const halfFlipAnimation = (delay?: number): Variants => ({
  offscreen: {
    rotateX: 90, // Start at 90 degrees (halfway flipped)
    opacity: 0,
    scale: 0.9,
    transformPerspective: 1000, // Add perspective for better 3D effect
    transformOrigin: "top", // Flip from top edge
  } as Target,
  onscreen: {
    rotateX: 0, // Return to normal position
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay ?? 0.1,
      type: "spring",
      bounce: 0.3, // Reduced bounce for more controlled animation
      duration: 3, // Faster duration for snappier effect
      ease: "easeOut",
    },
  } as Target,
});
