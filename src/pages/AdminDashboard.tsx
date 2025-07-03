import React, { useState } from 'react';
import { Users, Package, TrendingUp, DollarSign, UserCheck, UserX, Eye, Edit, Trash2 } from 'lucide-react';
import { mockProducts } from '../data/mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUsers: 1247,
    totalSellers: 89,
    totalProducts: mockProducts.length,
    totalRevenue: 125420,
    todayOrders: 23,
    pendingApprovals: 7
  };

  const recentUsers = [
    { id: 1, name: 'Priya Sharma', email: 'priya@example.com', role: 'customer', joinDate: '2024-01-15', status: 'active' },
    { id: 2, name: 'Ramesh Kumar', email: 'ramesh@example.com', role: 'seller', joinDate: '2024-01-14', status: 'pending' },
    { id: 3, name: 'Meera Patel', email: 'meera@example.com', role: 'customer', joinDate: '2024-01-13', status: 'active' },
  ];

  const pendingSellers = [
    { id: 1, name: 'Traditional Pickles Co.', email: 'info@traditional.com', location: 'Kerala', joinDate: '2024-01-15' },
    { id: 2, name: 'Spicy Delights', email: 'contact@spicy.com', location: 'Rajasthan', joinDate: '2024-01-14' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'sellers', label: 'Sellers' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your PickleBazaar platform</p>
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
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Products</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Today's Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.todayOrders}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Users */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
                  <button
                    onClick={() => setActiveTab('users')}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 capitalize">
                          {user.role}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Seller Approvals */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Pending Seller Approvals</h2>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                    {stats.pendingApprovals}
                  </span>
                </div>
                
                <div className="space-y-4">
                  {pendingSellers.map((seller) => (
                    <div key={seller.id} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-gray-900">{seller.name}</p>
                          <p className="text-sm text-gray-600">{seller.email}</p>
                          <p className="text-sm text-gray-600">{seller.location}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <button className="flex-1 bg-green-500 text-white py-1 px-3 rounded text-sm hover:bg-green-600 transition-colors">
                          Approve
                        </button>
                        <button className="flex-1 bg-red-500 text-white py-1 px-3 rounded text-sm hover:bg-red-600 transition-colors">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                  <option>All Users</option>
                  <option>Customers</option>
                  <option>Sellers</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">User</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Email</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Role</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Join Date</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                              <Users className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{user.email}</td>
                        <td className="py-4 px-6">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{user.joinDate}</td>
                        <td className="py-4 px-6">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.status}
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
                              <UserX className="h-4 w-4" />
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

        {/* Sellers Tab */}
        {activeTab === 'sellers' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Seller Management</h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Search sellers..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                  <option>All Sellers</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Suspended</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Seller</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Email</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Products</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Rating</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingSellers.map((seller) => (
                      <tr key={seller.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                              <Package className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{seller.name}</p>
                              <p className="text-sm text-gray-600">{seller.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{seller.email}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">0</td>
                        <td className="py-4 px-6 text-sm text-gray-600">-</td>
                        <td className="py-4 px-6">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-600 hover:text-green-600">
                              <UserCheck className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-red-600">
                              <UserX className="h-4 w-4" />
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

        {/* Other tabs would be implemented similarly */}
        {(activeTab === 'products' || activeTab === 'orders' || activeTab === 'analytics') && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Coming Soon</h3>
            <p className="text-gray-600">This section will be available in the next update.</p>
          </div>
        )}
      </div>
    </div>
  );
}