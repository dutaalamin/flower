import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';

const HomePage = ({ onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Banner */}
      <Hero onCatalogClick={() => navigate('/catalog')} />

      {/* Catalog Preview (Featured 6 products directly below Hero) */}
      <div className="bg-[#fcfbfa] pt-6 pb-20">
        <Catalog
          onAddToCart={onAddToCart}
          isPreview={true}
        />


      </div>


        {/* About Us Preview Banner — Text-only, elegant & minimal */}
        <section className="bg-[#f2f7f5] py-24 sm:py-32 px-6 sm:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-raleway text-[10px] font-bold tracking-[0.25em] text-[#1a6e4d] uppercase block mb-4">
              Our Story
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-[#14422e] mb-8 leading-tight">
              About <span className="italic">Bunga Cerita</span>
            </h2>
            <p className="text-stone-600 font-light leading-relaxed text-base sm:text-lg mb-4">
              Every bouquet we create is a story, handcrafted with care from premium felt fabric, designed to last forever. Based in Tangerang, we pour love into every petal.
            </p>
            <p className="text-stone-500 font-light leading-relaxed text-sm sm:text-base mb-10 italic">
              "Flowers that never wilt, memories that never fade."
            </p>
            <Link
              to="/about"
              className="inline-block px-10 py-3.5 bg-[#1a6e4d] hover:bg-[#14422e] text-white font-raleway font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              Get to Know Us
            </Link>
          </div>
        </section>
    </div>
  );
};

export default HomePage;
