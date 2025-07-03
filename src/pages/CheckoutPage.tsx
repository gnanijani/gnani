import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Truck, CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const addresses = [
    {
      id: 1,
      name: 'Home',
      address: '123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Office',
      address: '456 Business Park, Floor 3, Bandra East, Mumbai, Maharashtra 400051',
      phone: '+91 98765 43210'
    }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious pickles to proceed with checkout.</p>
          <Link to="/products" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    setIsPlacingOrder(false);
    navigate('/dashboard?tab=orders');
  };

  const totalAmount = Math.round(total + 5 + (total * 0.05));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate('/cart')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="h-5 w-5 text-primary-500" />
                <h2 className="text-xl font-semibold">Delivery Address</h2>
              </div>
              
              <div className="space-y-4">
                {addresses.map((address, index) => (
                  <div
                    key={address.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedAddress === index
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedAddress(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{address.name}</h3>
                        <p className="text-gray-600 mt-1">{address.address}</p>
                        <p className="text-gray-600 text-sm mt-1">{address.phone}</p>
                      </div>
                      <input
                        type="radio"
                        checked={selectedAddress === index}
                        onChange={() => setSelectedAddress(index)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                ))}
                
                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-500 transition-colors">
                  + Add New Address
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="h-5 w-5 text-primary-500" />
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>
              
              <div className="space-y-4">
                <div
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                  </div>
                </div>

                <div
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'upi'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-500 rounded"></div>
                      <span className="font-medium">UPI Payment</span>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                    />
                  </div>
                </div>

                <div
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'cod'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Truck className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Order Items</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">by {item.seller}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span>₹5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (5%)</span>
                  <span>₹{Math.round(total * 0.05)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Free delivery on orders above ₹299</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
                className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlacingOrder ? 'Placing Order...' : `Place Order - ₹${totalAmount}`}
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                By placing order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}