"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { APPLICATION_ENVIRONMENTS } from '../data/products';
import { ApplicationEnvironment } from '../types';
import { Home, Building2, Factory } from 'lucide-react';

interface ProductApplicationsProps {
  heading?: string;
  items?: ApplicationEnvironment[];
  onSelectEnvironment?: (envId: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  'home': Home,
  'domain': Building2,
  'factory': Factory
};

export const ProductApplications: React.FC<ProductApplicationsProps> = ({
  heading = 'Designed for every environment.',
  items = APPLICATION_ENVIRONMENTS,
  onSelectEnvironment
}) => {
  return (
    <section 
      id="applications-section"
      className="bg-[#f2f4f6] py-10 md:py-16 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 text-center">
        <motion.h2 
          id="applications-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#191c1e]"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((env, index) => {
            const IconComponent = ICON_MAP[env.icon] || Home;
            return (
              <motion.div
                key={env.id}
                id={`application-card-${env.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.8, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => onSelectEnvironment?.(env.id)}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-[#c6c6cd]/60 group cursor-default"
              >
                <IconComponent 
                  className="text-[#904d00] w-[44px] h-[44px] md:w-[48px] md:h-[48px] group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-lg md:text-xl text-[#191c1e]">
                  {env.title}
                </h3>
                {env.description && (
                  <p className="text-xs sm:text-sm text-[#45464d] max-w-xs leading-relaxed">
                    {env.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
