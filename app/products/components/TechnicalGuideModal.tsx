"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECHNICAL_GUIDE_DATA } from '../data/products';

interface TechnicalGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalGuideModal: React.FC<TechnicalGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate simulated download of technical specification sheet
    const guideContent = `
=====================================================
S.S. CABLE INDUSTRIES - TECHNICAL SPECIFICATION GUIDE
Standard: IS 694 : 2010 (Bureau of Indian Standards)
=====================================================

1. SCOPE & GENERAL SPECIFICATIONS
- Applicable Standard: ${TECHNICAL_GUIDE_DATA.standard}
- Voltage Rating: ${TECHNICAL_GUIDE_DATA.voltageGrade}
- Conductor: ${TECHNICAL_GUIDE_DATA.conductorPurity}
- Dielectric Insulation: ${TECHNICAL_GUIDE_DATA.insulationType}
- Maximum Operating Temperature: ${TECHNICAL_GUIDE_DATA.operatingTemp}
- Fire Retardancy: ${TECHNICAL_GUIDE_DATA.fireRating}

2. QUALITY & LABORATORY TESTING STANDARDS
${TECHNICAL_GUIDE_DATA.testingStandards.map(test => `* ${test}`).join('\n')}

3. STANDARD CURRENT CARRYING CAPACITIES (AMPERES AT 40°C AMBIENT)
- 0.75 sq mm: 7A (Enclosed) / 10A (Unenclosed)
- 1.0 sq mm:  11A (Enclosed) / 14A (Unenclosed)
- 1.5 sq mm:  14A (Enclosed) / 18A (Unenclosed)
- 2.5 sq mm:  19A (Enclosed) / 24A (Unenclosed)
- 4.0 sq mm:  26A (Enclosed) / 32A (Unenclosed)
- 6.0 sq mm:  33A (Enclosed) / 41A (Unenclosed)
- 10.0 sq mm: 45A (Enclosed) / 57A (Unenclosed)
- 16.0 sq mm: 61A (Enclosed) / 76A (Unenclosed)

For custom engineering inquiries: technical@sscable.com
© 2024 S.S. Cable Industries. All rights reserved.
    `.trim();

    const blob = new Blob([guideContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SS_Cable_IS694_Technical_Guide.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <AnimatePresence>
      <div 
        id="technical-guide-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="technical-guide-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#c6c6cd]"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-[#eceef0] sticky top-0 bg-white z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#904d00] text-[24px]">
                verified
              </span>
              <div>
                <h3 className="font-bold text-lg text-[#191c1e] leading-none">
                  Technical Guide
                </h3>
                <span className="text-xs text-[#565e74]">IS 694:2010 Certification & Engineering Data</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#45464d] hover:text-[#191c1e] p-1.5 rounded-lg hover:bg-[#f2f4f6] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            <div className="p-4 bg-[#f7f9fb] rounded-lg border border-[#e0e3e5] space-y-2">
              <h4 className="font-bold text-sm text-[#191c1e]">
                {TECHNICAL_GUIDE_DATA.title}
              </h4>
              <p className="text-xs text-[#45464d] leading-relaxed">
                This document contains standard electrical parameters, insulation dielectric thresholds, and manufacturing compliance guidelines for S.S. Cable single-core and multi-core PVC insulated wires.
              </p>
            </div>

            {/* Key Engineering Parameters */}
            <div className="space-y-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#565e74]">
                Compliance Parameters
              </h5>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-[#f2f4f6]">
                  <span className="text-[#76777d]">Standard Reference:</span>
                  <span className="font-semibold text-[#191c1e] text-right">{TECHNICAL_GUIDE_DATA.standard}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f2f4f6]">
                  <span className="text-[#76777d]">Voltage Rating:</span>
                  <span className="font-semibold text-[#191c1e] text-right">{TECHNICAL_GUIDE_DATA.voltageGrade}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f2f4f6]">
                  <span className="text-[#76777d]">Conductor Purity:</span>
                  <span className="font-semibold text-[#191c1e] text-right">{TECHNICAL_GUIDE_DATA.conductorPurity}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f2f4f6]">
                  <span className="text-[#76777d]">Flame Retardancy:</span>
                  <span className="font-semibold text-[#191c1e] text-right">{TECHNICAL_GUIDE_DATA.fireRating}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f2f4f6]">
                  <span className="text-[#76777d]">Operating Temp:</span>
                  <span className="font-semibold text-[#191c1e] text-right">{TECHNICAL_GUIDE_DATA.operatingTemp}</span>
                </div>
              </div>
            </div>

            {/* Quality Testing Protocols */}
            <div className="space-y-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#565e74]">
                Quality Assurance Routine & Type Tests
              </h5>
              <ul className="space-y-1.5 text-xs text-[#45464d]">
                {TECHNICAL_GUIDE_DATA.testingStandards.map((test, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#904d00] text-[16px]">
                      check
                    </span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>

            {downloadSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">done_all</span>
                <span>Specification sheet downloaded successfully!</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 bg-[#f7f9fb] border-t border-[#eceef0] flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-[#76777d]">File: SS_Cable_IS694_Technical_Guide.txt</span>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-[#45464d] hover:bg-[#eceef0] rounded-lg transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Close
              </button>
              <button
                onClick={handleDownload}
                className="bg-[#131b2e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0d1c2e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download Specs</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

