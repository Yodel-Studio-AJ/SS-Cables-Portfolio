"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { PRIMARY_WIRE_FAMILIES, SERVICE_CABLES, SERVICE_CABLE_FAMILY } from '../data/products';
import { ProductItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductFamiliesProps {
  primaryFamilies?: ProductItem[];
  serviceCablesHeading?: string;
  serviceCables?: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductFamilies: React.FC<ProductFamiliesProps> = ({
  primaryFamilies = PRIMARY_WIRE_FAMILIES,
  serviceCablesHeading = SERVICE_CABLE_FAMILY.heading,
  serviceCables = SERVICE_CABLES,
  onSelectProduct
}) => {
  return (
    <section 
      id="products" 
      className="max-w-[1280px] mx-4 xl:mx-auto px-5 sm:px-6 md:px-12 py-8 md:py-12 bg-[#f2f4f6] rounded-xl my-6 md:my-10 overflow-hidden shadow-md border border-[#e0e3e5]"
    >
      <motion.h2 
        id="families-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-bold text-[#191c1e] mb-6 md:mb-8 text-center md:text-left"
      >
        Our standard wire families
      </motion.h2>

      {/* Primary Full Width Families (1. FR House Wire & 2. Twin-Core Twisted & Flexible) */}
      <div className="flex flex-col gap-6 md:gap-8">
        {primaryFamilies.map((family, idx) => (
          <motion.div
            key={family.id}
            id={`product-family-card-${family.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.8, delay: idx * 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-lg border border-[#c6c6cd] p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-all duration-300 shadow-sm"
          >
            {/* Text & Specs */}
            <div className="flex-1 flex flex-col gap-2 md:gap-3 w-full">
              {family.badge && (
                <span className="text-xs font-semibold text-[#565e74] uppercase tracking-wider">
                  {family.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-[#191c1e]">
                {family.title}
              </h3>
              <p className="text-sm md:text-base text-[#45464d] leading-relaxed">
                {family.shortDescription}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProduct(family)}
                  className="text-[#191c1e] font-semibold text-sm flex items-center gap-1.5 hover:text-[#904d00] transition-colors cursor-pointer group py-1"
                  aria-label={`Explore details for ${family.title}`}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5 text-[#904d00] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div 
              className="w-full md:w-1/2 h-44 sm:h-48 md:h-52 bg-[#eceef0] rounded-lg overflow-hidden relative cursor-pointer group"
              onClick={() => onSelectProduct(family)}
            >
              <img
                src={family.image}
                alt={family.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subhead: 3. Aluminium Service Cable */}
      <motion.h3 
        id="service-cable-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl font-bold text-[#191c1e] mt-8 md:mt-12 mb-4 md:mb-6 text-center md:text-left"
      >
        {serviceCablesHeading}
      </motion.h3>

      {/* 3 Column Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
      >
        {serviceCables.map((item, index) => (
          <motion.div
            key={item.id}
            id={`product-grid-card-${item.id}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-[#c6c6cd] p-5 hover:shadow-lg transition-all duration-300 flex flex-col shadow-sm"
          >
            <div 
              className="h-40 bg-[#eceef0] rounded-md mb-4 overflow-hidden relative cursor-pointer group"
              onClick={() => onSelectProduct(item)}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <h4 className="font-semibold text-base text-[#191c1e] mb-1">
              {item.title}
            </h4>

            <p className="text-xs sm:text-sm text-[#45464d] mb-4 flex-grow">
              {item.shortDescription}
            </p>

            <div className="mt-auto pt-2 border-t border-[#f2f4f6]">
              <button
                onClick={() => onSelectProduct(item)}
                className="text-[#191c1e] font-semibold text-xs sm:text-sm flex items-center gap-1.5 hover:text-[#904d00] transition-colors cursor-pointer group"
                aria-label={`Explore details for ${item.title}`}
              >
                <span>Explore</span>
                <ArrowRight className="w-[16px] h-[16px] text-[#904d00] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
