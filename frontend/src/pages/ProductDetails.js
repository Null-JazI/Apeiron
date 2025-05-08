import { useParams } from "react-router-dom";
import { useState } from "react";

const productData = [
  { id: 1, name: "Wireless Headphones", price: "$99", image: "/images/headphones.jpg", description: "High-quality wireless headphones with noise cancellation and long battery life." },
  { id: 2, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg", description: "Smartwatch with heart rate monitoring, GPS, and fitness tracking features." },
  { id: 3, name: "Gaming Mouse", price: "$49", image: "/images/mouse.jpg", description: "Ergonomic gaming mouse with customizable RGB lighting and high DPI settings." },
  { id: 4, name: "Mechanical Keyboard", price: "$129", image: "/images/keyboard.jpg", description: "Mechanical keyboard with customizable keys and RGB lighting." },
  { id: 5, name: "Portable Speaker", price: "$79", image: "/images/speaker.jpg", description: "Portable Bluetooth speaker with deep bass and waterproof design." },
  { id: 6, name: "USB-C Hub", price: "$39", image: "/images/hub.jpg", description: "USB-C hub with multiple ports for laptops and tablets." },
];

export default function ProductDetails({ theme }) {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  // State for Reviews
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

  if (!product) {
    return <h1 className="text-center text-2xl mt-10 text-[#004548] dark:text-[#ffd8a2]">Product not found.</h1>;
  }

  // Function to Handle Review Submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="min-h-screen p-6 pt-24 transition-all duration-300 bg-white dark:bg-[#004548] text-[#004548] dark:text-[#ffd8a2]">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
        
        <div className="lg:w-2/5 xl:w-1/2 p-6 rounded-lg shadow-md bg-white dark:bg-[#00363a]">
          <h1 className="text-3xl font-bold text-[#004548] dark:text-[#ffd8a2]">{product.name}</h1>
          <p className="text-xl font-semibold text-[#14846f] dark:text-[#47e5b5]">{product.price}</p>
          <button className="w-full bg-[#14846f] text-white py-2 rounded-md mt-4 hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667] transition-all">
            Buy Now
          </button>
          <button className="w-full border border-[#14846f] text-[#14846f] py-2 rounded-md mt-2 hover:bg-[#14846f] hover:text-white dark:border-[#ffd8a2] dark:text-[#ffd8a2] dark:hover:bg-[#ffd8a2] dark:hover:text-[#004548] transition-all">
            Add to Cart
          </button>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#004548] dark:text-[#ffd8a2]">Reviews</h2>
            {reviews.map((review, index) => (
              <div key={index} className="mt-4 p-3 rounded-md bg-gray-50 dark:bg-[#004548]">
                <div className="flex items-center">
                  <div className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                  <p className="ml-2 font-semibold text-[#004548] dark:text-[#ffd8a2]">{review.name}</p>
                </div>
                <p className="text-sm text-[#004548] text-opacity-80 dark:text-[#ffd8a2] dark:text-opacity-80">{review.comment}</p>
              </div>
            ))}

            <form onSubmit={handleReviewSubmit} className="mt-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={newReview.name} 
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full p-2 rounded-md mb-2 border bg-white text-[#004548] border-gray-300 dark:bg-[#00363a] dark:text-[#ffd8a2] dark:border-gray-600"
                required
              />
              <select 
                value={newReview.rating} 
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })} 
                className="w-full p-2 rounded-md mb-2 border bg-white text-[#004548] border-gray-300 dark:bg-[#00363a] dark:text-[#ffd8a2] dark:border-gray-600"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </select>
              <textarea 
                placeholder="Your Review" 
                value={newReview.comment} 
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full p-2 rounded-md mb-2 border bg-white text-[#004548] border-gray-300 dark:bg-[#00363a] dark:text-[#ffd8a2] dark:border-gray-600"
                required
              />
              <button type="submit" className="w-full bg-[#14846f] text-white py-2 rounded-md hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667] transition-all">
                Submit Review
              </button>
            </form>
          </div>
        </div>

        <div className="lg:w-3/5 xl:w-1/2 flex flex-col items-center lg:items-end p-6">
          <div className="w-full max-w-md">
            <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />
          </div>
          <p className="mt-4 p-4 text-lg rounded-lg shadow-md max-w-md bg-white text-[#004548] dark:bg-[#00363a] dark:text-[#ffd8a2]">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}