import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

import backgroundVideo from "../assests/wedding-bg.mp4";
import previewVideo from "../assests/wedding-preview.mp4";

import wedding1 from "../assests/wedding-1.mp4";
import wedding2 from "../assests/wedding-2.mp4";
import wedding3 from "../assests/wedding-3.mp4";
import wedding4 from "../assests/wedding-4.mp4";

interface WeddingFilm {
  title: string;
  category: string;
  location: string;
  video: string;
  description: string;
}

const WEDDING_FILMS: WeddingFilm[] = [
  {
    title: "Anusha & Anup",
    category: "Wedding Film",
    location: "Jaipur, Rajasthan",
    video: wedding1,
    description:
      "A beautiful celebration surrounded by family, heritage and the warmth of Rajasthan. A story about two people, their families and all the moments between the celebrations.",
  },
  {
    title: "Raveena & Gautam",
    category: "Cinematic Wedding",
    location: "Delhi, India",
    video: wedding2,
    description:
      "A celebration filled with laughter, emotion and the energy of everyone who came together to celebrate their story.",
  },
  {
    title: "Ronak & Bani",
    category: "Indian Wedding Film",
    location: "India",
    video: wedding3,
    description:
      "A vibrant wedding story bringing together tradition, family, music and the quiet moments that happened between the celebrations.",
  },
  {
    title: "A Story Worth Remembering",
    category: "Wedding Story",
    location: "India",
    video: wedding4,
    description:
      "A cinematic look at a wedding day where the smallest moments became some of the most meaningful memories.",
  },
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const filmVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Films() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#1e1e1c]">

      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}

      <section className="relative min-h-[calc(100vh-68px)] overflow-hidden bg-[#20211e] text-white">

        {/* -------------------------------------------------
            BACKGROUND VIDEO
        ------------------------------------------------- */}

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/wedding-poster.webp"
        />

        {/* -------------------------------------------------
            VIDEO OVERLAYS
        ------------------------------------------------- */}

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

        {/* -------------------------------------------------
            HERO CONTENT
        ------------------------------------------------- */}

        <div className="relative z-10 flex min-h-[calc(100vh-68px)] items-center px-6 py-24 md:px-12 lg:px-20">

          <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_380px]">

            {/* =================================================
                LEFT
            ================================================= */}

            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="max-w-[900px]"
            >

              <motion.p
                variants={heroItem}
                className="mb-7 text-[10px] uppercase tracking-[0.35em] text-white/65"
              >
                Wedding Films
              </motion.p>

              <motion.h1
                variants={heroItem}
                className="font-display text-6xl leading-[0.88] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[105px]"
              >
                Stories that
                <br />

                <span className="italic">
                  move.
                </span>
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mt-9 max-w-xl text-sm leading-7 text-white/75 md:text-base"
              >
                Your wedding is more than a single day. It is
                the people, the laughter, the nervous excitement,
                the quiet glances and all the moments that happen
                in between.
              </motion.p>

              <motion.p
                variants={heroItem}
                className="mt-5 max-w-xl text-sm leading-7 text-white/60"
              >
                We turn those moments into cinematic stories
                that allow you to experience the feeling of your
                wedding again and again.
              </motion.p>

              <motion.div variants={heroItem}>
                <Link
                  to="/enquire"
                  className="group mt-9 inline-flex items-center gap-4 border-b border-white/40 pb-2 text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 hover:border-white"
                >
                  Create Your Film

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

            </motion.div>

            {/* =================================================
                FLOATING VIDEO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-[350px] lg:mx-0 lg:ml-auto"
            >

              <div className="group relative aspect-[4/5] overflow-hidden border border-white/20 bg-black/30 shadow-2xl">

                <video
                  src={previewVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/wedding-preview-poster.webp"
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/15 transition-colors duration-700 group-hover:bg-black/5" />

                {/* Floating play button */}

                <div className="absolute bottom-5 left-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur-md">

                    <Play
                      size={12}
                      fill="white"
                      strokeWidth={0}
                      className="ml-0.5"
                    />

                  </div>

                  <span className="text-[9px] uppercase tracking-[0.23em] text-white/80">
                    Featured Film
                  </span>

                </div>

              </div>

              <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/50">

                <span>
                  India
                </span>

                <span>
                  Featured Film
                </span>

              </div>

            </motion.div>

          </div>

        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2"
        >

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-white/60"
          >

            <span className="text-[8px] uppercase tracking-[0.3em]">
              Explore
            </span>

            <ArrowDown
              size={13}
              strokeWidth={1}
            />

          </motion.div>

        </motion.div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="border-b border-black/10 px-6 py-24 md:px-12 md:py-32 lg:px-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[1200px]"
        >

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.7fr_2fr] md:gap-20">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
                Our Approach
              </p>
            </div>

            <div>

              <p className="font-display text-3xl leading-[1.25] md:text-4xl lg:text-5xl">
                We don't just record your wedding.
                <br />

                <span className="italic">
                  We tell the story of how it felt.
                </span>
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-black/55">
                From the anticipation of getting ready to the
                last dance of the evening, we look for the
                moments that make your celebration uniquely
                yours.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* =====================================================
          SELECTED FILMS
      ===================================================== */}

      <section className="px-6 py-28 md:px-12 md:py-36 lg:px-20">

        <div className="mx-auto max-w-[1300px]">

          {/* HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-20 flex items-end justify-between border-b border-black/15 pb-6"
          >

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
                Selected Work
              </p>

              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Wedding Films
              </h2>

            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-black/35 md:block">
              {WEDDING_FILMS.length} Stories
            </span>

          </motion.div>

          {/* FILMS */}

          <div className="space-y-32">

            {WEDDING_FILMS.map((film, index) => (

              <motion.article
                key={film.title}
                variants={filmVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="group"
              >

                {/* VIDEO */}

                <div className="relative overflow-hidden bg-black">

                  <video
                    src={film.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.015]"
                    controls
                  />

                  {/* NUMBER */}

                  <div className="pointer-events-none absolute left-5 top-5">

                    <span className="bg-[#f5f2ec]/90 px-3 py-2 text-[9px] tracking-[0.2em] text-black backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr] md:gap-20">

                  <div>

                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-black/40">

                      <span>
                        {film.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-black/25" />

                      <span>
                        {film.location}
                      </span>

                    </div>

                    <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
                      {film.title}
                    </h3>

                  </div>

                  <div className="md:pt-1">

                    <p className="max-w-md text-sm leading-7 text-black/55">
                      {film.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-black/45">

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20">

                        <Play
                          size={10}
                          fill="currentColor"
                          strokeWidth={0}
                        />

                      </div>

                      Watch Film

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          DARK CINEMATIC STATEMENT
      ===================================================== */}

      <section className="bg-[#20211e] px-6 py-32 text-[#f5f2ec] md:px-12 md:py-44 lg:px-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto max-w-[1100px] text-center"
        >

          <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-white/40">
            More Than A Wedding Film
          </p>

          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-[88px]">
            The day will pass.
            <br />

            <span className="italic">
              The feeling doesn't have to.
            </span>
          </h2>

        </motion.div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="px-6 py-28 md:px-12 md:py-36 lg:px-20">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-20">

            <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
              How We Work
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              A cinematic approach to
              <span className="italic">
                {" "}
                real moments.
              </span>
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-3">

            {/* 01 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="text-[10px] tracking-[0.2em] text-black/30">
                01
              </span>

              <h3 className="mt-5 font-display text-3xl">
                Be Present
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/55">
                We don't want your wedding to feel like a
                production. We stay close, observe and let
                moments happen naturally.
              </p>

            </motion.div>

            {/* 02 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >

              <span className="text-[10px] tracking-[0.2em] text-black/30">
                02
              </span>

              <h3 className="mt-5 font-display text-3xl">
                Find The Feeling
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/55">
                The quiet glance between two people. A parent
                holding back tears. Friends laughing after years
                apart. Those are the moments we look for.
              </p>

            </motion.div>

            {/* 03 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >

              <span className="text-[10px] tracking-[0.2em] text-black/30">
                03
              </span>

              <h3 className="mt-5 font-display text-3xl">
                Make It Cinematic
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/55">
                Thoughtful composition, movement, natural sound
                and careful editing come together to create a
                film that feels like your own little movie.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#e9e4da] px-6 py-32 md:px-12 md:py-40 lg:px-20">

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
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto max-w-[1000px] text-center"
        >

          <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-black/40">
            Your Wedding Film
          </p>

          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Let's tell
            <br />

            <span className="italic">
              your story.
            </span>
          </h2>

          <Link
            to="/enquire"
            className="group mt-12 inline-flex items-center gap-4 rounded-full border border-black/25 px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-[#20211e] hover:text-white"
          >
            Enquire About Films

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

      </section>

    </main>
  );
}