// // import { motion, useInView } from 'framer-motion'
// // import { useRef } from 'react'
// // import EditorialImage from '@/components/EditorialImage'
// // import { fadeUp, staggerContainer } from '@/lib/motion'

// // function Row({ reverse, eyebrow, title, body, image }: {
// //   reverse?: boolean
// //   eyebrow: string
// //   title: string
// //   body: string
// //   image: { src: string; alt: string }
// // }) {
// //   const ref = useRef(null)
// //   const inView = useInView(ref, { once: true, margin: '-15% 0px' })
// //   return (
// //     <section ref={ref} className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
// //       <div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${reverse ? 'md:[&>*:first-child]:col-start-8' : ''}`}>
// //         <motion.div
// //           variants={staggerContainer()}
// //           initial="hidden"
// //           animate={inView ? 'visible' : 'hidden'}
// //           className={`md:col-span-5 ${reverse ? 'md:col-start-8' : ''}`}
// //         >
// //           <motion.p variants={fadeUp} className="eyebrow mb-4">{eyebrow}</motion.p>
// //           <motion.h2 variants={fadeUp} className="heading-hero font-display text-[32px] md:text-[42px]">{title}</motion.h2>
// //           <motion.p variants={fadeUp} className="mt-6 text-[15px] leading-relaxed text-ash">{body}</motion.p>
// //         </motion.div>
// //         <div className={`md:col-span-6 ${reverse ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7'}`}>
// //           <EditorialImage image={{ ...image, orientation: 'landscape' }} className="aspect-[4/5] md:aspect-[3/4]" />
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default function About() {
// //   return (
// //     <>
// //       <section className="relative flex h-[70svh] w-full items-end overflow-hidden bg-ink px-6 pb-16 md:px-10 md:pb-20">
// //         <img
// //           src="https://picsum.photos/seed/about-hero/2400/1400"
// //           alt="Photographer working on location with camera in hand"
// //           className="absolute inset-0 h-full w-full object-cover opacity-80"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
// //         <h1 className="heading-hero relative font-display text-[13vw] text-paper md:text-[80px]">I&rsquo;m Rowan.</h1>
// //       </section>

// //       <section className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
// //         <p className="text-[17px] leading-relaxed text-ash">
// //           I started photographing weddings the way I photographed everything else —
// //           by getting close and staying quiet. Eleven years on, that instinct hasn&rsquo;t
// //           changed, even if the locations have gotten wilder.
// //         </p>
// //       </section>

// //       <Row
// //         eyebrow="Approach"
// //         title="I document, I don't direct."
// //         body="Most of what you'll see in your gallery happened whether or not I was there to see it. My job is to be close enough, and quiet enough, that it happens anyway."
// //         image={{ src: 'https://picsum.photos/seed/about-1/1400/1750', alt: 'Photographer crouched low, camera raised, on a hillside' }}
// //       />
// //       <Row
// //         reverse
// //         eyebrow="Style"
// //         title="Built for weather, not around it."
// //         body="Rain, wind and low cloud aren't obstacles here — they're the reason to book Scotland in the first place. Every story in this portfolio was shot in whatever the sky provided that day."
// //         image={{ src: 'https://picsum.photos/seed/about-2/1400/1750', alt: 'Camera bag and waterproof gear laid out before a shoot' }}
// //       />
// //       <Row
// //         eyebrow="Off Duty"
// //         title="Family, on the same hillsides."
// //         body="When I'm not shooting, I'm usually back on the same trails with my own family, scouting the next spot before I know whose wedding it's for."
// //         image={{ src: 'https://picsum.photos/seed/about-3/1400/1750', alt: 'Family walking together on a Highland trail' }}
// //       />
// //     </>
// //   )
// // }


// import { motion } from "framer-motion";
// import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// import w1 from "../assests/w1.jpg";
// import w2 from "../assests/w2.jpg";
// import w3 from "../assests/w3.jpg";
// import w4 from "../assests/w4.jpg";
// import w5 from "../assests/w5.jpg";
// import w6 from "../assests/w6.jpg";
// import w7 from "../assests/w7.jpg";
// import w8 from "../assests/w8.jpg";

// const FAQS = [
//   {
//     question: "What is your photography style?",
//     answer:
//       "Our approach is documentary at heart, with a cinematic eye. We look for genuine interactions, natural light and the little moments that make your celebration yours. When needed, we gently guide you rather than heavily pose you.",
//   },
//   {
//     question: "Do you travel for weddings?",
//     answer:
//       "Absolutely. We photograph weddings across India and are available for destination celebrations as well. Whether it is a city wedding, a beach celebration or a destination wedding in the mountains, we love discovering new places and stories.",
//   },
//   {
//     question: "How involved are you on the wedding day?",
//     answer:
//       "We believe you should spend your wedding day experiencing it rather than constantly thinking about the camera. We stay observant and unobtrusive, stepping in with gentle direction when it helps create something beautiful.",
//   },
//   {
//     question: "Do you photograph traditional Indian ceremonies?",
//     answer:
//       "Yes. Indian weddings are full of meaningful rituals, colour, family and emotion. We document the ceremonies as they unfold while paying attention to the people and moments surrounding them.",
//   },
//   {
//     question: "Can you photograph both candid and family portraits?",
//     answer:
//       "Definitely. Our main approach is story-focused, but we know family portraits are important. We keep them organised and relaxed so you can get the photographs you want without losing too much time from your celebration.",
//   },
//   {
//     question: "How long does it take to receive our photographs?",
//     answer:
//       "Your photographs are carefully selected and individually edited before being delivered through an online gallery. Our exact delivery timeline depends on the season and the collection you choose, and we will always communicate this clearly before booking.",
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Say Hello",
//     text:
//       "Tell us a little about yourselves, your wedding plans and what you are dreaming of. It does not matter how early you are in the planning process.",
//   },
//   {
//     number: "02",
//     title: "Let's Talk",
//     text:
//       "We'll have a relaxed conversation about your plans, your priorities and the kind of experience you want your wedding photography to create.",
//   },
//   {
//     number: "03",
//     title: "Make It Official",
//     text:
//       "Once you are ready to move forward, your date is secured with a signed agreement and booking fee.",
//   },
//   {
//     number: "04",
//     title: "Plan Together",
//     text:
//       "We stay involved throughout the planning process and help with timelines, locations and photography ideas whenever you need us.",
//   },
//   {
//     number: "05",
//     title: "The Wedding Day",
//     text:
//       "You enjoy your day. We observe, document and create photographs that tell the story as naturally as possible.",
//   },
//   {
//     number: "06",
//     title: "Relive It",
//     text:
//       "After your wedding, your photographs are carefully edited and delivered through your private online gallery.",
//   },
// ];

// const reveal = {
//   hidden: {
//     opacity: 0,
//     y: 35,
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

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// export default function About() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen bg-[#f5f2ec] text-[#1d1d1b]">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-44 lg:px-20">

//         <div className="mx-auto max-w-[1400px]">

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="max-w-[1100px]"
//           >

//             <motion.p
//               variants={reveal}
//               className="mb-8 text-[10px] uppercase tracking-[0.32em] text-black/45"
//             >
//               About Us
//             </motion.p>

//             <motion.h1
//               variants={reveal}
//               className="font-serif text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-[100px]"
//             >
//               We photograph
//               <br />

//               <span className="italic">
//                 how it felt.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={reveal}
//               className="mt-10 max-w-2xl text-sm leading-7 text-black/60 md:text-base"
//             >
//               We are wedding photographers and filmmakers who
//               believe the most meaningful photographs are the
//               ones that bring you straight back to a feeling.
//             </motion.p>

//           </motion.div>

//           {/* HERO IMAGE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 60,
//               clipPath: "inset(8% 0% 8% 0%)",
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               clipPath: "inset(0% 0% 0% 0%)",
//             }}
//             transition={{
//               duration: 1.2,
//               delay: 0.35,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative mt-20 aspect-[16/8] overflow-hidden"
//           >

//             <motion.img
//               src={w1}
//               alt="Indian wedding celebration"
//               initial={{
//                 scale: 1.08,
//               }}
//               animate={{
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 1.5,
//                 delay: 0.35,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/10" />

//             <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
//               <span className="bg-[#f5f2ec]/90 px-4 py-2 text-[9px] uppercase tracking-[0.2em] backdrop-blur-sm">
//                 Wedding Stories · India
//               </span>
//             </div>

//           </motion.div>

//           {/* SCROLL */}

//           <div className="mt-10 flex justify-center">

//             <motion.div
//               animate={{
//                 y: [0, 6, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="flex flex-col items-center gap-2 text-black/30"
//             >
//               <span className="text-[8px] uppercase tracking-[0.3em]">
//                 Discover
//               </span>

//               <ArrowDown
//                 size={14}
//                 strokeWidth={1}
//               />
//             </motion.div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           INTRODUCTION
//       ===================================================== */}

//       <section className="border-y border-black/10 px-6 py-24 md:px-12 md:py-32 lg:px-20">

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           variants={reveal}
//           className="mx-auto max-w-[1200px]"
//         >

//           <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.65fr_2fr] md:gap-20">

//             <div>
//               <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
//                 A Little About Us
//               </p>
//             </div>

//             <div>

//               <h2 className="font-serif text-3xl leading-[1.25] md:text-4xl lg:text-5xl">
//                 Behind every photograph is a
//                 <span className="italic">
//                   {" "}
//                   real story.
//                 </span>
//               </h2>

//               <div className="mt-8 max-w-2xl space-y-6 text-sm leading-7 text-black/55">

//                 <p>
//                   We fell in love with wedding photography because
//                   weddings are never just about what happens during
//                   the ceremony. They are about everything surrounding
//                   it — the people, the anticipation, the laughter,
//                   the happy tears and the quiet moments nobody
//                   planned.
//                 </p>

//                 <p>
//                   Our work is inspired by cinema, documentary
//                   photography and the beauty of everyday human
//                   connection. We want your photographs to feel
//                   timeless without feeling staged.
//                 </p>

//                 <p>
//                   Based in India and available wherever your story
//                   takes you, we photograph intimate celebrations,
//                   large traditional weddings and destination
//                   celebrations across the country.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </motion.div>

//       </section>

//       {/* =====================================================
//           PERSONAL STORY
//       ===================================================== */}

//       <section className="px-6 py-28 md:px-12 md:py-36 lg:px-20">

//         <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">

//           {/* IMAGE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -35,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative"
//           >

//             <div className="aspect-[4/5] overflow-hidden">

//               <motion.img
//                 src={w2}
//                 alt="Wedding couple"
//                 whileInView={{
//                   scale: [1.05, 1],
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 1.3,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="h-full w-full object-cover"
//               />

//             </div>

//             <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 overflow-hidden md:block lg:-right-10">

//               <img
//                 src={w3}
//                 alt=""
//                 className="h-full w-full object-cover"
//               />

//             </div>

//           </motion.div>

//           {/* STORY */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 35,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
//               Our Story
//             </p>

//             <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
//               It started with a love for
//               <span className="italic">
//                 {" "}
//                 stories.
//               </span>
//             </h2>

//             <div className="mt-8 space-y-6 text-sm leading-7 text-black/55">

//               <p>
//                 Photography started as a fascination with light,
//                 people and the little details that usually go
//                 unnoticed. Over time, that fascination grew into
//                 something much bigger.
//               </p>

//               <p>
//                 Weddings gave us the opportunity to combine all of
//                 those things. Every celebration is different. Every
//                 family has its own rhythm. Every couple has a
//                 different way of being together.
//               </p>

//               <p>
//                 That is what keeps this work exciting. We are never
//                 photographing the same story twice.
//               </p>

//             </div>

//             <div className="mt-10 h-px w-14 bg-black/30" />

//             <p className="mt-5 font-serif text-xl italic">
//               "The photographs should feel like you."
//             </p>

//           </motion.div>

//         </div>

//       </section>

//       {/* =====================================================
//           IMAGE BREAK
//       ===================================================== */}

//       <section className="px-6 md:px-12 lg:px-20">

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.97,
//           }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 1.1,
//           }}
//           className="mx-auto max-w-[1400px] overflow-hidden"
//         >

//           <img
//             src={w4}
//             alt="Indian wedding ceremony"
//             className="aspect-[16/7] w-full object-cover"
//           />

//         </motion.div>

//       </section>

//       {/* =====================================================
//           CINEMATIC APPROACH
//       ===================================================== */}

//       <section className="px-6 py-28 md:px-12 md:py-36 lg:px-20">

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           variants={reveal}
//           className="mx-auto max-w-[1200px]"
//         >

//           <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.65fr_2fr] md:gap-20">

//             <div>

//               <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
//                 Our Approach
//               </p>

//             </div>

//             <div>

//               <h2 className="font-serif text-4xl leading-[1.15] md:text-5xl lg:text-6xl">
//                 A cinematic eye.
//                 <br />

//                 <span className="italic">
//                   A documentary heart.
//                 </span>
//               </h2>

//               <div className="mt-10 max-w-2xl space-y-6 text-sm leading-7 text-black/55">

//                 <p>
//                   We are inspired by the way cinema uses light,
//                   movement, composition and atmosphere to tell a
//                   story.
//                 </p>

//                 <p>
//                   But weddings are not movies. They are real.
//                   They are unpredictable, emotional and beautifully
//                   imperfect.
//                 </p>

//                 <p>
//                   So our approach combines the two. We use a
//                   cinematic eye while allowing real moments to
//                   unfold naturally.
//                 </p>

//                 <p>
//                   We will give you direction when you need it,
//                   especially during portraits, but most of the day
//                   we simply observe. We want your photographs to
//                   feel like memories rather than performances.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </motion.div>

//       </section>

//       {/* =====================================================
//           IMAGE GRID
//       ===================================================== */}

//       <section className="px-6 pb-28 md:px-12 md:pb-36 lg:px-20">

//         <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-4 md:grid-cols-4">

//           {[w5, w6, w7, w8].map((image, index) => (

//             <motion.div
//               key={image}
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.15,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.08,
//               }}
//               className="overflow-hidden"
//             >

//               <motion.img
//                 src={image}
//                 alt="Indian wedding moment"
//                 whileHover={{
//                   scale: 1.04,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                 }}
//                 className="aspect-[3/4] h-full w-full object-cover"
//               />

//             </motion.div>

//           ))}

//         </div>

//       </section>

//       {/* =====================================================
//           AWARDS / RECOGNITION
//       ===================================================== */}

//       <section className="bg-[#20211e] px-6 py-28 text-[#f5f2ec] md:px-12 md:py-36 lg:px-20">

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
//             duration: 1,
//           }}
//           className="mx-auto max-w-[1200px]"
//         >

//           <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
//             Recognition
//           </p>

//           <h2 className="mt-5 font-serif text-4xl md:text-5xl">
//             Our work has been
//             <span className="italic">
//               {" "}
//               recognised.
//             </span>
//           </h2>

//           <div className="mt-16 grid grid-cols-1 border-t border-white/15 md:grid-cols-2">

//             {[
//               "Featured Indian Wedding Photographer",
//               "Best Destination Wedding Stories",
//               "Top Wedding Photography Collection",
//               "Featured Cinematic Wedding Films",
//               "Luxury Wedding Photography",
//               "Indian Wedding Photography Awards",
//             ].map((award, index) => (

//               <motion.div
//                 key={award}
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.06,
//                 }}
//                 className="border-b border-white/15 py-7 md:px-5 md:first:pl-0"
//               >

//                 <div className="flex items-center gap-5">

//                   <span className="text-[9px] text-white/30">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <p className="text-[11px] uppercase tracking-[0.15em] text-white/75">
//                     {award}
//                   </p>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </motion.div>

//       </section>

//       {/* =====================================================
//           FAQ
//       ===================================================== */}

//       <section className="px-6 py-28 md:px-12 md:py-36 lg:px-20">

//         <div className="mx-auto max-w-[1100px]">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//           >

//             <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
//               Questions
//             </p>

//             <h2 className="mt-5 font-serif text-4xl md:text-5xl">
//               A few things you
//               <span className="italic">
//                 {" "}
//                 might want to know.
//               </span>
//             </h2>

//           </motion.div>

//           <div className="mt-16 border-t border-black/15">

//             {FAQS.map((faq, index) => {

//               const isOpen = openFaq === index;

//               return (
//                 <motion.div
//                   key={faq.question}
//                   initial={{
//                     opacity: 0,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.04,
//                   }}
//                   className="border-b border-black/15"
//                 >

//                   <button
//                     onClick={() =>
//                       setOpenFaq(
//                         isOpen ? null : index
//                       )
//                     }
//                     className="flex w-full items-center justify-between gap-8 py-7 text-left"
//                   >

//                     <span className="font-serif text-xl md:text-2xl">
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/20 transition-transform duration-300 ${
//                         isOpen ? "rotate-45" : ""
//                       }`}
//                     >
//                       <Plus
//                         size={14}
//                         strokeWidth={1.3}
//                       />
//                     </span>

//                   </button>

//                   <motion.div
//                     initial={false}
//                     animate={{
//                       height: isOpen ? "auto" : 0,
//                       opacity: isOpen ? 1 : 0,
//                     }}
//                     transition={{
//                       duration: 0.35,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="overflow-hidden"
//                   >

//                     <p className="max-w-2xl pb-8 pr-10 text-sm leading-7 text-black/55">
//                       {faq.answer}
//                     </p>

//                   </motion.div>

//                 </motion.div>
//               );
//             })}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           HOW IT WORKS
//       ===================================================== */}

//       <section className="bg-[#e9e4da] px-6 py-28 md:px-12 md:py-36 lg:px-20">

//         <div className="mx-auto max-w-[1200px]">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//           >

//             <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
//               How It Works
//             </p>

//             <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
//               From the first hello
//               <br />

//               <span className="italic">
//                 to the photographs you keep forever.
//               </span>
//             </h2>

//           </motion.div>

//           <div className="mt-20 grid grid-cols-1 gap-x-16 md:grid-cols-2">

//             {processSteps.map((step, index) => (

//               <motion.div
//                 key={step.number}
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
//                   amount: 0.2,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.07,
//                 }}
//                 className="border-t border-black/20 py-8"
//               >

//                 <div className="flex gap-8">

//                   <span className="pt-1 text-[9px] tracking-[0.2em] text-black/35">
//                     {step.number}
//                   </span>

//                   <div>

//                     <h3 className="font-serif text-2xl md:text-3xl">
//                       {step.title}
//                     </h3>

//                     <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
//                       {step.text}
//                     </p>

//                   </div>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#f5f2ec] px-6 py-32 md:px-12 md:py-44 lg:px-20">

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
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="mx-auto max-w-[1100px] text-center"
//         >

//           <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
//             Your Story
//           </p>

//           <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.03em] md:text-7xl lg:text-[90px]">
//             Let's make
//             <br />

//             <span className="italic">
//               something unforgettable.
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-black/55">
//             Tell us about your plans, your people and the kind of
//             photographs you want to remember your wedding by.
//           </p>

//           <Link
//             to="/enquire"
//             className="group mt-10 inline-flex items-center gap-4 rounded-full border border-black/25 px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-[#20211e] hover:text-white"
//           >
//             Get In Touch

//             <ArrowUpRight
//               size={15}
//               strokeWidth={1.4}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </Link>

//         </motion.div>

//       </section>

//     </main>
//   );
// }
// import { motion } from "framer-motion";
// import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// import w1 from "../assests/w1.jpg";
// import w2 from "../assests/w2.jpg";
// import w3 from "../assests/w3.jpg";
// import w4 from "../assests/w4.jpg";
// import w5 from "../assests/w5.jpg";
// import w6 from "../assests/w6.jpg";
// import w7 from "../assests/w7.jpg";
// import w8 from "../assests/w8.jpg";

// /* =========================================================
//    FAQ
// ========================================================= */

// const faqs = [
//   {
//     q: "What is required to book you?",
//     a: "Booking is simple — after we chat, all that's needed is a signed contract and a booking fee to hold your date. The remaining balance is due before your wedding.",
//   },
//   {
//     q: "Do you travel for weddings?",
//     a: "Absolutely. We are available for weddings and celebrations across India and destination weddings around the world.",
//   },
//   {
//     q: "Are there extra charges for travel?",
//     a: "Travel requirements depend on the destination and duration of the celebration. We always discuss travel costs clearly before booking so there are no surprises.",
//   },
//   {
//     q: "How long until we receive our gallery?",
//     a: "Every photograph is carefully selected and edited before delivery. Your finished gallery is delivered through a private online gallery within the agreed timeline for your collection.",
//   },
//   {
//     q: "Can you help us plan our wedding day?",
//     a: "Yes. From timelines and locations to photography ideas, we are happy to help you create a day that feels relaxed and natural.",
//   },
//   {
//     q: "Do you photograph traditional Indian ceremonies?",
//     a: "Yes. Indian weddings are filled with beautiful rituals, family traditions and emotional moments. We document the ceremonies while also paying attention to everything happening around them.",
//   },
// ];

// /* =========================================================
//    PROCESS
// ========================================================= */

// const steps = [
//   {
//     n: "01",
//     title: "Fill out the contact form",
//     body: "Tell us a little about yourselves, your plans and the kind of celebration you're dreaming about.",
//   },
//   {
//     n: "02",
//     title: "Let's get to know each other",
//     body: "We'll have a relaxed conversation about your wedding, your priorities and what you want your photographs to feel like.",
//   },
//   {
//     n: "03",
//     title: "Secure your date",
//     body: "Once everything feels right, we'll send over your agreement and booking details to officially reserve your date.",
//   },
//   {
//     n: "04",
//     title: "Planning & support",
//     body: "We'll stay involved throughout the planning process and help with timelines, locations and photography ideas.",
//   },
//   {
//     n: "05",
//     title: "The wedding day",
//     body: "You enjoy the day. We observe, guide when needed and document everything as naturally as possible.",
//   },
//   {
//     n: "06",
//     title: "Relive it",
//     body: "Your photographs are carefully edited and delivered through a private online gallery so you can return to the day whenever you want.",
//   },
// ];

// /* =========================================================
//    RECOGNITION
// ========================================================= */

// const recognitions = [
//   "FEATURED — INDIAN WEDDING PHOTOGRAPHY",
//   "FEATURED — DESTINATION WEDDING STORIES",
//   "EDITOR'S PICK — WEDDING PHOTOGRAPHY",
//   "FEATURED — CINEMATIC WEDDING FILMS",
//   "RECOGNISED — LUXURY WEDDING STORIES",
// ];

// /* =========================================================
//    RECENT WORK
// ========================================================= */

// const latest = [
//   {
//     img: w5,
//     title: "A Beautiful Indian Wedding Story",
//     tag: "Wedding",
//   },
//   {
//     img: w6,
//     title: "An Intimate Celebration of Love",
//     tag: "Couples",
//   },
//   {
//     img: w7,
//     title: "A Celebration Full of Emotion",
//     tag: "Wedding",
//   },
// ];

// /* =========================================================
//    ANIMATION
// ========================================================= */

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },

//   show: {
//     opacity: 1,
//     y: 0,

//     transition: {
//       duration: 0.75,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// const imageReveal = {
//   hidden: {
//     opacity: 0,
//     scale: 1.04,
//   },

//   show: {
//     opacity: 1,
//     scale: 1,

//     transition: {
//       duration: 1.1,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// /* =========================================================
//    ABOUT PAGE
// ========================================================= */

// export default function About() {
//   const [openFaq, setOpenFaq] = useState<number | null>(0);

//   return (
//     <main className="bg-[#F6F2EA] text-[#221E1A]">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">

//         <motion.img
//           src={w1}
//           alt="Indian wedding celebration"
//           initial={{
//             scale: 1.08,
//           }}
//           animate={{
//             scale: 1,
//           }}
//           transition={{
//             duration: 1.6,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* overlay */}

//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

//         <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-24 lg:px-20">

//           <div className="max-w-4xl">

//             <motion.p
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#F1EADD]"
//             >
//               Our Story
//             </motion.p>

//             <motion.h1
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               transition={{ delay: 0.1 }}
//               className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#FBF8F2] md:text-7xl lg:text-[88px]"
//             >
//               We photograph
//               <br />

//               <span className="italic">
//                 how it felt.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               transition={{ delay: 0.2 }}
//               className="mt-7 max-w-xl text-sm leading-7 text-[#EDE6D8] md:text-base"
//             >
//               Wedding photography and films created for couples
//               who want to remember not only how their wedding
//               looked, but how it felt to be there.
//             </motion.p>

//           </div>

//         </div>

//         {/* scroll indicator */}

//         <motion.div
//           animate={{
//             y: [0, 8, 0],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 2.2,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
//         >
//           <ArrowDown
//             size={18}
//             strokeWidth={1.2}
//           />
//         </motion.div>

//       </section>


//       {/* =====================================================
//           THE STORY
//       ===================================================== */}

//       <section className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">

//         <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">

//           {/* LEFT */}

//           <div className="md:col-span-5">

//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               viewport={{
//                 once: true,
//                 margin: "-100px",
//               }}
//               variants={fadeUp}
//               className="md:sticky md:top-24"
//             >

//               <span className="text-[10px] uppercase tracking-[0.35em] text-[#6B7156]">
//                 The Story
//               </span>

//               <h2 className="mt-4 font-serif text-3xl leading-[1.15] md:text-[2.7rem]">
//                 Hi, it's really nice
//                 <br />
//                 to meet you.
//               </h2>

//               <div className="mt-8 overflow-hidden">

//                 <motion.img
//                   src={w2}
//                   alt="Indian wedding couple"
//                   whileHover={{
//                     scale: 1.03,
//                   }}
//                   transition={{
//                     duration: 0.8,
//                   }}
//                   className="h-[430px] w-full object-cover"
//                 />

//               </div>

//             </motion.div>

//           </div>


//           {/* RIGHT */}

//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{
//               once: true,
//               margin: "-100px",
//             }}
//             variants={fadeUp}
//             className="space-y-6 text-[15px] leading-[1.9] text-[#3A342C] md:col-span-7 md:text-base"
//           >

//             <p>
//               We believe wedding photography should feel like
//               something you experienced, rather than something
//               you performed for.
//             </p>

//             <p>
//               Weddings are full of movement. Parents seeing their
//               children get married. Friends who haven't seen each
//               other in years. A nervous laugh before the ceremony.
//               Someone crying when they thought nobody was
//               watching.
//             </p>

//             <p>
//               Those are the moments we are drawn to.
//             </p>

//             <p>
//               Our work combines documentary photography with a
//               cinematic eye. We look for beautiful light,
//               interesting compositions and genuine connection,
//               while allowing the day to unfold naturally.
//             </p>

//             <p>
//               Based in India and available wherever your story
//               takes you, we photograph intimate celebrations,
//               traditional Indian weddings and destination
//               celebrations.
//             </p>

//             <p>
//               Every couple is different. Every family has its own
//               rhythm. And every wedding gives us something new to
//               discover.
//             </p>

//             <p className="text-[#221E1A]">
//               That's what keeps us completely in love with this
//               work.
//             </p>

//             <Link
//               to="/enquire"
//               className="group mt-6 inline-flex items-center gap-3 border-b border-[#221E1A] pb-1 text-[11px] uppercase tracking-[0.25em] transition-colors hover:border-[#6B7156] hover:text-[#6B7156]"
//             >
//               Get in touch

//               <ArrowUpRight
//                 size={15}
//                 strokeWidth={1.5}
//                 className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>

//           </motion.div>

//         </div>

//       </section>


//       {/* =====================================================
//           IMAGE BREAK
//       ===================================================== */}

//       <section className="px-6 md:px-12 lg:px-20">

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           variants={imageReveal}
//           className="mx-auto max-w-[1400px] overflow-hidden"
//         >

//           <img
//             src={w4}
//             alt="Indian wedding ceremony"
//             className="aspect-[16/7] w-full object-cover"
//           />

//         </motion.div>

//       </section>


//       {/* =====================================================
//           RECOGNITION
//       ===================================================== */}

//       <section className="border-y border-[#DCD4C2] bg-[#EFE9DC] py-16">

//         <motion.p
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//           }}
//           variants={fadeUp}
//           className="mb-10 text-center text-[10px] uppercase tracking-[0.35em] text-[#6B7156]"
//         >
//           Recognition
//         </motion.p>

//         <div className="mx-auto flex max-w-4xl flex-col divide-y divide-[#DCD4C2] px-6">

//           {recognitions.map((line, index) => (

//             <motion.div
//               key={line}
//               initial="hidden"
//               whileInView="show"
//               viewport={{
//                 once: true,
//               }}
//               variants={fadeUp}
//               transition={{
//                 delay: index * 0.05,
//               }}
//               className="py-5 text-center font-serif text-base md:text-lg"
//             >
//               {line}
//             </motion.div>

//           ))}

//         </div>

//       </section>


//       {/* =====================================================
//           CINEMATIC APPROACH
//       ===================================================== */}

//       <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-16 md:py-32">

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//             margin: "-100px",
//           }}
//           variants={fadeUp}
//           className="md:col-span-7"
//         >

//           <span className="text-[10px] uppercase tracking-[0.35em] text-[#6B7156]">
//             Philosophy
//           </span>

//           <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] md:text-5xl">
//             A cinematic eye.
//             <br />

//             <span className="italic">
//               A documentary heart.
//             </span>
//           </h2>

//           <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-[1.9] text-[#3A342C]">

//             <p>
//               We love the atmosphere of cinema — beautiful light,
//               movement, composition and the feeling that a frame
//               can tell an entire story.
//             </p>

//             <p>
//               But weddings aren't movies. They're real, messy,
//               emotional and completely unpredictable.
//             </p>

//             <p>
//               So we combine both worlds. We use a cinematic eye
//               while allowing genuine moments to unfold naturally.
//             </p>

//             <p>
//               Sometimes we'll guide you. Most of the time, we'll
//               simply observe.
//             </p>

//             <p>
//               The result should feel timeless without feeling
//               staged.
//             </p>

//           </div>

//         </motion.div>


//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//             margin: "-100px",
//           }}
//           variants={imageReveal}
//           className="md:col-span-5"
//         >

//           <img
//             src={w3}
//             alt="Cinematic wedding moment"
//             className="h-[520px] w-full object-cover"
//           />

//         </motion.div>

//       </section>


//       {/* =====================================================
//           IMAGE GRID
//       ===================================================== */}

//       <section className="px-6 pb-28 md:px-12 lg:px-20">

//         <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-4 md:grid-cols-4">

//           {[w5, w6, w7, w8].map((image, index) => (

//             <motion.div
//               key={image}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.15,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.08,
//               }}
//               className="overflow-hidden"
//             >

//               <motion.img
//                 src={image}
//                 alt="Indian wedding moment"
//                 whileHover={{
//                   scale: 1.04,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                 }}
//                 className="aspect-[3/4] h-full w-full object-cover"
//               />

//             </motion.div>

//           ))}

//         </div>

//       </section>


//       {/* =====================================================
//           FAQ
//           LEFT = QUESTIONS
//           RIGHT = STICKY IMAGE
//       ===================================================== */}

//       <section className="bg-[#221E1A] px-6 py-24 text-[#F6F2EA] md:px-12 md:py-32 lg:px-20">

//         <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

//           {/* =================================================
//               LEFT FAQ
//           ================================================= */}

//           <div>

//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               viewport={{
//                 once: true,
//               }}
//               variants={fadeUp}
//             >

//               <span className="text-[10px] uppercase tracking-[0.35em] text-[#A79C82]">
//                 Good to know
//               </span>

//               <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
//                 Questions,
//                 <br />

//                 <span className="italic">
//                   answered.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-lg text-sm leading-7 text-[#C9C0AC]">
//                 A few things couples usually want to know before
//                 booking their wedding photography.
//               </p>

//             </motion.div>


//             <div className="mt-14 divide-y divide-[#3A342C]">

//               {faqs.map((faq, index) => {

//                 const open = openFaq === index;

//                 return (

//                   <motion.div
//                     key={faq.q}
//                     initial={{
//                       opacity: 0,
//                       y: 15,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       delay: index * 0.04,
//                     }}
//                     className="py-6"
//                   >

//                     <button
//                       onClick={() =>
//                         setOpenFaq(
//                           open ? null : index
//                         )
//                       }
//                       className="flex w-full items-center justify-between gap-8 text-left"
//                     >

//                       <span className="pr-8 font-serif text-lg md:text-xl">
//                         {faq.q}
//                       </span>

//                       <span
//                         className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 ${
//                           open ? "rotate-45" : ""
//                         }`}
//                       >

//                         <Plus
//                           size={16}
//                           strokeWidth={1.2}
//                         />

//                       </span>

//                     </button>


//                     <motion.div
//                       initial={false}
//                       animate={{
//                         height: open ? "auto" : 0,
//                         opacity: open ? 1 : 0,
//                       }}
//                       transition={{
//                         duration: 0.35,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="overflow-hidden"
//                     >

//                       <p className="max-w-xl pt-4 text-sm leading-7 text-[#C9C0AC]">
//                         {faq.a}
//                       </p>

//                     </motion.div>

//                   </motion.div>

//                 );
//               })}

//             </div>

//           </div>


//           {/* =================================================
//               RIGHT STICKY IMAGE
//           ================================================= */}

//           <div className="relative">

//             <div className="lg:sticky lg:top-24">

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.97,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 transition={{
//                   duration: 1,
//                 }}
//                 className="relative overflow-hidden"
//               >

//                 <img
//                   src={w6}
//                   alt="Indian wedding couple"
//                   className="h-[520px] w-full object-cover lg:h-[650px]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

//                 <div className="absolute bottom-7 left-7">

//                   <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
//                     The moments between
//                   </p>

//                   <p className="mt-2 max-w-xs font-serif text-2xl italic text-white">
//                     The photographs should feel like memories.
//                   </p>

//                 </div>

//               </motion.div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           HOW IT WORKS
//       ===================================================== */}

//       <section className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//           }}
//           variants={fadeUp}
//           className="mb-16"
//         >

//           <span className="text-[10px] uppercase tracking-[0.35em] text-[#6B7156]">
//             Working together
//           </span>

//           <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
//             From the first hello
//             <br />

//             <span className="italic">
//               to the photographs you keep forever.
//             </span>
//           </h2>

//         </motion.div>


//         <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">

//           {steps.map((step, index) => (

//             <motion.div
//               key={step.n}
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 margin: "-60px",
//               }}
//               transition={{
//                 duration: 0.65,
//                 delay: (index % 3) * 0.08,
//               }}
//               className="border-t border-[#DCD4C2] pt-6"
//             >

//               <span className="font-serif text-sm text-[#A79C82]">
//                 {step.n}
//               </span>

//               <h3 className="mt-2 font-serif text-xl italic">
//                 {step.title}
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-[#3A342C]">
//                 {step.body}
//               </p>

//             </motion.div>

//           ))}

//         </div>

//       </section>


//       {/* =====================================================
//           FIXED / PARALLAX ENQUIRE SECTION
//       ===================================================== */}

//       <section className="relative h-[72vh] min-h-[560px] overflow-hidden">

//         {/* =================================================
//             FIXED BACKGROUND IMAGE

//             This stays visually fixed while the page scrolls.
//         ================================================= */}

//         <div className="absolute inset-0">

//           <div
//             className="absolute inset-0 bg-cover bg-center bg-fixed"
//             style={{
//               backgroundImage: `url(${w8})`,
//             }}
//           />

//         </div>


//         {/* dark cinematic overlay */}

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />


//         {/* =================================================
//             CENTER CONTENT
//         ================================================= */}

//         <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 35,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="max-w-3xl"
//           >

//             <p className="text-[10px] uppercase tracking-[0.35em] text-[#EDE6D8]">
//               Enquire Now
//             </p>

//             <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-[#FBF8F2] md:text-7xl lg:text-[82px]">
//               Your story
//               <br />

//               <span className="italic">
//                 starts here.
//               </span>
//             </h2>

//             <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#EDE6D8] md:text-base">
//               Tell us about your wedding, your people and the
//               moments that matter most to you.
//             </p>

//             <Link
//               to="/enquire"
//               className="group mt-9 inline-flex items-center gap-4 border border-white/60 bg-[#F6F2EA] px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#221E1A] transition-all duration-500 hover:bg-transparent hover:text-white"
//             >

//               Get in touch

//               <ArrowUpRight
//                 size={15}
//                 strokeWidth={1.4}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />

//             </Link>

//           </motion.div>

//         </div>

//       </section>


//       {/* =====================================================
//           RECENT WORK
//       ===================================================== */}

//       <section className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//           }}
//           variants={fadeUp}
//           className="mb-14"
//         >

//           <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7156]">
//             Recent Stories
//           </span>

//           <h2 className="mt-4 font-serif text-4xl md:text-5xl">
//             The Latest
//           </h2>

//         </motion.div>


//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

//           {latest.map((item, index) => (

//             <motion.div
//               key={item.title}
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 margin: "-60px",
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.08,
//               }}
//             >

//               <Link
//                 to="/journal"
//                 className="group block"
//               >

//                 <div className="overflow-hidden">

//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />

//                 </div>

//                 <div className="mt-4 flex items-start justify-between gap-4">

//                   <div>

//                     <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7156]">
//                       {item.tag}
//                     </span>

//                     <h3 className="mt-2 font-serif text-xl leading-snug">
//                       {item.title}
//                     </h3>

//                   </div>

//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={1.5}
//                     className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />

//                 </div>

//               </Link>

//             </motion.div>

//           ))}

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#EFE9DC] px-6 py-28 md:px-12 md:py-36">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.9,
//           }}
//           className="mx-auto max-w-4xl text-center"
//         >

//           <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
//             Let's create something beautiful
//           </p>

//           <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
//             Ready to tell
//             <br />

//             <span className="italic">
//               your story?
//             </span>
//           </h2>

//           <Link
//             to="/enquire"
//             className="group mt-10 inline-flex items-center gap-4 rounded-full border border-black/25 px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-[#221E1A] hover:text-white"
//           >
//             Enquire Now

//             <ArrowUpRight
//               size={15}
//               strokeWidth={1.4}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />

//           </Link>

//         </motion.div>

//       </section>

//     </main>
//   );
// }

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import w1 from "../assests/w1.jpg";
import w2 from "../assests/w2.jpg";
import w3 from "../assests/w3.jpg";
import w4 from "../assests/w4.jpg";
import w5 from "../assests/w5.jpg";
import w6 from "../assests/w6.jpg";
import w7 from "../assests/w7.jpg";
import w8 from "../assests/w8.jpg";
import w9 from "../assests/w9.jpg";
import w10 from "../assests/w10.jpg";
import w11 from "../assests/w11.jpg";
import w12 from "../assests/w12.jpg";

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    q: "What is required to book you?",
    a: "Booking is simple — after we chat, all that's needed is a signed contract and a booking fee to hold your date. The remaining balance is due before your wedding.",
  },
  {
    q: "Do you travel for weddings?",
    a: "Absolutely. We are available for weddings and celebrations across India and destination weddings around the world.",
  },
  {
    q: "Are there extra charges for travel?",
    a: "Travel requirements depend on the destination and duration of the celebration. We always discuss travel costs clearly before booking so there are no surprises.",
  },
  {
    q: "How long until we receive our gallery?",
    a: "Every photograph is carefully selected and edited before delivery. Your finished gallery is delivered through a private online gallery within the agreed timeline for your collection.",
  },
  {
    q: "Can you help us plan our wedding day?",
    a: "Yes. From timelines and locations to photography ideas, we are happy to help you create a day that feels relaxed and natural.",
  },
  {
    q: "Do you photograph traditional Indian ceremonies?",
    a: "Yes. Indian weddings are filled with beautiful rituals, family traditions and emotional moments. We document the ceremonies while also paying attention to everything happening around them.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const steps = [
  {
    n: "01",
    title: "Fill out the contact form",
    body: "Tell us a little about yourselves, your plans and the kind of celebration you're dreaming about.",
  },
  {
    n: "02",
    title: "Let's get to know each other",
    body: "We'll have a relaxed conversation about your wedding, your priorities and what you want your photographs to feel like.",
  },
  {
    n: "03",
    title: "Secure your date",
    body: "Once everything feels right, we'll send over your agreement and booking details to officially reserve your date.",
  },
  {
    n: "04",
    title: "Planning & support",
    body: "We'll stay involved throughout the planning process and help with timelines, locations and photography ideas.",
  },
  {
    n: "05",
    title: "The wedding day",
    body: "You enjoy the day. We observe, guide when needed and document everything as naturally as possible.",
  },
  {
    n: "06",
    title: "Relive it",
    body: "Your photographs are carefully edited and delivered through a private online gallery so you can return to the day whenever you want.",
  },
];

/* =========================================================
   RECOGNITION
========================================================= */

// const recognitions = [
//   "FEATURED — INDIAN WEDDING PHOTOGRAPHY",
//   "FEATURED — DESTINATION WEDDING STORIES",
//   "EDITOR'S PICK — WEDDING PHOTOGRAPHY",
//   "FEATURED — CINEMATIC WEDDING FILMS",
//   "RECOGNISED — LUXURY WEDDING STORIES",
// ];

/* =========================================================
   RECENT WORK
========================================================= */

const latest = [
  {
    img: w5,
    title: "A Beautiful Indian Wedding Story",
    tag: "Wedding",
  },
  {
    img: w6,
    title: "An Intimate Celebration of Love",
    tag: "Couples",
  },
  {
    img: w7,
    title: "A Celebration Full of Emotion",
    tag: "Wedding",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
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
    scale: 1.04,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#F6F2EA] text-[#221E1A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">

        <motion.img
          src={w1}
          alt="Indian wedding celebration"
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-24 lg:px-20">

          <div className="max-w-4xl">

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#F1EADD]"
            >
              Our Story
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#FBF8F2] md:text-7xl lg:text-[88px]"
            >
              We photograph
              <br />

              <span className="italic">
                how it felt.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="mt-7 max-w-xl text-sm leading-7 text-[#EDE6D8] md:text-base"
            >
              Wedding photography and films created for couples
              who want to remember not only how their wedding
              looked, but how it felt to be there.
            </motion.p>

          </div>

        </div>

        {/* scroll indicator */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        >
          <ArrowDown
            size={18}
            strokeWidth={1.2}
          />
        </motion.div>

      </section>


      {/* =====================================================
          THE STORY
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">

        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">

          {/* LEFT */}

          <div className="md:col-span-5">

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              variants={fadeUp}
              className="md:sticky md:top-24"
            >

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#6B7156]">
                The Story
              </span>

              <h2 className="mt-4 font-serif text-3xl leading-[1.15] md:text-[2.7rem]">
                Hi, it's really nice
                <br />
                to meet you.
              </h2>

              <div className="mt-8 overflow-hidden">

                <motion.img
                  src={w2}
                  alt="Indian wedding couple"
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="h-[430px] w-full object-cover"
                />

              </div>

            </motion.div>

          </div>


          {/* RIGHT */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeUp}
            className="space-y-6 text-[15px] leading-[1.9] text-[#3A342C] md:col-span-7 md:text-base"
          >

            <p>
              We believe wedding photography should feel like
              something you experienced, rather than something
              you performed for.
            </p>

            <p>
              Weddings are full of movement. Parents seeing their
              children get married. Friends who haven't seen each
              other in years. A nervous laugh before the ceremony.
              Someone crying when they thought nobody was
              watching.
            </p>

            <p>
              Those are the moments we are drawn to.
            </p>

            <p>
              Our work combines documentary photography with a
              cinematic eye. We look for beautiful light,
              interesting compositions and genuine connection,
              while allowing the day to unfold naturally.
            </p>

            <p>
              Based in India and available wherever your story
              takes you, we photograph intimate celebrations,
              traditional Indian weddings and destination
              celebrations.
            </p>

            <p>
              Every couple is different. Every family has its own
              rhythm. And every wedding gives us something new to
              discover.
            </p>

            <p className="text-[#221E1A]">
              That's what keeps us completely in love with this
              work.
            </p>

            <Link
              to="/enquire"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#221E1A] pb-1 text-[11px] uppercase tracking-[0.25em] transition-colors hover:border-[#6B7156] hover:text-[#6B7156]"
            >
              Get in touch

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          IMAGE BREAK
      ===================================================== */}

      <section className="px-6 md:px-12 lg:px-20">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={imageReveal}
          className="mx-auto max-w-[1400px] overflow-hidden"
        >

          <img
            src={w4}
            alt="Indian wedding ceremony"
            className="aspect-[16/7] w-full object-cover"
          />

        </motion.div>

      </section>


      {/* =====================================================
          AWARDS — EDITORIAL COLLAGE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F6F2EA] py-24 md:py-32 lg:py-40">

        {/* Section heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.8,
          }}
          className="mx-auto max-w-[1450px] px-6 md:px-12 lg:px-20"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#5f6259]">
            Awards
          </p>
        </motion.div>


        {/* =================================================
            EDITORIAL COLLAGE

            Large whitespace + offset images intentionally
            recreate the luxury magazine/editorial feeling.
        ================================================= */}

        <div className="relative mx-auto mt-12 h-[1050px] max-w-[1450px] md:mt-4 md:h-[1250px] lg:h-[1350px]">

          {/* TOP LEFT — PORTRAIT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[7%] top-[8%] w-[32%] md:left-[8%] md:w-[22%] lg:left-[7%] lg:w-[21%]"
          >
            <div className="group overflow-hidden">
              <motion.img
                src={w9}
                alt="Indian wedding portrait"
                whileHover={{
                  scale: 1.035,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>


          {/* TOP RIGHT — LANDSCAPE */}

          <motion.div
            initial={{
              opacity: 0,
              y: -35,
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
              duration: 1.1,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[6%] top-0 w-[55%] md:right-[9%] md:w-[36%] lg:right-[10%] lg:w-[37%]"
          >
            <div className="overflow-hidden">
              <motion.img
                src={w10}
                alt="Indian wedding couple"
                whileHover={{
                  scale: 1.035,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </motion.div>


          {/* CENTER AWARDS TEXT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.8,
              delay: 0.15,
            }}
            className="absolute left-[39%] top-[35%] w-[52%] md:left-[43%] md:top-[34%] md:w-[35%] lg:left-[43%] lg:w-[32%]"
          >
            <div className="flex items-start gap-5 md:gap-7">

              <div className="mt-1 h-16 w-px bg-[#B9B1A3]" />

              <div>
                <p className="text-[7px] leading-[1.9] tracking-[0.11em] text-[#55544F] md:text-[9px]">
                  FEATURED — INDIAN WEDDING PHOTOGRAPHY
                  <br />
                  FEATURED — DESTINATION WEDDING STORIES
                  <br />
                  EDITOR'S PICK — WEDDING PHOTOGRAPHY
                  <br />
                  FEATURED — CINEMATIC WEDDING FILMS
                  <br />
                  RECOGNISED — LUXURY WEDDING STORIES
                </p>
              </div>

            </div>
          </motion.div>


          {/* LOWER LEFT — PORTRAIT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[3%] top-[55%] w-[31%] md:left-[2%] md:top-[55%] md:w-[25%] lg:left-[0%] lg:w-[25%]"
          >
            <div className="overflow-hidden">
              <motion.img
                src={w11}
                alt="Indian wedding ceremony"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>


          {/* LOWER LEFT AWARD TEXT */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="absolute left-[25%] top-[58%] hidden w-[25%] md:block"
          >
            <p className="text-[8px] leading-[1.9] tracking-[0.1em] text-[#5c5a54]">
              NAMED — TOP WEDDING PHOTOGRAPHER
              <br />
              FEATURED — DESTINATION WEDDINGS
              <br />
              NAMED — BEST WEDDING PHOTOGRAPHY
            </p>
          </motion.div>


          {/* LOWER RIGHT — PORTRAIT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[7%] top-[57%] w-[32%] md:right-[10%] md:top-[56%] md:w-[22%] lg:right-[12%] lg:w-[21%]"
          >
            <div className="overflow-hidden">
              <motion.img
                src={w12}
                alt="Indian bride portrait"
                whileHover={{
                  scale: 1.035,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>


          {/* SMALL EDITORIAL CAPTION */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="absolute bottom-[7%] left-1/2 -translate-x-1/2"
          >
            <p className="whitespace-nowrap font-serif text-sm italic text-black/30">
              Stories worth remembering
            </p>
          </motion.div>

        </div>


        {/* =================================================
            MOBILE FALLBACK

            Absolute desktop composition becomes a simple
            editorial grid on small screens so the images
            don't become tiny or overlap.
        ================================================= */}

        <div className="mx-auto grid max-w-xl grid-cols-2 gap-4 px-6 md:hidden">

          {[w9, w10, w11, w12].map((image, index) => (
            <motion.div
              key={image}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className={index === 1 ? "mt-10" : index === 3 ? "-mt-8" : ""}
            >
              <img
                src={image}
                alt="Indian wedding"
                className="aspect-[3/4] w-full object-cover"
              />
            </motion.div>
          ))}

        </div>

      </section>


      {/* =====================================================
          CINEMATIC APPROACH
      ===================================================== */}

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-16 md:py-32">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={fadeUp}
          className="md:col-span-7"
        >

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6B7156]">
            Philosophy
          </span>

          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] md:text-5xl">
            A cinematic eye.
            <br />

            <span className="italic">
              A documentary heart.
            </span>
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-[1.9] text-[#3A342C]">

            <p>
              We love the atmosphere of cinema — beautiful light,
              movement, composition and the feeling that a frame
              can tell an entire story.
            </p>

            <p>
              But weddings aren't movies. They're real, messy,
              emotional and completely unpredictable.
            </p>

            <p>
              So we combine both worlds. We use a cinematic eye
              while allowing genuine moments to unfold naturally.
            </p>

            <p>
              Sometimes we'll guide you. Most of the time, we'll
              simply observe.
            </p>

            <p>
              The result should feel timeless without feeling
              staged.
            </p>

          </div>

        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={imageReveal}
          className="md:col-span-5"
        >

          <img
            src={w3}
            alt="Cinematic wedding moment"
            className="h-[520px] w-full object-cover"
          />

        </motion.div>

      </section>


      {/* =====================================================
          IMAGE GRID
      ===================================================== */}

      <section className="px-6 pb-28 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-4 md:grid-cols-4">

          {[w5, w6, w7, w8].map((image, index) => (

            <motion.div
              key={image}
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
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="overflow-hidden"
            >

              <motion.img
                src={image}
                alt="Indian wedding moment"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="aspect-[3/4] h-full w-full object-cover"
              />

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FAQ
          LEFT = QUESTIONS
          RIGHT = STICKY IMAGE
      ===================================================== */}

      <section className="bg-[#221E1A] px-6 py-24 text-[#F6F2EA] md:px-12 md:py-32 lg:px-20">

        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          {/* =================================================
              LEFT FAQ
          ================================================= */}

          <div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
            >

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#A79C82]">
                Good to know
              </span>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Questions,
                <br />

                <span className="italic">
                  answered.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#C9C0AC]">
                A few things couples usually want to know before
                booking their wedding photography.
              </p>

            </motion.div>


            <div className="mt-14 divide-y divide-[#3A342C]">

              {faqs.map((faq, index) => {

                const open = openFaq === index;

                return (

                  <motion.div
                    key={faq.q}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                    }}
                    className="py-6"
                  >

                    <button
                      onClick={() =>
                        setOpenFaq(
                          open ? null : index
                        )
                      }
                      className="flex w-full items-center justify-between gap-8 text-left"
                    >

                      <span className="pr-8 font-serif text-lg md:text-xl">
                        {faq.q}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 ${
                          open ? "rotate-45" : ""
                        }`}
                      >

                        <Plus
                          size={16}
                          strokeWidth={1.2}
                        />

                      </span>

                    </button>


                    <motion.div
                      initial={false}
                      animate={{
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >

                      <p className="max-w-xl pt-4 text-sm leading-7 text-[#C9C0AC]">
                        {faq.a}
                      </p>

                    </motion.div>

                  </motion.div>

                );
              })}

            </div>

          </div>


          {/* =================================================
              RIGHT STICKY IMAGE
          ================================================= */}

          <div className="relative">

            <div className="lg:sticky lg:top-24">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1,
                }}
                className="relative overflow-hidden"
              >

                <img
                  src={w6}
                  alt="Indian wedding couple"
                  className="h-[520px] w-full object-cover lg:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    The moments between
                  </p>

                  <p className="mt-2 max-w-xs font-serif text-2xl italic text-white">
                    The photographs should feel like memories.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="mb-16"
        >

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6B7156]">
            Working together
          </span>

          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
            From the first hello
            <br />

            <span className="italic">
              to the photographs you keep forever.
            </span>
          </h2>

        </motion.div>


        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">

          {steps.map((step, index) => (

            <motion.div
              key={step.n}
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.08,
              }}
              className="border-t border-[#DCD4C2] pt-6"
            >

              <span className="font-serif text-sm text-[#A79C82]">
                {step.n}
              </span>

              <h3 className="mt-2 font-serif text-xl italic">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#3A342C]">
                {step.body}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FIXED / PARALLAX ENQUIRE SECTION
      ===================================================== */}

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


      {/* =====================================================
          RECENT WORK
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="mb-14"
        >

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7156]">
            Recent Stories
          </span>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            The Latest
          </h2>

        </motion.div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {latest.map((item, index) => (

            <motion.div
              key={item.title}
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >

              <Link
                to="/journal"
                className="group block"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                </div>

                <div className="mt-4 flex items-start justify-between gap-4">

                  <div>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7156]">
                      {item.tag}
                    </span>

                    <h3 className="mt-2 font-serif text-xl leading-snug">
                      {item.title}
                    </h3>

                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#EFE9DC] px-6 py-28 md:px-12 md:py-36">

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
            duration: 0.9,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
            Let's create something beautiful
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
            Ready to tell
            <br />

            <span className="italic">
              your story?
            </span>
          </h2>

          <Link
            to="/enquire"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-black/25 px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 hover:bg-[#221E1A] hover:text-white"
          >
            Enquire Now

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