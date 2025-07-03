import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User, ShoppingBag, Heart, MapPin, Settings, Bell, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function DashboardPage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'profile');
  const { user, logout } = useAuth();
  const { items: cartItems } = useCart();

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const orders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 589,
      items: [
        { name: 'Andhra Mango Pickle', quantity: 2, price: 299 }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      status: 'In Transit',
      total: 438,
      items: [
        { name: 'Punjabi Garlic Pickle', quantity: 1, price: 249 },
        { name: 'Gujarati Lemon Pickle', quantity: 1, price: 199 }
      ]
    }
  ];

  const wishlistItems = [
    {
      id: '3',
      name: 'Gujarati Lemon Pickle',
      price: 199,
      originalPrice: 249,
      image: 'https://images.pexels.com/photos/4198782/pexels-photo-4198782.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'Gujju Delights'
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai, Maharashtra 400001',
      phone: '+91 98765 43210',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      name: 'John Doe',
      address: '456 Business Park, Floor 3',
      city: 'Bandra East, Mumbai, Maharashtra 400051',
      phone: '+91 98765 43210',
      isDefault: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b">
                <div className="w-20 h-20 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{user?.name}</h3>
                <p className="text-sm text-gray-600">{user?.email}</p>
                <span className="inline-block px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full mt-2 capitalize">
                  {user?.role}
                </span>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
                
                <button
                  onClick={logout}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue={user?.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                            <p className="text-lg font-bold text-gray-900 mt-1">₹{order.total}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} x {item.quantity}</span>
                              <span>₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-3 mt-4">
                          <button className="text-primary-600 hover:text-primary-700 font-medium">
                            View Details
                          </button>
                          <button className="text-primary-600 hover:text-primary-700 font-medium">
                            Track Order
                          </button>
                          <button className="text-primary-600 hover:text-primary-700 font-medium">
                            Reorder
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {item.seller}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="font-bold text-gray-900">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
                            Add to Cart
                          </button>
                          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                      Add New Address
                    </button>
                  </div>
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">{address.type}</h3>
                              {address.isDefault && (
                                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-gray-900 font-medium">{address.name}</p>
                            <p className="text-gray-600">{address.address}</p>
                            <p className="text-gray-600">{address.city}</p>
                            <p className="text-gray-600">{address.phone}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-primary-600 hover:text-primary-700">Edit</button>
                            <button className="text-red-600 hover:text-red-700">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'payments' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                  <div className="text-center py-12">
                    <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods added</h3>
                    <p className="text-gray-600">Add a payment method to make checkout faster and easier.</p>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">Order Updates</h3>
                        <p className="text-sm text-gray-600">Get notified about your order status</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">Promotional Offers</h3>
                        <p className="text-sm text-gray-600">Receive deals and special offers</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">New Product Alerts</h3>
                        <p className="text-sm text-gray-600">Be the first to know about new pickles</p>
                      </div>
                      <input type="checkbox" className="h-4 w-4 text-primary-600" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Change Password</h3>
                      <p className="text-sm text-gray-600 mb-4">Update your password to keep your account secure</p>
                      <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                        Change Password
                      </button>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                    <div className="p-4 border border-red-200 rounded-lg">
                      <h3 className="font-medium text-red-900 mb-2">Delete Account</h3>
                      <p className="text-sm text-red-600 mb-4">Permanently delete your account and all data</p>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}