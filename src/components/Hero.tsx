import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const LEFT_IMAGES: string[] = [
  "https://images.squarespace-cdn.com/content/v1/6744250b81521d675423a80c/82a5e637-af1e-4d8f-90f8-aa5439aaa1c4/598920725_18551030698018841_9219789078788786437_n.jpg",
  "https://images.zola.com/177a2cf3-dce8-4eb6-b286-453648d74d46",
];

const RIGHT_IMAGES: string[] = [
  "https://cdn.pixabay.com/photo/2021/12/23/04/35/bride-6888618_1280.jpg",
  "https://images.openai.com/static-rsc-4/Be9qyY8oMsLV8rwF29UPO0dC22PM2t6eSKLqkyS13RcGMIcyzv7aKpGw_SQt5h773jo_Tx1Yt9aKDP5U_JoD5bIyVsTAw0ial21yKpoyx5KyVWOG9P7vSephScTJ9od-_CuPgbw3ryo9EWD6kMMWLsnteHzeK40pyNcNDedt2N9g52hpvu_r8OXaEKOitSyy?purpose=fullsize",
];

// FIX 1: Add types here
function useSyncedIndex(length: number, interval: number): number {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);

    return () => clearInterval(id);
  }, [length, interval]);

  return index;
}

// FIX 2: Add string[] type
function usePreload(urls: string[]): void {
  useEffect(() => {
    urls.forEach((src: string) => {
      const img = new Image();
      img.src = src;
    });
  }, [urls]);
}

// FIX 3: Create an interface for ImagePane props
interface ImagePaneProps {
  images: string[];
  index: number;
  grayscaleAlt?: boolean;
}

function ImagePane({
  images,
  index,
  grayscaleAlt = false,
}: ImagePaneProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-900">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            },
            scale: {
              duration: 8,
              ease: "linear",
            },
          }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt=""
            className={`h-full w-full object-cover ${
              grayscaleAlt && index % 2 === 1 ? "grayscale" : ""
            }`}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-black/15" />
    </div>
  );
}

export default function KitchenersHero() {
  // const [navOpen, setNavOpen] = useState<boolean>(false);

  const frameCount = Math.max(
    LEFT_IMAGES.length,
    RIGHT_IMAGES.length
  );

  const index = useSyncedIndex(frameCount, 5000);

  usePreload([...LEFT_IMAGES, ...RIGHT_IMAGES]);

  const { scrollY } = useScroll();

  const headingScale = useTransform(
    scrollY,
    [0, 400],
    [1, 0.55]
  );

  const headingY = useTransform(
    scrollY,
    [0, 400],
    [0, 220]
  );

  const headingOpacity = useTransform(
    scrollY,
    [0, 250, 400],
    [1, 1, 0]
  );

  return (
    <div className="min-h-screen w-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@400;500&display=swap');

        .font-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
      `}</style>

      <section className="relative h-[calc(100vh-70px)] w-full overflow-hidden">
        <div className="grid h-full grid-cols-2">
          <ImagePane
            images={LEFT_IMAGES}
            index={index % LEFT_IMAGES.length}
          />

          <ImagePane
            images={RIGHT_IMAGES}
            index={index % RIGHT_IMAGES.length}
            grayscaleAlt
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/25" />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            style={{
              scale: headingScale,
              y: headingY,
              opacity: headingOpacity,
            }}
            className="font-display leading-[0.95] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
          >
            <span className="block text-[15vw] tracking-[0.02em] sm:text-[9vw] lg:text-[6.5vw]">
              The
            </span>

            <span className="-mt-2 block text-[15vw] tracking-[0.02em] sm:text-[9vw] lg:text-[6.5vw]">
              Reclipse
            </span>
          </motion.h1>
        </div>
      </section>
    </div>
  );
}