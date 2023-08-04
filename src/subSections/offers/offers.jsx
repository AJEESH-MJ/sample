import React from "react";
import { P19, P18, P17, P16, P15, P14 } from "../../assets";

const Offers = () => {
  const specialOffers = [
    {
      id: 1,
      title: "Summer Sale",
      image: P14,
      discount: 25,
      expiryDate: "2023-07-31",
      couponCode: "SUMMER25",
    },
    {
      id: 2,
      title: "Flash Sale",
      image: P15,
      discount: 50,
      expiryDate: "2023-06-30",
      couponCode: "FLASH50",
    },
    {
      id: 3,
      title: "Flash Sale",
      image: P16,
      discount: 50,
      expiryDate: "2023-06-30",
      couponCode: "FLASH50",
    },
    {
      id: 4,
      title: "Flash Sale",
      image: P17,
      discount: 50,
      expiryDate: "2023-06-30",
      couponCode: "FLASH50",
    },
    {
      id: 5,
      title: "Flash Sale",
      image: P18,
      discount: 50,
      expiryDate: "2023-06-30",
      couponCode: "FLASH50",
    },
    {
      id: 6,
      title: "Flash Sale",
      image: P19,
      discount: 50,
      expiryDate: "2023-06-30",
      couponCode: "FLASH50",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <hr className="my-6 border-t-2 border-blue-500 mx-auto mb-10 w-1/4 z-10" />
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-600 mb-6">
          Special Offers and Sales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 line-through text-sm">
                  Original Price: ${offer.originalPrice}
                </span>
                <span className="text-green-600 font-semibold text-lg">
                  Discounted Price: ${offer.discountedPrice}
                </span>
              </div>
              <div className="text-green-600 font-semibold text-lg mb-4">
                {offer.discount}% off
              </div>
              <button className="w-2/4 sm:w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
                Shop Now
              </button>
              <p className="text-center text-xs mt-2 text-gray-600">
                Coupon Code: {offer.couponCode}
              </p>
              <p className="text-center text-xs text-gray-600">
                Offer Expires: {offer.expiryDate}
              </p>
            </div>
          ))}
        </div>
        <hr className="my-6 border-t-2 border-blue-500 mx-auto mt-20 w-1/4 z-10" />
      </div>
    </section>
  );
};

export default Offers;