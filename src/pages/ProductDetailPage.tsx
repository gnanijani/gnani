import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, Award, ChefHat, ArrowLeft, Plus, Minus } from 'lucide-react';
import { mockProducts, mockReviews } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🥒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product not found</h2>
          <p className="text-gray-600 mb-6">The pickle you're looking for doesn't exist.</p>
          <Link to="/products" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
            Browse All Pickles
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        seller: product.seller.name,
        spiceLevel: product.spiceLevel
      });
    }
  };

  const spiceLevelColors = {
    'Mild': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Spicy': 'bg-orange-100 text-orange-800',
    'Extra Spicy': 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <div className="absolute top-4 left-4 bg-error-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${spiceLevelColors[product.spiceLevel]}`}>
                  {product.spiceLevel}
                </span>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{product.region}</span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
                <span className="text-gray-600">/ {product.weight}</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex items-center space-x-3">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{product.seller.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.seller.rating} seller rating</span>
                  </div>
                </div>
                <Link
                  to={`/seller/${product.seller.id}`}
                  className="text-primary-600 text-sm font-medium hover:text-primary-700"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2 font-semibold"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart - ₹{product.price * quantity}</span>
                </button>
                <button className="px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">100% Authentic</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <ChefHat className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Traditional Recipe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              {['description', 'ingredients', 'nutrition', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Shelf Life</h4>
                    <p className="text-gray-600">{product.shelfLife}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Weight</h4>
                    <p className="text-gray-600">{product.weight}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Type</h4>
                    <p className="text-gray-600">{product.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Ingredients</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-2 rounded-full text-sm text-gray-700"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Nutrition Information</h3>
                {product.nutritionInfo ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{product.nutritionInfo.calories}</div>
                      <div className="text-sm text-gray-600">Calories</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{product.nutritionInfo.sodium}</div>
                      <div className="text-sm text-gray-600">Sodium</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{product.nutritionInfo.carbs}</div>
                      <div className="text-sm text-gray-600">Carbs</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">{product.nutritionInfo.protein}</div>
                      <div className="text-sm text-gray-600">Protein</div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">Nutrition information not available for this product.</p>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                    Write Review
                  </button>
                </div>
                
                <div className="space-y-4">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold">{review.userName}</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700 mb-2">{review.comment}</p>
                          <button className="text-sm text-gray-500 hover:text-gray-700">
                            👍 Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}