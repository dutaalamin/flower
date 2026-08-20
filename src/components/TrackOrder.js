import React, { useState } from 'react';
import { Search, Package, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { TRACKING_DATA } from '../data/mockData';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [searchedId, setSearchedId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanId = orderId.trim().toUpperCase();
    setSearchedId(cleanId);
    setHasSearched(true);

    if (TRACKING_DATA[cleanId]) {
      setTrackingInfo(TRACKING_DATA[cleanId]);
    } else {
      setTrackingInfo(null);
    }
  };

  const handleSelectSample = (id) => {
    setOrderId(id);
    setSearchedId(id);
    setHasSearched(true);
    setTrackingInfo(TRACKING_DATA[id]);
  };

  return (
    <section className="py-24 bg-white border-t border-peony-200/20 min-h-[70vh]" id="track-order">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-black text-peony-600 uppercase tracking-widest mb-1.5 block">
            Pantau Status Pengiriman
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl font-black text-peony-950 leading-tight">
            Lacak Pesanan Bunga Anda
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-3">
            Masukkan Order ID yang Anda dapatkan saat melakukan konfirmasi pesanan via WhatsApp.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearch} className="mb-10 flex gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
            <input 
              type="text" 
              placeholder="Contoh: BC-1001"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
              className="w-full pl-11 pr-4 py-3 rounded-full border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/25 bg-stone-50/20"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-peony-950 hover:bg-peony-900 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm active:scale-95 shrink-0"
          >
            Lacak
          </button>
        </form>

        {/* Tracking Output */}
        {hasSearched ? (
          trackingInfo ? (
            /* Order Found Details */
            <div className="bg-cream-50 rounded-3xl border border-peony-100/50 p-6 sm:p-8 shadow-xs flex flex-col gap-6">
              
              {/* Order Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-peony-200/20">
                <div className="flex gap-2.5 items-center">
                  <Package className="w-5.5 h-5.5 text-peony-600" />
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none">Order ID</p>
                    <h3 className="text-sm font-bold text-stone-850 mt-1 leading-tight">{trackingInfo.orderId}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none">Nama Produk</p>
                  <p className="text-xs font-bold text-peony-950 mt-1 leading-normal">{trackingInfo.productName}</p>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-500 pb-5 border-b border-peony-200/20">
                <div className="flex gap-2 items-start">
                  <MapPin className="w-4.5 h-4.5 text-peony-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-600 block">Penerima & Alamat:</span>
                    <span className="text-xs text-stone-500 leading-relaxed block mt-0.5">
                      {trackingInfo.recipientName} - {trackingInfo.deliveryAddress}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <Calendar className="w-4.5 h-4.5 text-peony-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-600 block">Rencana Pengiriman:</span>
                    <span className="text-xs text-stone-500 mt-0.5 block">{trackingInfo.deliveryDate}</span>
                  </div>
                </div>
              </div>

              {/* Stepper Steps */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-peony-600 mb-6">Status Perjalanan Paket</h4>
                <div className="flex flex-col gap-8 relative pl-6 border-l-2 border-peony-200/40 ml-3">
                  {trackingInfo.statusSteps.map((s, idx) => (
                    <div key={idx} className="relative flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      
                      {/* Step Marker Dot */}
                      <div className={`absolute -left-[33px] w-4.5 h-4.5 rounded-full border-4 border-cream-50 flex items-center justify-center ${
                        s.completed ? 'bg-peony-600 shadow-sm' : 'bg-stone-200'
                      }`}>
                        {s.completed && <CheckCircle className="w-2.5 h-2.5 text-white" />}
                      </div>

                      {/* Content */}
                      <div>
                        <h5 className={`text-xs sm:text-sm font-bold ${s.completed ? 'text-stone-850 font-black' : 'text-stone-400'}`}>
                          {s.step}
                        </h5>
                        <p className={`text-[11px] leading-relaxed mt-1 ${s.completed ? 'text-stone-500' : 'text-stone-300'}`}>
                          {s.desc}
                        </p>
                      </div>

                      {/* Time */}
                      <div className="shrink-0 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-stone-400 sm:text-right mt-1 sm:mt-0">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{s.time}</span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Order Not Found */
            <div className="p-10 bg-rose-50/50 border border-rose-100 rounded-3xl text-center flex flex-col items-center gap-2 max-w-md mx-auto">
              <p className="font-serif-lux text-lg font-bold text-rose-800">Order ID Tidak Ditemukan</p>
              <p className="text-xs text-stone-500 leading-relaxed">
                Kami tidak menemukan data untuk Order ID <span className="font-bold text-stone-800">"{searchedId}"</span>. Pastikan Anda mengetikkan kode yang tepat.
              </p>
            </div>
          )
        ) : null}

        {/* Info/Guide Card with Sample IDs */}
        <div className="mt-12 bg-cream-100 border border-peony-200/10 rounded-2xl p-5 text-center">
          <p className="text-xs font-bold text-stone-600 mb-3">Untuk Uji Coba Lacak Pesanan, gunakan salah satu ID sampel berikut:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(TRACKING_DATA).map((id) => (
              <button
                key={id}
                onClick={() => handleSelectSample(id)}
                className="px-4 py-2 bg-white hover:bg-peony-50 border border-stone-200/60 hover:border-peony-600 text-stone-600 hover:text-peony-600 text-[11px] font-bold rounded-full transition-all shadow-xs"
              >
                {id} ({TRACKING_DATA[id].status})
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrackOrder;
