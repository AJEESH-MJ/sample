import React from 'react';
import './blogPosts.css';
import { C1, C2 } from '../../assets';

const BlogPosts = () => {
  // Replace this with your actual blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Fashion Tips for Summer',
      image: C1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Latest Trends in Accessories',
      image: C2,
      description: 'Pellentesque in semper sem, eget scelerisque metus.',
    },
    // Add more blog posts here
  ];

  return (
    <section className="flex flex-wrap justify-center items-center w-full min-h-[40rem] gap-8 sm:gap-10 md:gap-12 lg:gap-20 xl:gap-28">
      <h2 className="text-3xl font-bold text-gray-600 -mb-14 mt-6">Blog Posts</h2>
      <div className="h1 flex flex-wrap justify-center w-full mb-32 ml-10 gap-8 sm:gap-10 md:gap-12 lg:gap-20 xl:gap-28">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card flex items-center w-3/4 max-w-[600px] h-300px p-10 sm:p-14 bg-white rounded-2xl">
            <img
              src={post.image}
              alt={post.title}
              className='float-left mr-10 -ml-24 object-cover shadow-lg'
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold text-gray-600 mb-3">{post.title}</h2>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Type: Resi...</h3>
              <p className="text-gray-600 text-base">{post.description}</p>
              <button className="bg-blue-500 text-white text-xl px-4 py-2 rounded mt-4 hover:bg-blue-600">
                Show the...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
