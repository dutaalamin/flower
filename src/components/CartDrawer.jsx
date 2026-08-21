import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, onCheckoutClick }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay */}
      <div 
        className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#fdfcfb] shadow-2xl border-l border-peony-100 flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="p-6 border-b border-peony-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-peony-950">
            <ShoppingBag className="w-5.5 h-5.5 text-peony-600" />
            <h2 className="font-serif-lux text-xl font-bold">Keranjang Belanja</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-peony-50 text-stone-400 hover:text-peony-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-12">
              <div className="w-16 h-16 rounded-full bg-peony-50 flex items-center justify-center text-peony-300">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="font-serif-lux text-lg font-bold text-stone-700">Keranjang Kosong</p>
                <p className="text-xs text-stone-400 max-w-xs mt-1">Anda belum menambahkan bunga ke keranjang belanja Anda.</p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-peony-600 hover:bg-peony-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md shadow-peony-600/10 active:scale-95"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.wrappingOption}`} className="flex gap-4 p-3 bg-white rounded-xl border border-peony-200/20 shadow-xs relative group">
                {/* Product Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-50 border border-stone-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h3 className="font-serif-lux text-sm sm:text-base font-bold text-stone-800 line-clamp-1 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider mt-0.5">
                      {item.category}
                    </p>
                    {item.wrappingOption && (
                      <p className="text-[10px] text-peony-600 font-bold bg-peony-50 border border-peony-100/30 rounded-md px-1.5 py-0.5 mt-1 inline-block">
                        Wrapping: {item.wrappingOption}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Price */}
                    <span className="text-xs sm:text-sm font-black text-peony-950">
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center bg-stone-50 rounded-full border border-stone-100 px-1 py-0.5">
                      <button 
                        onClick={() => updateQuantity(item.id, item.wrappingOption, item.quantity - 1)}
                        className="p-1 rounded-full text-stone-500 hover:text-peony-600 hover:bg-white transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-stone-700 min-w-4 text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.wrappingOption, item.quantity + 1)}
                        className="p-1 rounded-full text-stone-500 hover:text-peony-600 hover:bg-white transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id, item.wrappingOption)}
                  className="absolute top-2 right-2 p-1 text-stone-300 hover:text-rose-600 rounded-full hover:bg-rose-50 opacity-0 group-hover:opacity-100 transition-all focus:outline-none"
                  aria-label="Hapus Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-peony-100 bg-cream-50 flex flex-col gap-4">
            <div className="flex items-center justify-between text-stone-700">
              <span className="text-xs uppercase tracking-wider font-bold text-stone-400">Total Belanja:</span>
              <span className="font-serif-lux text-xl font-black text-peony-950">{formatPrice(subtotal)}</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <button
                onClick={onCheckoutClick}
                className="w-full py-3.5 bg-peony-600 hover:bg-peony-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-peony-600/10 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                Pesan via WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-white border border-stone-200 text-stone-600 hover:text-stone-850 hover:bg-stone-50 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 active:scale-95 text-center"
              >
                Lanjutkan Belanja
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
