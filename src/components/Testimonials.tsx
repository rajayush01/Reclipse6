import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useZoomReveal } from "@/hooks/useZoomReveal";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/motion";

function TestimonialImage({ src, alt }: { src: string; alt: string }) {
  const { ref, scale, opacity } = useZoomReveal();
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ scale, opacity }}
        className="aspect-[4/5] w-full object-cover"
      />
    </div>
  );
}

function TestimonialItem({
  t,
  reverse,
}: {
  t: (typeof testimonials)[number];
  reverse: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer()}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16 max-w-5xl mx-auto"
    >
      <motion.div
        variants={fadeUp}
        className={`md:col-span-3 ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <TestimonialImage src={t.image} alt={t.name} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className={`md:col-span-9 ${reverse ? "md:order-1" : "md:order-2"}`}
      >
        <p className="font-display text-[28px] font-light leading-[1.15] text-ink md:text-[42px]">
          &ldquo;{t.quote}&rdquo;
        </p>
        <p className="mt-7 max-w-2xl font-display text-[15px] leading-7 text-ash md:text-base">
          {t.body}
        </p>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink">
          {t.name}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-mist px-6 py-28 md:px-5 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20 flex flex-col gap-6 md:mb-28 md:flex-row md:items-end max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-light leading-[1.05] text-ink md:text-5xl"
          >
            Kind Words
            <br />
            From Couples
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mb-3 hidden flex-1 border-t border-line md:block"
          />
        </motion.div>

        <div className="space-y-24 md:space-y-36">
          {testimonials.map((t, i) => (
            <TestimonialItem key={t.name} t={t} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}