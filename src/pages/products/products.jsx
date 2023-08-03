import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
  P12,
  P13,
  P14,
  P15,
  P16,
  P17,
  P18,
  P19,
} from "../../assets/index";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: P1,
    image2: P11,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: P2,
    image2: P12,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 14.99,
    image: P3,
    image2: P13,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  // Add more products as needed
  {
    id: 4,
    name: "Product 4",
    price: 12.99,
    image: P4,
    image2: P14,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    name: "Product 5",
    price: 8.99,
    image: P5,
    image2: P15,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    name: "Product 6",
    price: 24.99,
    image: P6,
    image2: P16,
    description:
      "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 7,
    name: "Product 7",
    price: 17.99,
    image: P7,
    image2: P17,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    name: "Product 8",
    price: 13.99,
    image: P8,
    image2: P18,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 9,
    name: "Product 9",
    price: 9.99,
    image: P9,
    image2: P19,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 10,
    name: "Product 10",
    price: 16.99,
    image: P10,
    image2: P1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function ProductsPage() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const handleImageHover = (productId) => {
    setHoveredProductId(productId);
  };

  return (
    <div className="container mx-auto py-8 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg shadow-lg p-4 transition duration-1000 ease-in-out transform hover:-translate-y-2 hover:shadow-xl h-full"
          >
            <img
              src={
                hoveredProductId === product.id ? product.image2 : product.image
              }
              alt={product.name}
              className="object-contain h-48 mx-auto"
              onMouseEnter={() => handleImageHover(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-500 mt-4 flex-grow">{product.description}</p>
            <div className="flex items-end justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <div className="ml-2">
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-4xl mt-5 ${
                    likedProducts.includes(product.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  } cursor-pointer`}
                  onClick={() => handleLike(product.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
