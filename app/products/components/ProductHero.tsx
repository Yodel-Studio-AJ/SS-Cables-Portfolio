"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSectionData } from '../types';
import { HERO_DATA } from '../data/products';
import { ArrowRight, Download } from 'lucide-react';

interface ProductHeroProps {
  data?: HeroSectionData;
  onExploreRange: () => void;
  onOpenTechnicalGuide: () => void;
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  data = HERO_DATA,
  onExploreRange,
  onOpenTechnicalGuide
}) => {
  return (
    <section 
      id="hero-section"
      className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-hidden"
    >
      {/* Text & Action Column */}
      <motion.div 
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 }}
        className="flex flex-col gap-4 md:gap-6 order-2 md:order-1"
      >
        <motion.span 
          id="hero-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold text-[#565e74] tracking-widest uppercase"
        >
          {data.eyebrow}
        </motion.span>

        <motion.h1 
          id="hero-heading"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#191c1e] tracking-tight leading-[1.15] md:leading-[56px]"
        >
          {data.title}
        </motion.h1>

        <motion.p 
          id="hero-description"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-[#45464d] leading-relaxed max-w-lg"
        >
          {data.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-row gap-3 md:gap-4 mt-2"
        >
          <motion.button
            id="hero-explore-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onExploreRange}
            className="bg-[#131b2e] text-white px-3 sm:px-6 py-3 md:py-2.5 rounded-none flex-1 sm:flex-none text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#0d1c2e] transition-colors cursor-pointer shadow-sm"
          >
            <span>{data.primaryCtaText}</span>
            <ArrowRight className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
          </motion.button>

          <motion.button
            id="hero-technical-guide-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenTechnicalGuide}
            className="border border-[#c6c6cd] text-[#191c1e] bg-white px-3 sm:px-6 py-3 md:py-2.5 rounded-none flex-1 sm:flex-none text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#eceef0] transition-colors cursor-pointer"
          >
            <span>{data.secondaryCtaText}</span>
            <Download className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Product Photography */}
      <motion.div 
        id="hero-image-container"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] rounded-xl overflow-hidden bg-[#f2f4f6] order-1 md:order-2 shadow-md border border-[#e0e3e5]/60 group"
      >
        <img
          id="hero-product-img"
          src={data.heroImage.src}
          alt={data.heroImage.alt}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};
