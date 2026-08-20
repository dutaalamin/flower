import React, { useState, useEffect } from 'react';
import { X, Star, ShoppingBag, Ruler, Flower, HelpCircle } from 'lucide-react';

const ProductDetailModal = ({ product, isOpen, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [wrappingOption, setWrappingOption] = useState('Default (Cocok Dengan Foto)');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setWrappingOption('Default (Cocok Dengan Foto)');
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const wrappingOptions = [
    'Default (Cocok Dengan Foto)',
    'Korean Style Soft Pink Paper',
    'Korean Style Frosty White Paper',
    'Rustic Brown Jute Paper',
    'Luxury Deep Black Paper',
    'Minimalist Clear Cellulose Wrap'
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, wrappingOption);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-[#fdfcfb] rounded-3xl shadow-2xl border border-peony-100 overflow-hidden transform transition-all duration-300 flex flex-col md:flex-row">
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 hover:bg-peony-50 text-stone-500 hover:text-peony-600 transition-colors shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Section */}
          <div className="w-full md:w-1/2 relative bg-stone-50 aspect-square md:aspect-auto md:min-h-[500px]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-peony-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Detail Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between max-h-[550px] overflow-y-auto md:max-h-none">
            <div className="flex flex-col gap-5">
              
              {/* Title & Category */}
              <div>
                <p className="text-[10px] font-black text-peony-600 uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif-lux text-2xl sm:text-3xl font-black text-peony-950 leading-tight">
                  {product.name}
                </h3>
                
                {/* Rating & Reviews */}
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-xs font-black text-stone-700">{product.rating}</span>
                  <span className="text-stone-300 text-xs">|</span>
                  <span className="text-xs font-semibold text-stone-400">({product.reviews} ulasan pembeli)</span>
                </div>
              </div>

              {/* Price */}
              <div className="font-serif-lux text-2xl font-black text-peony-950">
                {formatPrice(product.price)}
              </div>

              {/* Description */}
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed border-t border-peony-200/20 pt-4">
                {product.description}
              </p>

              {/* Specs */}
              <div className="bg-cream-100/50 rounded-2xl border border-peony-200/10 p-4 flex flex-col gap-2.5 text-xs">
                <div className="flex gap-2">
                  <Flower className="w-4.5 h-4.5 text-peony-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-600 block">Rangkaian Bunga:</span>
                    <span className="text-stone-500">{product.details?.flowers || '-'}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Ruler className="w-4.5 h-4.5 text-peony-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-600 block">Ukuran Dimensi:</span>
                    <span className="text-stone-500">{product.details?.size || '-'}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-peony-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-600 block">Cara Perawatan:</span>
                    <span className="text-stone-500">{product.details?.care || '-'}</span>
                  </div>
                </div>
              </div>

              {/* Options Form */}
              <div className="flex flex-col gap-4 border-t border-peony-200/20 pt-4">
                {/* Wrapping Paper Option */}
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5">
                    Gaya Wrapping Kertas Buket
                  </label>
                  <select
                    value={wrappingOption}
                    onChange={(e) => setWrappingOption(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-peony-600 focus:ring-1 focus:ring-peony-600/20 bg-stone-50/30"
                  >
                    {wrappingOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* CTA Buy Buttons */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-peony-200/20">
              {/* Quantity Selector */}
              <div className="flex items-center border border-stone-200 rounded-full px-2 py-1 bg-stone-50/50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white text-stone-500 hover:text-peony-600 shadow-xs flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-black text-stone-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white text-stone-500 hover:text-peony-600 shadow-xs flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-peony-600 hover:bg-peony-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-peony-600/10 active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Tambah ke Keranjang
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
