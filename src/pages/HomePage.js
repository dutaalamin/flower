import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';

const HomePage = ({ onProductSelect, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Banner */}
      <Hero onCatalogClick={() => navigate('/catalog')} />

      {/* Catalog Preview (Featured 6 products directly below Hero) */}
      <div className="bg-[#fcfbfa] pt-6 pb-20">
        <Catalog
          onProductSelect={onProductSelect}
          onAddToCart={onAddToCart}
          isPreview={true}
        />


      </div>

      {/* Promotional Banners */}
      <div className="flex flex-col">
        {/* Special Occasions Banner (Graduation & Wedding) */}
        <section className="bg-[#fcf8f5] py-24 px-6 sm:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <span className="inline-block text-[#d98a96] font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4">
                Thoughtfully arranged blooms
              </span>
              <h2 className="font-playfair italic text-4xl sm:text-5xl md:text-6xl text-[#4a4543] mb-6 leading-tight">
                Flowers for Your Graduation & Wedding
              </h2>
              <p className="font-sans font-light text-stone-600 text-sm sm:text-base mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Celebrate every achievement and new beginning with our premium, handcrafted floral arrangements. Whether it's a grand wedding or a joyful graduation, we make your special day bloom.
              </p>
              <Link
                to="/catalog"
                className="inline-block px-10 py-3.5 border border-[#d98a96] hover:bg-[#d98a96] text-[#d98a96] hover:text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Explore More
              </Link>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
               <div className="aspect-[4/5] max-w-md mx-auto rounded-t-full rounded-b-3xl overflow-hidden shadow-xl">
                 <img
                   src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000"
                   alt="Wedding and Graduation flowers"
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>
          </div>
        </section>

        {/* Corporate Gifting Banner */}
        <section className="relative bg-[#14422e] text-stone-50 py-20 px-6 sm:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-playfair italic text-3xl sm:text-4xl md:text-5xl font-medium mb-6 leading-tight text-white">
                Corporate gifting or collaboration
              </h2>
              <p className="font-sans font-light text-stone-200 text-sm sm:text-base mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Bunga Cerita welcomes corporate projects & collaborations. Thoughtfully designed florals for meaningful and memorable experiences in your professional events.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-3.5 border border-white hover:bg-white hover:text-[#14422e] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
            <div className="md:w-1/2 relative flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1572454591674-2739f30d8c40?q=80&w=1000"
                  alt="Corporate floral arrangement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#14422e]/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Preview Banner */}
        <section className="bg-peony-50 py-24 px-6 sm:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2">
               <div className="aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-xl">
                 <img
                   src="https://images.unsplash.com/photo-1579564257850-8b9a528cc29d?q=80&w=1000"
                   alt="Bunga Cerita team and workshop"
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-playfair text-4xl sm:text-5xl text-peony-950 mb-6">
                About Us
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-8 text-base sm:text-lg">
                At Bunga Cerita, every floral arrangement is crafted with deep care, genuine intention, and meticulous attention to timeless beauty. We design blooms that feel personal, memorable, and perfectly suited for your most precious moments.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-3.5 bg-peony-950 hover:bg-peony-800 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg active:scale-95"
              >
                Get to Know Us
              </Link>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-24 -right-24 text-[300px] font-playfair italic text-peony-900/5 leading-none select-none pointer-events-none">
            &
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
