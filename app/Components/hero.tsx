'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
// These are exported so a Sanity data-fetcher can import and use them directly.

export type StyledSlide = {
  id: number;
  image: string;
  bgZoom?: boolean;
  heading: 'styled';
};

export type GenericSlide = {
  id: number;
  image: string;
  bgZoom?: boolean;
  heading: 'generic';
  line1: string;
  line2: string;
};

export type HeroSlide = StyledSlide | GenericSlide;

export interface HeroProps {
  slides: HeroSlide[];
  /** Auto-advance interval in ms. Defaults to 6000. */
  interval?: number;
}

// ─── Animation config ─────────────────────────────────────────────────────────

const IMAGE_DURATION = 1.2;
const IMAGE_EXIT_DURATION = 0.8;
const TEXT_DURATION = 0.7;
const TEXT_EXIT_DURATION = 0.4;
const TEXT_DELAY = 0.3;
const DEFAULT_INTERVAL = 6_000;

const imageVariants: Variants = {
  enter: { opacity: 0, scale: 1.05 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: IMAGE_DURATION, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: { duration: IMAGE_EXIT_DURATION, ease: 'easeIn' },
  },
};

const textVariants: Variants = {
  enter: { opacity: 0, y: 24 },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TEXT_DURATION,
      ease: 'easeOut',
      delay: TEXT_DELAY,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: TEXT_EXIT_DURATION, ease: 'easeIn' },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SlideHeading({ slide }: { slide: HeroSlide }) {
  if (slide.heading === 'styled') {
    return (
      <h1 id="hero-heading" className="text-white tracking-[-0.05em]">
        <span className="block text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] ml-[6%]">
          Strength In Every{' '}
          <span className="font-bold italic text-[1.4em] tracking-[-0.07em]">STRAND</span>
          <span className="text-[#14B927] text-[1.4em] font-bold">,</span>
        </span>
        <span className="block text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.1] font-bold mt-1 md:mt-2 tracking-[-0.06em]">
          Reliability{' '}
          <span className="font-medium text-[0.7em] tracking-[-0.04em]">
            In Every Connection.
          </span>
        </span>
      </h1>
    );
  }

  return (
    <h1 id="hero-heading" className="text-white tracking-[-0.05em]">
      <span className="block text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.15] font-bold ml-[6%] tracking-[-0.06em]">
        {slide.line1}
      </span>
      <span className="block text-[22px] sm:text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] font-medium ml-[6%] mt-1 md:mt-2 tracking-[-0.04em]">
        {slide.line2}
      </span>
    </h1>
  );
}

function SlideIndicators({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Slide indicators"
      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20"
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
          }`}
        />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Hero({ slides, interval = DEFAULT_INTERVAL }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      interval,
    );
    return () => clearInterval(id);
  }, [slides.length, interval]);

  const slide = slides[current];

  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full bg-white min-h-screen flex flex-col pt-3 pb-4 md:pt-4 md:pb-4 lg:pt-6 lg:pb-4"
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex-1 flex flex-col">
        <div className="relative w-full flex-1 flex items-end pb-12 sm:pb-16 md:pb-24 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg">

          {/* Background image with crossfade */}
          <AnimatePresence mode="sync">
            <motion.div
              key={slide.id}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              aria-hidden="true"
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: slide.bgZoom ? 'center' : 'bottom',
              }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          {/* Slide text */}
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <SlideHeading slide={slide} />
              </motion.div>
            </AnimatePresence>
          </div>

          <SlideIndicators
            total={slides.length}
            current={current}
            onSelect={setCurrent}
          />

        </div>
      </div>
    </section>
  );
}
