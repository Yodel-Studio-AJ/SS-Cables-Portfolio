'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- Types ---

export interface EnquiryCardItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  iconClass?: string;
}

export interface SubFeatureItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface LocationCardItem {
  src: string;
  alt: string;
  title: string;
  address: string;
}

export interface RightConnectionProps {
  // Hero section
  contactHeading?: string;
  contactDescription?: string;
  videoSrc?: string;
  // Enquiry cards
  enquiryCards?: EnquiryCardItem[];
  // Form
  formHeading?: string;
  formReasons?: string[];
  // Sub-features grid
  subFeatures?: [SubFeatureItem, SubFeatureItem, SubFeatureItem];
  // Visit / location section
  visitHeading?: string;
  locationCards?: LocationCardItem[];
  directionsHref?: string;
  // Footer tagline
  footerTagline?: string;
}

// --- Animation Variants ---

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    scale: 1.015,
    y: -3,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const headingSlideVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const descSlideVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, duration: 0.8, ease: 'easeOut' },
  },
};

const arrowVariants = {
  initial: { x: 0 },
  hover: {
    x: 5,
    transition: { duration: 0.2, repeat: Infinity, repeatType: 'reverse' as const },
  },
};

const cableImageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Shared constants ---

const SPRING = [0.16, 1, 0.3, 1] as const;
const INPUT_CLASS =
  'w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-850 text-sm focus:outline-none focus:ring-1 focus:ring-[#14B927] focus:border-[#14B927] transition-all bg-[#FAFBFD] focus:bg-white';
const LABEL_CLASS = 'text-xs text-slate-600 font-semibold mb-1.5 block';
const ICON_CIRCLE_SM = 'w-14 h-14 rounded-full bg-[#689AC2] flex items-center justify-center shadow-sm shrink-0';
const ICON_CIRCLE_LG = 'w-14 h-14 rounded-full bg-[#689AC2] flex items-center justify-center shadow-lg shadow-[#689AC2]/40 shrink-0';

// --- Sub-Components ---

/** Right-pointing arrow icon used inside the horizontal enquiry cards */
function ArrowIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

/** Animated vertical divider that fades in with the side cards (delay 0.9s) */
function VerticalDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2"
    >
      <svg className="h-16 text-black" width="1" viewBox="0 0 1 64" fill="none">
        <line x1="0.5" y1="0" x2="0.5" y2="64" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );
}

interface HorizontalCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  delay: number;
  iconClass?: string;
}

/** Stacked horizontal enquiry card (Sales / Technical / Dealer partnerships) */
function HorizontalCard({ src, alt, title, description, delay, iconClass = '' }: HorizontalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay, ease: SPRING }}
      whileHover={{ x: -5 }}
      className="w-full bg-[#DAE6ED] rounded-2xl p-6 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.015)] cursor-pointer group"
    >
      <div className="flex items-center gap-5">
        <div className={ICON_CIRCLE_LG}>
          <Image
            src={src}
            alt={alt}
            width={28}
            height={28}
            className={`w-7 h-7 object-contain ${iconClass}`}
            unoptimized
          />
        </div>
        <div>
          <h3 className="font-serif text-xl text-slate-800 font-semibold mb-1 group-hover:text-slate-900 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-light">{description}</p>
        </div>
      </div>
      <motion.div variants={arrowVariants} className="text-slate-700 pr-2">
        <ArrowIcon />
      </motion.div>
    </motion.div>
  );
}

interface SubFeatureCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  position: 'left' | 'center' | 'right';
  showDivider?: boolean;
}

/** One card in the 3-column sub-features row. Position drives the entrance animation. */
function SubFeatureCard({ src, alt, title, description, position, showDivider }: SubFeatureCardProps) {
  const animation =
    position === 'left'
      ? { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } }
      : position === 'right'
      ? { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } }
      : { initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 } };

  const delay = position === 'center' ? 0.1 : 0.9;

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.0, delay, ease: SPRING }}
      className="relative flex flex-row items-center gap-4 text-left"
    >
      <div className={ICON_CIRCLE_SM}>
        <Image src={src} alt={alt} width={24} height={24} className="w-6 h-6 object-contain" unoptimized />
      </div>
      <div>
        <h4 className="font-serif text-lg text-slate-800 font-bold mb-1">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">{description}</p>
      </div>
      {showDivider && <VerticalDivider />}
    </motion.div>
  );
}

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

/** Labelled text input for the enquiry form */
function FormInput({ id, label, type = 'text', value, onChange, placeholder }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
}

// --- Main Component ---

export default function RightConnection({
  contactHeading = "Let's find the\nright connection.",
  contactDescription = "Tell us what you need. Our team will help you choose the right wire or cable for your project.",
  videoSrc = 'https://res.cloudinary.com/dmnew7sbj/video/upload/v1784698436/Cable_nkoulb.mp4',
  enquiryCards = [
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655338/Sales_Enquiry_t8i1xe.svg',
      alt: 'Sales enquiries icon badge',
      title: 'Sales enquiries',
      description: 'pre-sale, project, and quotation support',
    },
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655390/settings-svgrepo-com_vnmutp.svg',
      alt: 'Technical support configuration settings icon',
      title: 'Technical support',
      description: 'help selecting a cable configuration',
      iconClass: 'animate-spin-slow',
    },
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655456/handshake-svgrepo-com_qxvgbj.svg',
      alt: 'Dealer partnerships handshake icon',
      title: 'Dealer partnerships',
      description: 'become or connect with an SS Cable dealer',
    },
  ],
  formHeading = 'Tell us about your requirement.',
  formReasons = ['Product enquiry', 'Project requirement', 'Dealership'],
  subFeatures = [
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655512/book-open-svgrepo-com_d0pmwx.svg',
      alt: 'Product guidance open book icon',
      title: 'Product guidance',
      description: 'Get help deciding the right wire or cable.',
    },
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655571/engineer-worker-svgrepo-com_qkymgw.svg',
      alt: 'Project enquiries engineer helmet icon',
      title: 'Project enquiries',
      description: "Share your requirement. We'll guide you to the right one.",
    },
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655665/people-svgrepo-com_nri6ts.svg',
      alt: 'Dealer support community group icon',
      title: 'Dealer support',
      description: 'Partner with us. Grow with confidence.',
    },
  ],
  visitHeading = 'Visit or write to us.',
  locationCards = [
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655696/office-building-svgrepo-com_ovfzue.svg',
      alt: 'Registered office building icon badge',
      title: 'Registered office',
      address: 'Add your verified address here',
    },
    {
      src: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1784655744/manufacture-svgrepo-com_t3kise.svg',
      alt: 'Manufacturing facility factory icon badge',
      title: 'Manufacturing facility',
      address: 'Add your verified address here',
    },
  ],
  directionsHref = '#directions',
  footerTagline = 'Every strong connection \nstarts with a conversation.',
}: RightConnectionProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [contactReason, setContactReason] = useState('Product enquiry');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, company, mobile, city, contactReason, message });
    setFormSubmitted(true);
    setName('');
    setCompany('');
    setMobile('');
    setCity('');
    setMessage('');
  };

  return (
    <section
      className="w-full bg-[#C2C2C2] relative overflow-hidden -mt-8"
      id="contact-section"
      aria-labelledby="contact-main-heading"
    >
      {/* Top fade � blends with section above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" aria-hidden="true" />
      {/* Bottom fade � blends with section below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" aria-hidden="true" />

      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 pt-30 pb-30">

        {/* == Hero: Heading + Cable Video == */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: {} }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16"
        >
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.h2
              variants={headingSlideVariants}
              id="contact-main-heading"
              className="text-slate-900 font-serif text-[42px] sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight whitespace-pre-line mb-6"
            >
              {contactHeading}
            </motion.h2>
            <motion.p
              variants={descSlideVariants}
              className="text-[#6B9AC3] font-ibm-plex-sans font-normal text-base sm:text-lg md:text-xl leading-relaxed max-w-md whitespace-pre-line"
            >
              {contactDescription}
            </motion.p>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <motion.div
              variants={cableImageVariants}
              className="relative w-full lg:max-w-[700px] flex items-center justify-center"
            >
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                className="w-full h-auto object-contain mix-blend-multiply select-none pointer-events-none scale-125"
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 85% at center, black 30%, transparent 65%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 85% at center, black 30%, transparent 65%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* == Three Horizontal Enquiry Cards == */}
        <div className="grid grid-cols-1 gap-4 mb-16">
          {enquiryCards.map((card, i) => (
            <HorizontalCard
              key={card.title}
              src={card.src}
              alt={card.alt}
              title={card.title}
              description={card.description}
              delay={i * 0.15}
              iconClass={card.iconClass}
            />
          ))}
        </div>

        {/* == Enquiry Form == */}
        <motion.div
          variants={cardVariants}
          className="w-full bg-white border border-slate-100 rounded-2xl p-6 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] mb-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-center text-black font-light mb-10">
            {formHeading}
          </h3>

          {formSubmitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
              <div className="w-16 h-16 bg-green-50 text-[#14B927] rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Thank you!</h4>
              <p className="text-sm text-slate-500">Your enquiry has been successfully sent. Our team will contact you shortly.</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-6 text-sm text-[#2D608E] hover:underline focus:outline-none"
              >
                Send another enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="user-name"     label="Your name"     value={name}    onChange={setName}    placeholder="Enter your full name" />
                <FormInput id="company-name"  label="Company name"  value={company} onChange={setCompany} placeholder="Enter your organization name" />
                <FormInput id="mobile-number" label="Mobile number" type="tel" value={mobile} onChange={setMobile} placeholder="Enter contact number" />
                <FormInput id="city-name"     label="City"          value={city}    onChange={setCity}    placeholder="Enter your location" />
              </div>

              <div>
                <label className={LABEL_CLASS}>I am contacting about</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="radiogroup" aria-label="Contact reasons">
                  {formReasons.map((reason) => {
                    const isSelected = contactReason === reason;
                    return (
                      <div
                        key={reason}
                        onClick={() => setContactReason(reason)}
                        className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all select-none ${
                          isSelected
                            ? 'border-[#2D608E] bg-[#F1F6FB] shadow-sm'
                            : 'border-slate-200 hover:border-slate-350 bg-white'
                        }`}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === ' ' || e.key === 'Enter') setContactReason(reason);
                        }}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-[#2D608E]' : 'border-slate-300'}`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#2D608E]" />}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">{reason}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="help-textarea" className={LABEL_CLASS}>How can we help?</label>
                <textarea
                  id="help-textarea"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us details about your project or requirement"
                  className={`${INPUT_CLASS} h-32 resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2D608E] hover:bg-[#204F7A] active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(45,96,142,0.2)] text-center cursor-pointer"
              >
                Send enquiry
              </button>
            </form>
          )}
        </motion.div>

        {/* == Sub-Features Grid == */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 max-w-[1000px] mx-auto px-2">
          <SubFeatureCard position="left"   src={subFeatures[0].src} alt={subFeatures[0].alt} title={subFeatures[0].title} description={subFeatures[0].description} showDivider />
          <SubFeatureCard position="center" src={subFeatures[1].src} alt={subFeatures[1].alt} title={subFeatures[1].title} description={subFeatures[1].description} showDivider />
          <SubFeatureCard position="right"  src={subFeatures[2].src} alt={subFeatures[2].alt} title={subFeatures[2].title} description={subFeatures[2].description} />
        </div>

        {/* == Visit or Write to Us == */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-black font-light inline-block relative">
              {visitHeading}
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="absolute -bottom-2 left-0 h-[2px] bg-black"
              />
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {locationCards.map((loc) => (
              <motion.div
                key={loc.title}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-5"
              >
                <div className={ICON_CIRCLE_SM}>
                  <Image src={loc.src} alt={loc.alt} width={26} height={26} className="w-6 h-6 object-contain" unoptimized />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-800 text-lg mb-1">{loc.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light">{loc.address}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={directionsHref}
              className="inline-flex items-center gap-2 text-base text-black hover:text-slate-800 font-medium border-b border-black hover:border-transparent transition-all pb-0.5"
            >
              Need directions?
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* == Footer Tagline == */}
        <div className="pt-16 border-t border-black">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-tight text-center text-black font-light max-w-3xl mx-auto mb-16 whitespace-pre-line">
            {footerTagline}
          </h3>
        </div>

      </div>
    </section>
  );
}
