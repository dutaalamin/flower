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
        {/* Subtle dark overlay for text readability without making it gloomy */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-3xl mx-auto">



        {/* Store name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5"
        >
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] text-white/90 drop-shadow-md">
            Handmade Flowers Bouquet
          </span>
        </motion.div>

        {/* Main tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-playfair text-white lowercase leading-none mb-6 drop-shadow-xl"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          bunga cerita
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-serif-lux italic text-white/90 text-base sm:text-lg md:text-xl tracking-wide mb-10 drop-shadow-md"
        >
          #tellstoriesthroughflowers
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
            className="px-9 py-3.5 bg-white hover:bg-stone-100 text-[#1a6e4d] font-bold text-[11px] uppercase tracking-[0.18em] rounded-full transition-all duration-300 shadow-xl active:scale-95 hover:-translate-y-0.5"
          >
            Explore Catalog
          </button>

        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
