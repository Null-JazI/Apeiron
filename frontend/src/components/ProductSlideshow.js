import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "Stickers", image: "/images/#1.jpg" },
  { id: 2, name: "T-Shirts", image: "/images/#2.jpg" },
  { id: 3, name: "Keychains", image: "/images/#3.jpg" },
  { id: 4, name: "Fidget Toys", image: "/images/#4.jpg" },
];

export default function ProductSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-6">
      {/* Product Image */}
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {products.map((product) => (
          <div key={product.id} className="w-full flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-center mt-2 text-xl font-semibold">{product.name}</h2>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-70 transition"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-70 transition"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
