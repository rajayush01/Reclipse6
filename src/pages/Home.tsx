import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import StoryCard from '@/components/StoryCard'
import EditorialImage from '@/components/EditorialImage'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { featuredStories } from '@/data/stories'
import Intro from '@/components/Intro'
import FeaturedWeddings from '@/components/FeaturedWeddings'
import CinematicFilms from '@/components/CineamticFilms'
import {  ArrowUpRight } from "lucide-react";
import w8 from "../assests/w8.jpg";



const STATS = [
  { value: '11', label: 'Years Behind the Camera' },
  { value: '240+', label: 'Stories Told' },
  { value: '3', label: 'Countries Worked' },
  { value: '1', label: 'Approach, Every Time' },
]

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
//             I photograph elopements and weddings the way they actually happened — the
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

function Testimonial() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  return (
    <section ref={ref} className="bg-mist px-6 py-28 md:px-10 md:py-40">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="heading-hero font-display text-[28px] leading-snug md:text-[38px]">
          &ldquo;Your photographs brought us straight back to how the day actually
          felt — not how it looked, how it felt.&rdquo;
        </motion.p>
        <motion.p variants={fadeUp} className="eyebrow mt-8">
          Effie &amp; Sam — Glencoe
        </motion.p>
      </motion.div>
    </section>
  )
}

function Awards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  return (
    <section ref={ref} className="mx-auto max-w-[1600px] px-6 py-24 md:px-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 gap-10 border-t border-line pt-14 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={fadeUp}>
            <p className="font-display text-4xl md:text-5xl">{s.value}</p>
            <p className="eyebrow mt-3">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function ClosingImage() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-10 md:pb-40">
      <EditorialImage
        image={{
          src: 'https://picsum.photos/seed/RECLIPSE-closing/2400/1350',
          alt: 'Couple walking along a Scottish coastline at dusk',
          orientation: 'landscape',
        }}
        className="aspect-[16/9] md:aspect-[21/9]"
      />
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWeddings />
      <CinematicFilms />
      <section className="relative h-[72vh] min-h-[560px] overflow-hidden">

        {/* =================================================
            FIXED BACKGROUND IMAGE

            This stays visually fixed while the page scrolls.
        ================================================= */}

        <div className="absolute inset-0">

          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${w8})`,
            }}
          />

        </div>


        {/* dark cinematic overlay */}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />


        {/* =================================================
            CENTER CONTENT
        ================================================= */}

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#EDE6D8]">
              Enquire Now
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-[#FBF8F2] md:text-7xl lg:text-[82px]">
              Your story
              <br />

              <span className="italic">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#EDE6D8] md:text-base">
              Tell us about your wedding, your people and the
              moments that matter most to you.
            </p>

            <Link
              to="/enquire"
              className="group mt-9 inline-flex items-center gap-4 border border-white/60 bg-[#F6F2EA] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#221E1A] transition-all duration-500 hover:bg-transparent hover:text-white"
            >

              Get in touch

              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </Link>

          </motion.div>

        </div>

      </section>
      <Testimonial />
      <Awards />
      <ClosingImage />
    </>
  )
}
