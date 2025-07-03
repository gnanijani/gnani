import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Award, ChefHat } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories } from '../data/mockData';

export default function HomePage() {
  const featuredProducts = mockProducts.filter(product => product.isFeatured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              India's Finest
              <span className="block text-yellow-300">Pickle Marketplace</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Discover authentic homemade pickles from every corner of India. 
              Fresh, traditional, and delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/products"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Explore Pickles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Become a Seller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure delivery across India</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-success-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">100% authentic and fresh pickles</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-warning-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-warning-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Sellers</h3>
              <p className="text-gray-600">All sellers are thoroughly verified</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-error-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-error-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">Authentic family recipes passed down generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Explore our wide range of pickle varieties</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group animate-scale-in"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Pickles</h2>
              <p className="text-lg text-gray-600">Handpicked favorites from our customers</p>
            </div>
            <Link
              to="/products"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from real pickle lovers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The best mango pickle I've ever tasted! Reminds me of my grandmother's recipe. 
                Will definitely order again!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Customer"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing variety and authentic taste. The packaging is excellent and delivery 
                was super fast. Highly recommended!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Customer"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Rahul Kumar</p>
                  <p className="text-sm text-gray-600">Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Perfect spice levels and great customer service. Love the variety of regional 
                pickles available on the platform."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Customer"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Meera Patel</p>
                  <p className="text-sm text-gray-600">Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Authentic India?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover the true flavors of traditional Indian pickles.
          </p>
          <Link
            to="/products"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Shopping Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}