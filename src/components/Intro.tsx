import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useZoomReveal } from "@/hooks/useZoomReveal";


import w1 from "../assests/w1.jpg";
import w2 from "../assests/w2.jpg";
import w3 from "../assests/w3.jpg";

const LEFT_IMAGE = w1;
const RIGHT_IMAGE = w2;
const BG_STRIP = w3;

export default function Intro() {
  const left = useZoomReveal();
  const right = useZoomReveal();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F3EE] -mt-20">
      {/* thin cropped texture strip along the very top, echoes a filmstrip edge */}
      <div
        className="absolute inset-x-0 top-0 h-6 sm:h-8 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${BG_STRIP})` }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1900px] items-center justify-center px-0">
        {/* Left image — zooms + fades in on scroll */}
        <motion.div
          ref={left.ref}
          style={{ scale: left.scale, opacity: left.opacity }}
          className="absolute left-0 top-[18%] hidden aspect-[3/4] w-[15vw] min-w-[220px] max-w-[300px] overflow-hidden sm:block"
        >
          <img
            src={LEFT_IMAGE}
            alt="Couple embracing beneath bare winter trees, Scotland"
            className="h-full w-full object-cover grayscale"
            loading="lazy"
          />
        </motion.div>

        {/* Right image — zooms + fades in on scroll, slightly larger + offset like the reference */}
        <motion.div
          ref={right.ref}
          style={{ scale: right.scale, opacity: right.opacity }}
          className="absolute right-0 top-[32%] hidden aspect-[3/4] w-[16vw] min-w-[240px] max-w-[320px] overflow-hidden md:block"
        >
          <img
            src={RIGHT_IMAGE}
            alt="Intimate portrait of an eloping couple, windswept"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Center copy */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-sans text-[11px] tracking-[0.35em] text-[#6E6B64] sm:text-xs"
          >
            INDIAN PHOTOGRAPHER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-serif text-[#171715] leading-[1.08]"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
          >
            <span className="block text-[13vw] sm:text-[6.5vw] lg:text-[80px] tracking-tight">
              CINEMATIC{" "}
              <em
                className="italic font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Love Stories
              </em>
            </span>
            <span className="block text-[13vw] sm:text-[6.5vw] lg:text-[80px] tracking-tight">
              IN INDIA &amp;
            </span>
            <span className="block text-[13vw] sm:text-[6.5vw] lg:text-[80px] tracking-tight">
              ABROAD
            </span>
          </motion.h1>
        </div>
      </div>

      {/* back-to-top */}
      <motion.a
        href="#top"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center border border-[#171715]/70 text-[#171715] transition-colors hover:bg-[#171715] hover:text-[#F5F3EE]"
        aria-label="Back to top"
      >
        <ArrowUp size={16} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}