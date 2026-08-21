import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'About Us', path: '/about' }
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 no-print bg-white border-b border-stone-150/80 py-3 px-6 sm:px-16 shadow-2xs">
        <div className="relative max-w-7xl mx-auto flex items-center justify-between">

          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center group focus:outline-none shrink-0"
          >
            <span className="font-playfair text-2xl sm:text-3xl font-bold tracking-tight text-[#1a6e4d] lowercase leading-none mt-1">
              bunga cerita
            </span>
          </Link>

          {/* Center Navigation — Desktop */}
          <nav className="hidden lg:flex items-center gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 py-2 text-[11px] sm:text-[12px] font-poppins font-medium uppercase tracking-wider transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-peony-600 font-bold'
                      : 'text-stone-500 hover:text-peony-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions — Admin + Cart + Order CTA */}
          <div className="flex items-center gap-3.5">

            <Link
              to="/admin/dashboard"
              className="p-2.5 rounded-full hover:bg-peony-50 text-stone-700 hover:text-peony-600 transition-colors focus:outline-none"
              aria-label="Admin Dashboard"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-full hover:bg-peony-50 text-stone-700 hover:text-peony-600 transition-colors focus:outline-none"
              aria-label="Keranjang Belanja"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-peony-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now CTA Button */}
            <Link
              to="/catalog"
              className="hidden sm:inline-flex px-6 py-2.5 bg-peony-600 hover:bg-peony-700 text-white text-[11px] font-raleway font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-200 shadow-md shadow-peony-600/10 active:scale-95"
            >
              Order Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-stone-50 text-stone-600 hover:text-peony-600 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-30 w-72 bg-white border-l border-stone-100 shadow-2xl p-8 lg:hidden transform transition-transform duration-500 ease-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-8 h-full justify-between pt-16">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-left px-5 py-2.5 rounded-xl text-[11px] font-poppins font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-peony-50 text-peony-600 font-bold'
                      : 'text-stone-600 hover:text-peony-950 hover:bg-stone-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              to="/catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-2.5 bg-peony-600 hover:bg-peony-700 text-white text-[11px] font-raleway font-bold uppercase tracking-[0.15em] rounded-full transition-all text-center"
            >
              Order Now
            </Link>
          </div>

          <div className="border-t border-stone-100 pt-6">
            <p className="text-[10px] font-medium text-stone-400 tracking-wider text-center">
              Bunga Cerita &copy; 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
