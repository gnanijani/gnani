import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      seller: product.seller.name,
      spiceLevel: product.spiceLevel
    });
  };

  const spiceLevelColors = {
    'Mild': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Spicy': 'bg-orange-100 text-orange-800',
    'Extra Spicy': 'bg-red-100 text-red-800'
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-2 left-2 bg-error-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {product.discount}% OFF
            </div>
          )}
          
          {/* Wishlist Button */}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
          </button>
          
          {/* Featured Badge */}
          {product.isFeatured && (
            <div className="absolute bottom-2 left-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Spice Level & Veg Badge */}
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${spiceLevelColors[product.spiceLevel]}`}>
              {product.spiceLevel}
            </span>
            <div className="flex items-center space-x-1">
              {product.isVeg && (
                <div className="w-3 h-3 border-2 border-green-500 rounded-sm bg-green-500"></div>
              )}
              <span className="text-xs text-gray-500">{product.region}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>

          {/* Seller */}
          <p className="text-sm text-gray-600 mb-2">by {product.seller.name}</p>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 ml-1">
                {product.rating}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">{product.weight}</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2 group-hover:bg-primary-600"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
}