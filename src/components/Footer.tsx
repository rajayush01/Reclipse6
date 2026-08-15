// import { Link } from 'react-router-dom'
// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { fadeUp, staggerContainer } from '@/lib/motion'

// const COLUMNS = [
//   {
//     heading: 'Studio',
//     links: [
//       { label: 'Photography', to: '/photography' },
//       { label: 'Films', to: '/films' },
//       { label: 'About', to: '/about' },
//       { label: 'Journal', to: '/journal' },
//     ],
//   },
//   {
//     heading: 'Connect',
//     links: [
//       { label: 'Enquire', to: '/enquire' },
//       { label: 'Instagram', to: 'https://instagram.com' },
//       { label: 'hello@RECLIPSE.co', to: 'mailto:hello@RECLIPSE.co' },
//     ],
//   },
// ]

// export default function Footer() {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-10% 0px' })

//   return (
//     <footer ref={ref} className="border-t border-line bg-bg px-6 pb-8 pt-24 md:px-10">
//       <motion.div
//         variants={staggerContainer()}
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//         className="mx-auto max-w-[1600px]"
//       >
//         <motion.p
//           variants={fadeUp}
//           className="heading-hero font-display text-[13vw] leading-[0.9] md:text-[8vw]"
//         >
//           Let&rsquo;s tell your story.
//         </motion.p>

//         <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line pt-10 md:grid-cols-4">
//           <motion.div variants={fadeUp}>
//             <p className="font-display text-lg">RECLIPSE</p>
//             <p className="mt-2 text-sm text-ash">Isle of Skye, Scotland</p>
//           </motion.div>

//           {COLUMNS.map((col) => (
//             <motion.div key={col.heading} variants={fadeUp}>
//               <p className="eyebrow mb-4">{col.heading}</p>
//               <ul className="space-y-2">
//                 {col.links.map((l) => (
//                   <li key={l.label}>
//                     <Link to={l.to} className="text-sm text-ash transition-colors hover:text-ink">
//                       {l.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           variants={fadeUp}
//           className="mt-16 flex flex-col justify-between gap-2 text-xs text-ash md:flex-row"
//         >
//           <span>&copy; {new Date().getFullYear()} RECLIPSE. All rights reserved.</span>
//           <span>Cinematic elopement &amp; wedding photography</span>
//         </motion.div>
//       </motion.div>
//     </footer>
//   )
// }
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const NAV_LINKS = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "STORIES", to: "/journal" },
  { label: "VIDEO", to: "/films" },
  { label: "ELOPEMENT GUIDES", to: "/elopement-guides" },
  { label: "EDUCATION", to: "/education" },
  { label: "CONTACT", to: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCHlSCYaXgEhskVNLXuJr5wg",
    className: "social-link-youtube",
    symbol: "▶",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    className: "social-link-pinterest",
    symbol: "p",
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com/",
    className: "social-link-vimeo",
    symbol: "v",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    className: "social-link-instagram",
    symbol: "◎",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    className: "social-link-facebook",
    symbol: "f",
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={ref}
      className="bg-bg px-6 md:px-10"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto max-w-[1475px]"
      >
        {/* Top border */}
        <div className="border-t border-[#2d3748]" />

        {/* Main Footer */}
        <div className="relative py-16 md:py-[72px]">
          {/* Brand + Navigation */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            {/* Brand + Socials */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center md:items-start"
            >
              <a
                href="/"
                className="font-display text-[32px] font-normal tracking-[0.025em] text-ink sm:text-[35px] md:text-[38px]"
              >
                RECLIPSE
              </a>

              {/* Social Links */}
              <div className="mt-8 flex items-center justify-center gap-[26px] md:justify-start">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-button footer-social-item ${social.className} flex h-6 w-6 items-center justify-center text-[#2d3748] transition-opacity duration-300 hover:opacity-60`}
                  >
                    {social.label === "YouTube" ? (
                      <span className="flex h-[17px] w-[24px] items-center justify-center rounded-[5px] bg-[#2d3748] text-[9px] leading-none text-white">
                        ▶
                      </span>
                    ) : social.label === "Pinterest" ? (
                      <span className="font-serif text-[25px] font-bold leading-none">
                        p
                      </span>
                    ) : social.label === "Vimeo" ? (
                      <span className="font-serif text-[26px] font-bold italic leading-none">
                        v
                      </span>
                    ) : social.label === "Instagram" ? (
                      <span className="relative flex h-[22px] w-[22px] items-center justify-center rounded-[6px] border-[3px] border-[#2d3748]">
                        <span className="h-[7px] w-[7px] rounded-full border-[2px] border-[#2d3748]" />
                        <span className="absolute right-[3px] top-[3px] h-[3px] w-[3px] rounded-full bg-[#2d3748]" />
                      </span>
                    ) : (
                      <span className="flex h-[22px] w-[22px] items-end justify-center rounded-full bg-[#2d3748] pb-[1px] font-serif text-[18px] font-bold leading-none text-white">
                        f
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              variants={fadeUp}
              className="mt-10 w-full md:mt-8 md:w-auto"
            >
              <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-9 md:justify-end md:gap-x-9 lg:gap-x-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      className="whitespace-nowrap font-display text-[10px] font-medium tracking-[0.27em] text-[#354052] transition-opacity duration-300 hover:opacity-50 sm:text-[11px] md:text-[12px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>

          {/* Centered Tagline */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex w-full justify-center px-2 md:mt-[68px]"
          >
            <p className="max-w-[1050px] text-center font-serif text-[13px] italic leading-[1.7] text-[#354052] sm:text-[14px] md:text-[16px]">
              INDIAN Photographer and Videographer, capturing real
              cinematic wedding and elopement stories throughout India
            </p>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-[#2d3748]" />

        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          className="relative flex min-h-[105px] items-center justify-center px-2 sm:min-h-[115px] md:px-12"
        >
          <p className="max-w-[1000px] text-center font-serif text-[11px] leading-[1.8] text-[#354052] sm:text-[12px] md:text-[14px]">
            © {new Date().getFullYear()} Reclipse&nbsp; | &nbsp;McLean
            Photo Video Limited trading as The Reclipse&nbsp; | &nbsp;Sightsee
            Design&nbsp; | &nbsp;Sitemap &amp; Privacy
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="absolute bottom-4 right-0 flex h-[42px] w-[42px] items-center justify-center border border-[#2d3748] text-[#354052] transition-all duration-300 hover:bg-[#2d3748] hover:text-white sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
          >
            <ArrowUp size={20} strokeWidth={1.5} />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}