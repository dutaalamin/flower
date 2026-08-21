import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/admin/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-[#fcfbfa] flex flex-col items-center justify-center p-6 z-50">
      
      {/* Back to Home Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 md:top-10 md:left-10 inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-[#1a6e4d] transition-colors group z-10"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="hidden sm:inline">Back to Store</span>
      </Link>

      <div className="w-full max-w-md z-10 relative">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl text-[#14422e] mb-2 font-bold">Admin Login</h1>
            <p className="text-stone-500 text-sm">Masuk untuk mengelola katalog Bunga Cerita</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5 pl-1">
                Email
              </label>
              <div className="relative group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d] bg-white transition-all placeholder:text-stone-300"
                  placeholder="admin@bungacerita.com"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-[#1a6e4d] transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5 pl-1">
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d] bg-white transition-all placeholder:text-stone-300"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-[#1a6e4d] transition-colors" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-6 bg-[#1a6e4d] hover:bg-[#14422e] text-white rounded-lg text-sm font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Login to Dashboard'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
