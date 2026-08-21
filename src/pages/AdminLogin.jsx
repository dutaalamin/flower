import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Lock, Mail, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen bg-[#fcfbfa] flex items-center justify-center px-6">
      <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 p-10 sm:p-12 -mt-24">
        <div className="text-center mb-10">
          <h1 className="font-playfair text-4xl text-[#14422e] mb-3 font-bold">Admin Login</h1>
          <p className="text-stone-500 text-sm sm:text-base">Masuk untuk mengelola katalog Bunga Cerita</p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d] bg-white transition-all"
                placeholder="admin@bungacerita.com"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] focus:ring-1 focus:ring-[#1a6e4d] bg-white transition-all"
                placeholder="••••••••"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-8 bg-[#1a6e4d] hover:bg-[#14422e] text-white rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#1a6e4d]/20 hover:shadow-xl active:scale-[0.98] flex items-center justify-center"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
