import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ShoppingCart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const CATEGORIES = ['All', 'Custom Large', 'Custom Medium', 'Custom Small', 'Non-Floral', 'Custom PO'];

const Catalog = ({ onProductSelect, onAddToCart, isPreview = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
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

    // Sort By logic
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    if (isPreview) {
      result = result.slice(0, 8);
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortBy, isPreview]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fcfbfa]" id="catalog">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">

        {/* Header */}
        {isPreview ? (
          <div className="flex items-end justify-between mb-8 max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl text-[#4a4543]">
              Customer <span className="italic text-[#993f45]">Favorites</span>
            </h2>
            <Link to="/catalog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#993f45] hover:text-[#7a3237] transition-colors pb-1">
              See All Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-serif-lux text-2xl sm:text-3xl lg:text-4xl text-peony-950 font-bold leading-snug">
              Full Catalog
            </h2>
          </div>
        )}

        {!isPreview && (
          <>
            {/* Search & Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto mb-8">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search flowers or products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-peony-600 bg-white transition-colors shadow-2xs"
                />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
                <SlidersHorizontal className="w-4 h-4 text-stone-500" />
                <span className="text-xs text-stone-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 rounded-full border border-stone-200 text-xs font-semibold focus:outline-none focus:border-peony-600 bg-white shadow-2xs cursor-pointer text-stone-700 hover:border-stone-300"
                >
                  <option value="popular">Popularity</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category filter — clean text tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-peony-950 text-white shadow-sm'
                      : 'bg-white border border-stone-200 text-stone-600 hover:text-peony-950 hover:border-stone-300'
                  }`}
                >
                  {cat === 'All' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-stone-500 text-sm mb-4">No products found.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSortBy('popular'); }}
              className="px-5 py-2 bg-peony-950 text-white text-xs font-semibold rounded-full hover:bg-peony-900 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-stone-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
                onClick={() => onProductSelect(product)}
              >
                <div>
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-peony-950 text-white text-[9px] font-bold tracking-wider uppercase shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5">
                    <p className="text-[10px] sm:text-xs font-semibold text-stone-500 mb-1.5">
                      {product.name}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-stone-400 mb-2">
                      {product.category}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 sm:pb-5 mt-auto flex items-center justify-between">
                  <p className="text-sm sm:text-base font-medium text-[#993f45]">
                    {formatPrice(product.price)}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, 1, 'Default (As pictured)');
                    }}
                    className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-200"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
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
