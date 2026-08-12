import { useRef } from "react";
import { useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";

interface ZoomRevealOptions {
  /** starting scale before the element has scrolled into place (small = zooms up, large = zooms down) */
  from?: number;
  /** ending scale once fully revealed */
  to?: number;
  /** scroll offset pair passed straight to useScroll — tune when the reveal starts/ends */
  offset?: [string, string];
}

interface ZoomReveal {
  ref: React.RefObject<HTMLDivElement>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}

/**
 * Ties an element's scale + opacity to its own scroll position, so it reveals
 * itself as it enters the viewport — in either scroll direction, since it's
 * driven by scrollYProgress rather than a one-shot "whileInView" trigger.
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

  const rawScale = useTransform(scrollYProgress, [0, 1], [from, to]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scale = useSpring(rawScale, { stiffness: 90, damping: 20, mass: 0.6 });
  const opacity = useSpring(rawOpacity, { stiffness: 90, damping: 22 });

  return { ref, scale, opacity };
}