import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ShoppingBag, Send, ChevronLeft, Minus, Plus, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const CheckoutPage = ({ cart, clearCart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    recipientName: '',
    deliveryAddress: '',
    deliveryDate: getTodayDateString(),
    deliveryTime: '09:00 - 12:00',
    cardMessage: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate Order ID (BC-XXXXX)
    const orderId = `BC-${Math.floor(1000 + Math.random() * 9000)}`;

    // Format date nicely to Indonesian format (e.g., 21 Agustus 2026)
    const formatDateIndo = (dateStr) => {
      if (!dateStr) return '-';
      const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      try {
        const parts = dateStr.split('-');
        const year = parts[0];
        const monthIndex = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        return `${day} ${months[monthIndex]} ${year}`;
      } catch (err) {
        return dateStr;
      }
    };

    // Build WhatsApp message content
    let message = `*NEW ORDER FROM WEBSITE*\n`;
    message += `*Order ID:* ${orderId}\n`;
    message += `===============================\n\n`;
    message += `*Customer Details:*\n`;
    message += `- Name: ${formData.customerName}\n`;
    message += `- WhatsApp: ${formData.customerPhone}\n\n`;
    message += `*Recipient Details:*\n`;
    message += `- Recipient Name: ${formData.recipientName}\n`;
    message += `- Delivery Address: ${formData.deliveryAddress}\n`;
    message += `- Delivery Date: ${formatDateIndo(formData.deliveryDate)}\n`;
    message += `- Delivery Time: ${formData.deliveryTime}\n\n`;
    message += `*Card Message:*\n`;
    message += `_"${formData.cardMessage || '-'}"_\n\n`;
    message += `*Order Items:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}\n`;
      if (item.wrappingOption) {
        message += `   _wrapping: ${item.wrappingOption}_\n`;
      }
    });

    message += `\n===============================\n`;
    message += `*Subtotal:* *${formatPrice(subtotal)}*\n\n`;
    message += `Please help process my order. Thank you!`;

    // Encode URL for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6287798765432&text=${encodedMessage}`;

    // Insert order to Supabase
    setIsSubmitting(true);
    try {
      await supabase.from('orders').insert([{
        order_id: orderId,
        customer_name: formData.customerName,
        customer_phone: formData.customerPhone,
        recipient_name: formData.recipientName,
        delivery_address: formData.deliveryAddress,
        delivery_date: formData.deliveryDate,
        delivery_time: formData.deliveryTime,
        card_message: formData.cardMessage,
        items: cart,
        subtotal: subtotal
      }]);
    } catch (err) {
      console.error("Error logging order to Supabase", err);
    }
    setIsSubmitting(false);

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
    navigate('/catalog');
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="py-20 text-center bg-[#fcfbfa] min-h-screen">
        <p className="text-stone-500 mb-4">Your cart is empty.</p>
        <button
          onClick={() => navigate('/catalog')}
          className="px-6 py-2.5 bg-[#1a6e4d] text-white rounded-full text-xs font-semibold"
        >
          Go to Catalog
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d]/20 bg-white text-stone-700 transition-all placeholder-stone-400";
  const labelClass = "block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5";

  return (
    <section className="bg-[#fcfbfa] min-h-screen py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-stone-500 hover:text-[#1a6e4d] text-xs font-semibold uppercase tracking-wider mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <div className="relative w-full bg-[#fcfbfa] rounded-2xl border border-stone-200/50 overflow-hidden shadow-sm">
          
          {isSuccess ? (
            /* Success Screen */
            <div className="p-12 text-center flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-[#f2f7f5] rounded-full flex items-center justify-center text-[#1a6e4d] animate-bounce">
                <Send className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#14422e]">
                  Opening WhatsApp...
                </h3>
                <p className="text-stone-500 text-sm mt-2 max-w-md mx-auto">
                  Your order details are being sent to our WhatsApp. Please complete the confirmation and payment directly in the chat.
                </p>
              </div>
              <button
                onClick={handleFinishSuccess}
                className="mt-4 px-8 py-3 bg-[#1a6e4d] hover:bg-[#14422e] text-white font-raleway font-bold text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md active:scale-95"
              >
                Done & Go to Catalog
              </button>
            </div>
          ) : (
            /* Form Screen */
            <>
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-stone-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#1a6e4d]" />
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#14422e]">Shipping Information</h3>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col lg:flex-row gap-8">
                
                {/* Form Inputs (Left side) */}
                <div className="flex-1 flex flex-col gap-5">
                  {/* Customer Info */}
                  <div>
                    <h4 className="text-[11px] font-raleway font-bold uppercase tracking-[0.15em] text-[#1a6e4d] mb-3">Customer Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Your Name</label>
                        <input 
                          type="text" 
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleInputChange}
                          required
                          placeholder="Full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>WhatsApp Number</label>
                        <input 
                          type="tel" 
                          name="customerPhone"
                          value={formData.customerPhone}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. 08123456789"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div>
                    <h4 className="text-[11px] font-raleway font-bold uppercase tracking-[0.15em] text-[#1a6e4d] mb-3">Recipient & Schedule</h4>
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className={labelClass}>Recipient Name</label>
                        <input 
                          type="text" 
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          required
                          placeholder="Name of the person receiving the bouquet"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Full Delivery Address</label>
                        <textarea 
                          name="deliveryAddress"
                          value={formData.deliveryAddress}
                          onChange={handleInputChange}
                          required
                          rows="2"
                          placeholder="Street, house number, district, city, landmark..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>Delivery Date</label>
                          <input 
                            type="date" 
                            name="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleInputChange}
                            required
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Delivery Time</label>
                          <select 
                            name="deliveryTime"
                            value={formData.deliveryTime}
                            onChange={handleInputChange}
                            required
                            className={inputClass}
                          >
                            <option value="09:00 - 12:00">Morning (09:00 - 12:00)</option>
                            <option value="12:00 - 15:00">Afternoon (12:00 - 15:00)</option>
                            <option value="15:00 - 18:00">Evening (15:00 - 18:00)</option>
                            <option value="18:00 - 21:00">Night (18:00 - 21:00)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Message */}
                  <div>
                    <label className={labelClass}>Card Message (Optional)</label>
                    <textarea 
                      name="cardMessage"
                      value={formData.cardMessage}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Write a greeting, congratulations, or a heartfelt message here..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* Right Side Order Summary */}
                <div className="w-full lg:w-96 bg-[#f2f7f5] rounded-xl border border-stone-200/40 p-6 flex flex-col gap-5 justify-between h-fit self-start">
                  <div>
                    <h4 className="text-[12px] font-raleway font-bold uppercase tracking-[0.15em] text-[#14422e] border-b border-stone-200/40 pb-2.5 mb-4">Order Summary</h4>
                    <div className="flex flex-col gap-4 max-h-[30rem] overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div key={`${item.id}-${item.wrappingOption}`} className="text-xs flex gap-4 border-b border-stone-200/20 pb-4 last:border-0 last:pb-0 items-start">
                          {/* Product Thumbnail */}
                          <div className="w-16 h-20 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200/40 aspect-[4/5]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1 flex flex-col min-h-[3.75rem]">
                            <div>
                              <span className="text-stone-750 font-bold leading-tight block">
                                {item.name}
                              </span>
                              <span className="text-[10px] text-stone-400 block mt-0.5">
                                Wrapping: {item.wrappingOption.split(' (')[0]}
                              </span>
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-1">
                              {/* Quantity Controls */}
                              <div className="flex items-center bg-white rounded-full border border-stone-200 px-1 py-0.5 shadow-sm scale-90 origin-left">
                                <button 
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.wrappingOption, item.quantity - 1)}
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-stone-500 hover:text-[#1a6e4d] hover:bg-stone-50 transition-colors font-bold text-xs"
                                >
                                  -
                                </button>
                                <span className="px-2 text-[11px] font-bold text-stone-700 min-w-[12px] text-center">
                                  {item.quantity}
                                </span>
                                <button 
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.wrappingOption, item.quantity + 1)}
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-stone-500 hover:text-[#1a6e4d] hover:bg-stone-50 transition-colors font-bold text-xs"
                                >
                                  +
                                </button>
                              </div>

                              <span className="font-semibold text-[#14422e]">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-stone-200/40 pt-4 mt-2">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Subtotal:</span>
                      <span className="font-playfair text-base sm:text-lg font-bold text-[#14422e]">{formatPrice(subtotal)}</span>
                    </div>

                      <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#1a6e4d] hover:bg-[#14422e] text-white font-raleway font-bold text-[11px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Send to WhatsApp
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
