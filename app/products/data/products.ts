/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ProductItem,
  QuickSpecItem,
  ApplicationEnvironment,
  TechnicalGuideData,
  HeroSectionData,
  CTASectionData,
  SiteFooterData,
  ProductPageCMSData
} from '../types';

export const HERO_DATA: HeroSectionData = {
  eyebrow: 'PVC INSULATED WIRES & CABLES · IS 694',
  title: 'Every connection starts with the right wire.',
  description: 'Premium PVC insulated wires and cables for residential and industrial applications.',
  primaryCtaText: 'Explore Range',
  secondaryCtaText: 'Technical Guide',
  heroImage: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmVKl8Og1zs0p0mLGwggAa_zCRX2u5gdN6aFoGF-f1T3KYEsLi1pLZRpYMAdaOyCGEX6I_coMS2TDN1eX9KEF3siYgJqwZkAnZUimXeNrLOoL4SzsqqK3-QTROm8XB4jAIa2EtPeTjtebZ0_woQPRlHj2MpOq__1cVzAKhz2shbXF621LSPUOJYCHEWwqs24lnyLwRI5GJv3SPyOrFrKzDWchl2e6KEfNiIDbgU9d41HFqyFbd7HoW',
    alt: 'A pristine, high-resolution product photography shot of a coil of white PVC insulated copper wire against a bright, minimalist studio background with exposed copper core tips.'
  }
};

export const QUICK_SPECS: QuickSpecItem[] = [
  {
    id: 'gauge',
    icon: 'straighten',
    label: '2-16 sq mm'
  },
  {
    id: 'applications',
    icon: 'home',
    label: 'House & Flexible'
  },
  {
    id: 'cores',
    icon: 'cable',
    label: 'Single & Multicore'
  },
  {
    id: 'reliability',
    icon: 'verified_user',
    label: 'Reliable Performance'
  }
];

export const PRIMARY_WIRE_FAMILIES: ProductItem[] = [
  {
    id: 'fr-house-wire',
    slug: 'fr-house-wire',
    familyNumber: 1,
    category: 'House Wiring',
    badge: 'PREMIUM WIRE',
    title: '1. FR House Wire',
    shortDescription: 'Fire retardant house wire ensuring maximum safety and long-lasting durability for residential spaces.',
    fullDescription: 'Manufactured using 99.97% pure electrolytic grade copper conductor insulated with specially formulated Flame Retardant (FR) PVC compound. Offers high oxygen index and temperature index that retards fire propagation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0AeNtVntIc1L2k-FtetBgMoMjKXxQ0E1e9iqqWqGIAf9JWBgYTlS7bbQlAPh5ZqvYNV2Y2E-24bI6HgP9eszth3LaL9GSCzGgL4q-WYydbDyqSFxYeAeQwya5cxJ5-eSrp4gxoaedatWR4Ln1p7pP9qWjKdNHBwkMrBmZCfD7auy4lcQBLj1b5q34p9sqW1HU_KbEaeGR7Ghin1DgOgOZh_j-xFNz3qDdc7qIN076rh8qHYfmEAuQ',
    imageAlt: 'A clean, close-up macro shot of a single white FR house wire stripped to reveal the bright, tightly bundled copper strands inside.',
    standard: 'IS 694:2010',
    conductor: 'Electrolytic Grade Bare Copper (Class 2 / Class 5)',
    insulation: 'FR PVC Compound Type A',
    sizes: ['0.75 sq mm', '1.0 sq mm', '1.5 sq mm', '2.5 sq mm', '4.0 sq mm', '6.0 sq mm', '10.0 sq mm', '16.0 sq mm'],
    voltageGrade: 'Up to and including 1100V',
    temperatureRating: '-15°C to +70°C',
    features: [
      'High oxygen index (> 29%) for enhanced fire resistance',
      'Low smoke generation during emergency conditions',
      'High thermal stability up to 70°C continuous operation',
      '100% conductivity with high purity copper strands'
    ],
    applications: ['Residential apartments', 'High-rise towers', 'Lighting & fan circuits', 'Power outlets & appliances']
  },
  {
    id: 'twin-core-twisted-flexible',
    slug: 'twin-core-twisted-flexible',
    familyNumber: 2,
    category: 'Industrial Cables',
    badge: 'INDUSTRIAL STRENGTH',
    title: '2. Twin-Core Twisted & Flexible',
    shortDescription: 'Highly flexible twin-core cable designed for dynamic applications requiring resilience and easy routing.',
    fullDescription: 'Engineered with finely bunched annealed copper conductors and dual-layer tough PVC jacket. Designed for portable appliances, temporary power hookups, and dynamic mechanical equipment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC--Y8K2iVGDxo9HI76FSQunw9qDeqlXA8lzQYTCYUvdmYxdZpMV3uXV7jBcqt5EQxwa9-koblvbhtm5WVoWewFhTIq-4JLXW8rxsNnDFt5e7ALa9yR8MX0ZGeg1rGAqCi25tsVVp3_lh-qVOwj0JgpuaOS9u1ikDOTYULaz6krsKzfF8LEXmi3KxULLsr-FZjMkS_cUaMrM3QIGxGIgfsklfHuyFOt2M9YBYKL1Yn77xUq78gjxbN_',
    imageAlt: 'A detailed product shot of a twin-core twisted flexible wire, with its white outer jacket partially stripped to show two inner insulated wires (one red, one black).',
    standard: 'IS 694:2010 / IEC 60227',
    conductor: 'Multi-strand annealed pure copper',
    insulation: 'Dual PVC Core (Red & Black) with protective white sheath',
    sizes: ['0.5 sq mm', '0.75 sq mm', '1.0 sq mm', '1.5 sq mm', '2.5 sq mm', '4.0 sq mm'],
    voltageGrade: 'Up to and including 1100V',
    temperatureRating: '-15°C to +70°C',
    features: [
      'Superior bend radius for tight conduits and moving machinery',
      'Dual-color core identification (Phase & Neutral)',
      'Abrasion and oil-resistant exterior jacket',
      'High tensile strength with anti-kink geometry'
    ],
    applications: ['Factory floor automation', 'Movable power tools', 'Industrial lighting fixtures', 'Control panels']
  }
];

export const SERVICE_CABLES: ProductItem[] = [
  {
    id: 'twin-core-flexible-wire',
    slug: 'twin-core-flexible-wire',
    familyNumber: 3,
    category: 'Flexible Wiring',
    title: 'Twin-Core Flexible Wire',
    shortDescription: 'Standard flexible wiring.',
    fullDescription: 'General purpose flat twin-core wire suitable for residential lighting, audio apparatus, and internal instrument connections.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVc9UfQHFity0qa2xwX_U08fZjWTtJSFjSu_CV9YfMWiMawZQEWMkitfdrL1BL31fSTaXVug1qkjIFj89XjXiQCPMUshk-S6TaE7PGPR6HKHQ2M_joL1_ms9BWlgHlXoPRNTKqnzb7EmTj7wXbrJSNv7TeiDKK-ilCHtJrMktmUgF_jLzW7N3dEW8ShJGQfgB6sq28sCZFvNPapL50qPa5QK6g2H9Hs6wsdj0gqA4rf564ryxjVj0t',
    imageAlt: 'A crisp, high-angle product photograph of a white twin-core flexible wire section resting on a clean, off-white studio backdrop.',
    standard: 'IS 694:2010',
    conductor: 'High conductivity copper conductor',
    insulation: 'Virgin PVC grade insulation',
    sizes: ['0.5 sq mm', '0.75 sq mm', '1.0 sq mm', '1.5 sq mm'],
    voltageGrade: 'Up to 600/1100V',
    temperatureRating: '70°C max continuous',
    features: ['Compact flat profile', 'Easy stripping and termination', 'Smooth outer finish'],
    applications: ['Domestic appliances', 'Pendant lighting', 'Sound systems']
  },
  {
    id: 'twin-core-twisted',
    slug: 'twin-core-twisted',
    familyNumber: 3,
    category: 'Flexible Wiring',
    title: 'Twin-Core Twisted',
    shortDescription: 'Enhanced durability twisted cores.',
    fullDescription: 'Braided and twisted core construction designed to minimize electromagnetic interference and provide mechanical flexibility under stress.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_sleRGfCy4ah94rfhEIln8KXIBQvLUM3acnFyWWEJBWeSrGYSSvKjOGEALB6JD0xLv_UmMEVFAtZtx53QS2K_IMw771B3b5MAp17vmwh0Go-MlQt4jBYUZw37VF6epA9IfnB7CvcBDpFOuM7q7rVYp-Z7d3Jz86S3NNpNg4iD2sVvsPbyWP9apVfQBXDkV8atcHo38uphLxvz-_aiJOtTtOMjKS_94uy3K0dW_G3JEqv3ERlYE3Qo',
    imageAlt: 'A macro studio shot of a twin-core twisted flexible cable with a white outer sheath, isolated against a bright white background.',
    standard: 'IS 694:2010',
    conductor: 'Class 5 bunched copper conductors',
    insulation: 'Dual color PVC dielectric',
    sizes: ['0.75 sq mm', '1.0 sq mm', '1.5 sq mm', '2.5 sq mm'],
    voltageGrade: 'Up to 1100V',
    temperatureRating: '70°C',
    features: ['Twisted pair core geometry', 'Anti-torsion resistance', 'High dielectric strength'],
    applications: ['Motors and dynamic pumps', 'Commercial overhead fixtures', 'Workshop extension leads']
  },
  {
    id: 'aluminium-service-cable',
    slug: 'aluminium-service-cable',
    familyNumber: 3,
    category: 'Service Entrance',
    title: 'Aluminium Service Cable',
    shortDescription: 'Heavy-duty service connections.',
    fullDescription: 'Solid or stranded electrical grade EC aluminium conductors with weather-resistant PVC or XLPE compound insulation for overhead incoming service drops and main distribution.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwLkd1cwHmKCxpvWEox1skhm3CwPikmzYPjpVzRIm7125pxqqXzqxtQNx-HKuiu4g8uua7H8E7UqkgrKiFJ0C27gvQne4z7LJLgyYPvgbKTl6ukW41Ku3JibJcZuhqBoftHfwR-SyNmLggeu-65-a9eYzmFgqrIptrdb313x-gEhqzz0t-JPjPDiNtbeOJKKuUmVw1UFqASTY5DbINetPmk7D55j5Xwwvfhl_jt0Nj8o7-lvrRDMIS',
    imageAlt: 'Close-up product photography of a thick, white aluminium service cable with multiple robust aluminium conductor strands.',
    standard: 'IS 694 / IS 1554 / IS 7098',
    conductor: 'EC Grade High Purity Stranded Aluminium',
    insulation: 'Weatherproof UV-stabilized heavy PVC / XLPE',
    sizes: ['2.5 sq mm', '4.0 sq mm', '6.0 sq mm', '10.0 sq mm', '16.0 sq mm', '25.0 sq mm'],
    voltageGrade: '600V / 1100V Grade',
    temperatureRating: '-20°C to +85°C',
    features: ['Corrosion-resistant aluminium alloy', 'UV & weather proof outer layer', 'Cost-effective heavy distribution'],
    applications: ['Main service entrance cables', 'Sub-meter connections', 'Commercial distribution boxes', 'Rural & urban power grids']
  }
];

export const SERVICE_CABLE_FAMILY = {
  heading: '3. Aluminium Service Cable',
  items: SERVICE_CABLES
};

export const APPLICATION_ENVIRONMENTS: ApplicationEnvironment[] = [
  {
    id: 'homes',
    icon: 'home',
    title: 'Homes & apartments',
    description: 'Safe, fire-retardant internal electrical installations ensuring family security.'
  },
  {
    id: 'commercial',
    icon: 'domain',
    title: 'Commercial spaces',
    description: 'Reliable high-load handling for corporate offices, retail hubs, and hotels.'
  },
  {
    id: 'industrial',
    icon: 'factory',
    title: 'Industrial facilities',
    description: 'Heavy duty, chemical & abrasion resistant wiring for manufacturing plants.'
  }
];

export const TECHNICAL_GUIDE_DATA: TechnicalGuideData = {
  title: 'S.S. Cable Technical Engineering Guide · IS 694 Compliance',
  standard: 'IS 694 : 2010 (Bureau of Indian Standards)',
  voltageGrade: 'Up to and including 1100 Volts AC',
  operatingTemp: 'Maximum continuous operating conductor temperature 70°C (Standard PVC) / 85°C (HR PVC)',
  insulationType: 'Type A PVC (General Purpose) & Type C FR / FRLS PVC Compound',
  conductorPurity: '99.97% Electrolytic Tough Pitch (ETP) Bare Annealed Copper / Grade EC Aluminium',
  fireRating: 'Oxygen Index > 29%, Temperature Index > 250°C, Flammability to IEC 60332-1',
  testingStandards: [
    'Conductor Resistance Test (IS 8130)',
    'Insulation Resistance Test (IS 694 clause 16.3)',
    'High Voltage Spark Test (100% online tested at 6kV - 10kV)',
    'Thermal Stability Test of PVC compound',
    'Oxygen & Temperature Index determination (ASTM D 2863)'
  ]
};

export const CTA_DATA: CTASectionData = {
  heading: 'A complete everyday wiring range. Built for consistent quality.',
  buttonText: 'Find your wire'
};

export const FOOTER_DATA: SiteFooterData = {
  brandName: 'S.S. Cable',
  copyright: '© 2024 S.S. Cable Industries. All rights reserved.',
  standardNote: 'PVC Insulated Wires & Cables · IS 694',
  links: [
    { label: 'Products', href: '#products', actionType: 'link' },
    { label: 'Certification', href: '#quality', actionType: 'certification' },
    { label: 'Resources', href: '#resources', actionType: 'resources' }
  ]
};

/**
 * Single source of truth for all catalog items
 */
export const getAllProducts = (): ProductItem[] => {
  return [...PRIMARY_WIRE_FAMILIES, ...SERVICE_CABLES];
};

/**
 * Unified CMS Data Object ready for REST/GraphQL/Sanity endpoints
 */
export const DEFAULT_CMS_PRODUCT_PAGE_DATA: ProductPageCMSData = {
  hero: HERO_DATA,
  quickSpecs: QUICK_SPECS,
  primaryFamilies: PRIMARY_WIRE_FAMILIES,
  serviceCablesHeading: SERVICE_CABLE_FAMILY.heading,
  serviceCables: SERVICE_CABLES,
  applicationsHeading: 'Designed for every environment.',
  applications: APPLICATION_ENVIRONMENTS,
  cta: CTA_DATA,
  technicalGuide: TECHNICAL_GUIDE_DATA,
  footer: FOOTER_DATA
};

/**
 * Sanity GROQ query definitions for production Headless CMS integration
 */
export const SANITY_PRODUCT_PAGE_QUERY = `
  *[_type == "productPage"][0] {
    hero {
      eyebrow,
      title,
      description,
      primaryCtaText,
      secondaryCtaText,
      heroImage {
        "src": asset->url,
        "alt": coalesce(alt, title)
      }
    },
    quickSpecs[] {
      id,
      icon,
      label
    },
    "primaryFamilies": *[_type == "product" && category == "House Wiring"] | order(familyNumber asc) {
      id,
      slug,
      title,
      badge,
      shortDescription,
      fullDescription,
      "image": image.asset->url,
      imageAlt,
      standard,
      conductor,
      insulation,
      sizes,
      voltageGrade,
      temperatureRating,
      features,
      applications
    },
    serviceCablesHeading,
    "serviceCables": *[_type == "product" && (category == "Flexible Wiring" || category == "Service Entrance")] | order(orderRank asc) {
      id,
      slug,
      title,
      shortDescription,
      fullDescription,
      "image": image.asset->url,
      imageAlt,
      standard,
      conductor,
      insulation,
      sizes,
      voltageGrade,
      temperatureRating,
      features,
      applications
    },
    applicationsHeading,
    applications[] {
      id,
      icon,
      title,
      description
    },
    cta {
      heading,
      buttonText
    },
    technicalGuide {
      title,
      standard,
      voltageGrade,
      operatingTemp,
      insulationType,
      conductorPurity,
      fireRating,
      testingStandards
    }
  }
`;
