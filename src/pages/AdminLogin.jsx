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
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1a6e4d]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#1a6e4d]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back to Home Link (Top Left) */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 md:top-10 md:left-10 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-stone-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-[#1a6e4d] hover:bg-white shadow-sm transition-all group z-10"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="hidden sm:inline">Return to Store</span>
      </Link>

      <div className="w-full max-w-[440px] z-10 relative -mt-10">
        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-stone-200/50 border border-white p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl text-[#14422e] font-bold">Welcome Back</h1>
            <p className="text-stone-500 mt-2 text-sm">Please sign in to continue.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50/80 backdrop-blur text-red-600 text-sm rounded-2xl border border-red-100 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 pl-1">
                Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-4 focus:ring-[#1a6e4d]/10 bg-white/50 focus:bg-white transition-all placeholder:text-stone-300"
                  placeholder="name@example.com"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-[#1a6e4d] transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 pl-1">
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-4 focus:ring-[#1a6e4d]/10 bg-white/50 focus:bg-white transition-all placeholder:text-stone-300"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-[#1a6e4d] transition-colors" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-6 bg-[#1a6e4d] hover:bg-[#14422e] text-white rounded-2xl text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#1a6e4d]/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
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
