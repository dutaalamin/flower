import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Catalog from './components/Catalog';
import About from './components/About';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/Checkout';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import CartDrawer from './components/CartDrawer';

// Helper component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [showWaTooltip, setShowWaTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWaTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Cart Functions
  const handleAddToCart = (product, quantity = 1, wrappingOption = 'Default (Cocok Dengan Foto)') => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.wrappingOption === wrappingOption
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity, wrappingOption }];
      }
    });
  };

  const handleUpdateQuantity = (productId, wrappingOption, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId, wrappingOption);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.wrappingOption === wrappingOption
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId, wrappingOption) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.wrappingOption === wrappingOption))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };


  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-750 font-sans flex flex-col scroll-smooth">
      <ScrollToTop />

      {/* Sticky Header Navigation */}
      <Navbar 
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* Main Content Multi-Page Routes */}
      <main className="flex-1 w-full pt-0">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onAddToCart={handleAddToCart}
              />
            } 
          />
          <Route 
            path="/catalog" 
            element={
              <Catalog 
                onAddToCart={handleAddToCart}
                isPreview={false}
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                addToCart={handleAddToCart}
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckoutPage 
                cart={cart}
                clearCart={handleClearCart}
                updateQuantity={handleUpdateQuantity}
                removeFromCart={handleRemoveFromCart}
              />
            } 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/terms" 
            element={<TermsOfService />} 
          />
          {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        onCheckoutClick={() => {
          setCartOpen(false);
          navigate('/checkout');
        }}
      />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
        {/* Tooltip Bubble */}
        <div 
          className={`bg-white px-4 py-2 rounded-t-xl rounded-l-xl rounded-br-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] border border-stone-100 transition-all duration-500 origin-right hidden sm:block
            ${showWaTooltip ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0'}`}
        >
          <p className="text-[11px] font-raleway font-bold text-stone-700 tracking-wider uppercase">
            Order Now
          </p>
        </div>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-xl transition-transform hover:-translate-y-1 focus:outline-none flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <AppContent />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
