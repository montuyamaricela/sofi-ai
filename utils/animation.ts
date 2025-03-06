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
