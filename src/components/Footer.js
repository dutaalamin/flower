import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { LOGO_URL } from '../data/mockData';

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/catalog');
    setTimeout(() => {
      const event = new CustomEvent('filter-category', { detail: category });
      window.dispatchEvent(event);
    }, 150);
  };

  return (
    <footer className="bg-cream-100 border-t border-peony-200/50 pt-16 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* About Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-peony-200/50">
              <img src={LOGO_URL} alt="Bunga Cerita Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif-lux text-xl font-bold tracking-wide text-peony-950 uppercase">
              Bunga Cerita
            </span>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
            Handmade Flowers Bouquet berbasis di Tangerang. Setiap buket dibuat custom sesuai pesanan dengan bahan flanel berkualitas tinggi. #tellstoriesthroughflowers
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a 
              href="https://www.instagram.com/galeribungacerita/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white border border-peony-200/40 hover:border-peony-600 flex items-center justify-center text-stone-600 hover:text-peony-600 hover:bg-peony-50 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links & Categories */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif-lux text-sm font-bold uppercase tracking-wider text-peony-950">
            Katalog & Halaman
          </h4>
          <ul className="flex flex-col gap-2.5 text-stone-500 text-xs sm:text-sm">
            <li>
              <Link to="/catalog" className="hover:text-peony-600 transition-colors">
                Semua Katalog Bunga
              </Link>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Custom Large')} className="hover:text-peony-600 transition-colors text-left">
                Custom Large Bouquet
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Custom Medium')} className="hover:text-peony-600 transition-colors text-left">
                Custom Medium Bouquet
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Non-Floral')} className="hover:text-peony-600 transition-colors text-left">
                Non-Floral (Snack/Candy)
              </button>
            </li>
            <li>
              <Link to="/about" className="hover:text-peony-600 transition-colors">
                Tentang Kami (About Us)
              </Link>
            </li>
            <li>
              <Link to="/track-order" className="hover:text-peony-600 transition-colors">
                Lacak Pesanan (Track Order)
              </Link>
            </li>
          </ul>
        </div>

        {/* How to Order */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif-lux text-sm font-bold uppercase tracking-wider text-peony-950">
            Cara Order
          </h4>
          <ul className="flex flex-col gap-2.5 text-stone-500 text-xs sm:text-sm">
            <li className="flex gap-2 items-start">
              <span className="w-5 h-5 rounded-full bg-peony-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>Pilih produk atau konsultasi via DM Instagram / WhatsApp</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-5 h-5 rounded-full bg-peony-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>Tentukan jenis bunga, warna, dan desain yang diinginkan</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-5 h-5 rounded-full bg-peony-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>Lakukan pembayaran dan tunggu proses pembuatan (1-5 hari)</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-5 h-5 rounded-full bg-peony-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span>Ambil di lokasi (Tangerang) atau kirim via kurir</span>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif-lux text-sm font-bold uppercase tracking-wider text-peony-950">
            Hubungi Kami
          </h4>
          <ul className="flex flex-col gap-3 text-stone-500 text-xs sm:text-sm">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-5 h-5 text-peony-600 shrink-0 mt-0.5" />
              <span>Tangerang (Near UPH, BINUS, UMN, BSD)</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-peony-600 shrink-0" />
              <span>+62 877-9876-5432</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Instagram className="w-4 h-4 text-peony-600 shrink-0" />
              <a 
                href="https://www.instagram.com/galeribungacerita/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-peony-600 transition-colors"
              >
                @galeribungacerita
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-8 border-t border-peony-200/20 text-center">
        <p className="text-xs font-semibold text-stone-400 tracking-wide">
          Bunga Cerita &copy; 2026. All rights reserved. Open for custom only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
