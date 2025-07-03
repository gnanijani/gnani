import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts, categories, regions, spiceLevels } from '../data/mockData';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedCategory, selectedRegion, selectedSpiceLevel, priceRange, isVegOnly, sortBy]);

  const filterProducts = () => {
    let filtered = [...mockProducts];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.region.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Region filter
    if (selectedRegion) {
      filtered = filtered.filter(product => product.region === selectedRegion);
    }

    // Spice level filter
    if (selectedSpiceLevel) {
      filtered = filtered.filter(product => product.spiceLevel === selectedSpiceLevel);
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Veg only filter
    if (isVegOnly) {
      filtered = filtered.filter(product => product.isVeg);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedRegion('');
    setSelectedSpiceLevel('');
    setPriceRange([0, 500]);
    setIsVegOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setSearchParams({ search: searchQuery });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">All Pickles</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pickles, sellers, regions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Filter Toggle & Sort */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {mockProducts.length} products
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 space-y-6`}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-primary-600 text-sm hover:text-primary-700"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value=""
                    checked={selectedCategory === ''}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-2"
                  />
                  All Categories
                </label>
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Region</h4>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">All Regions</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Spice Level Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Spice Level</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="spiceLevel"
                    value=""
                    checked={selectedSpiceLevel === ''}
                    onChange={(e) => setSelectedSpiceLevel(e.target.value)}
                    className="mr-2"
                  />
                  All Levels
                </label>
                {spiceLevels.map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      type="radio"
                      name="spiceLevel"
                      value={level}
                      checked={selectedSpiceLevel === level}
                      onChange={(e) => setSelectedSpiceLevel(e.target.value)}
                      className="mr-2"
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Veg Only */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isVegOnly}
                  onChange={(e) => setIsVegOnly(e.target.checked)}
                  className="mr-2"
                />
                Vegetarian Only
              </label>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={clearFilters}
                className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}