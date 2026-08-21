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
    <div className="fixed inset-0 bg-[#fcfbfa] flex flex-col items-center justify-center p-6 overflow-hidden z-50">
      
      {/* Back to Home Link (Top Left) */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 md:top-10 md:left-10 inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-[#1a6e4d] hover:bg-white shadow-sm transition-all group z-10"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="hidden sm:inline">Return to Store</span>
      </Link>

      <div className="w-full max-w-[540px] z-10 relative">
        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-stone-100 p-10 sm:p-14">
          <div className="text-center mb-10">
            <h1 className="font-playfair text-4xl text-[#14422e] font-bold tracking-tight">Welcome Back</h1>
            <p className="text-stone-500 mt-3 text-base">Please sign in to continue.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm rounded-2xl border border-red-100 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-2.5 pl-1">
                Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 rounded-2xl border border-stone-200 text-base focus:outline-none focus:border-[#1a6e4d] focus:ring-4 focus:ring-[#1a6e4d]/10 bg-[#fcfbfa] focus:bg-white transition-all placeholder:text-stone-300"
                  placeholder="name@example.com"
                />
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-[#1a6e4d] transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-2.5 pl-1">
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 rounded-2xl border border-stone-200 text-base focus:outline-none focus:border-[#1a6e4d] focus:ring-4 focus:ring-[#1a6e4d]/10 bg-[#fcfbfa] focus:bg-white transition-all placeholder:text-stone-300"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-[#1a6e4d] transition-colors" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 mt-8 bg-[#1a6e4d] hover:bg-[#14422e] text-white rounded-2xl text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-[#1a6e4d]/25 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowLeft className="w-4 h-4 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
