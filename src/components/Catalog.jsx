import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, RotateCcw, ShoppingCart, ArrowRight, Eye, Plus } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const CATEGORIES = ['All', 'Custom Large', 'Custom Medium', 'Custom Small', 'Custom PO'];

const Catalog = ({ onAddToCart, isPreview = false }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    const handleFilterEvent = (e) => {
      if (e.detail && CATEGORIES.includes(e.detail)) {
        setSelectedCategory(e.detail);
      }
    };
    window.addEventListener('filter-category', handleFilterEvent);
    return () => window.removeEventListener('filter-category', handleFilterEvent);
  }, []);

  useEffect(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    if (minPrice !== '') {
      result = result.filter(p => p.price >= Number(minPrice));
    }

    if (maxPrice !== '') {
      const maxVal = Number(maxPrice);
      const minVal = minPrice !== '' ? Number(minPrice) : 0;
      // Only apply max price filter if the user has typed a number that is greater than or equal to minPrice,
      // or if it's a reasonably large number (to prevent filtering while user is typing e.g. "1", "10", "100")
      if (maxVal >= minVal || maxVal >= 10000) {
        result = result.filter(p => p.price <= maxVal);
      }
    }

    // Sort By logic
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else {
      // Default fallback (if no sorting is selected or 'Default' option is active)
      // Sort from lowest price to highest price by default
      result.sort((a, b) => a.price - b.price);
    }

    if (isPreview) {
      result = result.slice(0, 8);
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortBy, minPrice, maxPrice, isPreview]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderPrice = (product) => {
    if (product.category === 'Custom PO' || product.price === 0) {
      return 'Start From Rp 0';
    }
    return formatPrice(product.price);
  };

  return (
    <section className="py-0 bg-[#fcfbfa]" id="catalog">
      {/* Header Banner - Matches screenshot style */}
      {isPreview ? (
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-16 pb-8 flex items-end justify-between w-full">
          <h2 className="font-playfair text-3xl sm:text-4xl text-[#4a4543]">
            Customer <span className="italic text-[#1a6e4d]">Favorites</span>
          </h2>
          <Link to="/catalog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a6e4d] hover:text-[#14422e] transition-colors pb-1">
            See All Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="relative py-16 text-center overflow-hidden border-b border-stone-100 bg-[#fcfbfa] mb-12">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Catalog of <span className="italic font-serif text-[#1a6e4d]">Bunga Cerita</span>
            </h1>
            <p className="font-raleway text-xs text-stone-400 mt-3 tracking-widest uppercase">
              telling stories through flowers
            </p>
          </div>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 pb-24">
        {/* Filters Row - Exactly matching the screenshot */}
        {!isPreview && (
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 items-end">
              
              {/* Search */}
              <div className="col-span-12 lg:col-span-3 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Search
                </span>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d]/10 bg-white text-stone-850 transition-all placeholder-stone-400"
                  />
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                </div>
              </div>

              {/* Category */}
              <div className="col-span-12 sm:col-span-1 lg:col-span-3 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Category
                </span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] bg-white text-stone-700 cursor-pointer transition-all"
                >
                  <option value="All">All Products</option>
                  {CATEGORIES.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Min Price */}
              <div className="col-span-6 sm:col-span-1 lg:col-span-2 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Min Price
                </span>
                <input
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.target.blur();
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] bg-white text-stone-850 transition-all placeholder-stone-400"
                />
              </div>

              {/* Max Price */}
              <div className="col-span-6 sm:col-span-1 lg:col-span-2 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Max Price
                </span>
                <input
                  type="number"
                  placeholder="Maks"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.target.blur();
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] bg-white text-stone-850 transition-all placeholder-stone-400"
                />
              </div>

              {/* Sort By */}
              <div className="col-span-12 sm:col-span-1 lg:col-span-2 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Sort By
                </span>
                <div className="flex gap-2 w-full">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] bg-white text-stone-700 cursor-pointer transition-all"
                  >
                    <option value="price-asc">Default (Low to High)</option>
                    <option value="popular">Popularity</option>
                    <option value="newest">Newest</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  
                  {/* Reset Button */}
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                      setMinPrice('');
                      setMaxPrice('');
                      setSortBy('price-asc');
                    }}
                    type="button"
                    title="Reset Filters"
                    className="p-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg transition-colors flex items-center justify-center shrink-0"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-stone-500 text-sm mb-4">No products found matching filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setMinPrice(''); setMaxPrice(''); setSortBy('price-asc'); }}
              className="px-6 py-2.5 bg-[#1a6e4d] hover:bg-[#14422e] text-white text-xs font-semibold rounded-full transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-stone-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div>
                  {/* Image wrapper - stretches full width with 4:5 portrait ratio */}
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {product.badge && (
                      <span className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-[#1a6e4d] text-white text-[9px] font-bold tracking-wider uppercase shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    {/* Floating Action Button (Plus) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product, 1, 'Default (As pictured)');
                      }}
                      className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-[#1a6e4d] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5 flex flex-col gap-1">
                    <span className="text-[9px] sm:text-[10px] text-stone-400 font-semibold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-raleway text-sm font-bold text-stone-850 line-clamp-1 group-hover:text-[#1a6e4d] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-stone-500 leading-relaxed line-clamp-2 mt-0.5">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Price section - styled neatly at bottom */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 mt-auto flex items-center justify-between">
                  <p className="text-sm sm:text-base font-semibold text-[#1a6e4d]">
                    {renderPrice(product)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
