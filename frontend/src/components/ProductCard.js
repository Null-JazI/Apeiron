import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Product Card Component - Enhanced for elegance
function ProductCard({ product, theme, featured = false }) {
  const { addToCart } = useCart();

  return (
    <div className={`group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 bg-white hover:shadow-xl dark:bg-[#4a403b] dark:hover:shadow-lg ${theme === "dark" ? "dark" : ""}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-[#14846f] text-white dark:bg-[#ffa400] dark:text-[#004548]">
          Featured
        </div>
      )}
      
      {/* Product Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Quick Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#004548] bg-opacity-50 dark:bg-[#004548] dark:bg-opacity-70">
          <button 
            onClick={() => addToCart(product)}
            className="p-3 rounded-full transition-all transform hover:scale-110 bg-[#ffd8a2] text-[#004548] dark:bg-[#ffa400] dark:text-[#004548]"
          >
            <ShoppingCart size={18} />
          </button>
          <button className="p-3 rounded-full transition-all transform hover:scale-110 bg-[#ff8667] text-white dark:bg-[#ff8667] dark:text-[#004548]">
            <Heart size={18} />
          </button>
          <button className="p-3 rounded-full transition-all transform hover:scale-110 bg-[#29ba8e] text-white dark:bg-[#47e5b5] dark:text-[#004548]">
            <Eye size={18} />
          </button>
        </div>
      </div>
      
      {/* Category Tag */}
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#ffd8a2] text-[#004548] dark:bg-[#004548] dark:text-[#47e5b5]">
          {product.category}
        </span>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 text-[#004548] dark:text-[#ffd8a2]">
          {product.name}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-[#14846f] dark:text-[#47e5b5]">
            {product.price}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="px-3 py-1 rounded-full text-sm font-medium transition-colors bg-[#14846f] text-white hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;