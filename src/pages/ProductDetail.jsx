import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, Truck, ShieldCheck, Heart, Plus } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [wrappingOption, setWrappingOption] = useState('Default (As pictured)');

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setWrappingOption('Default (As pictured)');
  }, [id]);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-stone-500 mb-4">Product not found.</p>
        <button
          onClick={() => navigate('/catalog')}
          className="px-6 py-2 bg-[#1a6e4d] text-white rounded-full text-xs font-semibold"
        >
          Back to Catalog
        </button>
      </div>
    );
  }

  const wrappingOptions = [
    'Default (As pictured)',
    'Korean Style Soft Pink Paper',
    'Korean Style Frosty White Paper',
    'Rustic Brown Jute Paper',
    'Luxury Deep Black Paper',
    'Minimalist Clear Wrap'
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
  };

  return (
    <section className="bg-[#fcfbfa] min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/catalog')}
          className="inline-flex items-center gap-1.5 text-stone-500 hover:text-[#1a6e4d] text-xs font-semibold uppercase tracking-wider mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Catalog
        </button>

        {/* Product Split Section */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-stretch">
          
          {/* Image (Left) */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200/40 relative bg-stone-100 aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1a6e4d] text-white text-[9px] font-bold tracking-wider uppercase shadow-xs">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details (Right) */}
          <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] text-[#1a6e4d] font-bold uppercase tracking-widest block mb-1.5">
                  {product.category}
                </span>
                <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#14422e] leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="text-2xl sm:text-3xl font-bold text-[#1a6e4d]">
                {formatPrice(product.price)}
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600 w-full">
                {product.details?.flowers && (
                  <div>
                    <span className="font-bold text-stone-500 uppercase tracking-wider block mb-1">Arrangement</span>
                    <p className="leading-relaxed">{product.details.flowers}</p>
                  </div>
                )}
                {product.details?.size && (
                  <div>
                    <span className="font-bold text-stone-500 uppercase tracking-wider block mb-1">Dimensions</span>
                    <p className="leading-relaxed">{product.details.size}</p>
                  </div>
                )}
                {product.details?.care && (
                  <div>
                    <span className="font-bold text-stone-500 uppercase tracking-wider block mb-1">Care Guide</span>
                    <p className="leading-relaxed">{product.details.care}</p>
                  </div>
                )}
              </div>

              {/* Trust Badges - Grid style with circular icon backgrounds */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-3 mt-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-stone-600">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-stone-600">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-stone-600">Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Options & Action Form */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Select Wrapping Style
                </label>
                <select
                  value={wrappingOption}
                  onChange={(e) => setWrappingOption(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d]/20 bg-white text-stone-700 transition-all cursor-pointer"
                >
                  {wrappingOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Selector & Add Button */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-200 rounded-full px-2 py-1 bg-stone-50/50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-white text-stone-500 hover:text-[#1a6e4d] shadow-xs flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-xs font-bold text-stone-700">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white text-stone-500 hover:text-[#1a6e4d] shadow-xs flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-[#1a6e4d] hover:bg-[#14422e] text-white font-raleway font-bold text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add To Cart
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Section */}
        <div className="mt-20 pt-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[10px] text-[#1a6e4d] font-bold uppercase tracking-widest block mb-1">
                Other Choices
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#14422e]">
                Related <span className="italic text-[#1a6e4d]">Products</span>
              </h2>
            </div>
            <button
              onClick={() => navigate('/catalog')}
              className="text-[#1a6e4d] hover:text-[#14422e] text-xs font-bold uppercase tracking-wider transition-colors pb-0.5 border-b border-transparent hover:border-[#14422e]"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-xl border border-stone-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {p.badge && (
                      <span className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-[#1a6e4d] text-white text-[9px] font-bold tracking-wider uppercase shadow-xs">
                        {p.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p, 1, 'Default (As pictured)');
                      }}
                      className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-[#1a6e4d] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col gap-1">
                    <span className="text-[9px] sm:text-[10px] text-stone-400 font-semibold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="font-raleway text-sm font-bold text-stone-850 line-clamp-1 group-hover:text-[#1a6e4d] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-stone-500 leading-relaxed line-clamp-2 mt-0.5">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 mt-auto flex items-center justify-between">
                  <p className="text-sm sm:text-base font-semibold text-[#1a6e4d]">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(p.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetail;
