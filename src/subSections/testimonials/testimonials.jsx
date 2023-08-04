import React, { useState, useEffect } from 'react';
import { P1, P2 } from '../../assets';

const TestimonialSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const testimonialsData = [
    {
      name: "John Doe",
      occupation: "Web Developer",
      testimonial:
        "This product has greatly improved my productivity. It's easy to use and has all the features I need. I highly recommend it!",
      photo: P1, // Add the image URL for John Doe
    },
    {
      name: "Jane Smith",
      occupation: "Graphic Designer",
      testimonial:
        "I've been using this tool for my design projects, and it has exceeded my expectations. The user interface is intuitive, and the results are fantastic.",
      photo: P2, // Add the image URL for Jane Smith
    },
    {
      name: "David Johnson",
      occupation: "Marketing Specialist",
      testimonial:
        "As a marketing professional, I find this software to be a game-changer. It has helped me streamline my campaigns and achieve better results.",
      photo: "https://example.com/david-johnson.jpg", // Add the image URL for David Johnson
    },
    // Add more testimonials here
  ];
  

  useEffect(() => {
    // Simulating data fetching from an API or data source
    setTestimonials(testimonialsData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change the interval duration as needed (milliseconds)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-r from-purple-100 via-indigo-200 to-indigo-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4">Customer Testimonials</h2>
        {testimonials.length > 0 ? (
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white rounded-full mb-4 overflow-hidden">
              {/* Assuming you have customer photos in the testimonial data */}
              <img
                src={testimonials[currentTestimonialIndex].photo}
                alt={testimonials[currentTestimonialIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-white text-lg font-medium max-w-2xl text-center">
              "{testimonials[currentTestimonialIndex].testimonial}"
            </blockquote>
            <p className="text-white mt-2">
              - {testimonials[currentTestimonialIndex].name},{' '}
              {testimonials[currentTestimonialIndex].occupation}
            </p>
          </div>
        ) : (
          <p className="text-white text-center">No testimonials available yet.</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
