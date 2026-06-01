'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface HouseWiringSectionProps {
  titlePart1: string;
  titlePart2: string;
  description: string;
  backgroundImageUrl: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut', delay: 0.3 },
  },
};

const paraVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut', delay: 0.55 },
  },
};

export default function HouseWiringSection({
  titlePart1,
  titlePart2,
  description,
  backgroundImageUrl,
}: HouseWiringSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-label={`${titlePart1} ${titlePart2}`}
      className="w-full bg-white pb-16 md:pb-24"
    >
      <div className="w-full px-4 md:px-6 lg:px-6">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] lg:h-[550px] flex items-end pb-6 sm:pb-8 md:pb-12 lg:pb-16 bg-cover bg-center bg-no-repeat rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 antialiased">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-4 sm:mb-6 tracking-[-0.03em]"
            >
              <span className="font-[100]">{titlePart1} </span>
              <span className="italic font-light">{titlePart2}</span>
              <span className="text-[#14B927] font-bold">.</span>
            </motion.h2>

            <motion.p
              variants={paraVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/70 text-base sm:text-lg md:text-[20px] leading-[1.6] max-w-2xl font-[100] whitespace-pre-line"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

