import { Link } from "react-router-dom";
import ProductSlideshow from "../components/ProductSlideshow";
import { ArrowRight, Star, Package, Palette, Gift, Sparkles, Heart } from "lucide-react";

export default function Home({ theme }) {
  // Color scheme based on provided colors
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
      secondaryBg: "#00363a",   // Darker teal (secondary background)
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

  const currentColors = theme === "dark" ? colors.dark : colors.light;

  return (
    <main className="min-h-screen transition-all duration-500 m-0 p-0 pt-16 bg-white dark:bg-[#004548] text-[#004548] dark:text-[#ffd8a2]">
      {/* Hero Section with Animated Elements */}
      <section className="relative overflow-hidden min-h-[650px] m-0 p-0 pt-12 bg-white dark:bg-[#004548]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 animate-pulse">
            <Sparkles size={24} color={currentColors.accent2} />
          </div>
          <div className="absolute bottom-20 left-14 animate-bounce">
            <Gift size={28} color={currentColors.accent1} />
          </div>
          <div className="absolute top-40 left-20 animate-pulse">
            <Sparkles size={20} color={currentColors.highlight} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-12 pb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center text-[#004548] dark:text-[#ffd8a2]">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Discover</span>
                <span className="block text-[#14846f] dark:text-[#ffa400]">Exceptional</span>
                <span className="block">Accessories</span>
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Where innovation meets GSMST's culture in every carefully crafted product.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <button
                    className="px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg bg-[#14846f] text-[#ffffff] hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667]"
                  >
                    Explore Collection <ArrowRight size={18} />
                  </button>
                </Link>
                <Link to="/custom">
                  <button
                    className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-[#14846f] text-[#14846f] hover:bg-[#ffd8a2] dark:border-[#ffd8a2] dark:text-[#ffd8a2] dark:hover:bg-[#00363a]"
                  >
                    Custom Designs <Palette size={18} className="inline ml-2" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="p-4 rounded-2xl shadow-xl transform rotate-2 bg-[#ffd8a2] dark:bg-[#00363a]">
                <div className="relative overflow-hidden rounded-xl h-[400px]">
                  <div 
                    className="h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/api/placeholder/600/400')" }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-10 dark:bg-black dark:bg-opacity-20"></div>
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold bg-[#14846f] text-white dark:bg-[#ffa400] dark:text-[#004548]">
                    New Arrival
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-3 rounded-full shadow-lg bg-[#ff8667]">
                <Sparkles size={24} color={theme === "dark" ? "#004548" : "white"} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient transition to next section */}
        <div className="h-16 bg-gradient-to-b from-[#004548] to-[#00363a] hidden dark:block"></div>
      </section>

      {/* What's Popular Section */}
      <section className="m-0 bg-[#ffd8a2] bg-opacity-30 dark:bg-[#00363a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 bg-[#14846f] text-white dark:bg-[#ffa400] dark:text-[#004548]">What's Trending</span>
            <h2 className="text-4xl font-bold text-[#004548] dark:text-[#ffd8a2]">
              Our Most Popular Products
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#ff8667] to-[#ffa400]"></div>
          </div>
          
          <ProductSlideshow theme={theme} />
          
          <div className="text-center mt-10">
            <Link to="/products">
              <button className="px-6 py-3 rounded-full font-semibold text-lg transition-all border-2 border-[#14846f] text-[#14846f] hover:bg-[#14846f] hover:text-white dark:border-[#ffd8a2] dark:text-[#ffd8a2] dark:hover:bg-[#ffd8a2] dark:hover:text-[#00363a]">
                View All Products <ArrowRight size={18} className="inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
        
        {/* Subtle gradient transition to next section */}
        <div className="h-16 bg-gradient-to-b from-[#00363a] to-[#004548] hidden dark:block"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="m-0 bg-white dark:bg-[#004548]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004548] dark:text-[#ffd8a2]">
              Why Choose Apeiron
            </h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto text-[#14846f] dark:text-[#47e5b5]">
              We're committed to bringing joy and innovation to your everyday accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star size={40} />,
                title: "Premium Quality",
                description: "Every product is crafted with exceptional materials and meticulous attention to detail for long-lasting enjoyment."
              },
              {
                icon: <Heart size={40} />,
                title: "Customer Favorites",
                description: "Our designs are inspired by feedback from our GSMST community to create accessories you'll truly love."
              },
              {
                icon: <Palette size={40} />,
                title: "Custom Creations",
                description: "Express your unique style with personalized designs, colors, and features that reflect your personality."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl transform transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-[#ffd8a2] hover:shadow-xl dark:bg-[#00363a] dark:hover:shadow-[0_0_15px_rgba(255,168,0,0.3)]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#ffd8a2] text-[#14846f] dark:bg-[#004548] dark:text-[#ffa400]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#004548] dark:text-[#ffd8a2]">{item.title}</h3>
                <p className="text-lg text-[#004548] dark:text-[#ffd8a2]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Subtle gradient transition to next section */}
        <div className="h-16 bg-gradient-to-b from-[#004548] to-[#00363a] hidden dark:block"></div>
      </section>

      {/* Collections Gallery */}
      <section className="m-0 bg-[#ffd8a2] bg-opacity-20 dark:bg-[#00363a]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 bg-[#29ba8e] text-white dark:bg-[#47e5b5] dark:text-[#004548]">Collections</span>
              <h2 className="text-4xl font-bold text-[#004548] dark:text-[#ffd8a2]">
                Browse Our Categories
              </h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 font-medium text-[#14846f] dark:text-[#47e5b5]">
              View all categories <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Tech Accessories", 
                description: "Elevate your devices with style",
                image: "/api/placeholder/400/320" 
              },
              { 
                title: "Custom Stickers", 
                description: "Express yourself everywhere",
                image: "/api/placeholder/400/320" 
              },
              { 
                title: "3D Printed Items", 
                description: "Innovation in every detail",
                image: "/api/placeholder/400/320" 
              }
            ].map((category) => (
              <CategoryCard 
                key={category.title} 
                title={category.title}
                description={category.description}
                image={category.image}
                theme={theme} 
              />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/products" className="inline-flex items-center gap-2 font-medium text-[#14846f] dark:text-[#47e5b5]">
              View all categories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        {/* Subtle gradient transition to next section */}
        <div className="h-16 bg-gradient-to-b from-[#00363a] to-[#004548] hidden dark:block"></div>
      </section>
      
      {/* Newsletter Section with Decorative Elements */}
      <section className="py-20 relative overflow-hidden m-0 bg-white dark:bg-[#004548]">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#ff8667] to-[#ffa400] opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-[#29ba8e] to-[#47e5b5] opacity-20"></div>
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="p-10 rounded-3xl bg-[#ffd8a2] bg-opacity-30 shadow-xl dark:bg-[#00363a] dark:shadow-[0_0_30px_rgba(255,216,162,0.1)]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-[#004548] dark:text-[#ffd8a2]">
                Join Our Community
              </h2>
              <p className="text-lg mb-0 text-[#004548] dark:text-[#ffd8a2]">
                Subscribe for exclusive offers, early access to new releases, and inspiration delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full bg-white border border-[#14846f] text-[#004548] placeholder-[#004548] placeholder-opacity-60 dark:bg-[#004548] dark:border-[#ffd8a2] dark:text-[#ffd8a2] dark:placeholder-[#ffd8a2] dark:placeholder-opacity-60"
              />
              <button className="px-6 py-3 rounded-full font-semibold text-lg transition-all whitespace-nowrap transform hover:scale-105 bg-[#14846f] text-white hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667]">
                Subscribe
              </button>
            </div>
            
            <div className="flex justify-center mt-6">
              <p className="text-sm text-[#004548] text-opacity-70 dark:text-[#ffd8a2] dark:text-opacity-70">
                We respect your privacy and won't share your information
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryCard({ title, description, image, theme }) {
  return (
    <Link to={`/products`} className="group block relative overflow-hidden rounded-2xl h-80 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="w-12 h-1 mb-4 rounded-full bg-[#ffd8a2] dark:bg-[#ffa400]"></div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-opacity-90 mb-4">{description}</p>
        <span className="inline-flex items-center text-sm font-bold text-[#29ba8e] dark:text-[#47e5b5]">
          Shop Now <ArrowRight size={16} className="ml-2" />
        </span>
      </div>
    </Link>
  );
}