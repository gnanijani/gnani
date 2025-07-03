import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-500 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">🥒</span>
              </div>
              <span className="text-2xl font-bold">PickleBazaar</span>
            </div>
            <p className="text-gray-300 mb-4">
              India's finest pickle marketplace connecting you with authentic homemade pickles from across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=mango" className="text-gray-300 hover:text-white transition-colors">
                  Mango Pickles
                </Link>
              </li>
              <li>
                <Link to="/products?category=garlic" className="text-gray-300 hover:text-white transition-colors">
                  Garlic Pickles
                </Link>
              </li>
            </ul>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Sellers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/seller" className="text-gray-300 hover:text-white transition-colors">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Seller Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Seller Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@picklebazaar.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Food Plaza, Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PickleBazaar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}