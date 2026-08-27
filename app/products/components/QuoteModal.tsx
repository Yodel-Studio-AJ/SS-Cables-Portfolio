"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductItem } from '../types';
import { getAllProducts } from '../data/products';
import { X, Check } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct
}) => {
  const products = useMemo(() => getAllProducts(), []);

  const [wireFamily, setWireFamily] = useState('1. FR House Wire');
  const [wireSize, setWireSize] = useState('1.5 sq mm');
  const [coils, setCoils] = useState(5);
  const [applicationType, setApplicationType] = useState('Homes & apartments');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Available sizes for the currently selected wire family
  const currentProduct = useMemo(() => {
    return products.find(p => p.title === wireFamily || p.title.includes(wireFamily)) || products[0];
  }, [products, wireFamily]);

  const availableSizes = useMemo(() => {
    return currentProduct?.sizes || [
      '0.75 sq mm', '1.0 sq mm', '1.5 sq mm', '2.5 sq mm', 
      '4.0 sq mm', '6.0 sq mm', '10.0 sq mm', '16.0 sq mm'
    ];
  }, [currentProduct]);

  useEffect(() => {
    if (initialProduct) {
      setWireFamily(initialProduct.title);
      if (initialProduct.sizes && initialProduct.sizes.length > 0) {
        setWireSize(initialProduct.sizes[0]);
      }
    }
  }, [initialProduct, isOpen]);

  // Adjust wireSize when wireFamily changes if current size is not valid for new family
  useEffect(() => {
    if (availableSizes && !availableSizes.includes(wireSize)) {
      setWireSize(availableSizes[0] || '1.5 sq mm');
    }
  }, [availableSizes, wireSize]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div 
        id="quote-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="quote-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#c6c6cd]"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-[#eceef0] sticky top-0 bg-white z-10">
            <div>
              <h3 className="font-bold text-xl text-[#191c1e] tracking-tight">
                Request a Commercial Quote
              </h3>
              <p className="text-xs text-[#565e74] mt-0.5">
                Fast turnaround for distributors, contractors, and project inquiries
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#45464d] hover:text-[#191c1e] p-1.5 rounded-lg hover:bg-[#f2f4f6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#191c1e]">
                Quote Request Submitted!
              </h4>
              <p className="text-sm text-[#45464d] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#191c1e]">{name || 'valued partner'}</span>. Our technical sales engineering team will review your requirement for <span className="font-semibold">{coils} standard coil(s)</span> of <span className="font-semibold">{wireFamily} ({wireSize})</span> and get back to you within 2-4 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="bg-[#131b2e] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0d1c2e] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
              {/* Product Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-medium text-[#191c1e]">Wire Family</label>
                  <select
                    value={wireFamily}
                    onChange={(e) => setWireFamily(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-[#f7f9fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00] text-[#191c1e]"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-medium text-[#191c1e]">Nominal Cross Section</label>
                  <select
                    value={wireSize}
                    onChange={(e) => setWireSize(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-[#f7f9fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00] text-[#191c1e]"
                  >
                    {availableSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantity and Environment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-medium text-[#191c1e]">Quantity (90m Standard Coils)</label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={coils}
                    onChange={(e) => setCoils(Number(e.target.value) || 1)}
                    className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-[#f7f9fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00] text-[#191c1e]"
                    required
                  />
                  <span className="text-[11px] text-[#76777d]">Total Length: ~{coils * 90} Meters</span>
                </div>

                <div className="space-y-1.5">
                  <label className="font-medium text-[#191c1e]">Environment</label>
                  <select
                    value={applicationType}
                    onChange={(e) => setApplicationType(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-[#f7f9fb] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00] text-[#191c1e]"
                  >
                    <option value="Homes & apartments">Homes & apartments</option>
                    <option value="Commercial spaces">Commercial spaces</option>
                    <option value="Industrial facilities">Industrial facilities</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-[#f2f4f6]">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#565e74]">
                  Contact Information
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#191c1e] mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#191c1e] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#191c1e] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#191c1e] mb-1">Project Notes / Destination (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Include delivery city, project timeline, or special requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c6c6cd] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#904d00] resize-none"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="pt-3 border-t border-[#eceef0] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-[#45464d] hover:bg-[#eceef0] rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#904d00] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#fe932c] hover:text-[#191c1e] transition-colors cursor-pointer shadow-sm active:scale-95"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};


