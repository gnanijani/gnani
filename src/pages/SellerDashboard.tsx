import React, { useState } from 'react';
import { Plus, Package, TrendingUp, Users, Star, Edit, Trash2, Eye } from 'lucide-react';
import { mockProducts } from '../data/mockData';

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sellerProducts = mockProducts.filter(product => 
    product.seller.name === 'Grandma\'s Kitchen' || 
    product.seller.name === 'Punjab Foods'
  );

  const stats = {
    totalProducts: sellerProducts.length,
    totalOrders: 47,
    totalRevenue: 12450,
    averageRating: 4.7
  };

  const recentOrders = [
    {
      id: 'ORD001',
      customer: 'Priya Sharma',
      product: 'Andhra Mango Pickle',
      quantity: 2,
      amount: 598,
      status: 'Processing',
      date: '2024-01-15'
    },
    {
      id: 'ORD002',
      customer: 'Rahul Kumar',
      product: 'Punjabi Garlic Pickle',
      quantity: 1,
      amount: 249,
      status: 'Shipped',
      date: '2024-01-14'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your pickle business</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Products</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Avg Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  View All
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Customer</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Product</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="py-4 text-sm text-gray-600">{order.customer}</td>
                        <td className="py-4 text-sm text-gray-600">{order.product}</td>
                        <td className="py-4 text-sm font-medium text-gray-900">₹{order.amount}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Processing' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-sm text-gray-600">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Products</h2>
              <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add Product</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Product</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Price</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Stock</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Rating</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellerProducts.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{product.name}</p>
                              <p className="text-sm text-gray-600">{product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">₹{product.price}</td>
                        <td className="py-4 px-6">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.inStock 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-600 hover:text-blue-600">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-primary-600">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Order Management</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex space-x-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>All Orders</option>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search orders..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Customer</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Product</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Quantity</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Amount</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Date</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{order.customer}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{order.product}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{order.quantity}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">₹{order.amount}</td>
                        <td className="py-4 px-6">
                          <select className={`px-2 py-1 rounded text-xs font-medium border-none ${
                            order.status === 'Processing' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            <option>Pending</option>
                            <option>Processing</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                          </select>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{order.date}</td>
                        <td className="py-4 px-6">
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would be implemented similarly */}
        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
            <p className="text-gray-600">Detailed analytics and insights will be available here.</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Seller Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Store Name
                </label>
                <input
                  type="text"
                  defaultValue="Grandma's Kitchen"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Store Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell customers about your store..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}