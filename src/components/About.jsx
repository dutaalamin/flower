import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-[#fcfbfa]" id="about">

      {/* Hero Header */}
      <div className="py-20 sm:py-28 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-[#14422e] leading-tight mb-6">
          The Story Behind <span className="italic">Bunga Cerita</span>
        </h1>
        <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          We craft beautiful handmade flower bouquets from premium felt fabric, turning every petal into a language of love, celebration, and heartfelt support for your most precious moments.
        </p>
      </div>

      {/* How We Started — Image Left, Text Right */}
      <div className="py-20 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=800"
                alt="Bunga Cerita handmade flower crafting"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="md:w-1/2">
            <span className="font-raleway text-[10px] font-bold tracking-[0.25em] text-[#1a6e4d] uppercase block mb-3">
              Bunga Cerita Studio
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-[#14422e] mb-6">
              How We Started
            </h2>
            <div className="space-y-4">
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Starting from a love for the art of flower crafting, Bunga Cerita was born with a mission to provide handmade flower bouquets that are personal, aesthetic, and everlasting. We believe every moment has a story, and flowers are one of the most beautiful ways to tell it.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Based in Tangerang, near UPH, BINUS, UMN, and BSD campuses, our team carefully shapes each petal by hand using premium felt and knitted fabric, ensuring every bouquet is unique, detailed, and crafted with genuine care.
              </p>
            </div>

            {/* Feature Tags with checkmarks */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#1a6e4d]/15 text-[#1a6e4d] text-xs font-semibold rounded-full">
                <Check className="w-3.5 h-3.5" /> Handmade Felt Flowers
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#1a6e4d]/15 text-[#1a6e4d] text-xs font-semibold rounded-full">
                <Check className="w-3.5 h-3.5" /> Custom Arrangement
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#1a6e4d]/15 text-[#1a6e4d] text-xs font-semibold rounded-full">
                <Check className="w-3.5 h-3.5" /> Everlasting Bouquets
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision & Stats combined */}
      <div className="py-20 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-24 sm:mb-28">
          <div className="text-center md:text-left">
            <span className="font-raleway text-[10px] font-bold tracking-[0.25em] text-[#1a6e4d] uppercase block mb-3">
              Our Mission
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#14422e] mb-5">
              Crafting Stories Through Flowers
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              To be a part of our customers' happiest stories by providing beautiful, personalized, and long-lasting handmade flower bouquets that can be treasured for years to come.
            </p>
          </div>
          <div className="text-center md:text-left">
            <span className="font-raleway text-[10px] font-bold tracking-[0.25em] text-[#1a6e4d] uppercase block mb-3">
              Our Vision
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#14422e] mb-5">
              Flowers That Last Forever
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              To become the most trusted handmade flower bouquet brand for gifts, celebrations, and special occasions, with consistent quality in craftsmanship, creativity, and customer experience.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:flex md:justify-between gap-8 sm:gap-12 md:gap-0">
          <div className="text-center md:text-left">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#1a6e4d] mb-2 tracking-tight">500+</p>
            <p className="text-[11px] sm:text-xs text-stone-400 tracking-wider uppercase font-semibold">Happy Customers</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#1a6e4d] mb-2 tracking-tight">1K+</p>
            <p className="text-[11px] sm:text-xs text-stone-400 tracking-wider uppercase font-semibold">Bouquets Crafted</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#1a6e4d] mb-2 tracking-tight">100%</p>
            <p className="text-[11px] sm:text-xs text-stone-400 tracking-wider uppercase font-semibold">Handmade</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#1a6e4d] mb-2 tracking-tight">5.0</p>
            <p className="text-[11px] sm:text-xs text-stone-400 tracking-wider uppercase font-semibold">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Coverage — Text Left, Image Right */}
      <div className="py-20 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="md:w-1/2">
            <span className="font-raleway text-[10px] font-bold tracking-[0.25em] text-[#1a6e4d] uppercase block mb-3">
              Coverage
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-[#14422e] mb-6">
              Serving the <span className="italic">Tangerang</span> Area
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              We are based in Tangerang and serve customers nearby, including areas around UPH, BINUS, UMN, and BSD. For pickup and delivery options, feel free to reach out to us directly.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#1a6e4d] shrink-0" />
                <span className="text-stone-600 text-sm">Tangerang city center area & surroundings</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#1a6e4d] shrink-0" />
                <span className="text-stone-600 text-sm">Self-pickup available at our studio</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#1a6e4d] shrink-0" />
                <span className="text-stone-600 text-sm">Delivery by arrangement via chat</span>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#f2f7f5] p-6">
              <img
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800"
                alt="Flower delivery and packaging"
                className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 sm:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl text-[#14422e] mb-4">
            Ready to Tell Your Story?
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Have a special request, custom arrangement, or need a bouquet for a specific occasion? We are ready to help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/catalog"
              className="px-8 py-3.5 bg-[#1a6e4d] hover:bg-[#14422e] text-white font-raleway font-bold text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              View Catalog
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white border-2 border-[#1a6e4d] text-[#1a6e4d] hover:bg-[#1a6e4d] hover:text-white font-raleway font-bold text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 active:scale-95"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
