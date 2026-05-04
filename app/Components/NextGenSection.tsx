'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface NextGenSectionProps {
  titlePrimary: string;
  titleSecondary: string;
  buttonText: string;
  buttonLink?: string;
  imageUrls: string[];
}

const SuffonIcon = () => (
  <svg 
    className="h-5 w-auto" 
    viewBox="0 0 42 28" 
    fill="none" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5557 26.4942C20.7014 26.4942 26.4942 20.7014 26.4942 13.5557C26.4942 6.40996 20.7014 0.617188 13.5557 0.617188C6.40996 0.617188 0.617188 6.40996 0.617188 13.5557C0.617188 20.7014 6.40996 26.4942 13.5557 26.4942Z" fill="#14B927" stroke="#F0F0F5" strokeWidth="1.23412" strokeMiterlimit="10"/>
    <path d="M38.8789 13.4453L39.1344 13.3774L39.9576 12.8838L40.0329 12.9875L40.0724 13.1318L40.0933 13.1985L40.1154 13.3577L38.9012 13.5477L38.8789 13.4453Z" fill="#3B3B3B"/>
    <path d="M39.4554 13.2414C39.4694 13.2622 39.4786 13.2858 39.4825 13.3105C39.4758 13.2867 39.4667 13.2635 39.4554 13.2414ZM39.4825 13.3105C39.4911 13.3395 39.497 13.3693 39.4998 13.3994C39.4924 13.3698 39.4887 13.3389 39.4825 13.3105ZM40.4599 12.5244L39.0604 13.3661L38.6791 13.4636L38.2705 13.5413L38.2792 13.5919L38.3052 13.7067H38.3137L38.3014 13.6672L38.7544 13.5512L38.5643 13.6647L40.7302 13.3031C40.7215 13.2015 40.7042 13.1007 40.6783 13.002C40.6359 12.831 40.5619 12.6682 40.4599 12.5244Z" fill="#F0F0F5"/>
    <path d="M39.254 13.7586L38.9726 13.898L38.79 13.6327L38.9036 13.3303C38.888 13.3695 38.8816 13.4117 38.8851 13.4537L40.0983 13.2402C40.1385 13.3373 40.1593 13.4412 40.1599 13.5463C40.1643 13.7834 40.0944 14.016 39.96 14.2115L39.254 13.7586Z" fill="#3B3B3B"/>
    <path d="M39.5007 13.3995C39.5214 13.4476 39.5355 13.4982 39.5426 13.5501C39.5463 13.6593 39.5162 13.7671 39.4563 13.8586C39.4914 13.7944 39.5084 13.7219 39.5056 13.6488C39.5091 13.614 39.5005 13.5791 39.481 13.5501C39.4985 13.5019 39.5052 13.4505 39.5007 13.3995ZM40.6707 13.0107L40.2474 13.1687L38.7021 13.4254L40.462 14.5744C40.6714 14.2742 40.7814 13.916 40.7767 13.5501C40.7758 13.3652 40.7399 13.1822 40.6707 13.0107Z" fill="#F0F0F5"/>
    <path d="M33.6495 20.118C33.3257 20.1181 33.0151 19.9898 32.7857 19.7614C32.6686 19.6466 32.5757 19.5097 32.5121 19.3586C32.4485 19.2076 32.4156 19.0453 32.4154 18.8814C32.4142 18.7139 32.4484 18.5479 32.5155 18.3944C32.5827 18.2409 32.6815 18.1032 32.8054 17.9904L36.0141 14.7817H12.3894C12.0621 14.7817 11.7481 14.6517 11.5167 14.4202C11.2852 14.1888 11.1553 13.8749 11.1553 13.5476C11.1553 13.2203 11.2852 12.9064 11.5167 12.6749C11.7481 12.4435 12.0621 12.3134 12.3894 12.3134H36.0055L32.7857 9.08623C32.669 8.97222 32.5764 8.83585 32.5136 8.68527C32.4508 8.53469 32.419 8.37299 32.4202 8.20985C32.4213 8.04671 32.4555 7.88547 32.5204 7.73579C32.5853 7.5861 32.6797 7.45105 32.798 7.33871C32.909 7.22433 33.0423 7.1339 33.1896 7.07298C33.3369 7.01207 33.4951 6.98197 33.6545 6.98453C33.8217 6.9835 33.9873 7.01756 34.1406 7.08452C34.2939 7.15148 34.4315 7.24985 34.5443 7.37327L39.7547 12.5825C39.8443 12.6574 39.916 12.7515 39.9646 12.8577L40.2966 13.2045L40.1176 13.4143V13.5377L40.1262 13.65C40.1274 13.7565 40.1124 13.8627 40.0818 13.9647V14.1288L39.9682 14.2523C39.9062 14.3758 39.8183 14.4844 39.7103 14.5707L34.527 19.7712C34.4113 19.8847 34.274 19.9738 34.1233 20.0333C33.9726 20.0929 33.8115 20.1217 33.6495 20.118Z" fill="#3B3B3B"/>
    <path d="M33.6492 7.60138C33.7302 7.60031 33.8104 7.61624 33.8848 7.64813C33.9592 7.68001 34.0262 7.72714 34.0813 7.78649L39.3139 13.0192C39.3726 13.0672 39.4156 13.1316 39.4373 13.2043C39.4497 13.2166 39.462 13.229 39.4497 13.2413C39.4748 13.2883 39.4899 13.3399 39.4941 13.393C39.4984 13.4461 39.4917 13.4995 39.4744 13.5498C39.4939 13.5788 39.5025 13.6138 39.4989 13.6486C39.5017 13.7217 39.4848 13.7942 39.4497 13.8584C39.462 13.8707 39.4497 13.883 39.4373 13.8954C39.4156 13.968 39.3726 14.0325 39.3139 14.0805L34.0813 19.3255C33.9659 19.4386 33.8107 19.5019 33.6492 19.5019C33.4877 19.5019 33.3327 19.4386 33.2173 19.3255C33.1587 19.2673 33.1123 19.1981 33.0805 19.1218C33.0487 19.0456 33.0322 18.9638 33.0322 18.8812C33.0311 18.8003 33.0471 18.72 33.079 18.6456C33.1109 18.5712 33.158 18.5043 33.2173 18.4493L37.4997 14.1669H12.3854C12.2217 14.1669 12.0648 14.1019 11.9491 13.9862C11.8334 13.8704 11.7683 13.7135 11.7683 13.5498C11.7683 13.3862 11.8334 13.2292 11.9491 13.1135C12.0648 12.9978 12.2217 12.9328 12.3854 12.9328H37.4875L33.2173 8.65038C33.1588 8.5947 33.1122 8.52769 33.0804 8.45344C33.0485 8.37919 33.032 8.29924 33.032 8.21844C33.032 8.13764 33.0485 8.05768 33.0804 7.98342C33.1122 7.90917 33.1588 7.84217 33.2173 7.78649C33.2724 7.72714 33.3392 7.68001 33.4136 7.64813C33.488 7.61624 33.5683 7.60031 33.6492 7.60138ZM33.6492 6.36726C33.4036 6.36633 33.1604 6.4153 32.9342 6.51118C32.7081 6.60707 32.5038 6.74788 32.3337 6.92507C32.1611 7.09778 32.0248 7.30328 31.9329 7.52947C31.8409 7.75566 31.7951 7.99797 31.7982 8.24212C31.8013 8.48627 31.8533 8.72733 31.9509 8.95111C32.0486 9.17489 32.1901 9.37685 32.367 9.54511L34.5144 11.6987H12.3854C11.8944 11.6987 11.4235 11.8937 11.0764 12.2409C10.7292 12.588 10.5342 13.0589 10.5342 13.5498C10.5342 14.0408 10.7292 14.5116 11.0764 14.8588C11.4235 15.206 11.8944 15.401 12.3854 15.401H34.5206L32.3609 17.5607C32.1823 17.7311 32.0403 17.936 31.9436 18.163C31.8468 18.3901 31.7972 18.6344 31.798 18.8812C31.7976 19.126 31.8458 19.3684 31.9396 19.5944C32.0335 19.8204 32.1711 20.0256 32.3447 20.198C32.6915 20.5424 33.1605 20.7357 33.6492 20.7357C34.138 20.7357 34.6069 20.5424 34.9537 20.198L40.1556 14.9839C40.2719 14.8803 40.3718 14.7596 40.4518 14.626L40.6726 14.4051L40.6826 14.0694C40.7127 13.9482 40.7292 13.824 40.7318 13.6992L41.1946 13.2364L40.4542 12.4786C40.3727 12.3403 40.2703 12.2154 40.1506 12.1084L34.9673 6.92507C34.7969 6.74649 34.592 6.60449 34.365 6.50774C34.1379 6.41098 33.8936 6.3615 33.6468 6.36231L33.6492 6.36726Z" fill="#F0F0F5"/>
  </svg>
);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function NextGenSection({
  titlePrimary,
  titleSecondary,
  buttonText,
  buttonLink = "#",
  imageUrls,
}: NextGenSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  const sectionId = "next-gen-section";
  const titleId = "next-gen-title";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imageUrls]);

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby={titleId}
      className="w-full bg-white py-16 md:py-24 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image Slider */}
          <motion.div
            variants={imageVariants}
            className="order-1 relative aspect-[4/3] lg:aspect-auto lg:h-[450px] xl:h-[500px] w-full rounded-[1.5rem] overflow-hidden shadow-sm bg-gray-100"
          >
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={imageUrls[currentIndex]}
                  alt={`${titlePrimary} ${titleSecondary} - slide ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side: Text + Button */}
          <motion.div
            variants={textVariants}
            className="order-2 flex flex-col items-start justify-center"
          >
            <h2
              id={titleId}
              className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[28px] xl:text-[34px] leading-[1.2] tracking-tight mb-8"
            >
              <span className="italic text-gray-800 font-medium mr-2">
                {titlePrimary}
              </span>
              <span className="text-gray-500 font-[100]">
                {titleSecondary}
              </span>
            </h2>

            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                href={buttonLink}
                className="flex items-center gap-3 bg-[#3B3B3B] text-[#F0F0F5] rounded-full px-6 py-2.5 text-[14px] font-bold transition-colors hover:bg-black group"
              >
                <span>{buttonText}</span>
                <SuffonIcon />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
