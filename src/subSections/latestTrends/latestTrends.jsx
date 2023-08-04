import React, { useState } from "react";
import { S1, S2 } from "../../assets/index";

const LatestTrends = () => {
  const [sortBy, setSortBy] = useState("popularity"); // Default sorting by popularity
  const [trendsData, setTrendsData] = useState([
    // Replace this data with your actual latest trends data
    {
      id: 1,
      title: "Product 1",
      image: S1,
      description: "Brief description of Product 1...",
      category: "Category A",
      tags: ["Trending", "New Arrival"],
      rating: 4.5,
      reviews: 30,
      price: 19.99,
      discount: 10, // Percentage discount
      brand: "Brand X",
      timestamp: Date.now(), // Current timestamp
    },
    {
      id: 1,
      title: "Product 1",
      image: S1,
      description: "Brief description of Product 1...",
      category: "Category A",
      tags: ["Trending", "New Arrival"],
      rating: 4.5,
      reviews: 30,
      price: 19.99,
      discount: 10, // Percentage discount
      brand: "Brand X",
      timestamp: Date.now(), // Current timestamp
    },
    {
      id: 1,
      title: "Product 1",
      image: S1,
      description: "Brief description of Product 1...",
      category: "Category A",
      tags: ["Trending", "New Arrival"],
      rating: 4.5,
      reviews: 30,
      price: 19.99,
      discount: 10, // Percentage discount
      brand: "Brand X",
      timestamp: Date.now(), // Current timestamp
    },
    {
      id: 1,
      title: "Product 1",
      image: S1,
      description: "Brief description of Product 1...",
      category: "Category A",
      tags: ["Trending", "New Arrival"],
      rating: 4.5,
      reviews: 30,
      price: 19.99,
      discount: 10, // Percentage discount
      brand: "Brand X",
      timestamp: Date.now(), // Current timestamp
    },
    {
      id: 1,
      title: "Product 1",
      image: S1,
      description: "Brief description of Product 1...",
      category: "Category A",
      tags: ["Trending", "New Arrival"],
      rating: 4.5,
      reviews: 30,
      price: 19.99,
      discount: 10, // Percentage discount
      brand: "Brand X",
      timestamp: Date.now(), // Current timestamp
    },
    {
      id: 1,
      title: "Product 1",
      image: S1,
      description: "Brief description of Product 1...",
      category: "Category A",
      tags: ["Trending", "New Arrival"],
      rating: 4.5,
      reviews: 30,
      price: 19.99,
      discount: 10, // Percentage discount
      brand: "Brand X",
      timestamp: Date.now(), // Current timestamp
    },
    // Add more trends data as needed
  ]);

  // Function to update trends data with the latest timestamp
  const updateTrendsData = () => {
    const updatedTrendsData = trendsData.map((trend) => ({
      ...trend,
      timestamp: Date.now(),
    }));
    setTrendsData(updatedTrendsData);
  };

  // Call the updateTrendsData function to update the trends periodically (e.g., every hour)
  // You can use a useEffect hook and a timer to achieve this behavior.
  // For simplicity, let's update the trends every 5 seconds for demo purposes.
  // Make sure to adjust the timing as needed in a real scenario.
  setInterval(updateTrendsData, 5000);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Implement sorting logic based on the selected option (popularity, price, relevance)
    // For simplicity, let's assume sorting by popularity for now
    // You can use libraries like lodash for more complex sorting.
    if (e.target.value === "popularity") {
      setTrendsData([...trendsData.sort((a, b) => b.rating - a.rating)]);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-600 mb-6">
          Latest Trends
        </h2>
        <div className="mb-4 flex justify-center items-center">
          <label htmlFor="sortBy" className="mr-2">
            Sort by:
          </label>
          <select
            id="sortBy"
            className="px-2 py-1 border rounded-md"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendsData.map((product) => (
            <div
              key={product.id}
              className="shadow-md rounded-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 rounded-t-md object-cover"
              />
              <div className="px-4 py-2">
                <p className="text-lg font-semibold mb-2">{product.title}</p>
                <p className="text-gray-600 text-sm h-20 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-green-600 font-semibold">{`$${product.price.toFixed(
                      2
                    )}`}</p>
                    {product.discount && (
                      <p className="text-red-500">{`-${product.discount}% OFF`}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                      {[...Array(Math.floor(product.rating))].map(
                        (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M0 8.229c0-2.254 1.831-4.085 4.086-4.085h3.564l1.468-4.392a.675.675 0 01.641-.484h5.574c.278 0 .54.146.689.383.156.247.178.562.06.832L14.647 8.228H20a4.086 4.086 0 014.086 4.086c0 2.253-1.83 4.084-4.086 4.084H9.344l-1.468 4.392a.673.673 0 01-.641.484H1.562a.669.669 0 01-.558-.306.675.675 0 01-.107-.526l1.432-4.392H4.086C1.831 12.312 0 10.481 0 8.228z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{`(${product.reviews} Reviews)`}</p>
                  </div>
                </div>
                <div className="flex space-x-2 mt-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4 w-full focus:outline-none focus:ring focus:ring-blue-200">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestTrends;
