import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useZoomReveal } from "@/hooks/useZoomReveal";


const LEFT_IMAGE =
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop";
const RIGHT_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop";
const BG_STRIP =
  "https://images.unsplash.com/photo-1441829266145-9c6892c4cbd7?q=80&w=1800&auto=format&fit=crop";

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
            SCOTLAND ELOPEMENT PHOTOGRAPHER
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
              IN SCOTLAND &amp;
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