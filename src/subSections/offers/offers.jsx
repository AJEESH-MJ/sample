import React from 'react';
import { P19, P18, P17, P16, P15, P14 } from '../../assets';
import './offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Summer Sale',
      image: P14,
      discount: 25,
      expiryDate: '2023-07-31',
      couponCode: 'SUMMER25',
    },
    {
      id: 2,
      title: 'Flash Sale',
      image: P15,
      discount: 50,
      expiryDate: '2023-06-30',
      couponCode: 'FLASH50',
    },
    {
      id: 3,
      title: 'Flash Sale',
      image: P16,
      discount: 50,
      expiryDate: '2023-06-30',
      couponCode: 'FLASH50',
    },
    {
      id: 4,
      title: 'Flash Sale',
      image: P17,
      discount: 50,
      expiryDate: '2023-06-30',
      couponCode: 'FLASH50',
    },
    {
      id: 5,
      title: 'Flash Sale',
      image: P18,
      discount: 50,
      expiryDate: '2023-06-30',
      couponCode: 'FLASH50',
    },
    {
      id: 6,
      title: 'Flash Sale',
      image: P19,
      discount: 50,
      expiryDate: '2023-06-30',
      couponCode: 'FLASH50',
    },
  ];
  
    return (
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl text-center mb-8">Special Offers and Sales</h2>
        <div className="flex flex-wrap justify-center">
          {offers.map((offer) => (
            <div key={offer.id} className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8">
              <img className="w-full" src={offer.image} alt={offer.title} />
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-indigo-200 mb-2">{offer.discount}% off | Expires on {offer.expiryDate}</p>
                <p className="text-gray-600">Coupon Code: {offer.couponCode}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Offers;
  