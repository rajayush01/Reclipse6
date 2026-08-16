// // import { useParams, Navigate, Link } from 'react-router-dom'
// // import EditorialImage from '@/components/EditorialImage'
// // import { journalPosts } from '@/data/journal'

// // export default function JournalArticle() {
// //   const { slug } = useParams()
// //   const post = journalPosts.find((p) => p.slug === slug)
// //   if (!post) return <Navigate to="/journal" replace />

// //   return (
// //     <article className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pt-44">
// //       <p className="eyebrow mb-4 text-center">{post.category} — {post.date}</p>
// //       <h1 className="heading-hero mx-auto max-w-2xl text-center font-display text-[36px] md:text-[52px]">
// //         {post.title}
// //       </h1>

// //       <div className="mt-16">
// //         <EditorialImage image={{ src: post.cover, alt: post.title, orientation: 'landscape' }} className="aspect-[16/9]" eager />
// //       </div>

// //       <div className="mx-auto mt-16 max-w-xl space-y-6 text-[15px] leading-relaxed text-ash">
// //         <p>{post.excerpt}</p>
// //         <p>
// //           Scotland rewards elopements that plan loosely and dress warmly. Every couple who
// //           has trusted the weather here has come away with a story worth more than a perfect
// //           forecast would have given them.
// //         </p>
// //         <blockquote className="border-l-2 border-ink py-2 pl-6 font-display text-2xl not-italic text-ink">
// //           Plan for the weather you don&rsquo;t want — it&rsquo;s usually the one you remember.
// //         </blockquote>
// //         <p>
// //           If you&rsquo;re weighing locations, start with the season you&rsquo;re marrying in
// //           and work backwards from there. Some glens are unforgettable in June and
// //           unreachable in January.
// //         </p>
// //       </div>

// //       <div className="mx-auto mt-20 max-w-xl text-center">
// //         <Link to="/enquire" className="eyebrow border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-bg">
// //           Plan Your Elopement
// //         </Link>
// //       </div>
// //     </article>
// //   )
// // }

// import {
//   useParams,
//   Navigate,
//   Link,
// } from "react-router-dom";

// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// import {
//   ArrowLeft,
//   ArrowUpRight,
//   ChevronDown,
// } from "lucide-react";

// import { useRef } from "react";

// import EditorialImage from "@/components/EditorialImage";
// import { journalPosts } from "@/data/journal";

// export default function JournalArticle() {
//   const { slug } = useParams();

//   const postIndex = journalPosts.findIndex(
//     (p) => p.slug === slug
//   );

//   const post = journalPosts[postIndex];

//   if (!post) {
//     return <Navigate to="/journal" replace />;
//   }

//   const previousPost =
//     journalPosts[
//       (postIndex - 1 + journalPosts.length) %
//         journalPosts.length
//     ];

//   const nextPost =
//     journalPosts[
//       (postIndex + 1) % journalPosts.length
//     ];

//   const heroRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const imageY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", "12%"]
//   );

//   const imageScale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [1, 1.08]
//   );

//   return (
//     <main className="min-h-screen bg-[#f5f2ec] text-[#1d1d1b]">

//       {/* =========================================
//           READING PROGRESS
//       ========================================= */}

//       <motion.div
//         className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#1d1d1b]"
//         style={{
//           scaleX: useScroll().scrollYProgress,
//         }}
//       />

//       {/* =========================================
//           HERO
//       ========================================= */}

//       <section
//         ref={heroRef}
//         className="relative px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16"
//       >

//         {/* BACK BUTTON */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             x: -20,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="mx-auto mb-16 max-w-[1400px]"
//         >
//           <Link
//             to="/journal"
//             className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-colors hover:text-black"
//           >
//             <ArrowLeft
//               size={14}
//               strokeWidth={1.4}
//               className="transition-transform duration-300 group-hover:-translate-x-1"
//             />

//             Back to Stories
//           </Link>
//         </motion.div>

//         {/* TITLE */}

//         <div className="mx-auto max-w-[1200px]">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="text-center"
//           >

//             <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
//               {post.category}
//               <span className="mx-3">—</span>
//               {post.date}
//             </p>

//             <h1 className="mx-auto mt-7 max-w-[1000px] font-serif text-5xl leading-[0.92] tracking-[-0.035em] md:text-7xl lg:text-[92px]">
//               {post.title}
//             </h1>

//             <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
//               {post.excerpt}
//             </p>

//             <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-black/35">
//               {post.location}
//             </p>

//           </motion.div>

//         </div>

//         {/* =========================================
//             HERO IMAGE
//         ========================================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 60,
//             clipPath: "inset(8% 0% 8% 0%)",
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             clipPath: "inset(0% 0% 0% 0%)",
//           }}
//           transition={{
//             duration: 1.3,
//             delay: 0.25,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative mx-auto mt-20 max-w-[1400px] overflow-hidden"
//         >

//           <motion.div
//             style={{
//               y: imageY,
//               scale: imageScale,
//             }}
//             className="relative"
//           >
//             <EditorialImage
//               image={{
//                 src: post.cover,
//                 alt: post.title,
//                 orientation: "landscape",
//               }}
//               className="aspect-[16/8] md:aspect-[16/7]"
//               eager
//             />
//           </motion.div>

//           {/* IMAGE LABEL */}

//           <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
//             <span className="bg-white/90 px-4 py-2 text-[9px] uppercase tracking-[0.22em] backdrop-blur-sm">
//               {post.location}
//             </span>
//           </div>

//         </motion.div>

//         {/* SCROLL INDICATOR */}

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             delay: 1.5,
//             duration: 1,
//           }}
//           className="mt-10 flex justify-center"
//         >
//           <motion.div
//             animate={{
//               y: [0, 5, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="flex flex-col items-center gap-2 text-black/30"
//           >
//             <span className="text-[8px] uppercase tracking-[0.25em]">
//               Scroll
//             </span>

//             <ChevronDown
//               size={14}
//               strokeWidth={1}
//             />
//           </motion.div>
//         </motion.div>

//       </section>

//       {/* =========================================
//           STORY INTRO
//       ========================================= */}

//       <section className="px-6 pb-20 md:px-10 lg:px-16">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           transition={{
//             duration: 0.9,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto max-w-[720px]"
//         >

//           <p className="font-serif text-2xl leading-[1.4] text-black/80 md:text-3xl lg:text-[34px]">
//             {post.introduction}
//           </p>

//         </motion.div>

//       </section>

//       {/* =========================================
//           STORY CONTENT
//       ========================================= */}

//       <section className="px-6 pb-32 md:px-10 lg:px-16">

//         <div className="mx-auto max-w-[700px]">

//           {post.paragraphs.map(
//             (paragraph, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.05,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="mb-10"
//               >

//                 {/* SECTION LABEL */}

//                 {index === 0 && (
//                   <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-black/35">
//                     The Beginning
//                   </p>
//                 )}

//                 {index === 2 && (
//                   <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-black/35">
//                     The Celebration
//                   </p>
//                 )}

//                 <p className="text-[15px] leading-[2] text-black/60 md:text-base">
//                   {paragraph}
//                 </p>

//               </motion.div>
//             )
//           )}

//         </div>

//       </section>

//       {/* =========================================
//           QUOTE
//       ========================================= */}

//       <section className="bg-[#e9e4da] px-6 py-28 md:px-10 md:py-36">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mx-auto max-w-[900px] text-center"
//         >

//           <span className="font-serif text-5xl text-black/15">
//             “
//           </span>

//           <blockquote className="mt-2 font-serif text-3xl leading-[1.25] md:text-5xl lg:text-6xl">
//             {post.quote}
//           </blockquote>

//           <div className="mx-auto mt-10 h-px w-12 bg-black/30" />

//         </motion.div>

//       </section>

//       {/* =========================================
//           CONCLUSION
//       ========================================= */}

//       <section className="px-6 py-28 md:px-10 md:py-36 lg:px-16">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           transition={{
//             duration: 0.9,
//           }}
//           className="mx-auto max-w-[700px]"
//         >

//           <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-black/35">
//             Looking Back
//           </p>

//           <p className="font-serif text-2xl leading-[1.5] text-black/80 md:text-3xl">
//             {post.conclusion}
//           </p>

//         </motion.div>

//       </section>

//       {/* =========================================
//           CTA
//       ========================================= */}

//       <section className="bg-[#20211e] px-6 py-32 text-[#f5f2ec] md:px-10 md:py-40">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="mx-auto max-w-[1000px] text-center"
//         >

//           <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-white/40">
//             Your Story
//           </p>

//           <h2 className="font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
//             Your story
//             <br />
//             <span className="italic">
//               deserves to be remembered.
//             </span>
//           </h2>

//           <Link
//             to="/enquire"
//             className="group mt-12 inline-flex items-center gap-4 rounded-full border border-white/30 px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-white hover:text-black"
//           >
//             Plan Your Wedding

//             <ArrowUpRight
//               size={15}
//               strokeWidth={1.4}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>

//         </motion.div>

//       </section>

//       {/* =========================================
//           PREVIOUS / NEXT
//       ========================================= */}

//       <section className="bg-[#f5f2ec] px-6 py-16 md:px-10 lg:px-16">

//         <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2">

//           {/* PREVIOUS */}

//           <Link
//             to={`/journal/${previousPost.slug}`}
//             className="group border-t border-black/15 pt-5"
//           >

//             <div className="flex items-center justify-between">

//               <span className="text-[9px] uppercase tracking-[0.25em] text-black/40">
//                 Previous Story
//               </span>

//               <ArrowLeft
//                 size={15}
//                 strokeWidth={1.3}
//                 className="transition-transform duration-300 group-hover:-translate-x-1"
//               />

//             </div>

//             <h3 className="mt-6 max-w-md font-serif text-2xl leading-tight md:text-3xl">
//               {previousPost.title}
//             </h3>

//           </Link>

//           {/* NEXT */}

//           <Link
//             to={`/journal/${nextPost.slug}`}
//             className="group border-t border-black/15 pt-5 text-right"
//           >

//             <div className="flex items-center justify-between">

//               <span className="ml-auto text-[9px] uppercase tracking-[0.25em] text-black/40">
//                 Next Story
//               </span>

//               <ArrowUpRight
//                 size={15}
//                 strokeWidth={1.3}
//                 className="ml-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />

//             </div>

//             <h3 className="ml-auto mt-6 max-w-md font-serif text-2xl leading-tight md:text-3xl">
//               {nextPost.title}
//             </h3>

//           </Link>

//         </div>

//       </section>

//     </main>
//   );
// }










import {
  useParams,
  Navigate,
  Link,
} from "react-router-dom";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from "lucide-react";

import { journalPosts } from "@/data/journal";

/* =========================================================
   PUBLIC GALLERY IMAGES
   ========================================================= */

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding couple",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1800&q=85",
    alt: "Bride portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding details",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding reception",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding couple outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=85",
    alt: "Wedding celebration",
  },
];

/* =========================================================
   ANIMATIONS
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================================
   GALLERY IMAGE
   ========================================================= */

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.05,
      }}
      className={`group overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-[1000ms]
          ease-out
          group-hover:scale-[1.02]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   JOURNAL ARTICLE
   ========================================================= */

export default function JournalArticle() {
  const { slug } = useParams();

  /* -------------------------------------------------------
     FIND CURRENT POST
  ------------------------------------------------------- */

  const postIndex = journalPosts.findIndex(
    (post) => post.slug === slug
  );

  const post = journalPosts[postIndex];

  if (!post) {
    return <Navigate to="/journal" replace />;
  }

  /* -------------------------------------------------------
     PREVIOUS / NEXT
  ------------------------------------------------------- */

  const previousPost =
    journalPosts[
      (postIndex - 1 + journalPosts.length) %
        journalPosts.length
    ];

  const nextPost =
    journalPosts[
      (postIndex + 1) % journalPosts.length
    ];

  /* -------------------------------------------------------
     TWO PARAGRAPHS
  ------------------------------------------------------- */

  const paragraphs = [
    post.introduction,
    ...(post.paragraphs || []),
  ].filter(Boolean);

  const firstParagraph =
    paragraphs[0] || post.excerpt || "";

  const secondParagraph =
    paragraphs[1] || "";

  /* -------------------------------------------------------
     BACK TO TOP
  ------------------------------------------------------- */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* -------------------------------------------------------
     SIMILAR POSTS
  ------------------------------------------------------- */

  const similarPosts = journalPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#273247]">

      {/* =====================================================
          ARTICLE HEADER
      ====================================================== */}

      <section className="px-5 pb-10 pt-28 sm:px-8 md:px-12 md:pb-14 md:pt-36 lg:px-[72px]">

        <div className="mx-auto max-w-[1450px]">

          {/* Back to Journal */}

          <Link
            to="/journal"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.28em]
              text-[#273247]/50
              transition-colors
              duration-300
              hover:text-[#273247]
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.3}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Stories
          </Link>

        </div>

        {/* Title */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="
            mx-auto
            mt-16
            max-w-[950px]
            text-center
            md:mt-20
          "
        >

          {/* Category */}

          <p className="text-[9px] uppercase tracking-[0.32em] text-[#273247]/45">
            {post.category}

            <span className="mx-3 text-[#273247]/20">
              —
            </span>

            {post.date}
          </p>

          {/* Main title */}

          <h1
            className="
              mt-7
              font-serif
              text-[42px]
              font-normal
              leading-[0.98]
              tracking-[-0.035em]
              text-[#273247]
              sm:text-5xl
              md:text-6xl
              lg:text-[72px]
            "
          >
            {post.title}
          </h1>

          {/* Author */}

          <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-[#273247]/40">
            By RECLIPSE
          </p>

          {post.location && (
            <p className="mt-3 font-serif text-[13px] italic text-[#273247]/45">
              {post.location}
            </p>
          )}

        </motion.div>

      </section>

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <section className="px-4 sm:px-8 md:px-12 lg:px-[72px]">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageReveal}
          className="
            mx-auto
            max-w-[1450px]
            overflow-hidden
          "
        >

          <img
            src={post.cover}
            alt={post.title}
            loading="eager"
            className="
              h-[55vh]
              min-h-[400px]
              w-full
              object-cover
              sm:h-[65vh]
              md:h-[72vh]
              lg:h-[760px]
            "
          />

        </motion.div>

      </section>

      {/* =====================================================
          TWO PARAGRAPHS
      ====================================================== */}

      <section
        className="
          px-6
          py-24
          sm:px-8
          md:py-32
          lg:px-[72px]
        "
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="mx-auto max-w-[700px]"
        >

          <p className="mb-8 text-[9px] uppercase tracking-[0.32em] text-[#273247]/40">
            The Story
          </p>

          <div className="space-y-7">

            <p
              className="
                font-serif
                text-[23px]
                leading-[1.55]
                text-[#273247]/85
                sm:text-[25px]
                md:text-[29px]
              "
            >
              {firstParagraph}
            </p>

            {secondParagraph && (
              <p
                className="
                  font-serif
                  text-[17px]
                  leading-[1.9]
                  text-[#273247]/65
                  md:text-[18px]
                "
              >
                {secondParagraph}
              </p>
            )}

          </div>

        </motion.div>

      </section>

      {/* =====================================================
          10 IMAGE EDITORIAL GALLERY
      ====================================================== */}

      <div className="px-5 sm:px-8 md:px-12 lg:px-[72px]">

        <div
          className="
            mx-auto
            max-w-[1450px]
            space-y-[4px]
          "
        >

          {/* -------------------------------------------------
              IMAGE 01
              CENTERED TALL
          -------------------------------------------------- */}

          <GalleryImage
            src={GALLERY_IMAGES[0].src}
            alt={GALLERY_IMAGES[0].alt}
            className="
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[900px]
            "
          />

          {/* -------------------------------------------------
              IMAGE 02
              WIDE
          -------------------------------------------------- */}

          <GalleryImage
            src={GALLERY_IMAGES[1].src}
            alt={GALLERY_IMAGES[1].alt}
            className="
              aspect-[16/9]
              w-full
            "
          />

          {/* -------------------------------------------------
              IMAGE 03 + 04
              TWO COLUMN
          -------------------------------------------------- */}

          <div
            className="
              grid
              grid-cols-1
              gap-[4px]
              sm:grid-cols-2
            "
          >

            <GalleryImage
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].alt}
              className="aspect-[4/5] w-full"
            />

            <GalleryImage
              src={GALLERY_IMAGES[3].src}
              alt={GALLERY_IMAGES[3].alt}
              className="aspect-[4/5] w-full"
            />

          </div>

          {/* -------------------------------------------------
              IMAGE 05
              CENTERED TALL
          -------------------------------------------------- */}

          <GalleryImage
            src={GALLERY_IMAGES[4].src}
            alt={GALLERY_IMAGES[4].alt}
            className="
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[900px]
            "
          />

          {/* -------------------------------------------------
              IMAGE 06
              WIDE
          -------------------------------------------------- */}

          <GalleryImage
            src={GALLERY_IMAGES[5].src}
            alt={GALLERY_IMAGES[5].alt}
            className="
              aspect-[16/9]
              w-full
            "
          />

          {/* -------------------------------------------------
              IMAGE 07 + 08
              TWO COLUMN
          -------------------------------------------------- */}

          <div
            className="
              grid
              grid-cols-1
              gap-[4px]
              sm:grid-cols-2
            "
          >

            <GalleryImage
              src={GALLERY_IMAGES[6].src}
              alt={GALLERY_IMAGES[6].alt}
              className="aspect-[4/5] w-full"
            />

            <GalleryImage
              src={GALLERY_IMAGES[7].src}
              alt={GALLERY_IMAGES[7].alt}
              className="aspect-[4/5] w-full"
            />

          </div>

          {/* -------------------------------------------------
              IMAGE 09
              WIDE
          -------------------------------------------------- */}

          <GalleryImage
            src={GALLERY_IMAGES[8].src}
            alt={GALLERY_IMAGES[8].alt}
            className="
              aspect-[16/9]
              w-full
            "
          />

          {/* -------------------------------------------------
              IMAGE 10
              CENTERED TALL
          -------------------------------------------------- */}

          <GalleryImage
            src={GALLERY_IMAGES[9].src}
            alt={GALLERY_IMAGES[9].alt}
            className="
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[900px]
            "
          />

        </div>

      </div>

      {/* =====================================================
          COMMENTS
      ====================================================== */}

      <section
        className="
          px-5
          pb-20
          pt-28
          sm:px-8
          md:px-12
          lg:px-[72px]
        "
      >

        <div className="mx-auto max-w-[1000px]">

          <h2
            className="
              font-serif
              text-[30px]
              leading-none
              text-[#273247]
              md:text-[34px]
            "
          >
            Leave a Reply
          </h2>

          <p
            className="
              mt-5
              font-serif
              text-[13px]
              italic
              leading-relaxed
              text-[#273247]/70
            "
          >
            Your email address will not be published. Required fields are
            marked *
          </p>

          <form className="mt-8">

            {/* Comment */}

            <textarea
              placeholder="Comment *"
              rows={8}
              className="
                w-full
                resize-y
                border
                border-[#cbd3df]
                bg-transparent
                px-3
                py-3
                font-serif
                text-[14px]
                text-[#273247]
                outline-none
                placeholder:text-[#53627c]
                focus:border-[#273247]
              "
            />

            {/* Inputs */}

            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-5
                md:grid-cols-3
              "
            >

              <input
                type="text"
                placeholder="Name *"
                className="
                  h-[38px]
                  w-full
                  border
                  border-[#cbd3df]
                  bg-transparent
                  px-3
                  font-serif
                  text-[14px]
                  text-[#273247]
                  outline-none
                  placeholder:text-[#53627c]
                  focus:border-[#273247]
                "
              />

              <input
                type="email"
                placeholder="Email *"
                className="
                  h-[38px]
                  w-full
                  border
                  border-[#cbd3df]
                  bg-transparent
                  px-3
                  font-serif
                  text-[14px]
                  text-[#273247]
                  outline-none
                  placeholder:text-[#53627c]
                  focus:border-[#273247]
                "
              />

              <input
                type="url"
                placeholder="Website"
                className="
                  h-[38px]
                  w-full
                  border
                  border-[#cbd3df]
                  bg-transparent
                  px-3
                  font-serif
                  text-[14px]
                  text-[#273247]
                  outline-none
                  placeholder:text-[#53627c]
                  focus:border-[#273247]
                "
              />

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="
                mt-6
                bg-[#3c3c20]
                px-5
                py-3
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white
                transition-opacity
                duration-300
                hover:opacity-80
              "
            >
              Post Comment
            </button>

          </form>

        </div>

      </section>

      {/* =====================================================
          SIMILAR POSTS
      ====================================================== */}

      <section
        className="
          px-5
          pb-24
          pt-10
          sm:px-8
          md:px-12
          lg:px-[72px]
        "
      >

        <div className="mx-auto max-w-[1450px]">

          <h2
            className="
              font-serif
              text-[30px]
              leading-none
              text-[#273247]
              md:text-[34px]
            "
          >
            Similar Posts
          </h2>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              md:grid-cols-3
            "
          >

            {similarPosts.map((item) => (
              <Link
                key={item.slug}
                to={`/journal/${item.slug}`}
                className="group block"
              >

                {/* Image */}

                <div
                  className="
                    relative
                    aspect-[1.35/1]
                    overflow-hidden
                  "
                >

                  <img
                    src={item.cover}
                    alt={item.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Pinterest button */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-[9px]
                      bg-[#d71920]
                      text-white
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <span className="font-serif text-[22px] font-bold">
                      p
                    </span>
                  </div>

                </div>

                {/* Title */}

                <h3
                  className="
                    mt-7
                    text-center
                    font-serif
                    text-[19px]
                    leading-[1.25]
                    text-[#273247]
                    transition-opacity
                    duration-300
                    group-hover:opacity-60
                    md:text-[21px]
                  "
                >
                  {item.title}
                </h3>

                {/* Date */}

                {item.date && (
                  <p
                    className="
                      mt-3
                      text-center
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#273247]/45
                    "
                  >
                    {item.date}
                  </p>
                )}

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PREVIOUS / NEXT
      ====================================================== */}

      <section
        className="
          border-t
          border-[#273247]/15
          px-5
          py-12
          sm:px-8
          md:px-12
          md:py-14
          lg:px-[72px]
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1250px]
            grid-cols-1
            gap-10
            md:grid-cols-2
            md:gap-20
          "
        >

          {/* Previous */}

          <Link
            to={`/journal/${previousPost.slug}`}
            className="
              group
              border-t
              border-[#273247]/15
              pt-5
            "
          >

            <div className="flex items-center justify-between">

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-[#273247]/45
                "
              >
                Previous Story
              </span>

              <ArrowLeft
                size={15}
                strokeWidth={1.3}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

            </div>

            <h3
              className="
                mt-5
                font-serif
                text-2xl
                leading-[1.1]
                tracking-[-0.015em]
                md:text-3xl
              "
            >
              {previousPost.title}
            </h3>

          </Link>

          {/* Next */}

          <Link
            to={`/journal/${nextPost.slug}`}
            className="
              group
              border-t
              border-[#273247]/15
              pt-5
              text-right
            "
          >

            <div className="flex items-center justify-between">

              <ArrowRight
                size={15}
                strokeWidth={1.3}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-[#273247]/45
                "
              >
                Next Story
              </span>

            </div>

            <h3
              className="
                mt-5
                ml-auto
                font-serif
                text-2xl
                leading-[1.1]
                tracking-[-0.015em]
                md:text-3xl
              "
            >
              {nextPost.title}
            </h3>

          </Link>

        </div>

      </section>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          fixed
          bottom-5
          right-5
          z-50
          flex
          h-[42px]
          w-[42px]
          items-center
          justify-center
          border
          border-[#273247]/30
          bg-[#f5f2ec]/90
          text-[#273247]
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-[#273247]
          hover:text-white
          md:bottom-7
          md:right-7
        "
      >
        <ArrowUp
          size={18}
          strokeWidth={1.3}
        />
      </button>

    </main>
  );
}