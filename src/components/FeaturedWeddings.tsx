import { motion } from "framer-motion";
import { useZoomReveal } from "@/hooks/useZoomReveal";

import w1 from "../assests/w1.jpg";
import w2 from "../assests/w2.jpg";
import w3 from "../assests/w3.jpg";
import w4 from "../assests/w4.jpg";
import w5 from "../assests/w5.jpg";
import w6 from "../assests/w6.jpg";
import w7 from "../assests/w7.jpg";
import w8 from "../assests/w8.jpg";


interface WeddingEntry {
  image: string;
  caption: string;
  aspect: "portrait" | "landscape";
}


const LEFT_COLUMN: WeddingEntry[] = [
  {
    image: w1,
    caption: "Indian Wedding Photography",
    aspect: "portrait",
  },
  {
    image: w2,
    caption: "Traditional Indian Wedding",
    aspect: "landscape",
  },
  {
    image: w3,
    caption: "Indian Bride Wedding Photography",
    aspect: "portrait",
  },
  {
    image: w4,
    caption: "Indian Wedding Couple",
    aspect: "landscape",
  },
];

const RIGHT_COLUMN: WeddingEntry[] = [
  {
    image: w5,
    caption: "Indian Couple Photoshoot",
    aspect: "portrait",
  },
  {
    image: w6,
    caption: "Indian Wedding Celebration",
    aspect: "landscape",
  },
  {
    image: w7,
    caption: "Indian Bride Portrait",
    aspect: "portrait",
  },
  {
    image: w8,
    caption: "Indian Wedding Ceremony",
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
        className="mt-6 text-center font-display text-2xl text-[#171715] sm:text-[26px]"
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
        className="mx-auto mb-20 max-w-4xl text-center font-display text-[11vw] leading-[1.1] text-[#171715] sm:text-5xl lg:text-6xl"
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