'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

const SECTION_IMAGE_URL =
  'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777726238/A_person_in_a_light_suit_speaks_on_stage_with_a_vivid_celestial-themed_background._wznnlj.png';

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

export default function HouseWiringSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-label="House Wiring Cables"
      className="w-full bg-white pb-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] lg:h-[550px] flex items-end pb-6 sm:pb-8 md:pb-12 lg:pb-16 bg-cover bg-center bg-no-repeat rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg"
          style={{ backgroundImage: `url('${SECTION_IMAGE_URL}')` }}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 antialiased">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-4 sm:mb-6 tracking-[-0.03em]"
            >
              <span className="font-[100]">House Wiring </span>
              <span className="italic font-light">Cables</span>
              <span className="text-[#14B927] font-bold">.</span>
            </motion.h2>

            <motion.p
              variants={paraVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white/70 text-base sm:text-lg md:text-[20px] leading-[1.6] max-w-2xl font-[100]"
            >
              Discover our premium range of House Wiring Cables designed for safe, efficient, and
              long-lasting electrical installations in homes and residential buildings. Made with
              high-quality PVC insulation, these wires offer excellent conductivity, fire resistance,
              and durability for all your domestic electrical needs.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
