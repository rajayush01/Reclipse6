// import { useParams, Navigate, Link } from 'react-router-dom'
// import EditorialImage from '@/components/EditorialImage'
// import { journalPosts } from '@/data/journal'

// export default function JournalArticle() {
//   const { slug } = useParams()
//   const post = journalPosts.find((p) => p.slug === slug)
//   if (!post) return <Navigate to="/journal" replace />

//   return (
//     <article className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pt-44">
//       <p className="eyebrow mb-4 text-center">{post.category} — {post.date}</p>
//       <h1 className="heading-hero mx-auto max-w-2xl text-center font-display text-[36px] md:text-[52px]">
//         {post.title}
//       </h1>

//       <div className="mt-16">
//         <EditorialImage image={{ src: post.cover, alt: post.title, orientation: 'landscape' }} className="aspect-[16/9]" eager />
//       </div>

//       <div className="mx-auto mt-16 max-w-xl space-y-6 text-[15px] leading-relaxed text-ash">
//         <p>{post.excerpt}</p>
//         <p>
//           Scotland rewards elopements that plan loosely and dress warmly. Every couple who
//           has trusted the weather here has come away with a story worth more than a perfect
//           forecast would have given them.
//         </p>
//         <blockquote className="border-l-2 border-ink py-2 pl-6 font-display text-2xl not-italic text-ink">
//           Plan for the weather you don&rsquo;t want — it&rsquo;s usually the one you remember.
//         </blockquote>
//         <p>
//           If you&rsquo;re weighing locations, start with the season you&rsquo;re marrying in
//           and work backwards from there. Some glens are unforgettable in June and
//           unreachable in January.
//         </p>
//       </div>

//       <div className="mx-auto mt-20 max-w-xl text-center">
//         <Link to="/enquire" className="eyebrow border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-bg">
//           Plan Your Elopement
//         </Link>
//       </div>
//     </article>
//   )
// }

import {
  useParams,
  Navigate,
  Link,
} from "react-router-dom";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { useRef } from "react";

import EditorialImage from "@/components/EditorialImage";
import { journalPosts } from "@/data/journal";

export default function JournalArticle() {
  const { slug } = useParams();

  const postIndex = journalPosts.findIndex(
    (p) => p.slug === slug
  );

  const post = journalPosts[postIndex];

  if (!post) {
    return <Navigate to="/journal" replace />;
  }

  const previousPost =
    journalPosts[
      (postIndex - 1 + journalPosts.length) %
        journalPosts.length
    ];

  const nextPost =
    journalPosts[
      (postIndex + 1) % journalPosts.length
    ];

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#1d1d1b]">

      {/* =========================================
          READING PROGRESS
      ========================================= */}

      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#1d1d1b]"
        style={{
          scaleX: useScroll().scrollYProgress,
        }}
      />

      {/* =========================================
          HERO
      ========================================= */}

      <section
        ref={heroRef}
        className="relative px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16"
      >

        {/* BACK BUTTON */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-[1400px]"
        >
          <Link
            to="/journal"
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-colors hover:text-black"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Stories
          </Link>
        </motion.div>

        {/* TITLE */}

        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >

            <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
              {post.category}
              <span className="mx-3">—</span>
              {post.date}
            </p>

            <h1 className="mx-auto mt-7 max-w-[1000px] font-serif text-5xl leading-[0.92] tracking-[-0.035em] md:text-7xl lg:text-[92px]">
              {post.title}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
              {post.excerpt}
            </p>

            <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-black/35">
              {post.location}
            </p>

          </motion.div>

        </div>

        {/* =========================================
            HERO IMAGE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            clipPath: "inset(8% 0% 8% 0%)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          transition={{
            duration: 1.3,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-20 max-w-[1400px] overflow-hidden"
        >

          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="relative"
          >
            <EditorialImage
              image={{
                src: post.cover,
                alt: post.title,
                orientation: "landscape",
              }}
              className="aspect-[16/8] md:aspect-[16/7]"
              eager
            />
          </motion.div>

          {/* IMAGE LABEL */}

          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
            <span className="bg-white/90 px-4 py-2 text-[9px] uppercase tracking-[0.22em] backdrop-blur-sm">
              {post.location}
            </span>
          </div>

        </motion.div>

        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-black/30"
          >
            <span className="text-[8px] uppercase tracking-[0.25em]">
              Scroll
            </span>

            <ChevronDown
              size={14}
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>

      </section>

      {/* =========================================
          STORY INTRO
      ========================================= */}

      <section className="px-6 pb-20 md:px-10 lg:px-16">

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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[720px]"
        >

          <p className="font-serif text-2xl leading-[1.4] text-black/80 md:text-3xl lg:text-[34px]">
            {post.introduction}
          </p>

        </motion.div>

      </section>

      {/* =========================================
          STORY CONTENT
      ========================================= */}

      <section className="px-6 pb-32 md:px-10 lg:px-16">

        <div className="mx-auto max-w-[700px]">

          {post.paragraphs.map(
            (paragraph, index) => (
              <motion.div
                key={index}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-10"
              >

                {/* SECTION LABEL */}

                {index === 0 && (
                  <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-black/35">
                    The Beginning
                  </p>
                )}

                {index === 2 && (
                  <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-black/35">
                    The Celebration
                  </p>
                )}

                <p className="text-[15px] leading-[2] text-black/60 md:text-base">
                  {paragraph}
                </p>

              </motion.div>
            )
          )}

        </div>

      </section>

      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="bg-[#e9e4da] px-6 py-28 md:px-10 md:py-36">

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
          className="mx-auto max-w-[900px] text-center"
        >

          <span className="font-serif text-5xl text-black/15">
            “
          </span>

          <blockquote className="mt-2 font-serif text-3xl leading-[1.25] md:text-5xl lg:text-6xl">
            {post.quote}
          </blockquote>

          <div className="mx-auto mt-10 h-px w-12 bg-black/30" />

        </motion.div>

      </section>

      {/* =========================================
          CONCLUSION
      ========================================= */}

      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-16">

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
            duration: 0.9,
          }}
          className="mx-auto max-w-[700px]"
        >

          <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-black/35">
            Looking Back
          </p>

          <p className="font-serif text-2xl leading-[1.5] text-black/80 md:text-3xl">
            {post.conclusion}
          </p>

        </motion.div>

      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="bg-[#20211e] px-6 py-32 text-[#f5f2ec] md:px-10 md:py-40">

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
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto max-w-[1000px] text-center"
        >

          <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-white/40">
            Your Story
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Your story
            <br />
            <span className="italic">
              deserves to be remembered.
            </span>
          </h2>

          <Link
            to="/enquire"
            className="group mt-12 inline-flex items-center gap-4 rounded-full border border-white/30 px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-white hover:text-black"
          >
            Plan Your Wedding

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </motion.div>

      </section>

      {/* =========================================
          PREVIOUS / NEXT
      ========================================= */}

      <section className="bg-[#f5f2ec] px-6 py-16 md:px-10 lg:px-16">

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2">

          {/* PREVIOUS */}

          <Link
            to={`/journal/${previousPost.slug}`}
            className="group border-t border-black/15 pt-5"
          >

            <div className="flex items-center justify-between">

              <span className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                Previous Story
              </span>

              <ArrowLeft
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

            </div>

            <h3 className="mt-6 max-w-md font-serif text-2xl leading-tight md:text-3xl">
              {previousPost.title}
            </h3>

          </Link>

          {/* NEXT */}

          <Link
            to={`/journal/${nextPost.slug}`}
            className="group border-t border-black/15 pt-5 text-right"
          >

            <div className="flex items-center justify-between">

              <span className="ml-auto text-[9px] uppercase tracking-[0.25em] text-black/40">
                Next Story
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="ml-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

            <h3 className="ml-auto mt-6 max-w-md font-serif text-2xl leading-tight md:text-3xl">
              {nextPost.title}
            </h3>

          </Link>

        </div>

      </section>

    </main>
  );
}
