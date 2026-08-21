import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onCatalogClick }) => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      id="home"
      style={{ minHeight: '100vh' }}
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=1920"
          alt="Beautiful flower bouquet arrangement"
          className="w-full h-full object-cover"
        />
        {/* Deep theme green overlay for enhanced contrast and luxury brand consistency */}
        <div className="absolute inset-0 bg-[#0a2418]/45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2418]/60 via-transparent to-[#0a2418]/60"></div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-3xl mx-auto">



        {/* Store name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.4em] text-stone-200 drop-shadow-md">
            Handmade Flowers Bouquet
          </span>
        </motion.div>

        {/* Main tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-playfair text-white lowercase leading-[1.15] mb-8 drop-shadow-2xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          bunga cerita
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-serif-lux italic text-stone-100 text-lg sm:text-xl md:text-2xl tracking-wider mb-14 drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)] font-light"
        >
          telling stories through flowers
        </motion.p>



        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 no-print"
        >
          <button
            onClick={onCatalogClick}
            className="px-10 py-3.5 bg-white hover:bg-peony-50 text-[#14422e] font-raleway font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-2xl active:scale-95 hover:-translate-y-0.5"
          >
            Explore Catalog
          </button>

        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
