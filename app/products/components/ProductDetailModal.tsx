"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductItem } from '../types';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote
}) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div 
        id="product-detail-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="product-detail-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#c6c6cd]"
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-5 border-b border-[#eceef0] sticky top-0 bg-white z-10">
            <div className="flex items-center gap-2.5">
              {product.badge && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#f2f4f6] text-[#565e74] uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
              <span className="text-xs text-[#76777d] font-medium">Standard: {product.standard}</span>
            </div>
            <button
              onClick={onClose}
              className="text-[#45464d] hover:text-[#191c1e] p-1.5 rounded-lg hover:bg-[#f2f4f6] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Main Visual & Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="h-56 sm:h-64 bg-[#f2f4f6] rounded-lg overflow-hidden border border-[#eceef0]">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#191c1e] tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed">
                  {product.fullDescription || product.shortDescription}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <div className="bg-[#f7f9fb] border border-[#e0e3e5] px-3 py-1.5 rounded-md text-xs">
                    <span className="text-[#76777d]">Voltage Grade: </span>
                    <span className="font-semibold text-[#191c1e]">{product.voltageGrade}</span>
                  </div>
                  {product.temperatureRating && (
                    <div className="bg-[#f7f9fb] border border-[#e0e3e5] px-3 py-1.5 rounded-md text-xs">
                      <span className="text-[#76777d]">Temp: </span>
                      <span className="font-semibold text-[#191c1e]">{product.temperatureRating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Specifications Matrix */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-sm text-[#191c1e] uppercase tracking-wider text-[#565e74]">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 bg-[#f7f9fb] rounded-lg border border-[#e0e3e5]">
                  <span className="block text-[#76777d] text-xs">Conductor Material</span>
                  <span className="font-semibold text-[#191c1e]">{product.conductor}</span>
                </div>
                <div className="p-3 bg-[#f7f9fb] rounded-lg border border-[#e0e3e5]">
                  <span className="block text-[#76777d] text-xs">Insulation Dielectric</span>
                  <span className="font-semibold text-[#191c1e]">{product.insulation}</span>
                </div>
              </div>
            </div>

            {/* Available Gauge Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-bold text-xs text-[#565e74] uppercase tracking-wider">
                  Available Nominal Cross-Section Sizes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2.5 py-1 bg-white border border-[#c6c6cd] rounded text-xs font-medium text-[#191c1e]"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-bold text-xs text-[#565e74] uppercase tracking-wider">
                  Engineered Advantages
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#45464d]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#904d00] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="p-5 bg-[#f7f9fb] border-t border-[#eceef0] flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#45464d] hover:bg-[#eceef0] rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="bg-[#904d00] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#fe932c] hover:text-[#191c1e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Request Quote for {product.title}</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
