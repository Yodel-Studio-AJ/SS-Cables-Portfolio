import React from 'react';

const Hero = () => {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-screen w-full flex items-end pb-16 md:pb-24 bg-[url('https://res.cloudinary.com/dmnew7sbj/image/upload/v1777671641/q042V-1_1.jpg_1_bjadc6.jpg')] bg-cover bg-bottom bg-no-repeat"
    >
      {/* Background Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <h1 
          id="hero-heading"
          className="text-white font-[family-name:var(--font-ibm-plex-sans)] tracking-[-0.05em]"
        >
          {/* First Line */}
          <span className="block text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] ml-[6%]">
            Strength In Every{" "}
            <span className="font-bold italic text-[1.4em] tracking-[-0.07em]">
              STRAND
            </span>
            <span className="text-[#14B927] text-[1.4em] font-bold">,</span>
          </span>
          
          {/* Second Line */}
          <span className="block text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.1] font-bold mt-1 md:mt-2 tracking-[-0.06em]">
            Reliability{" "}
            <span className="font-medium text-[0.7em] tracking-[-0.04em]">
              In Every Connection.
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
