// src/components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT[cite: 2]
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Connect directly via phone, WhatsApp, or email below.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact Terminal (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            <div className="space-y-6">
              
              {/* Phone Channel */}
              <div className="group relative bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37] p-5 rounded-sm transition-all duration-300">
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  // DIRECT VOICE CHANNEL
                </span>
                <a
                  href="tel:+917483198135"
                  className="text-base sm:text-lg font-medium tracking-wider text-white hover:text-[#F7E7C4] transition-colors flex items-center justify-between"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>+91 7483198135</span>
                  <span className="text-xs text-[#D4AF57] tracking-widest uppercase">CALL ↗</span>
                </a>
              </div>

              {/* WhatsApp Channel */}
              <div className="group relative bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37] p-5 rounded-sm transition-all duration-300">
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  // WHATSAPP MESSAGING
                </span>
                <a
                  href="https://wa.me/917483198135?text=Hi%20Abhishek,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium tracking-wider text-white hover:text-[#F7E7C4] transition-colors flex items-center justify-between"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>+91 7483198135</span>
                  <span className="text-xs text-[#D4AF57] tracking-widest uppercase">CHAT ↗</span>
                </a>
              </div>

              {/* Email Channel */}
              <div className="group relative bg-[#120F0C] border border-[#8C6D4F]/30 hover:border-[#D4AF37] p-5 rounded-sm transition-all duration-300">
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  // ELECTRONIC MAIL
                </span>
                <a
                  href="mailto:abhishekeb2003@gmail.com"
                  className="text-base sm:text-lg font-medium tracking-wider text-white hover:text-[#F7E7C4] transition-colors flex items-center justify-between break-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>abhishekeb2003@gmail.com</span>
                  <span className="text-xs text-[#D4AF57] tracking-widest uppercase">EMAIL ↗</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION[cite: 2, 3]
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;