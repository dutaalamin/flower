import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { OUTLETS } from '../data/mockData';

const Outlets = () => {
  return (
    <section className="py-24 bg-cream-50 border-t border-peony-200/20" id="outlets">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-black text-peony-600 uppercase tracking-widest mb-1.5 block">
            Showroom Toko Bunga Kami
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-black text-peony-950 leading-tight">
            Kunjungi Outlet Terdekat
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-3">
            Hadir langsung di Yogyakarta, Jakarta, dan Surabaya untuk melayani pesanan rangkaian bunga segar pilihan Anda.
          </p>
        </div>

        {/* Outlets List */}
        <div className="flex flex-col gap-12">
          {OUTLETS.map((ot) => (
            <div 
              key={ot.id}
              className="bg-white rounded-3xl border border-peony-200/20 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row gap-8 hover:shadow-md transition-shadow duration-300"
            >
              
              {/* Outlet Info */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between py-2">
                <div className="flex flex-col gap-5">
                  <span className="text-[10px] font-black text-peony-600 bg-peony-50 border border-peony-100 rounded-full px-3 py-1 self-start uppercase tracking-wider">
                    Outlet #{ot.id}
                  </span>
                  <h3 className="font-serif-lux text-2xl font-bold text-peony-950 leading-tight">
                    {ot.name}
                  </h3>
                  
                  <div className="flex flex-col gap-4 text-xs sm:text-sm text-stone-500 mt-2">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-peony-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{ot.address}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Phone className="w-4.5 h-4.5 text-peony-600 shrink-0" />
                      <p className="font-semibold text-stone-700">{ot.phone}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Clock className="w-4.5 h-4.5 text-peony-600 shrink-0" />
                      <p>{ot.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-peony-200/10 flex gap-4">
                  <a 
                    href={`https://wa.me/${ot.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-6 py-3 bg-peony-600 hover:bg-peony-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm active:scale-95 flex items-center gap-1 hover:-translate-y-0.5"
                  >
                    Hubungi Toko
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Outlet Map embed */}
              <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-150 shadow-inner bg-stone-50">
                <iframe 
                  title={`Map ${ot.name}`}
                  src={ot.mapQuery} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Outlets;
