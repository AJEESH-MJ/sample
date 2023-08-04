import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { S1, S2 } from "../../assets";

const featuredBrands = () => {
  // Replace this with your actual brand data
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      logo: S1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: S2,
      description: "Pellentesque in semper sem, eget scelerisque metus.",
    },
    // Add more brands here
  ];

  // Duplicate brands array to have at least 10 items for the carousel
  const extendedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Increase the speed for faster auto-scrolling
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 4000, // Set the time between auto-scrolls
    slidesToShow: 4, // Increase the number of slides shown
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8  bg-gradient-to-r from-purple-100 via-indigo-200 to-indigo-50">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-600 mb-6">
          Featured Brands
        </h2>
        <Slider {...settings}>
          {extendedBrands.map((brand) => (
            <div key={brand.id}>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {brand.name}
                </h3>
                <p className="text-gray-600 text-center">{brand.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default featuredBrands;
