export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  spiceLevel: 'Mild' | 'Medium' | 'Spicy' | 'Extra Spicy';
  region: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    avatar: string;
  };
  rating: number;
  reviewCount: number;
  isVeg: boolean;
  ingredients: string[];
  shelfLife: string;
  weight: string;
  inStock: boolean;
  discount?: number;
  isFeatured?: boolean;
  nutritionInfo?: {
    calories: number;
    sodium: string;
    carbs: string;
    protein: string;
  };
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Andhra Mango Pickle',
    description: 'Traditional spicy mango pickle from Andhra Pradesh, made with authentic spices and sesame oil. This tangy and flavorful pickle is perfect with rice, roti, or any Indian meal.',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4198047/pexels-photo-4198047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Mango',
    spiceLevel: 'Spicy',
    region: 'Andhra Pradesh',
    seller: {
      id: 'seller1',
      name: 'Grandma\'s Kitchen',
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.7,
    reviewCount: 156,
    isVeg: true,
    ingredients: ['Raw Mango', 'Red Chili Powder', 'Turmeric', 'Sesame Oil', 'Mustard Seeds', 'Fenugreek', 'Salt'],
    shelfLife: '6 months',
    weight: '500g',
    inStock: true,
    discount: 25,
    isFeatured: true,
    nutritionInfo: {
      calories: 45,
      sodium: '380mg',
      carbs: '8g',
      protein: '1g'
    }
  },
  {
    id: '2',
    name: 'Punjabi Garlic Pickle',
    description: 'Authentic Punjabi garlic pickle with bold flavors and aromatic spices. Made with fresh garlic cloves and traditional mustard oil.',
    price: 249,
    image: 'https://images.pexels.com/photos/4198056/pexels-photo-4198056.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4198056/pexels-photo-4198056.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Garlic',
    spiceLevel: 'Medium',
    region: 'Punjab',
    seller: {
      id: 'seller2',
      name: 'Punjab Foods',
      rating: 4.6,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.5,
    reviewCount: 89,
    isVeg: true,
    ingredients: ['Fresh Garlic', 'Mustard Oil', 'Red Chili', 'Turmeric', 'Carom Seeds', 'Salt'],
    shelfLife: '4 months',
    weight: '300g',
    inStock: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Gujarati Lemon Pickle',
    description: 'Sweet and tangy lemon pickle from Gujarat, prepared with jaggery and aromatic spices for a perfect balance of flavors.',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/4198782/pexels-photo-4198782.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4198782/pexels-photo-4198782.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Lemon',
    spiceLevel: 'Mild',
    region: 'Gujarat',
    seller: {
      id: 'seller3',
      name: 'Gujju Delights',
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.8,
    reviewCount: 203,
    isVeg: true,
    ingredients: ['Fresh Lemons', 'Jaggery', 'Turmeric', 'Red Chili', 'Mustard Seeds', 'Asafoetida', 'Salt'],
    shelfLife: '8 months',
    weight: '400g',
    inStock: true,
    discount: 20
  },
  {
    id: '4',
    name: 'Bengali Mixed Vegetable Pickle',
    description: 'Traditional Bengali mixed vegetable pickle with mustard oil and panch phoron. A delightful blend of seasonal vegetables.',
    price: 329,
    image: 'https://images.pexels.com/photos/4198016/pexels-photo-4198016.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4198016/pexels-photo-4198016.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Mixed Vegetable',
    spiceLevel: 'Medium',
    region: 'West Bengal',
    seller: {
      id: 'seller4',
      name: 'Bengali Flavors',
      rating: 4.4,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.3,
    reviewCount: 67,
    isVeg: true,
    ingredients: ['Cauliflower', 'Carrot', 'Green Beans', 'Mustard Oil', 'Panch Phoron', 'Turmeric', 'Salt'],
    shelfLife: '3 months',
    weight: '600g',
    inStock: true
  },
  {
    id: '5',
    name: 'Rajasthani Red Chili Pickle',
    description: 'Fiery red chili pickle from Rajasthan, made with the finest red chilies and traditional spices. Perfect for spice lovers.',
    price: 279,
    image: 'https://images.pexels.com/photos/4198057/pexels-photo-4198057.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4198057/pexels-photo-4198057.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Chili',
    spiceLevel: 'Extra Spicy',
    region: 'Rajasthan',
    seller: {
      id: 'seller5',
      name: 'Royal Spices',
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.6,
    reviewCount: 124,
    isVeg: true,
    ingredients: ['Red Chilies', 'Mustard Oil', 'Nigella Seeds', 'Fennel', 'Turmeric', 'Asafoetida', 'Salt'],
    shelfLife: '1 year',
    weight: '250g',
    inStock: true,
    isFeatured: true
  },
  {
    id: '6',
    name: 'Kerala Coconut Pickle',
    description: 'Traditional Kerala coconut pickle with curry leaves and coconut oil. A unique and flavorful pickle from God\'s own country.',
    price: 189,
    image: 'https://images.pexels.com/photos/4198783/pexels-photo-4198783.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4198783/pexels-photo-4198783.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Coconut',
    spiceLevel: 'Mild',
    region: 'Kerala',
    seller: {
      id: 'seller6',
      name: 'Kerala Naturals',
      rating: 4.5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    rating: 4.4,
    reviewCount: 91,
    isVeg: true,
    ingredients: ['Fresh Coconut', 'Curry Leaves', 'Green Chilies', 'Ginger', 'Coconut Oil', 'Mustard Seeds', 'Salt'],
    shelfLife: '2 months',
    weight: '350g',
    inStock: true
  }
];

export const categories = [
  { id: 'mango', name: 'Mango', icon: '🥭' },
  { id: 'lemon', name: 'Lemon', icon: '🍋' },
  { id: 'garlic', name: 'Garlic', icon: '🧄' },
  { id: 'chili', name: 'Chili', icon: '🌶️' },
  { id: 'mixed', name: 'Mixed Vegetable', icon: '🥗' },
  { id: 'coconut', name: 'Coconut', icon: '🥥' },
];

export const regions = [
  'Andhra Pradesh',
  'Punjab',
  'Gujarat',
  'West Bengal',
  'Rajasthan',
  'Kerala',
  'Tamil Nadu',
  'Maharashtra'
];

export const spiceLevels = ['Mild', 'Medium', 'Spicy', 'Extra Spicy'];

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Priya Sharma',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Absolutely delicious! The authentic taste reminds me of my grandmother\'s pickle. Perfect spice level and great packaging.',
    date: '2024-01-15',
    helpful: 23
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Rahul Kumar',
    userAvatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 4,
    comment: 'Good quality pickle with authentic flavors. Delivery was quick and packaging was excellent. Will order again!',
    date: '2024-01-10',
    helpful: 15
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Meera Patel',
    userAvatar: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Best mango pickle I\'ve tasted online! The oil quality is excellent and spices are perfectly balanced.',
    date: '2024-01-08',
    helpful: 31
  }
];