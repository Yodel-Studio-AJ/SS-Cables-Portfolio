"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { QuickSpecItem } from '../types';
import { QUICK_SPECS } from '../data/products';
import { Ruler, Home, Cable, ShieldCheck } from 'lucide-react';

interface QuickSpecsProps {
  specs?: QuickSpecItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  'straighten': Ruler,
  'home': Home,
  'cable': Cable,
  'verified_user': ShieldCheck
};

export const QuickSpecs: React.FC<QuickSpecsProps> = ({
  specs = QUICK_SPECS
}) => {
  return (
    <section 
      id="quick-specs"
      className="bg-white border-y border-[#c6c6cd] py-4 md:py-6 my-4 md:my-6 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
        {specs.map((spec, index) => {
          // Compute clean borders for 2x2 on mobile and 1x4 on desktop
          let borderClasses = 'border-[#c6c6cd]';
          if (index === 0) {
            borderClasses += ' border-r border-b md:border-b-0 md:border-r';
          } else if (index === 1) {
            borderClasses += ' border-b md:border-b-0 md:border-r';
          } else if (index === 2) {
            borderClasses += ' border-r md:border-r';
          } else if (index === 3) {
            borderClasses += ' md:border-r-0';
          }

          const IconComponent = ICON_MAP[spec.icon] || Home;

          return (
            <motion.div 
              key={spec.id}
              id={`quick-spec-item-${spec.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className={`flex flex-col items-center justify-center text-center gap-1.5 md:gap-2 px-3 sm:px-4 py-4 md:py-2 transition-colors cursor-default ${borderClasses}`}
            >
              <IconComponent 
                className="text-[#131b2e] w-[28px] h-[28px] md:w-[32px] md:h-[32px]"
                aria-hidden="true"
              />
              <span className="font-medium text-xs sm:text-sm text-[#191c1e] tracking-tight">
                {spec.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
