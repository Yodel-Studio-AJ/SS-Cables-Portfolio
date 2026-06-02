'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';

// --- Types ---
export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  number: number;
  label: string;
  suffix: string;
}

interface JourneySectionProps {
  stats?: Stat[];
  data?: {
    eyebrow: string;
    mainHeading: string;
    introParagraph: string;
    leftContent: {
      bigNumber: string;
      subHeading: string;
      description: string;
      buttonText: string;
    };
    milestones: TimelineMilestone[];
    stats: Stat[];
  };
}

// --- Default Data ---
const DEFAULT_DATA = {
  eyebrow: 'OUR STORY',
  mainHeading: 'A 22-YEAR JOURNEY OF EXCELLENCE',
  introParagraph: 'Built on trust, tested in the field, and proven across millions of installations across India.',
  leftContent: {
    bigNumber: '22',
    subHeading: 'YEARS OF EXCELLENCE',
    description: 'Since 2002 SS Cable has been manufacturing premium copper and aluminium conductors with an unwavering commitment to quality and reliability.',
    buttonText: 'KNOW US MORE',
  },
  milestones: [
    {
      year: '2002',
      title: 'Founded in West Bengal',
      description: 'Commenced copper conductor manufacturing.',
    },
    {
      year: '2006',
      title: 'Product Expansion',
      description: 'Extended range to include house wiring cables.',
    },
    {
      year: '2010',
      title: 'ISI & BIS Certified',
      description: 'Entered industrial wiring segment.',
    },
    {
      year: '2015',
      title: 'Pan-India Network',
      description: 'Distribution established across 19+ states.',
    },
    {
      year: '2019',
      title: 'EHV Cable Launch',
      description: 'Introduced high voltage cable range.',
    },
    {
      year: '2024',
      title: '50,000+ Projects Served',
      description: 'Trusted by leading contractors nationwide.',
    },
  ],
  stats: [
    { number: 22, label: 'YEARS ACTIVE', suffix: '+' },
    { number: 50, label: 'PROJECTS DONE', suffix: 'K+' },
    { number: 18, label: 'STATES SERVED', suffix: '+' },
    { number: 100, label: 'PRODUCT VARIANTS', suffix: '+' },
  ],
};

// --- Helper Components ---

const Counter = ({ value, duration = 3 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { 
        duration,
        ease: "easeOut" 
      });
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const JourneySection: React.FC<JourneySectionProps> = ({ data = DEFAULT_DATA, stats }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const finalStats = stats || data.stats;

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white lg:h-[85vh] min-h-[550px] flex flex-col pt-2 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="w-full px-4 md:px-6 lg:px-6 flex-1 flex flex-col">
        {/* Card Container */}
        <div className="relative w-full flex-1 bg-[#F8F8F8] rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 lg:p-10 pb-8 md:pb-12 lg:pb-14 shadow-sm border border-zinc-200/50 flex flex-col justify-between overflow-hidden">
          
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
            {/* Header Section */}
            <div className="mb-4 lg:mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-0.5 border border-zinc-300 mb-3"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-900" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-900 uppercase">
                  {data.eyebrow}
                </span>
              </motion.div>
              
              <div className="relative block">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 leading-tight text-black"
                >
                  {data.mainHeading}
                </motion.h2>
                
                {/* Animated Underline Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '120px' } : {}}
                  transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
                  className="h-1 bg-[#C5A059] absolute -bottom-1 left-0"
                />
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="max-w-2xl text-zinc-600 mt-2 text-xs md:text-sm lg:text-base leading-snug"
              >
                {data.introParagraph}
              </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Outlined Large Number - Slightly Smaller */}
                  <h3 
                    className="text-[60px] md:text-[90px] lg:text-[110px] font-bold leading-none select-none text-transparent"
                    style={{ 
                      WebkitTextStroke: '1px #C5A059',
                      opacity: 0.8
                    }}
                  >
                    {data.leftContent.bigNumber}
                  </h3>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-zinc-800 mt-[-10px] md:mt-[-15px] uppercase text-black">
                    {data.leftContent.subHeading}
                  </p>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="text-zinc-600 leading-normal text-xs lg:text-sm max-w-sm"
                >
                  {data.leftContent.description}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#C5A059', color: '#FFF' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 border border-[#C5A059] text-[#C5A059] font-bold tracking-widest text-[9px] md:text-[10px] transition-colors duration-300"
                >
                  {data.leftContent.buttonText}
                </motion.button>
              </div>

              {/* Right Column - Timeline - More Compact */}
              <div className="lg:col-span-7 relative max-h-[220px] lg:max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-300">
                <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-zinc-200" />
                
                <div className="space-y-4 pl-8">
                  {data.milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0, delay: index * 0.2, ease: "easeOut" }}
                      className="relative group pb-3 border-b border-zinc-200/50 last:border-0"
                    >
                      {/* Timeline Dot - Aligned with line at left-[5px] */}
                      <div className="absolute -left-[32px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C5A059] border-2 border-[#F8F8F8] z-10" />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-3">
                        <span className="text-[#C5A059] font-bold text-xs min-w-[45px]">
                          {milestone.year}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-bold text-zinc-900 text-[11px] md:text-xs">
                            {milestone.title} — <span className="font-normal text-zinc-600">{milestone.description}</span>
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid - Compact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-zinc-200 mt-4 pt-4">
            {finalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                className={`p-2 md:p-4 text-center flex flex-col items-center justify-center border-zinc-200 ${
                  index % 2 === 0 ? 'border-r' : 'lg:border-r'
                } ${index < 2 ? 'border-b lg:border-b-0' : ''} last:border-r-0`}
              >
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-0.5 flex items-center">
                  <Counter value={stat.number} duration={3} />
                  <span>{stat.suffix}</span>
                </h4>
                <p className="text-[9px] md:text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
