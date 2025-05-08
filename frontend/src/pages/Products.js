import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Eye, Filter, ArrowUpDown, Search } from "lucide-react";

const products = [
  { id: 1, name: "Holiday Stickers", price: "$9.99", image: "/api/placeholder/400/300", category: "Stickers", featured: true },
  { id: 2, name: "Wooden Keychains", price: "$19.99", image: "/api/placeholder/400/300", category: "Accessories", featured: false },
  { id: 3, name: "3D Printed Fidget Toy", price: "$14.99", image: "/api/placeholder/400/300", category: "3D Prints", featured: true },
  { id: 4, name: "Mechanical Keyboard", price: "$129.99", image: "/api/placeholder/400/300", category: "Tech", featured: false },
  { id: 5, name: "Portable Speaker", price: "$79.99", image: "/api/placeholder/400/300", category: "Tech", featured: true },
  { id: 6, name: "USB-C Hub", price: "$39.99", image: "/api/placeholder/400/300", category: "Tech", featured: false },
];

export default function Products({ theme }) {
  // Refined color scheme - more cohesive and elegant
  const colors = {
    dark: {
      primary: "#14846f",       // Main color
      secondary: "#29ba8e",     // Secondary color
      accent1: "#ff8667",       // Accent color 1
      accent2: "#ffa400",       // Accent color 2
      highlight: "#47e5b5",     // Highlight color
      neutral1: "#ffffff",      // White
      neutral2: "#ffd8a2",      // Light cream
      neutral3: "#4a403b",      // Dark brown
      background: "#004548",    // Dark teal background
    },
    light: {
      primary: "#14846f",       // Main color
      secondary: "#29ba8e",     // Secondary color
      accent1: "#ff8667",       // Accent color 1
      accent2: "#ffa400",       // Accent color 2
      highlight: "#47e5b5",     // Highlight color
      neutral1: "#ffffff",      // White
      neutral2: "#ffd8a2",      // Light cream
      neutral3: "#4a403b",      // Dark brown
      background: "#ffffff",    // White background
    }
  };

  return (
    <div className={`min-h-screen bg-white text-[#004548] dark:bg-[#004548] dark:text-[#ffd8a2] transition-all duration-300 ${theme === "dark" ? "dark" : ""}`}>
      {/* Page Header with Banner - Removed top margin and adjusted padding */}
      <div className="relative pt-16 pb-20 px-6 bg-[#ffd8a2] bg-opacity-30 dark:bg-[#4a403b]">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#004548] dark:text-[#ffd8a2]">
              Our Collection
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-[#004548] opacity-80 dark:text-[#ffd8a2] dark:opacity-80">
              Discover our range of premium accessories and custom designs that combine innovation with style
            </p>
          </div>
        </div>
        
        {/* Replaced wave with elegant geometric divider */}
        <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 48" preserveAspectRatio="none">
            <path 
              d="M0,0 L1200,0 L1200,48 L0,48 Z" 
              className="fill-white dark:fill-[#004548]"
            ></path>
            <path 
              d="M0,48 L1200,20 L1200,48 Z" 
              className="fill-[#ffd8a2] dark:fill-[#4a403b] opacity-30"
            ></path>
          </svg>
        </div>
      </div>

      {/* Search and Filter Section - Increased spacing */}
      <div className="container mx-auto px-6 py-12">
        <div className="p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between mb-10 bg-[#ffd8a2] bg-opacity-20 dark:bg-[#4a403b] dark:bg-opacity-70">
          {/* Search Bar */}
          <div className="relative w-full md:w-auto flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-[#004548] opacity-70 dark:text-[#ffd8a2] dark:opacity-70" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full w-full bg-white border border-[#004548] text-[#004548] placeholder-[#004548] placeholder-opacity-60 dark:bg-[#004548] dark:border-[#ffd8a2] dark:text-[#ffd8a2] dark:placeholder-[#ffd8a2] dark:placeholder-opacity-60"
            />
          </div>
          
          {/* Filter and Sort Buttons */}
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-4 py-2 rounded-full flex items-center gap-2 bg-white text-[#004548] hover:bg-[#ffd8a2] dark:bg-[#004548] dark:text-[#ffd8a2] dark:hover:bg-[#14846f]">
              <Filter size={16} /> Filter
            </button>
            <button className="px-4 py-2 rounded-full flex items-center gap-2 bg-white text-[#004548] hover:bg-[#ffd8a2] dark:bg-[#004548] dark:text-[#ffd8a2] dark:hover:bg-[#14846f]">
              <ArrowUpDown size={16} /> Sort
            </button>
          </div>
        </div>

        {/* Product Categories Tabs - More elegant design */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-4 pb-2 min-w-max">
            {["All Products", "Tech", "Stickers", "Accessories", "3D Prints"].map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-[#14846f] text-white dark:bg-[#ffa400] dark:text-[#004548]"
                    : "bg-[#ffd8a2] bg-opacity-30 text-[#004548] hover:bg-[#14846f] hover:text-white dark:bg-[#4a403b] dark:text-[#ffd8a2] dark:hover:bg-[#ffa400] dark:hover:text-[#004548]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Products Section - More elegant section divider */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-[#004548] dark:text-[#ffd8a2] relative pl-4">
              <span className="absolute left-0 top-0 h-full w-1 bg-[#14846f] dark:bg-[#ffa400] rounded-full"></span>
              Featured Products
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.featured).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} theme={theme} featured={true} />
              </Link>
            ))}
          </div>
        </div>

        {/* All Products Grid - More elegant section divider */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-[#004548] dark:text-[#ffd8a2] relative pl-4">
              <span className="absolute left-0 top-0 h-full w-1 bg-[#29ba8e] dark:bg-[#47e5b5] rounded-full"></span>
              All Products
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} theme={theme} />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Load More Button - More elegant styling */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full font-semibold text-lg transition-all bg-[#14846f] text-white hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667]">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}

// Product Card Component - Enhanced for elegance
function ProductCard({ product, theme, featured = false }) {
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
          <button className="p-3 rounded-full transition-all transform hover:scale-110 bg-[#ffd8a2] text-[#004548] dark:bg-[#ffa400] dark:text-[#004548]">
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
          <button className="px-3 py-1 rounded-full text-sm font-medium transition-colors bg-[#14846f] text-white hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}