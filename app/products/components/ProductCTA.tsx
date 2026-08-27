"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { CTA_DATA } from '../data/products';
import { CTASectionData } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCTAProps {
  data?: CTASectionData;
  onFindYourWire: () => void;
}

export const ProductCTA: React.FC<ProductCTAProps> = ({
  data = CTA_DATA,
  onFindYourWire
}) => {
  return (
    <section 
      id="product-cta"
      className="bg-[#131b2e] text-white py-12 md:py-20 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center gap-6"
      >
        <motion.h2 
          id="cta-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold max-w-3xl leading-[1.2] tracking-tight"
        >
          {data.heading}
        </motion.h2>

        <motion.button
          id="cta-find-wire-btn"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onFindYourWire}
          className="bg-[#904d00] text-white px-8 py-3.5 rounded-lg text-base font-semibold flex items-center justify-center gap-2.5 hover:bg-[#fe932c] hover:text-[#191c1e] transition-colors mt-2 shadow-lg cursor-pointer w-full sm:w-auto group"
        >
          <span>{data.buttonText}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};
