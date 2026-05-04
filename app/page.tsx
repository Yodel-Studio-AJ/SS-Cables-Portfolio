import Navbar from './Components/navbar';
import Hero from './Components/hero';
import TrustedSection from './Components/TrustedSection';
import HouseWiringSection from './Components/HouseWiringSection';
import IndustrialWiringSection from './Components/IndustrialWiringSection';
import NextGenSection from './Components/NextGenSection';

export default function Page() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <Hero
        slides={[
          {
            id: 0,
            image: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777671641/q042V-1_1.jpg_1_bjadc6.jpg',
            heading: 'styled',
          },
          {
            id: 1,
            image: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777747506/Gemini_Generated_Image_a4hx2ma4hx2ma4hx_ewyqti.png',
            bgZoom: true,
            heading: 'generic',
            line1: 'Powering Connections.',
            line2: 'Delivering Trust',
          },
          {
            id: 2,
            image: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777747658/Gemini_Generated_Image_rukbp2rukbp2rukb_v71gil.png',
            bgZoom: true,
            heading: 'generic',
            line1: 'Advanced Wiring',
            line2: 'for Modern Needs.',
          },
          {
            id: 3,
            image: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777747702/Gemini_Generated_Image_62mn6162mn6162mn_sl54ux.png',
            bgZoom: true,
            heading: 'generic',
            line1: 'Safe Connections',
            line2: 'for Every Home.',
          },
        ]}
      />
      <TrustedSection />
      <HouseWiringSection />
      <IndustrialWiringSection
        title="Industrial Wiring Cables."
        ctaTopText="Take a Look"
        ctaBottomText="View Details"
        imageUrls={[
          "https://res.cloudinary.com/dmnew7sbj/image/upload/v1777884216/Rectangle_61_usbkw7.png",
          "https://res.cloudinary.com/dmnew7sbj/image/upload/c_crop,ar_1:1/v1777892682/Gemini_Generated_Image_g5gf3tg5gf3tg5gf_u44kim.png",
          "https://res.cloudinary.com/dmnew7sbj/image/upload/c_crop,ar_1:1/v1777892669/Gemini_Generated_Image_2gju0n2gju0n2gju_facz5y.png"
        ]}
      />
      <NextGenSection
        titlePrimary="Next generation"
        titleSecondary="advanced conductor"
        buttonText="Download"
        imageUrls={[
          "https://res.cloudinary.com/dmnew7sbj/image/upload/v1777889382/Rectangle_62_c2agb6.png",
          "https://res.cloudinary.com/dmnew7sbj/image/upload/c_crop,ar_1:1/v1777891349/Gemini_Generated_Image_7qtekd7qtekd7qte_v0jkps.png",
          "https://res.cloudinary.com/dmnew7sbj/image/upload/c_crop,ar_1:1/v1777891467/Gemini_Generated_Image_xoyut6xoyut6xoyu_mqqpqf.png"
        ]}
      />
    </main>
  );
}