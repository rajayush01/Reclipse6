import { motion } from "framer-motion";
import { useZoomReveal } from "@/hooks/useZoomReveal";

/**
 * RECLIPSE — Featured Weddings & Elopements
 *
 * A staggered two-column gallery: the right column sits offset lower than
 * the left, so the eye travels down in a gentle zig-zag rather than a rigid
 * grid. Every photograph shares the hero's scroll-tied reveal — small and
 * invisible at rest, growing to full scale and opacity as it enters view,
 * in either scroll direction.
 */

interface WeddingEntry {
  image: string;
  caption: string;
  aspect: "portrait" | "landscape";
}

const LEFT_COLUMN: WeddingEntry[] = [
  {
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop",
    caption: "Glencoe Elopement Photographer",
    aspect: "portrait",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
    caption: "Elopement In North Spain",
    aspect: "landscape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop",
    caption: "Borthwick Castle Wedding Photographer",
    aspect: "portrait",
  },
];

const RIGHT_COLUMN: WeddingEntry[] = [
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    caption: "Gairnshiel Lodge Wedding Photography",
    aspect: "landscape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    caption: "Couple Photoshoot at Glencoe",
    aspect: "portrait",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    caption: "Eilean Shona Wedding Photography",
    aspect: "landscape",
  },
];

function WeddingCard({ image, caption, aspect }: WeddingEntry) {
  const { ref, scale, opacity } = useZoomReveal({ from: 0.7, to: 1 });

  return (
    <div className="flex flex-col">
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className={`w-full overflow-hidden ${
          aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={image}
          alt={caption}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mt-6 text-center font-serif text-2xl text-[#171715] sm:text-[26px]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {caption}
      </motion.p>
    </div>
  );
}

export default function FeaturedWeddings() {
  return (
    <section className="w-full bg-[#F5F3EE] px-6 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-20 max-w-4xl text-center font-serif text-[11vw] leading-[1.1] text-[#171715] sm:text-5xl lg:text-6xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        FEATURED WEDDINGS AND ELOPEMENTS
      </motion.h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 sm:gap-y-32">
        {/* left column */}
        <div className="flex flex-col gap-20 sm:gap-32">
          {LEFT_COLUMN.map((entry) => (
            <WeddingCard key={entry.caption} {...entry} />
          ))}
        </div>

        {/* right column — offset lower to create the zig-zag rhythm */}
        <div className="flex flex-col gap-20 sm:mt-40 sm:gap-32">
          {RIGHT_COLUMN.map((entry) => (
            <WeddingCard key={entry.caption} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}