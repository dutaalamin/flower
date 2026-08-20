import React from 'react';
import { LOGO_URL } from '../data/mockData';

const About = () => {
  return (
    <section className="py-20 sm:py-28 bg-white" id="about">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">

        {/* Simple centered layout — no grid, no icons, just the story */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-stone-200 shadow-sm mb-6">
            <img src={LOGO_URL} alt="Bunga Cerita" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-serif-lux text-2xl sm:text-3xl lg:text-4xl text-peony-950 leading-snug mb-5">
            Tentang Bunga Cerita
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-4">
            Bunga Cerita adalah usaha buket bunga handmade yang berbasis di Tangerang, dekat kampus UPH, BINUS, UMN, dan BSD. Kami membuat setiap rangkaian bunga secara handmade dari bahan flanel dan rajut berkualitas tinggi.
          </p>
          <p className="text-stone-500 text-sm leading-relaxed mb-4">
            Setiap buket dibuat khusus sesuai pesanan — custom only. Kamu bisa pilih jenis bunga, warna, ukuran, dan desain wrapping sesuai keinginan. Tinggal DM kami di Instagram atau chat via WhatsApp, dan kami akan bantu buatkan buket yang pas untuk momen kamu.
          </p>
          <p className="text-stone-400 text-xs italic">
            #tellstoriesthroughflowers
          </p>
        </div>

        {/* Three simple info columns — clean, no tacky icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center">
            <p className="font-serif-lux text-4xl sm:text-5xl font-bold text-peony-600 mb-2">100%</p>
            <p className="text-xs sm:text-sm text-stone-600 font-semibold mb-1">Handmade</p>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Setiap kelopak bunga dibentuk satu per satu oleh tangan, bukan produksi massal. Hasilnya unik dan personal.
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif-lux text-4xl sm:text-5xl font-bold text-peony-600 mb-2">∞</p>
            <p className="text-xs sm:text-sm text-stone-600 font-semibold mb-1">Tahan Lama</p>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Tidak seperti bunga asli yang layu dalam hitungan hari, buket kami bisa disimpan bertahun-tahun sebagai kenang-kenangan.
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif-lux text-4xl sm:text-5xl font-bold text-peony-600 mb-2">DM</p>
            <p className="text-xs sm:text-sm text-stone-600 font-semibold mb-1">Custom Order</p>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Cukup kirim DM ke Instagram kami atau chat via WhatsApp. Konsultasi desain gratis, tanpa minimum order.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
