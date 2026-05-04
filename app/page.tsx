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
      <TrustedSection
        title="Tested. Deployed. Trusted."
        description={`SS Cable combines advanced engineering with proven field performance,\ndelivering measurable results for utilities modernizing their transmission infrastructure.`}
        logos={[
          {
            url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723738/south-bihar-power-distribution-co-ltd-aurangabad-bihar-electricity-suppliers-hj3ncnnaoa-250_1_tuivwz.png',
            alt: 'South Bihar Power Distribution Co Ltd',
            size: 'lg',
          },
          {
            url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723742/unnamed_1_iqurcx.png',
            alt: 'Bihar Electricity Board',
            size: 'lg',
          },
          {
            url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723746/1a0cec36ab54ad063a8a10f022348793_1_a2rlcf.png',
            alt: 'NEEPCO',
            size: 'sm',
          },
          {
            url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723750/apepdcl-mandapeta-east-godavari-wddeeplvmc_1_hrjonz.png',
            alt: 'APEPDCL',
            size: 'sm',
          },
          {
            url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723756/Indian_Railways.svg_2_mnyb6q.png',
            alt: 'Indian Railways',
            size: 'sm',
          },
        ]}
      />
      <HouseWiringSection
        titlePart1="House Wiring"
        titlePart2="Cables"
        description={`Discover our premium range of House Wiring Cables designed for safe, efficient, and long-lasting electrical installations in homes and residential buildings. Made with high-quality PVC insulation, these wires offer excellent conductivity, fire resistance, and durability for all your domestic electrical needs.`}
        backgroundImageUrl="https://res.cloudinary.com/dmnew7sbj/image/upload/v1777726238/A_person_in_a_light_suit_speaks_on_stage_with_a_vivid_celestial-themed_background._wznnlj.png"
      />
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