import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { LogOut, Plus, Trash2, Edit2, Package, ShoppingBag } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    category: 'Custom Medium',
    price: '',
    image: '',
    badge: '',
    description: ''
  });

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (session) {
      fetchData();
    }
  }, [session, activeTab]);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
    } else {
      setSession(session);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const fetchData = async () => {
    setLoading(true);
    if (activeTab === 'products') {
      const { data, error } = await supabase.from('products').select('*').order('id', { ascending: false });
      if (!error) setProducts(data);
    } else {
      const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      if (!error) setOrders(data);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ id: null, name: '', category: 'Custom Medium', price: '', image: '', badge: '', description: '' });
    setIsEditing(false);
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      await supabase.from('products').delete().eq('id', id);
      fetchData();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      image: formData.image,
      badge: formData.badge,
      description: formData.description
    };

    if (formData.id) {
      // Update
      await supabase.from('products').update(payload).eq('id', formData.id);
    } else {
      // Insert
      await supabase.from('products').insert([payload]);
    }
    
    resetForm();
    fetchData();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#fcfbfa]">
      {/* Navbar */}
      <nav className="bg-white border-b border-stone-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="font-playfair text-xl font-bold text-[#14422e]">Admin Dashboard</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => {setActiveTab('products'); resetForm();}}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${activeTab === 'products' ? 'bg-[#1a6e4d] text-white' : 'text-stone-500 hover:bg-stone-100'}`}
              >
                Products
              </button>
              <button 
                onClick={() => {setActiveTab('orders'); resetForm();}}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${activeTab === 'orders' ? 'bg-[#1a6e4d] text-white' : 'text-stone-500 hover:bg-stone-100'}`}
              >
                Orders
              </button>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-stone-500 hover:text-red-600 transition-colors text-sm font-semibold">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm sticky top-24">
                <h2 className="font-playfair text-xl text-[#14422e] mb-4">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:border-[#1a6e4d] focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Price</label>
                      <input type="number" name="price" required value={formData.price} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:border-[#1a6e4d] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Category</label>
                      <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:border-[#1a6e4d] focus:outline-none">
                        <option value="Custom Large">Custom Large</option>
                        <option value="Custom Medium">Custom Medium</option>
                        <option value="Custom Small">Custom Small</option>
                        <option value="Custom PO">Custom PO</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Image URL</label>
                    <input type="url" name="image" required value={formData.image} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:border-[#1a6e4d] focus:outline-none" placeholder="https://..." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Badge (Optional)</label>
                    <input type="text" name="badge" value={formData.badge} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:border-[#1a6e4d] focus:outline-none" placeholder="e.g. Best Seller" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Description</label>
                    <textarea name="description" rows="3" required value={formData.description} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:border-[#1a6e4d] focus:outline-none"></textarea>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="submit" className="flex-1 py-2.5 bg-[#1a6e4d] text-white rounded-lg text-sm font-semibold hover:bg-[#14422e] transition-colors">
                      {isEditing ? 'Update Product' : 'Add Product'}
                    </button>
                    {isEditing && (
                      <button type="button" onClick={resetForm} className="px-4 py-2.5 bg-stone-100 text-stone-600 rounded-lg text-sm font-semibold hover:bg-stone-200 transition-colors">
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <h2 className="font-playfair text-xl text-[#14422e] mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#1a6e4d]" /> All Products
                </h2>
                {loading ? (
                  <p className="text-stone-400 text-sm">Loading products...</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-stone-100 text-stone-400">
                          <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Product</th>
                          <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Category</th>
                          <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Price</th>
                          <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-50">
                        {products.map(p => (
                          <tr key={p.id} className="group hover:bg-stone-50 transition-colors">
                            <td className="py-3">
                              <div className="flex items-center gap-3">
                                <img src={p.image} alt={p.name} className="w-10 h-10 rounded object-cover" />
                                <div>
                                  <p className="font-semibold text-stone-800">{p.name}</p>
                                  {p.badge && <span className="text-[9px] px-1.5 py-0.5 bg-rose-50 text-rose-600 rounded mt-0.5 inline-block uppercase font-bold">{p.badge}</span>}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 text-stone-600">{p.category}</td>
                            <td className="py-3 font-medium text-stone-800">{formatPrice(p.price)}</td>
                            <td className="py-3 text-right">
                              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(p)} className="p-1.5 text-stone-400 hover:text-blue-600 transition-colors" title="Edit">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete(p.id)} className="p-1.5 text-stone-400 hover:text-red-600 transition-colors" title="Delete">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {products.length === 0 && (
                          <tr><td colSpan="4" className="py-4 text-center text-stone-400">No products found.</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
            <h2 className="font-playfair text-xl text-[#14422e] mb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1a6e4d]" /> Transaction History
            </h2>
            {loading ? (
              <p className="text-stone-400 text-sm">Loading orders...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-stone-100 text-stone-400">
                      <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Date & Order ID</th>
                      <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Customer</th>
                      <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Delivery Details</th>
                      <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider">Items</th>
                      <th className="pb-3 font-semibold uppercase text-[10px] tracking-wider text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {orders.map(o => (
                      <tr key={o.id} className="hover:bg-stone-50 transition-colors">
                        <td className="py-4 align-top">
                          <p className="font-semibold text-stone-800">{o.order_id}</p>
                          <p className="text-xs text-stone-500 mt-1">{formatDate(o.created_at)}</p>
                        </td>
                        <td className="py-4 align-top">
                          <p className="font-medium text-stone-800">{o.customer_name}</p>
                          <p className="text-xs text-stone-500">{o.customer_phone}</p>
                        </td>
                        <td className="py-4 align-top max-w-xs">
                          <p className="font-medium text-stone-800">To: {o.recipient_name}</p>
                          <p className="text-xs text-stone-500 truncate" title={o.delivery_address}>{o.delivery_address}</p>
                          <p className="text-xs text-stone-500 mt-1 font-semibold">{o.delivery_date} ({o.delivery_time})</p>
                        </td>
                        <td className="py-4 align-top">
                          <ul className="text-xs text-stone-600 space-y-1">
                            {o.items.map((item, idx) => (
                              <li key={idx}>- {item.name} ({item.quantity}x)</li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-4 align-top text-right font-bold text-[#1a6e4d]">
                          {formatPrice(o.subtotal)}
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr><td colSpan="5" className="py-8 text-center text-stone-400">No transactions recorded yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
