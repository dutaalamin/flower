import React, { useState } from 'react';
import { X, ShoppingBag, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

const CheckoutModal = ({ isOpen, onClose, cart, clearCart }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    recipientName: '',
    deliveryAddress: '',
    deliveryDate: '',
    deliveryTime: '09:00 - 12:00',
    cardMessage: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate Order ID (BC-XXXXX)
    const orderId = `BC-${Math.floor(1000 + Math.random() * 9000)}`;

    // Build WhatsApp message content
    let message = `*BARU! PESANAN DARI WEBSITE*\n`;
    message += `*Order ID:* ${orderId}\n`;
    message += `===============================\n\n`;
    message += `*Detail Pemesan:*\n`;
    message += `- Nama: ${formData.customerName}\n`;
    message += `- No. WA: ${formData.customerPhone}\n\n`;
    message += `*Detail Penerima:*\n`;
    message += `- Nama Penerima: ${formData.recipientName}\n`;
    message += `- Alamat Pengiriman: ${formData.deliveryAddress}\n`;
    message += `- Tanggal Pengiriman: ${formData.deliveryDate}\n`;
    message += `- Jam Pengiriman: ${formData.deliveryTime}\n\n`;
    message += `*Isi Kartu Ucapan:*\n`;
    message += `_"${formData.cardMessage || '-'}"_\n\n`;
    message += `*Rincian Bunga:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}\n`;
      if (item.wrappingOption) {
        message += `   _wrapping: ${item.wrappingOption}_\n`;
      }
    });

    message += `\n===============================\n`;
    message += `*Subtotal:* *${formatPrice(subtotal)}*\n\n`;
    message += `Mohon bantu proses pesanan saya. Terima kasih!`;

    // Encode URL for WhatsApp (Bunga Cerita CS phone number +6287798765432)
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6287798765432&text=${encodedMessage}`;

    // Confetti effect!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    setIsSuccess(true);

    // Open WhatsApp link in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const handleFinishSuccess = () => {
    clearCart();
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={isSuccess ? undefined : onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-[#fdfcfb] rounded-3xl shadow-2xl border border-peony-100 overflow-hidden transform transition-all duration-300">
          
          {isSuccess ? (
            /* Success Screen */
            <div className="p-12 text-center flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-peony-50 rounded-full flex items-center justify-center text-peony-600 animate-bounce">
                <Send className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-serif-lux text-2xl sm:text-3xl font-black text-peony-950">
                  Membuka WhatsApp CS...
                </h3>
                <p className="text-stone-500 text-sm mt-2 max-w-md mx-auto">
                  Detail pesanan Anda sedang dikirimkan ke nomor WhatsApp kami. Mohon selesaikan proses konfirmasi dan pembayaran langsung di obrolan chat.
                </p>
              </div>
              <button
                onClick={handleFinishSuccess}
                className="mt-4 px-8 py-3 bg-peony-600 hover:bg-peony-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md shadow-peony-600/10 active:scale-95"
              >
                Selesai & Tutup
              </button>
            </div>
          ) : (
            /* Form Screen */
            <>
              {/* Header */}
              <div className="p-6 border-b border-peony-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-peony-600" />
                  <h3 className="font-serif-lux text-xl font-bold text-peony-950">Informasi Pengiriman</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-peony-50 text-stone-400 hover:text-peony-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 flex flex-col lg:flex-row gap-6">
                
                {/* Form Inputs (Left side) */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Customer Info */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-peony-600 mb-2">Data Pemesan</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Nama Pemesan</label>
                        <input 
                          type="text" 
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleInputChange}
                          required
                          placeholder="Nama lengkap Anda"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">No. WhatsApp</label>
                        <input 
                          type="tel" 
                          name="customerPhone"
                          value={formData.customerPhone}
                          onChange={handleInputChange}
                          required
                          placeholder="Contoh: 08123456789"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-peony-600 mb-2">Data Penerima & Jadwal</h4>
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Nama Penerima Bunga</label>
                        <input 
                          type="text" 
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          required
                          placeholder="Nama penerima hadiah/bunga"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Alamat Pengiriman Lengkap</label>
                        <textarea 
                          name="deliveryAddress"
                          value={formData.deliveryAddress}
                          onChange={handleInputChange}
                          required
                          rows="2"
                          placeholder="Jalan, nomor rumah, kelurahan, kecamatan, kota, patokan lokasi..."
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30 resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Tanggal Pengiriman</label>
                          <input 
                            type="date" 
                            name="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Waktu Pengiriman</label>
                          <select 
                            name="deliveryTime"
                            value={formData.deliveryTime}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30"
                          >
                            <option value="09:00 - 12:00">Pagi (09:00 - 12:00)</option>
                            <option value="12:00 - 15:00">Siang (12:00 - 15:00)</option>
                            <option value="15:00 - 18:00">Sore (15:00 - 18:00)</option>
                            <option value="18:00 - 21:00">Malam (18:00 - 21:00)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Ucapan Pada Kartu (Card Message)</label>
                    <textarea 
                      name="cardMessage"
                      value={formData.cardMessage}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Tulis ucapan selamat, duka cita, atau kata-kata romantis Anda di sini..."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30 resize-none"
                    />
                  </div>
                </div>

                {/* Right Side Order Summary */}
                <div className="w-full lg:w-64 bg-cream-100/50 rounded-2xl border border-peony-200/20 p-5 flex flex-col gap-4 justify-between">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-peony-950 border-b border-peony-200/20 pb-2 mb-3">Ringkasan Pembelian</h4>
                    <div className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div key={`${item.id}-${item.wrappingOption}`} className="text-xs flex justify-between gap-2">
                          <span className="text-stone-500 line-clamp-2">
                            {item.name} <span className="font-bold text-stone-700">x{item.quantity}</span>
                          </span>
                          <span className="font-semibold text-stone-850 shrink-0">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-peony-200/20 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Subtotal:</span>
                      <span className="font-serif-lux text-base sm:text-lg font-black text-peony-950">{formatPrice(subtotal)}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-peony-600 hover:bg-peony-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md shadow-peony-600/10 active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      Kirim ke WhatsApp
                    </button>
                  </div>
                </div>

              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
