import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram } from 'lucide-react';

const TikTokIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.43-.6-.67-.06 2.62-.04 5.24-.05 7.86-.03 1.93-.37 3.9-1.47 5.48-1.21 1.77-3.3 2.88-5.46 3.03-2.14.15-4.42-.48-5.98-2.03-1.63-1.63-2.28-4.08-1.7-6.33.45-1.92 1.76-3.66 3.59-4.41.97-.4 2.01-.58 3.06-.55v4.11c-.74-.08-1.52.07-2.17.46-.86.51-1.39 1.5-1.39 2.5 0 .8.34 1.6.94 2.14.63.59 1.5.89 2.35.82.95-.06 1.87-.65 2.27-1.52.27-.58.33-1.24.31-1.87V.02z"/>
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12.011 20c-2.228 0-4.402-.599-6.286-1.734l-.451-.27-4.664 1.222 1.243-4.549-.296-.471A9.92 9.92 0 0 1 2 9.991C2 4.482 6.491 0 12.011 0 17.53 0 22 4.482 22 9.991c0 5.508-4.47 9.991-9.989 9.991zM6.586 16.591l.248.147a8.277 8.277 0 0 0 4.18 1.13c4.547 0 8.25-3.693 8.25-8.227s-3.703-8.227-8.25-8.227c-4.549 0-8.25 3.693-8.25 8.227a8.21 8.21 0 0 0 1.245 4.316l.164.263-.739 2.705 2.775-.727zM16.8 13.553c-.261-.131-1.544-.761-1.783-.848-.239-.087-.413-.131-.587.13-.174.261-.673.848-.826 1.022-.152.174-.304.196-.565.065a7.11 7.11 0 0 1-2.099-1.294 7.842 7.842 0 0 1-1.452-1.808c-.152-.261-.016-.402.115-.532.118-.117.261-.304.391-.456.13-.152.174-.261.261-.435.087-.174.043-.326-.022-.456-.065-.13-.587-1.413-.804-1.935-.211-.508-.426-.438-.587-.446-.152-.008-.326-.008-.5-.008-.174 0-.456.065-.695.326-.239.261-.913.891-.913 2.173 0 1.282.934 2.521 1.065 2.695.13.174 1.838 2.808 4.453 3.935.622.268 1.108.428 1.488.549.624.198 1.192.17 1.642.103.501-.075 1.544-.63 1.761-1.239.217-.609.217-1.13.152-1.239-.065-.109-.239-.174-.5-.304z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#fcfbfa] text-stone-600 pt-16 pb-16 no-print border-t border-peony-200/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-playfair text-3xl font-bold tracking-tight text-[#1a6e4d] lowercase">
            bunga cerita
          </span>
          <span className="font-raleway text-[11px] font-medium tracking-[0.2em] text-[#1a6e4d] uppercase block -mt-1">
            telling stories through flowers
          </span>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-sm">
            Handmade flower bouquets based in Tangerang. Each bouquet is custom-made to order using high-quality felt materials.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a 
              href="https://www.instagram.com/galeribungacerita/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#f2f7f5] hover:bg-[#e3ede9] flex items-center justify-center text-[#1a6e4d] border border-[#1a6e4d]/10 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.tiktok.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#f2f7f5] hover:bg-[#e3ede9] flex items-center justify-center text-[#1a6e4d] border border-[#1a6e4d]/10 transition-all shadow-sm"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-raleway text-sm font-bold uppercase tracking-[0.2em] text-[#14422e]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-stone-500 text-xs sm:text-sm">
            <li>
              <Link to="/terms" className="hover:text-[#1a6e4d] transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="hover:text-[#1a6e4d] transition-colors">
                Catalog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#1a6e4d] transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col gap-4">
          <h4 className="font-raleway text-sm font-bold uppercase tracking-[0.2em] text-[#14422e]">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3.5 text-stone-500 text-xs sm:text-sm">
            <li className="flex gap-3 items-center">
              <MapPin className="w-4 h-4 text-[#1a6e4d] shrink-0" />
              <span>Tangerang (Near UPH, BINUS, UMN, BSD)</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-[#1a6e4d] shrink-0" />
              <a href="tel:+6287798765432" className="hover:text-[#1a6e4d] transition-colors">
                +62 877-9876-5432
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-[#1a6e4d] shrink-0" />
              <a href="mailto:bungacerita@gmail.com" className="hover:text-[#1a6e4d] transition-colors">
                bungacerita@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
