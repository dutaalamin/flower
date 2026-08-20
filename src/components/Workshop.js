import React from 'react';
import { Calendar, Users, Award, Sparkles } from 'lucide-react';

const Workshop = () => {
  const classes = [
    {
      title: "Basic Hand Bouquet Class",
      level: "Pemula (Beginner)",
      price: 350000,
      duration: "2.5 Jam",
      includes: "Bunga segar, wrapping paper, vas, snack, sertifikat, & hasil karya dibawa pulang.",
      date: "Sabtu, 29 Agustus 2026",
      time: "10:00 - 12:30 WIB"
    },
    {
      title: "Table Arrangement Masterclass",
      level: "Menengah (Intermediate)",
      price: 450000,
      duration: "3 Jam",
      includes: "Pot keramik premium, bunga import, sponge oasis, floral cutter, sertifikat, & hasil karya bawa pulang.",
      date: "Minggu, 30 Agustus 2026",
      time: "13:30 - 16:30 WIB"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=400",
    "https://images.unsplash.com/photo-1519225495810-7517c51c911a?q=80&w=400",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400",
    "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=400"
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleRegister = (className) => {
    const text = `Halo Bunga Cerita, saya ingin mendaftar untuk kelas workshop: *${className}*. Mohon informasi ketersediaan slot dan metode pembayaran. Terima kasih!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=6287798765432&text=${encoded}`, '_blank');
  };

  return (
    <section className="py-24 bg-white border-t border-peony-200/20" id="workshop">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-black text-peony-600 uppercase tracking-widest mb-1.5 block">
            Kelas Seni Merangkai Bunga
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl lg:text-5xl font-black text-peony-950 leading-tight">
            Workshop Bunga Cerita
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-3">
            Pelajari teknik dasar dan temukan keindahan mengekspresikan kreativitas Anda lewat rangkaian bunga segar pilihan bersama Florist Master kami.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Details & Benefits */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif-lux text-2xl font-bold text-peony-950 leading-snug">
              Temukan Bakat Floral Design Anda
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
              Workshop kami didesain santai, interaktif, dan penuh inspirasi untuk memberikan pengalaman hands-on bagi siapa saja yang mencintai bunga. Mulai dari pemilihan bunga pelengkap, perawatan tangkai, hingga teori harmoni warna pembungkus (wrapping harmony).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-b border-peony-200/20 py-6 my-2">
              <div className="text-center sm:text-left">
                <Calendar className="w-5 h-5 text-peony-600 mb-2 mx-auto sm:mx-0" />
                <h4 className="text-xs font-bold text-stone-800 mb-0.5">Jadwal Teratur</h4>
                <p className="text-[10px] text-stone-400">Diadakan setiap akhir pekan di studio outlet kami.</p>
              </div>
              <div className="text-center sm:text-left">
                <Users className="w-5 h-5 text-peony-600 mb-2 mx-auto sm:mx-0" />
                <h4 className="text-xs font-bold text-stone-800 mb-0.5">Kelas Terbatas</h4>
                <p className="text-[10px] text-stone-400">Maksimal 8 peserta per sesi untuk sesi intim yang privat.</p>
              </div>
              <div className="text-center sm:text-left">
                <Award className="w-5 h-5 text-peony-600 mb-2 mx-auto sm:mx-0" />
                <h4 className="text-xs font-bold text-stone-800 mb-0.5">All-Inclusive</h4>
                <p className="text-[10px] text-stone-400">Semua peralatan dan bunga disediakan lengkap.</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square shadow-sm border border-peony-100 bg-[#fdfcfb]">
                <img 
                  src={img} 
                  alt={`Workshop Gallery ${i+1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Class Packages List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls, idx) => (
            <div 
              key={idx}
              className="bg-cream-50 rounded-3xl p-8 border border-peony-100/50 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="text-[9px] font-black text-peony-600 bg-peony-50 border border-peony-200/55 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {cls.level}
                    </span>
                    <h3 className="font-serif-lux text-xl sm:text-2xl font-bold text-stone-850 mt-2">
                      {cls.title}
                    </h3>
                  </div>
                  <span className="font-serif-lux text-lg sm:text-xl font-black text-peony-950 shrink-0">
                    {formatPrice(cls.price)}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 text-xs text-stone-500 border-t border-peony-200/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-stone-600">Jadwal:</span>
                    <span>{cls.date} ({cls.time})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-stone-600">Durasi:</span>
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex flex-col mt-2">
                    <span className="font-bold text-stone-600 mb-1">Materi & Fasilitas:</span>
                    <span className="leading-relaxed bg-white border border-peony-100/30 rounded-xl p-3 text-[11px]">
                      {cls.includes}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRegister(cls.title)}
                className="w-full py-3 bg-peony-950 hover:bg-peony-900 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-peony-600 fill-current" />
                Daftar Kelas Workshop
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workshop;
