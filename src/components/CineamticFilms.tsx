import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useZoomReveal } from "@/hooks/useZoomReveal";

/**
 * RECLIPSE — Cinematic Elopement Films
 *
 * Full-width video reveals via the same scroll-tied zoom used across the
 * page (small + invisible → full scale + opaque). A custom play button sits
 * over the poster frame; on click it hands off to native <video> controls
 * so the visitor gets the browser's own scrub bar, volume, and fullscreen.
 *
 * The three award laurels share the identical hook but each is given a
 * slightly later scroll trigger, so they land in a soft left-to-right
 * cascade rather than popping in all at once.
 */

const POSTER_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop";
const VIDEO_SRC =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const AWARDS = [
  { year: "2017", label: "Europe's Best Wedding Photographer", sub: "Way Up North Wedding Photo & Video Awards" },
  { year: "2018", label: "Europe's Best Wedding Photographer", sub: "Way Up North Wedding Photo & Video Awards", tag: "Top 3 Finalist" },
  { year: "2019", label: "Europe's Best Wedding Photographer", sub: "Way Up North Wedding Photo & Video Awards", tag: "Top 3 Finalist" },
];

function LaurelBadge({
  year,
  label,
  sub,
  tag,
  index,
}: {
  year: string;
  label: string;
  sub: string;
  tag?: string;
  index: number;
}) {
  // stagger the trigger window slightly per badge so they cascade left-to-right
  const start = 0.95 - index * 0.06;
  const end = 0.45 - index * 0.06;
  const { ref, scale, opacity } = useZoomReveal({
    from: 0.6,
    to: 1,
    offset: [`start ${start}`, `start ${end}`],
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="flex w-44 flex-col items-center text-center sm:w-52"
    >
      {tag && (
        <span className="mb-1 font-sans text-[10px] uppercase tracking-[0.15em] text-[#6E6B64]">
          {tag}
        </span>
      )}
      <svg viewBox="0 0 200 200" className="mb-2 h-24 w-24 text-[#171715] sm:h-28 sm:w-28">
        {/* simple laurel wreath, drawn rather than imported so it inherits currentColor */}
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={`l-${i}`}
            cx={70 - i * 4}
            cy={100 - i * 11}
            rx="10"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            transform={`rotate(${-20 - i * 8} ${70 - i * 4} ${100 - i * 11})`}
          />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={`r-${i}`}
            cx={130 + i * 4}
            cy={100 - i * 11}
            rx="10"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            transform={`rotate(${20 + i * 8} ${130 + i * 4} ${100 - i * 11})`}
          />
        ))}
      </svg>
      <p
        className="font-serif text-lg leading-tight text-[#171715]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {label}
      </p>
      <p className="mt-2 font-sans text-sm tracking-wide text-[#171715]">{year}</p>
      <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.1em] text-[#6E6B64]">
        {sub}
      </p>
    </motion.div>
  );
}

export default function CinematicFilms() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: videoWrapperRef, scale: videoScale, opacity: videoOpacity } = useZoomReveal({
    from: 0.85,
    to: 1,
    offset: ["start 1", "start 0.6"],
  });

  const handlePlay = () => {
    setIsPlaying(true);
    // wait a tick for the controls attribute to mount before calling play()
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section className="w-full bg-[#F5F3EE] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[10vw] leading-[1.1] text-[#171715] sm:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          CINEMATIC ELOPEMENT FILMS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl space-y-1 font-serif text-lg italic text-[#6E6B64] sm:text-xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <p>
            Your own love story in the Scottish highlands captured in all its cinematic
            glory. Hold onto the feeling and emotion you felt on your elopement day in
            Scotland through the magic of cinema.
          </p>
          <p>
            Documenting weddings, elopements and couple stories in Scotland and throughout
            Europe is something I&apos;m truly passionate about.
          </p>
          <p>Let&apos;s capture your cinematic love story in Scotland!</p>
        </motion.div>
      </div>

      {/* full-width video, zoom-revealed as it scrolls into view */}
      <motion.div
        ref={videoWrapperRef}
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="relative mx-auto mt-16 aspect-video w-full max-w-[1900px] overflow-hidden bg-[#171715]"
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_IMAGE}
          controls={isPlaying}
          playsInline
          className="h-full w-full object-cover"
        />

        {!isPlaying && (
          <button
            onClick={handlePlay}
            aria-label="Play film"
            className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
          >
            <span className="flex h-16 w-16 items-center justify-center bg-[#171715]/90 text-[#F5F3EE] transition-transform duration-300 group-hover:scale-110">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
        )}
      </motion.div>

      {/* award laurels — cascading reveal */}
      <div className="mx-auto mt-20 flex max-w-3xl flex-wrap items-start justify-center gap-x-12 gap-y-10">
        {AWARDS.map((award, i) => (
          <LaurelBadge key={award.year} index={i} {...award} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <motion.a
          href="#films"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#4B4A34] px-10 py-4 font-sans text-[13px] font-medium tracking-[0.2em] text-[#F5F3EE]"
        >
          WATCH ELOPEMENT FILMS
        </motion.a>
      </div>
    </section>
  );
}