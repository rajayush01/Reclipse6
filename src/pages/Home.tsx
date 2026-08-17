// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
// import SectionHeading from '@/components/SectionHeading'
// import StoryCard from '@/components/StoryCard'
// import EditorialImage from "@/components/EditorialImage";
// import { fadeUp, staggerContainer } from "@/lib/motion";
// import { featuredStories } from '@/data/stories'
import Intro from "@/components/Intro";
import FeaturedWeddings from "@/components/FeaturedWeddings";
import CinematicFilms from "@/components/CineamticFilms";
import { ArrowUp } from "lucide-react";
import w8 from "../assests/w8.jpg";
import w1 from "../assests/w1.jpg";
import Testimonials from "@/components/Testimonials";

// const STATS = [
//   { value: "11", label: "Years Behind the Camera" },
//   { value: "240+", label: "Stories Told" },
//   { value: "3", label: "Countries Worked" },
//   { value: "1", label: "Approach, Every Time" },
// ];

// function Intro() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-15% 0px' })
//   return (
//     <section ref={ref} className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
//       <motion.div
//         variants={staggerContainer()}
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//         className="grid grid-cols-1 gap-10 md:grid-cols-12"
//       >
//         <motion.h2 variants={fadeUp} className="heading-hero font-display text-[40px] md:col-span-7 md:text-[56px]">
//           Stories that feel like memories, not photographs.
//         </motion.h2>
//         <motion.div variants={fadeUp} className="md:col-span-4 md:col-start-9">
//           <p className="text-[15px] leading-relaxed text-ash">
//             I photograph s and weddings the way they actually happened — the
//             wind, the wrong turn, the fit of laughter before the vows. Based on the Isle
//             of Skye, working across Scotland and further afield.
//           </p>
//           <Link to="/about" className="eyebrow mt-6 inline-block border-b border-ink pb-1">
//             More about the work →
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// function FeaturedStories() {
//   const [a, b, c, d] = featuredStories
//   return (
//     <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10 md:pb-40">
//       <SectionHeading eyebrow="Selected Work" title="Featured Stories" className="mb-14 md:mb-20" />

//       <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12">
//         {a && <StoryCard story={a} className="md:col-span-7" />}
//         {b && <StoryCard story={b} className="md:col-span-5 md:mt-24" />}
//         {c && <StoryCard story={c} className="md:col-span-5" />}
//         {d && <StoryCard story={d} className="md:col-span-7 md:mt-24" />}
//       </div>

//       <div className="mt-20 text-center">
//         <Link to="/photography" className="eyebrow border-b border-ink pb-1">
//           View All Stories →
//         </Link>
//       </div>
//     </section>
//   )
// }

// function Testimonial() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-20% 0px" });
//   return (
//     <section ref={ref} className="bg-mist px-6 py-28 md:px-10 md:py-40">
//       <motion.div
//         variants={staggerContainer()}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="mx-auto max-w-3xl text-center"
//       >
//         <motion.p
//           variants={fadeUp}
//           className="heading-hero font-display text-[28px] leading-snug md:text-[38px]"
//         >
//           &ldquo;Your photographs brought us straight back to how the day
//           actually felt — not how it looked, how it felt.&rdquo;
//         </motion.p>
//         <motion.p variants={fadeUp} className="eyebrow mt-8">
//           Effie &amp; Sam — Glencoe
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }

// function Awards() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-15% 0px" });
//   return (
//     <section ref={ref} className="mx-auto max-w-[1600px] px-6 py-24 md:px-10">
//       <motion.div
//         variants={staggerContainer()}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="grid grid-cols-2 gap-10 border-t border-line pt-14 md:grid-cols-4"
//       >
//         {STATS.map((s) => (
//           <motion.div key={s.label} variants={fadeUp}>
//             <p className="font-display text-4xl md:text-5xl">{s.value}</p>
//             <p className="eyebrow mt-3">{s.label}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// function ClosingImage() {
//   return (
//     <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10 md:pb-40">
//       <EditorialImage
//         image={{
//           src: "https://picsum.photos/seed/RECLIPSE-closing/2400/1350",
//           alt: "Couple walking along a Scottish coastline at dusk",
//           orientation: "landscape",
//         }}
//         className="aspect-[16/9] md:aspect-[21/9]"
//       />
//     </section>
//   );
// }

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showBackToTop && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center border border-[#171715]/70 bg-[#F5F3EE]/90 text-[#171715] backdrop-blur-sm transition-colors duration-300 hover:bg-[#171715] hover:text-[#F5F3EE]"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={16} strokeWidth={1.5} />
        </motion.button>
      )}
      {/* back-to-top */}
      {/* <motion.a
        href="#top"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center border border-[#171715]/70 text-[#171715] transition-colors hover:bg-[#171715] hover:text-[#F5F3EE]"
        aria-label="Back to top"
      >
        <ArrowUp size={16} strokeWidth={1.5} />
      </motion.a> */}
      <Hero />
      <Intro />
      <FeaturedWeddings />
      <CinematicFilms />
      <section className="relative h-[72vh] min-h-[560px] overflow-hidden">
        {/* Fixed background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${w8})` }}
          />
        </div>

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />

        {/* Center content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-[#EDE6D8]">
              Enquire Now
            </p> */}

            <h2 className="mt-5 font-display text-5xl font-extralight leading-[0.95] text-[#FBF8F2] md:text-7xl lg:text-[40px]">
              Specialising in cinematic Scottish weddings for
              over 15 years
            </h2>

            {/* <p className="mx-auto mt-7 max-w-xl font-display text-sm font-light leading-7 text-[#EDE6D8] md:text-base">
              Specialising in cinematic Scottish weddings for
              over 15 years
            </p> */}
          </motion.div>
        </div>
      </section>
      <Testimonials />
      <section className="relative h-[72vh] min-h-[560px] overflow-hidden">
        {/* Fixed background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${w1})` }}
          />
        </div>

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />

        {/* Center content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-[#EDE6D8]">
              Enquire Now
            </p>

            <h2 className="mt-5 font-display text-5xl font-extralight leading-[0.95] text-[#FBF8F2] md:text-7xl lg:text-[40px]">
              Receive my pricing brochure and availability.
I can’t wait to hear from you!
            </h2>

            <button className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#EDE6D8] px-6 py-3 text-sm font-semibold text-[#EDE6D8] transition-colors hover:bg-[#EDE6D8] hover:text-[#171715]"
            >
              Enquire Now
            </button>
          </motion.div>
        </div>
      </section>
      {/* <Awards /> */}
      {/* <ClosingImage /> */}
    </>
  );
}
