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
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl text-[#14422e] mb-2">Admin Login</h1>
          <p className="text-stone-500 text-sm">Masuk untuk mengelola katalog Bunga Cerita</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] bg-white transition-colors"
                placeholder="admin@bungacerita.com"
              />
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#1a6e4d] bg-white transition-colors"
                placeholder="••••••••"
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-[#1a6e4d] hover:bg-[#14422e] text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
