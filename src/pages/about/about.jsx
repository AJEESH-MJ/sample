import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">About Us</h2>
          <p className="text-2xl text-gray-600 leading-relaxed  font-semibold">
            Welcome to our online store! We are more than just an ecommerce
            website. We are a community of passionate individuals committed to
            bringing you the best shopping experience possible.
          </p>
          <p className="about-description text-base md:text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Y Bro, a website that will have a modern and aesthetic design, with
            intuitive navigation and clear call-to-actions. Our website is aimed
            at giving customized t-shirts, shirts and other apparel to our
            customers. Our web page project aims to create a user-friendly
            platform for a business that we created, that provides a large
            variety of garments to our target audience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At our store, we believe in making a difference. Our vision is to
              inspire and empower people through our carefully curated selection
              of products. We strive to create a platform where you can discover
              unique and meaningful items that enhance your lifestyle.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Our Commitment
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to excellence in every aspect of our business.
              From handpicking the finest products to ensuring secure
              transactions, we go above and beyond to meet and exceed your
              expectations. Our dedicated team is always here to assist you and
              provide personalized support throughout your shopping journey.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Discover the Difference
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            What sets us apart from the rest? It's our attention to detail and
            unwavering commitment to quality. Here's what you can expect when
            you shop with us:
          </p>
          <ul className="mt-4 text-gray-600">
            <li className="flex items-start mb-2">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Wide selection of handpicked products from trusted brands and
              artisans.
            </li>
            <li className="flex items-start mb-2">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Fast and reliable shipping with tracking to keep you updated on
              your order's progress.
            </li>
            <li className="flex items-start mb-2">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Easy and secure checkout process to ensure a seamless purchasing
              experience.
            </li>
            <li className="flex items-start mb-2">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Exceptional customer service with a team ready to assist you with
              any inquiries or concerns.
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Engaging community events, exclusive promotions, and rewards for
              our loyal customers.
            </li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Join Our Community
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We invite you to be a part of our community of passionate shoppers.
            Connect with us on social media, sign up for our newsletter, and
            stay updated on the latest trends and exclusive offers. Together,
            let's embark on a delightful shopping journey.
          </p>
          <div className="mt-8">
            {/* Add social media icons or newsletter sign-up form here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
