// import { motion } from "framer-motion";
// import { ArrowUp, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import w1 from "../assests/w9.jpg";
// import w2 from "../assests/w10.jpg";
// import w3 from "../assests/w11.jpg";
// import w4 from "../assests/w12.jpg";
// import w5 from "../assests/w13.jpg";
// import w6 from "../assests/w14.jpg";
// import w7 from "../assests/w15.jpg";
// import w8 from "../assests/w16.jpg";

// interface Story {
//   image: string;
//   title: string;
//   category: string;
//   date: string;
//   excerpt: string;
//   slug: string;
// }

// const STORIES: Story[] = [
//   {
//     image: w1,
//     title: "A Beautiful Indian Wedding Story",
//     category: "Weddings",
//     date: "12 August 2026",
//     slug: "beautiful-indian-wedding",
//     excerpt:
//       "A celebration filled with emotion, beautiful details and all the little moments that made the day unforgettable.",
//   },
//   {
//     image: w2,
//     title: "An Intimate Celebration of Love",
//     category: "Couples",
//     date: "05 August 2026",
//     slug: "intimate-celebration-of-love",
//     excerpt:
//       "A relaxed and intimate celebration surrounded by the people who matter most.",
//   },
//   {
//     image: w3,
//     title: "A Cinematic Wedding in the Hills",
//     category: "Weddings",
//     date: "28 July 2026",
//     slug: "cinematic-wedding-in-the-hills",
//     excerpt:
//       "From quiet morning preparations to the evening celebrations, every frame tells part of their story.",
//   },
//   {
//     image: w4,
//     title: "The Story Behind Their Day",
//     category: "Stories",
//     date: "18 July 2026",
//     slug: "story-behind-their-day",
//     excerpt:
//       "A wedding day full of genuine moments, laughter, emotion and memories that will last forever.",
//   },
//   {
//     image: w5,
//     title: "A Romantic Couple Session",
//     category: "Couples",
//     date: "08 July 2026",
//     slug: "romantic-couple-session",
//     excerpt:
//       "An afternoon spent together, creating photographs that feel natural, effortless and completely theirs.",
//   },
//   {
//     image: w6,
//     title: "A Celebration Full of Emotion",
//     category: "Weddings",
//     date: "29 June 2026",
//     slug: "celebration-full-of-emotion",
//     excerpt:
//       "The kind of wedding where the smallest moments become the memories you remember most.",
//   },
//   {
//     image: w7,
//     title: "Moments Between the Moments",
//     category: "Stories",
//     date: "17 June 2026",
//     slug: "moments-between-the-moments",
//     excerpt:
//       "The quiet glances, laughter and unexpected moments that happen between the big events.",
//   },
//   {
//     image: w8,
//     title: "A Wedding to Remember",
//     category: "Weddings",
//     date: "02 June 2026",
//     slug: "wedding-to-remember",
//     excerpt:
//       "A beautiful celebration surrounded by family, friends and an incredible atmosphere.",
//   },
// ];

// const heroContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const heroItem = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// const storyVariants = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// export default function Journal() {
//   return (
//     <main className="min-h-screen bg-[#f5f2ec] text-[#1e1e1c]">

//       {/* =========================
//           HERO
//       ========================= */}

//       <section className="px-6 pt-36 pb-20 md:px-12 md:pt-44 lg:px-24">
//         <div className="mx-auto max-w-[1200px]">

//           <motion.div
//             variants={heroContainer}
//             initial="hidden"
//             animate="visible"
//             className="max-w-4xl"
//           >
//             <motion.p
//               variants={heroItem}
//               className="mb-7 text-xs uppercase tracking-[0.3em] text-black/45"
//             >
//               The Journal
//             </motion.p>

//             <motion.h1
//               variants={heroItem}
//               className="font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl"
//             >
//               Stories
//               <br />

//               <span className="italic">worth remembering.</span>
//             </motion.h1>

//             <motion.p
//               variants={heroItem}
//               className="mt-9 max-w-xl text-sm leading-7 text-black/60 md:text-base"
//             >
//               Real weddings, intimate celebrations and the moments
//               that live between them. Stories from the people and
//               places we have had the privilege of photographing.
//             </motion.p>
//           </motion.div>

//         </div>
//       </section>

//       {/* =========================
//           STORIES HEADING
//       ========================= */}

//       <section className="px-6 pb-12 md:px-12 lg:px-24">
//         <div className="mx-auto max-w-[1200px]">

//           <div className="flex items-end justify-between border-b border-black/15 pb-5">

//             <div>
//               <p className="text-[10px] uppercase tracking-[0.28em] text-black/45">
//                 Our Journal
//               </p>

//               <h2 className="mt-2 font-display text-3xl md:text-4xl">
//                 Latest Stories
//               </h2>
//             </div>

//             <span className="hidden text-[10px] uppercase tracking-[0.2em] text-black/40 md:block">
//               {STORIES.length} Stories
//             </span>

//           </div>

//         </div>
//       </section>

//       {/* =========================
//           STORY GRID
//       ========================= */}

//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{
//           once: true,
//           amount: 0.05,
//         }}
//         className="px-6 pb-32 md:px-12 lg:px-24"
//       >
//         <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-16">

//           {STORIES.map((story) => (
//             <motion.article
//               key={story.slug}
//               variants={storyVariants}
//               className="group"
//             >

//               {/* IMAGE */}

//               <Link
//                 to={`/journal/${story.slug}`}
//                 className="block overflow-hidden"
//               >
//                 <motion.div
//                   className="relative aspect-[3/4] overflow-hidden bg-[#ddd8cf]"
//                   initial={{
//                     clipPath: "inset(6% 0% 6% 0%)",
//                   }}
//                   whileInView={{
//                     clipPath: "inset(0% 0% 0% 0%)",
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.15,
//                   }}
//                   transition={{
//                     duration: 1,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                 >

//                   <motion.img
//                     src={story.image}
//                     alt={story.title}
//                     className="h-full w-full object-cover"
//                     initial={{
//                       scale: 1.06,
//                     }}
//                     whileInView={{
//                       scale: 1,
//                     }}
//                     whileHover={{
//                       scale: 1.035,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                   />

//                   {/* Overlay */}

//                   <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />

//                   {/* Arrow */}

//                   <div className="absolute bottom-4 right-4 translate-y-2 scale-90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">

//                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">

//                       <ArrowUpRight
//                         size={16}
//                         strokeWidth={1.5}
//                       />

//                     </div>

//                   </div>

//                 </motion.div>
//               </Link>

//               {/* CONTENT */}

//               <div className="max-w-md pt-5">

//                 <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-black/45">

//                   <span>{story.category}</span>

//                   <span className="h-1 w-1 rounded-full bg-black/30" />

//                   <span>{story.date}</span>

//                 </div>

//                 {/* TITLE */}

//                 <Link to={`/journal/${story.slug}`}>
//                   <motion.h3
//                     className="mt-3 font-display text-2xl leading-tight md:text-3xl"
//                     whileHover={{
//                       x: 3,
//                     }}
//                     transition={{
//                       duration: 0.3,
//                     }}
//                   >
//                     {story.title}
//                   </motion.h3>
//                 </Link>

//                 {/* EXCERPT */}

//                 <p className="mt-3 text-sm leading-6 text-black/55">
//                   {story.excerpt}
//                 </p>

//                 {/* READ */}

//                 <Link
//                   to={`/journal/${story.slug}`}
//                   className="mt-5 inline-flex items-center gap-2 border-b border-black/30 pb-1.5 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-black"
//                 >
//                   Read Story

//                   <ArrowUpRight
//                     size={13}
//                     strokeWidth={1.5}
//                   />
//                 </Link>

//               </div>

//             </motion.article>
//           ))}

//         </div>
//       </motion.section>

//       {/* =========================
//           CTA
//       ========================= */}

//       <motion.section
//         initial={{
//           opacity: 0,
//         }}
//         whileInView={{
//           opacity: 1,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.2,
//         }}
//         transition={{
//           duration: 1,
//         }}
//         className="bg-[#20211e] px-6 py-32 text-[#f5f2ec] md:px-12 lg:px-20"
//       >
//         <div className="mx-auto max-w-[1200px] text-center">

//           <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
//             Your Story
//           </p>

//           <h2 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
//             Let's create
//             <br />

//             <span className="italic">
//               something beautiful.
//             </span>
//           </h2>

//           <Link
//             to="/enquire"
//             className="group mt-12 inline-flex items-center gap-4 rounded-full border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black"
//           >
//             Get In Touch

//             <ArrowUpRight
//               size={16}
//               strokeWidth={1.5}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>

//         </div>
//       </motion.section>

//       {/* =========================
//           BACK TO TOP
//       ========================= */}

//       <button
//         onClick={() =>
//           window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//           })
//         }
//         className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#20211e] text-white shadow-lg transition-transform duration-300 hover:scale-105"
//         aria-label="Back to top"
//       >
//         <ArrowUp
//           size={17}
//           strokeWidth={1.5}
//         />
//       </button>

//     </main>
//   );
// }

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import w1 from "../assests/w9.jpg";
import w2 from "../assests/w10.jpg";
import w3 from "../assests/w11.jpg";
import w4 from "../assests/w12.jpg";
import w5 from "../assests/w13.jpg";
import w6 from "../assests/w14.jpg";
import w7 from "../assests/w15.jpg";
import w8 from "../assests/w16.jpg";

interface Story {
  image: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
}

const STORIES: Story[] = [
  {
    image: w1,
    title: "A Beautiful Indian Wedding Story",
    category: "Weddings",
    date: "12 August 2026",
    slug: "beautiful-indian-wedding",
    excerpt:
      "A celebration filled with emotion, beautiful details and all the little moments that made the day unforgettable.",
  },
  {
    image: w2,
    title: "An Intimate Celebration of Love",
    category: "Couples",
    date: "05 August 2026",
    slug: "intimate-celebration-of-love",
    excerpt:
      "A relaxed and intimate celebration surrounded by the people who matter most.",
  },
  {
    image: w3,
    title: "A Cinematic Wedding in the Hills",
    category: "Weddings",
    date: "28 July 2026",
    slug: "cinematic-wedding-in-the-hills",
    excerpt:
      "From quiet morning preparations to the evening celebrations, every frame tells part of their story.",
  },
  {
    image: w4,
    title: "The Story Behind Their Day",
    category: "Stories",
    date: "18 July 2026",
    slug: "story-behind-their-day",
    excerpt:
      "A wedding day full of genuine moments, laughter, emotion and memories that will last forever.",
  },
  {
    image: w5,
    title: "A Romantic Couple Session",
    category: "Couples",
    date: "08 July 2026",
    slug: "romantic-couple-session",
    excerpt:
      "An afternoon spent together, creating photographs that feel natural, effortless and completely theirs.",
  },
  {
    image: w6,
    title: "A Celebration Full of Emotion",
    category: "Weddings",
    date: "29 June 2026",
    slug: "celebration-full-of-emotion",
    excerpt:
      "The kind of wedding where the smallest moments become the memories you remember most.",
  },
  {
    image: w7,
    title: "Moments Between the Moments",
    category: "Stories",
    date: "17 June 2026",
    slug: "moments-between-the-moments",
    excerpt:
      "The quiet glances, laughter and unexpected moments that happen between the big events.",
  },
  {
    image: w8,
    title: "A Wedding to Remember",
    category: "Weddings",
    date: "02 June 2026",
    slug: "wedding-to-remember",
    excerpt:
      "A beautiful celebration surrounded by family, friends and an incredible atmosphere.",
  },
];

// const heroContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const heroItem = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

const storyVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function Journal() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#1e1e1c]">

      {/* =========================
          EDITORIAL HEADING
      ========================= */}

      <section className="px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[1400px] text-center"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/40">
            The Journal
          </p>

          <h1 className="font-display text-4xl leading-tight tracking-[-0.025em] md:text-5xl lg:text-[52px]">
            The Latest Stories
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/50">
            Real weddings, intimate celebrations and the moments
            that are worth remembering.
          </p>
        </motion.div>
      </section>


      {/* =========================
          STORY LABEL
      ========================= */}

      <section className="px-6 pb-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-black/15 pb-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
            Stories
          </p>

          <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
            {STORIES.length} Stories
          </span>
        </div>
      </section>

      {/* =========================
          STORY GRID
      ========================= */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.04,
        }}
        className="px-6 pb-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">

          {STORIES.map((story, index) => (
            <motion.article
              key={story.slug}
              variants={storyVariants}
              custom={index}
              transition={{
                duration: 0.75,
                delay: (index % 3) * 0.08,
              }}
              className="group"
            >

              {/* IMAGE */}

              <Link
                to={`/journal/${story.slug}`}
                className="block overflow-hidden"
              >
                <motion.div
                  className="relative aspect-[4/3] overflow-hidden bg-[#ddd8cf]"
                  initial={{
                    clipPath: "inset(4% 0% 4% 0%)",
                  }}
                  whileInView={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <motion.img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                    initial={{
                      scale: 1.04,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.035,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* subtle hover overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.07]" />

                  {/* hover arrow */}

                  <div className="absolute bottom-4 right-4 translate-y-2 scale-90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                </motion.div>
              </Link>


              {/* CONTENT */}

              <div className="pt-5 text-center">

                <div className="flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.2em] text-black/45">
                  <span>{story.category}</span>

                  <span className="h-1 w-1 rounded-full bg-black/25" />

                  <span>{story.date}</span>
                </div>


                <Link to={`/journal/${story.slug}`}>
                  <motion.h2
                    className="mx-auto mt-3 max-w-[420px] font-display text-2xl leading-[1.12] md:text-[29px]"
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {story.title}
                  </motion.h2>
                </Link>


                <p className="mx-auto mt-3 max-w-[390px] text-[13px] leading-6 text-black/50">
                  {story.excerpt}
                </p>


                <Link
                  to={`/journal/${story.slug}`}
                  className="mt-5 inline-flex items-center gap-2 border-b border-black/30 pb-1.5 text-[9px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:border-black"
                >
                  Read More

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

              </div>

            </motion.article>
          ))}

        </div>
      </motion.section>


      {/* =========================
          CTA
      ========================= */}

      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
        }}
        className="bg-[#20211e] px-6 py-32 text-[#f5f2ec] md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-[1200px] text-center">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Your Story
          </p>

          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Let's create
            <br />

            <span className="italic">
              something beautiful.
            </span>
          </h2>

          <Link
            to="/enquire"
            className="group mt-12 inline-flex items-center gap-4 rounded-full border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black"
          >
            Get In Touch

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </motion.section>

      {/* =========================
          BACK TO TOP
      ========================= */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#20211e] text-white shadow-lg transition-transform duration-300 hover:scale-105"
        aria-label="Back to top"
      >
        <ArrowUp
          size={17}
          strokeWidth={1.5}
        />
      </button>

    </main>
  );
}