import React from "react";
import "./featuredProducts.css";
import { P10, P11, P12, P13, P14, P15 } from "../../assets/index";

const featuredProducts = () => {
  // Replace this with your actual product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: P10,
      price: 29.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: P11,
      price: 39.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: P12,
      price: 39.99,
    },
    {
      id: 4,
      name: "Product 4",
      image: P13,
      price: 39.99,
    },
    {
      id: 5,
      name: "Product 5",
      image: P14,
      price: 39.99,
    },
    {
      id: 6,
      name: "Product 6",
      image: P15,
      price: 39.99,
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-600 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card relative w-full md:w-96 bg-black rounded-8 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="card_image block w-full h-48 md:h-60 object-cover object-center transition-transform duration-250"
              />
              <div className="card_body inset-0 z-[-1] flex items-end justify-between px-4 py-2 text-yellow-500">
                <div>
                  <h3 className="card_category text-white">{product.name}</h3>
                  <p className="card_author">
                    Price: ${product.price.toFixed(2)}
                  </p>
                </div>
                <button className="card_button inline-block text-decoration-none rounded-4 bg-yellow-500 px-4 py-2 text-black">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default featuredProducts;
