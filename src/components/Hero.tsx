import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/**
 * The Kitcheners — split-screen animated hero
 * React + TypeScript(-ready) + Tailwind + Framer Motion
 *
 * Drop into a Vite/React+TS project as KitchenersHero.tsx — the JSX below
 * has no TS-only syntax removed, it's just saved as .jsx so it can be
 * previewed directly. Rename the extension and it will work as-is in a
 * TS project (add `: string[]` etc. to props if you want strict typing).
 */

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Video", href: "#" },
  { label: "Elopement Guides", href: "#", hasDropdown: true },
  { label: "Education", href: "#", hasDropdown: true },
  { label: "Contact", href: "#" },
];

// Replace these with the studio's real photography — seeded placeholders
// stand in so the crossfade behavior can be previewed immediately.
const LEFT_IMAGES = [
  "https://picsum.photos/seed/kitcheners-left-a/1400/1600",
  "https://picsum.photos/seed/kitcheners-left-b/1400/1600",
];

const RIGHT_IMAGES = [
  "https://picsum.photos/seed/kitcheners-right-a/1400/1600",
  "https://picsum.photos/seed/kitcheners-right-b/1400/1600",
];

// One shared clock for both panes. Two independent timers (even at the same
// interval) can drift a frame apart in the browser, and each <img> loads
// over the network at its own speed — so instead of per-pane timers, the
// parent owns a single `index` and both panes just render off it. That
// guarantees the crossfade fires in the same React commit for both sides.
function useSyncedIndex(length, interval) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);
    return () => clearInterval(id);
  }, [length, interval]);

  return index;
}

// Preload every frame up front so the first crossfade doesn't stall on
// either side while its image is still downloading.
function usePreload(urls) {
  useEffect(() => {
    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [urls]);
}

function ImagePane({ images, index, grayscaleAlt = false }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-900">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 8, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt=""
            className={`h-full w-full object-cover ${
              grayscaleAlt && index % 2 === 1 ? "grayscale" : ""
            }`}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
      {/* readability wash so overlaid type stays legible on any frame */}
      <div className="pointer-events-none absolute inset-0 bg-black/15" />
    </div>
  );
}

export default function KitchenersHero() {
  const [navOpen, setNavOpen] = useState(false);

  const frameCount = Math.max(LEFT_IMAGES.length, RIGHT_IMAGES.length);
  const index = useSyncedIndex(frameCount, 5000);
  usePreload([...LEFT_IMAGES, ...RIGHT_IMAGES]);

  // Raw page scroll position in pixels (not section-relative progress), so
  // no extra height/spacing is needed anywhere in the layout. Heading
  // shrinks, drifts down, and fades out over the first 400px of scroll.
  const { scrollY } = useScroll();
  const headingScale = useTransform(scrollY, [0, 400], [1, 0.55]);
  const headingY = useTransform(scrollY, [0, 400], [0, 220]);
  const headingOpacity = useTransform(scrollY, [0, 250, 400], [1, 1, 0]);

  return (
    <div className="min-h-screen w-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@400;500&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
      `}</style>

      {/* ---------- Split hero ---------- */}
      <section className="relative h-[calc(100vh-70px)] w-full overflow-hidden">
        <div className="grid h-full grid-cols-2">
          <ImagePane images={LEFT_IMAGES} index={index % LEFT_IMAGES.length} />
          <ImagePane images={RIGHT_IMAGES} index={index % RIGHT_IMAGES.length} grayscaleAlt />
        </div>

        {/* hairline seam */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/25" />

        {/* centered mark */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              scale: headingScale,
              y: headingY,
              opacity: headingOpacity,
            }}
            className="font-display leading-[0.95] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
          >
            <span className="block text-[15vw] tracking-[0.02em] sm:text-[9vw] lg:text-[6.5vw]">
              The
            </span>
            <span className="-mt-2 block text-[15vw] tracking-[0.02em] sm:text-[9vw] lg:text-[6.5vw]">
              Kitcheners
            </span>
          </motion.h1>
        </div>
      </section>
    </div>
  );
}