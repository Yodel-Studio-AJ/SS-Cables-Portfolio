/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Product Item schema representing individual wire/cable catalog entries
 */
export interface ProductItem {
  id: string;
  slug: string;
  familyNumber?: number;
  category: string;
  badge?: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  imageAlt: string;
  standard: string;
  conductor: string;
  insulation: string;
  sizes: string[];
  voltageGrade: string;
  temperatureRating?: string;
  features?: string[];
  applications?: string[];
}

/**
 * Hero Section CMS Schema
 */
export interface HeroSectionData {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

/**
 * Quick Spec metric block
 */
export interface QuickSpecItem {
  id: string;
  icon: string;
  label: string;
}

/**
 * Application environment section item
 */
export interface ApplicationEnvironment {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

/**
 * Technical standard guide engineering data
 */
export interface TechnicalGuideData {
  title: string;
  standard: string;
  voltageGrade: string;
  operatingTemp: string;
  insulationType: string;
  conductorPurity: string;
  fireRating: string;
  testingStandards: string[];
}

/**
 * Call To Action Section Schema
 */
export interface CTASectionData {
  heading: string;
  buttonText: string;
}

/**
 * Navigation item link
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Site Footer Schema
 */
export interface SiteFooterData {
  brandName: string;
  copyright: string;
  standardNote: string;
  links: {
    label: string;
    href: string;
    actionType?: 'certification' | 'resources' | 'link';
  }[];
}

/**
 * Unified Root Product Page CMS Payload
 */
export interface ProductPageCMSData {
  hero: HeroSectionData;
  quickSpecs: QuickSpecItem[];
  primaryFamilies: ProductItem[];
  serviceCablesHeading: string;
  serviceCables: ProductItem[];
  applicationsHeading: string;
  applications: ApplicationEnvironment[];
  cta: CTASectionData;
  technicalGuide: TechnicalGuideData;
  footer: SiteFooterData;
}

/**
 * Commercial RFQ Submission payload
 */
export interface QuoteRequestData {
  fullName: string;
  email: string;
  phone: string;
  wireFamily: string;
  wireSize: string;
  quantityMeters: number;
  applicationType: string;
  notes?: string;
}

