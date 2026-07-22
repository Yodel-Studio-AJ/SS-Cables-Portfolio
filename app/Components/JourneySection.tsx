'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, Variants } from 'framer-motion';

// --- Static Image Imports ---
import trainImg from '@/app/Images/Train.png';
import img1970 from '@/app/Images/1970.png';
import img1993 from '@/app/Images/1993.png';
import img2008 from '@/app/Images/2008.png';
import img2012 from '@/app/Images/2012.png';
import img2021 from '@/app/Images/2021.png';
import img2022 from '@/app/Images/2022.png';
import img2026 from '@/app/Images/2026.png';

// --- Types ---
export interface Milestone {
  year: number;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: StaticImageData | any;
  position: 'top' | 'bottom';
  order: number;
  imageClasses?: string;
}

export interface JourneySectionProps {
  milestonesData?: Milestone[];
}

// --- Fallback Data for CMS Integration ---
const defaultMilestones: Milestone[] = [
  {
    year: 1970,
    title: 'A foundation in trade',
    description: 'A small start with trading wires and cables, built on honesty and hard work.',
    image: img1970,
    position: 'bottom',
    order: 0,
    imageClasses: 'scale-115',
  },
  {
    year: 1993,
    title: 'The first shop',
    description: 'Our first retail shop opens, bringing trusted products closer to customers.',
    image: img1993,
    position: 'top',
    order: 1,
    imageClasses: 'scale-125',
  },
  {
    year: 2008,
    title: 'Manufacturing begins',
    description: 'Our first manufacturing unit marks the start of building our own.',
    image: img2008,
    position: 'bottom',
    order: 2,
    imageClasses: 'scale-113',
  },
  {
    year: 2012,
    title: 'Making room to grow',
    description: 'A larger facility helps us scale with better systems and capabilities.',
    image: img2012,
    position: 'top',
    order: 3,
    imageClasses: 'scale-125',
  },
  {
    year: 2021,
    title: 'A second facility',
    description: 'Expanding capacity to serve more customers across more markets.',
    image: img2021,
    position: 'bottom',
    order: 4,
    imageClasses: 'scale-125',
  },
  {
    year: 2022,
    title: 'Now energy joins',
    description: 'A new generation brings fresh ideas while staying true to our values.',
    image: img2022,
    position: 'top',
    order: 5,
    imageClasses: 'scale-120',
  },
  {
    year: 2026,
    title: 'The next generation',
    description: 'Continuing the journey with purpose, innovation and responsibility.',
    image: img2026,
    position: 'bottom',
    order: 6,
    imageClasses: 'scale-115',
  },
];

// --- Animation Settings (Extracted for performance) ---
const headerVariants: Variants = {
  initial: { x: '-100vw', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
};

const trainVariants: Variants = {
  initial: { x: '100vw', opacity: 0.8 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.0,
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // premium easeOutQuart/Expo
    },
  },
};

const lineVariants = (position: 'top' | 'bottom', order: number): Variants => ({
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      delay: 2.8 + order * 1.0,
      duration: 0.25,
      ease: 'easeOut',
    },
  },
});

const cardVariants = (position: 'top' | 'bottom', order: number): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.95,
    y: position === 'top' ? 25 : -25,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 2.8 + order * 1.0 + 0.15,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const verticalLineVariants: Variants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      delay: 2.8,
      duration: 14,
      ease: 'easeOut',
    },
  },
};

const mobileLineVariants = (order: number): Variants => ({
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      delay: 2.8 + order * 1.0,
      duration: 0.25,
      ease: 'easeOut',
    },
  },
});

const mobileCardVariants = (order: number): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.95,
    x: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: 2.8 + order * 1.0 + 0.15,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const footerVariants: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 9.4, duration: 0.8, ease: 'easeOut' },
  },
};

// --- Sub-components for better readability ---
const DesktopCardUI = ({ item }: { item: Milestone }) => (
  <motion.div
    variants={cardVariants(item.position, item.order)}
    className="bg-white border border-slate-200/80 rounded-2xl p-3 shadow-[0_8px_25px_-5px_rgba(20,185,39,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(20,185,39,0.5)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-[180px] w-[150px] shrink-0"
  >
    <article>
      <h3 className="text-slate-900 text-xl font-extrabold mb-0 tracking-tight">
        {item.year}
      </h3>
      <h4 className="text-slate-800 text-[11px] font-bold mb-0.5">
        {item.title}
      </h4>
      <p className="text-slate-500 text-[10px] leading-tight line-clamp-2">
        {item.description}
      </p>
    </article>
    <div className="w-full h-[75px] shrink-0 relative mt-1 flex items-center justify-center overflow-hidden">
      <Image
        src={item.image}
        alt={`${item.year} - ${item.title}`}
        className={`w-full h-full object-contain ${item.imageClasses || ''}`}
      />
    </div>
  </motion.div>
);

const MobileCardUI = ({ item }: { item: Milestone }) => (
  <motion.div
    variants={mobileCardVariants(item.order)}
    className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-[0_8px_25px_-5px_rgba(20,185,39,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(20,185,39,0.5)] transition-all duration-300 flex flex-col justify-between w-full min-h-[160px]"
  >
    <article className="flex gap-4 items-start">
      <div className="flex-1">
        <h3 className="text-slate-900 text-xl font-extrabold tracking-tight">
          {item.year}
        </h3>
        <h4 className="text-slate-800 text-xs font-bold mb-1">
          {item.title}
        </h4>
        <p className="text-slate-500 text-[10px] leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="w-[80px] h-[80px] relative flex-shrink-0 flex items-center justify-center overflow-hidden bg-slate-50/50 rounded-lg p-1">
        <Image
          src={item.image}
          alt={`${item.year} - ${item.title}`}
          className={`w-full h-full object-contain ${item.imageClasses || ''}`}
        />
      </div>
    </article>
  </motion.div>
);

export default function JourneySection({ milestonesData }: JourneySectionProps) {
  // Use CMS data if provided, otherwise fallback to static data
  const milestones = milestonesData || defaultMilestones;

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      aria-labelledby="journey-heading"
      className="w-full bg-white py-16 md:py-24 overflow-hidden relative border-t border-slate-100"
    >
      {/* Title Header */}
      <motion.div variants={headerVariants} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-4">
        <span className="text-slate-400 font-bold tracking-widest text-xs uppercase block mb-2">
          OUR JOURNEY
        </span>
        <h2 id="journey-heading" className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Every stop moved us forward.
        </h2>
      </motion.div>

      {/* --- DESKTOP & TABLET TIMELINE --- */}
      <div className="hidden md:block w-full overflow-x-auto lg:overflow-x-visible pb-12 select-none">
        <div className="min-w-[1200px] max-w-7xl mx-auto px-6 lg:px-8 relative h-[560px] flex flex-col justify-start">

          {/* Centered Train (Locomotive + Carriages) */}
          <motion.div
            variants={trainVariants}
            className="absolute left-6 right-6 lg:left-8 lg:right-8 top-[270px] -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center"
          >
            <div className="w-[70%] relative">
              <Image
                src={trainImg}
                alt="SS Cable Journey Train"
                className="w-full h-auto block"
                priority
              />
            </div>
          </motion.div>

          {/* Alternating Cards Grid (7 columns) */}
          <div className="grid grid-cols-7 gap-4 relative z-20 h-[540px] mt-5 w-[65%] mx-auto">
            {milestones.map((item) => {
              const isTop = item.position === 'top';
              return (
                <div key={item.year} className="flex flex-col h-[540px] justify-start items-center">
                  {isTop ? (
                    <>
                      {/* Top Card Box */}
                      <div className="h-[180px] w-full flex items-end justify-center">
                        <DesktopCardUI item={item} />
                      </div>

                      {/* Top Connector Line */}
                      <div className="h-[35px] w-full relative flex justify-center">
                        <motion.div
                          variants={lineVariants(item.position, item.order)}
                          style={{ originY: 1 }}
                          className="w-[1.5px] bg-[#14B927] h-full relative"
                        >
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border-2 border-[#14B927] bg-white" />
                        </motion.div>
                      </div>

                      {/* Spacer for Train & Bottom Half */}
                      <div className="h-[325px] w-full pointer-events-none" />
                    </>
                  ) : (
                    <>
                      {/* Spacer for Top Half & Train */}
                      <div
                        className={`${item.year === 2021 || item.year === 2026 ? 'h-[295px]' : 'h-[325px]'} w-full pointer-events-none`}
                      />

                      {/* Bottom Connector Line */}
                      <div
                        className={`${item.year === 2021 || item.year === 2026 ? 'h-[65px]' : 'h-[35px]'} w-full relative flex justify-center`}
                      >
                        <motion.div
                          variants={lineVariants(item.position, item.order)}
                          style={{ originY: 0 }}
                          className="w-[1.5px] bg-[#14B927] h-full relative"
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border-2 border-[#14B927] bg-white" />
                        </motion.div>
                      </div>

                      {/* Bottom Card Box */}
                      <div className="h-[180px] w-full flex items-start justify-center">
                        <DesktopCardUI item={item} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* --- MOBILE TIMELINE (Vertical Layout) --- */}
      <div className="block md:hidden w-full px-4 mt-6">
        {/* Train animated at the top */}
        <motion.div
          variants={trainVariants}
          className="w-full max-w-[280px] mx-auto mb-10 pointer-events-none"
        >
          <Image
            src={trainImg}
            alt="SS Cable Journey Train"
            className="w-full h-auto block"
            priority
          />
        </motion.div>

        {/* Vertical Timeline container */}
        <div className="relative pl-8 pr-2 min-h-[500px]">
          {/* Active green timeline line that grows */}
          <motion.div
            variants={verticalLineVariants}
            style={{ originY: 0 }}
            className="absolute left-[19.5px] top-0 bottom-6 w-[2px] bg-[#14B927] z-10"
          />

          {/* Milestone List */}
          <div className="space-y-12 relative z-20">
            {milestones.map((item) => (
              <div key={item.year} className="relative flex items-center w-full min-h-[160px]">
                {/* Horizontal Connector Line & Circle node */}
                <div className="absolute left-[-20px] w-[20px] h-[2px] flex items-center">
                  <motion.div
                    variants={mobileLineVariants(item.order)}
                    style={{ originX: 0 }}
                    className="w-full h-full bg-[#14B927] relative"
                  >
                    <div className="absolute left-[-4.5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-[#14B927] bg-white z-30" />
                  </motion.div>
                </div>

                {/* Mobile Card Component */}
                <MobileCardUI item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION SLOGAN --- */}
      <motion.div variants={footerVariants} className="w-full text-center px-4">
        <h3 className="text-slate-900 text-xl md:text-2xl font-extrabold tracking-tight">
          Built with belief. Growing with purpose.
        </h3>
      </motion.div>
    </motion.section>
  );
}
