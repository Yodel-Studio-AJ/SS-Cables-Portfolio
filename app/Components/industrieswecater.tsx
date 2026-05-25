'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Types ---

export interface IndustryItem {
  cardNumber: string;
  title: string;
  description: string;
}

export interface IndustriesWeCaterProps {
  eyebrow?: string;
  heading?: string;
  highlightedWord?: string;
  description?: string;
  industries?: IndustryItem[];
}

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// --- Sub-components ---

/**
 * Renders the heading with a highlighted word and an animated accent line.
 */
const SectionHeader = ({ 
  eyebrow, 
  heading, 
  highlightedWord, 
  description 
}: Omit<IndustriesWeCaterProps, 'industries'>) => {
  
  const renderHeading = () => {
    if (!heading) return null;
    if (!highlightedWord) return heading;
    
    const parts = heading.split(new RegExp(`(${highlightedWord})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlightedWord.toLowerCase() ? (
        <span key={index} className="text-[#14B927]">{part}</span>
      ) : part
    );
  };

  return (
    <div className="mb-6 lg:mb-8">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[#14B927] font-bold tracking-widest text-xs uppercase mb-1 md:mb-2"
        >
          {eyebrow}
        </motion.p>
      )}
      
      {heading && (
        <div className="mb-2 lg:mb-3 w-fit">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
          >
            {renderHeading()}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="h-1 bg-[#14B927] mt-1 rounded-full"
          />
        </div>
      )}
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-slate-600 text-xs md:text-sm lg:text-base max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

/**
 * Renders an individual industry card.
 */
const IndustryCard = ({ item }: { item: IndustryItem }) => (
  <motion.div
    variants={itemVariants}
    className="group relative bg-white border border-slate-200 p-4 pt-6 md:p-5 md:pt-7 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
  >
    {/* Card Number */}
    <span className="absolute top-2 right-4 text-slate-100 font-bold text-base transition-colors duration-300 group-hover:text-slate-200">
      {item.cardNumber}
    </span>

    {/* Card Content */}
    <div>
      <h3 className="text-slate-800 font-bold text-sm md:text-base mb-1 tracking-tight group-hover:text-slate-900">
        {item.title}
      </h3>
      <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed mb-3 line-clamp-2">
        {item.description}
      </p>
    </div>

    {/* Accent Bars */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#14B927] transition-all duration-700 ease-out group-hover:w-1/3" />
    <div className="w-8 h-1 bg-slate-100 group-hover:bg-[#14B927]/20 transition-colors duration-500" />
  </motion.div>
);

// --- Main Component ---

export default function IndustriesWeCater({
  eyebrow,
  heading,
  highlightedWord,
  description,
  industries,
}: IndustriesWeCaterProps) {
  return (
    <section className="w-full bg-white min-h-[85vh] lg:h-screen flex flex-col pt-2 pb-3 md:pt-3 md:pb-3 lg:pt-4 lg:pb-3 overflow-hidden">
      <div className="w-full px-4 md:px-6 lg:px-5 flex-1 flex flex-col">
        <div className="relative w-full flex-1 bg-slate-100 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-sm border border-slate-200/50 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <SectionHeader 
              eyebrow={eyebrow}
              heading={heading}
              highlightedWord={highlightedWord}
              description={description}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {industries?.map((item, index) => (
                <IndustryCard key={`${item.title}-${index}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
