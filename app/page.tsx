import Navbar from './Components/navbar';
import Hero from './Components/hero';
import TrustedSection from './Components/TrustedSection';
import HouseWiringSection from './Components/HouseWiringSection';
import IndustrialWiringSection from './Components/IndustrialWiringSection';
import NextGenSection from './Components/NextGenSection';
import IndustriesWeCater from './Components/industrieswecater';
import JourneySection from './Components/JourneySection';
import RightConnection from './Components/RightConnection';
import { getActiveIndustriesSection } from '@/sanity/lib/api/landingPage/industries';

export default async function Page() {
  const industriesSanityData = await getActiveIndustriesSection().catch(() => null);

  // --- Industries We Cater Data ---
  const industriesDefaultData = {
    eyebrow: '• SECTORS WE POWER',
    heading: 'INDUSTRIES WE CATER',
    highlightedWord: 'CATER',
    description: 'From residential wiring to heavy industrial infrastructure — SS Cable delivers cables engineered for every demand, environment, and voltage level.',
    industries: [
      { cardNumber: '01', title: 'MANUFACTURING', description: 'Heavy-duty wiring solutions for plant floors and industrial machinery.' },
      { cardNumber: '02', title: 'POWER & UTILITIES', description: 'HT/LT cables for generation, transmission & distribution networks.' },
      { cardNumber: '03', title: 'REAL ESTATE', description: 'House wiring cables for residential and commercial buildings.' },
      { cardNumber: '04', title: 'INFRASTRUCTURE', description: 'Highways, bridges, tunnels and large civic infrastructure projects.' },
      { cardNumber: '05', title: 'OIL & CHEMICAL', description: 'Armoured & flame-retardant cables for hazardous environments.' },
      { cardNumber: '06', title: 'TELECOM', description: 'Control & signal cables for telecom and network infrastructure.' },
      { cardNumber: '07', title: 'RENEWABLE ENERGY', description: 'Specialized cabling for solar farms and wind energy installations.' },
      { cardNumber: '08', title: 'RAILWAYS', description: 'Signalling, traction and power cables for rail networks.' },
    ]
  };

  const industriesData = {
    eyebrow: industriesSanityData?.eyebrow || industriesDefaultData.eyebrow,
    heading: industriesSanityData?.heading || industriesDefaultData.heading,
    highlightedWord: industriesSanityData?.highlightedWord || industriesDefaultData.highlightedWord,
    description: industriesSanityData?.description || industriesDefaultData.description,
    industries: industriesSanityData?.industries || industriesDefaultData.industries,
  };

  // --- Right Connection (Contact Section) Data ---
  const rightConnectionData = {
    contactHeading: "Let's find the\nright connection.",
    contactDescription: "Tell us what you need. Our team will help you choose the right wire or cable for your project.",
    videoSrc: 'https://res.cloudinary.com/dmnew7sbj/video/upload/v1784698436/Cable_nkoulb.mp4',
    enquiryCards: [
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
    formHeading: 'Tell us about your requirement.',
    formReasons: ['Product enquiry', 'Project requirement', 'Dealership'],
    subFeatures: [
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
    visitHeading: 'Visit or write to us.',
    locationCards: [
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
    directionsHref: '#directions',
    footerTagline: 'Every strong connection \nstarts with a conversation.',
  };

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
        titlePrimary="Explore"
        titleSecondary="Our Product Brochure"
        description="Get a detailed overview of our industrial wire range, including specifications, applications, and technical insights to help you choose the right solution for your needs."
        dropdownItems={["HOUSE WIRE", "ITEM2", "ITEM3", "ITEM4"]}
        buttonText="Download"
        imageUrls={[
          "https://res.cloudinary.com/dmnew7sbj/image/upload/v1777889382/Rectangle_62_c2agb6.png",
          "https://res.cloudinary.com/dmnew7sbj/image/upload/c_crop,ar_1:1/v1777891349/Gemini_Generated_Image_7qtekd7qtekd7qte_v0jkps.png",
          "https://res.cloudinary.com/dmnew7sbj/image/upload/c_crop,ar_1:1/v1777891467/Gemini_Generated_Image_xoyut6xoyut6xoyu_mqqpqf.png"
        ]}
      />
      <IndustriesWeCater 
        eyebrow={industriesData.eyebrow}
        heading={industriesData.heading}
        highlightedWord={industriesData.highlightedWord}
        description={industriesData.description}
        industries={industriesData.industries}
      />
      <JourneySection />
      <RightConnection
        contactHeading={rightConnectionData.contactHeading}
        contactDescription={rightConnectionData.contactDescription}
        videoSrc={rightConnectionData.videoSrc}
        enquiryCards={rightConnectionData.enquiryCards}
        formHeading={rightConnectionData.formHeading}
        formReasons={rightConnectionData.formReasons}
        subFeatures={rightConnectionData.subFeatures as [any, any, any]}
        visitHeading={rightConnectionData.visitHeading}
        locationCards={rightConnectionData.locationCards}
        directionsHref={rightConnectionData.directionsHref}
        footerTagline={rightConnectionData.footerTagline}
      />
    </main>
  );
}
