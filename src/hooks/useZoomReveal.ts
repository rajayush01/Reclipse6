import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
  type UseScrollOptions,
} from "framer-motion";

interface ZoomRevealOptions {
  /** Starting scale before the element has scrolled into place */
  from?: number;

  /** Ending scale once fully revealed */
  to?: number;

  /** Scroll offset pair passed to Framer Motion */
  offset?: UseScrollOptions["offset"];
}

interface ZoomReveal {
  ref: React.RefObject<HTMLDivElement | null>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}

/**
 * Ties an element's scale + opacity to its own scroll position.
 */
export function useZoomReveal({
  from = 0.65,
  to = 1,
  offset = ["start 0.95", "start 0.4"],
}: ZoomRevealOptions = {}): ZoomReveal {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    [from, to]
  );

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  const scale = useSpring(rawScale, {
    stiffness: 90,
    damping: 20,
    mass: 0.6,
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 90,
    damping: 22,
  });

  return {
    ref,
    scale,
    opacity,
  };
}