"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProductHero } from './ProductHero';
import { QuickSpecs } from './QuickSpecs';
import { ProductFamilies } from './ProductFamilies';
import { ProductApplications } from './ProductApplications';
import { ProductCTA } from './ProductCTA';
import { ProductDetailModal } from './ProductDetailModal';
import { TechnicalGuideModal } from './TechnicalGuideModal';
import { QuoteModal } from './QuoteModal';
import { ProductItem, ProductPageCMSData } from '../types';
import { DEFAULT_CMS_PRODUCT_PAGE_DATA } from '../data/products';

interface ProductPageProps {
  pageData?: ProductPageCMSData;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  pageData = DEFAULT_CMS_PRODUCT_PAGE_DATA
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isTechnicalGuideOpen, setIsTechnicalGuideOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductItem | null>(null);
  const [activeTab, setActiveTab] = useState('Products');

  const handleOpenQuote = (product?: ProductItem | null) => {
    if (product) {
      setQuoteProduct(product);
    }
    setIsQuoteOpen(true);
  };

  const handleExploreRange = () => {
    const el = document.getElementById('products');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="stitch-product-page" className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col antialiased leading-relaxed">
      
      {/* Main Product Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <ProductHero
          data={pageData.hero}
          onExploreRange={handleExploreRange}
          onOpenTechnicalGuide={() => setIsTechnicalGuideOpen(true)}
        />

        {/* Quick Specs 4-Column Bar */}
        <QuickSpecs specs={pageData.quickSpecs} />

        {/* Product Families Catalog */}
        <ProductFamilies
          primaryFamilies={pageData.primaryFamilies}
          serviceCablesHeading={pageData.serviceCablesHeading}
          serviceCables={pageData.serviceCables}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Applications / Environments */}
        <ProductApplications
          heading={pageData.applicationsHeading}
          items={pageData.applications}
          onSelectEnvironment={() => {
            handleOpenQuote();
          }}
        />

        {/* Bottom CTA Callout */}
        <ProductCTA
          data={pageData.cta}
          onFindYourWire={() => handleOpenQuote()}
        />
      </main>

      
      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prod) => {
          setSelectedProduct(null);
          handleOpenQuote(prod);
        }}
      />

      <TechnicalGuideModal
        isOpen={isTechnicalGuideOpen}
        onClose={() => setIsTechnicalGuideOpen(false)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuoteProduct(null);
        }}
        initialProduct={quoteProduct}
      />
    </div>
  );
};


