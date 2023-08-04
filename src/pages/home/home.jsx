import React from "react";
import { H2 } from "../../assets/index";
import FeaturedProducts from "../../subSections/featuredProducts/featuredProducts";
import Offers from "../../subSections/offers/offers";
import Testimonials from "../../subSections/testimonials/testimonials";
import LatestTrends from "../../subSections/latestTrends/latestTrends";
import FeaturedBrands from "../../subSections/featuredBrands/featuredBrands";
import BlogPosts from "../../subSections/blogPosts/blogPosts";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main >
        <div
          className="h-[93vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${H2})`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-white text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to our Store!
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                Discover amazing products and great deals.
              </p>
              <a
                href="/shop"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg   shadow"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        
        <FeaturedProducts />
        <Offers />
        <Testimonials />
        <LatestTrends />
        <FeaturedBrands />
        <BlogPosts />
        
      </main>
    </div>
  );
};

export default HomePage;
