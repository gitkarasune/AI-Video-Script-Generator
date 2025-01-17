// components/Content.jsx
import React from 'react';

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Video Scripts</h2>
          <p className="text-lg leading-relaxed">
            Our AI generates high-quality video scripts tailored to your needs. Whether you need a script for a tutorial, promotional video, or any other type of content, we've got you covered.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          <p className="text-lg leading-relaxed">
            Get engaging and well-researched blog posts on a variety of topics. Our AI ensures that the content is informative, accurate, and optimized for SEO.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Social Media Content</h2>
          <p className="text-lg leading-relaxed">
            Enhance your social media presence with captivating posts, tweets, and stories. Our AI helps you create content that resonates with your audience and boosts engagement.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">E-books</h2>
          <p className="text-lg leading-relaxed">
            Create comprehensive and well-structured e-books on any topic. Our AI assists you in generating content that is both informative and engaging for your readers.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Whitepapers</h2>
          <p className="text-lg leading-relaxed">
            Produce in-depth whitepapers that showcase your expertise and provide valuable insights to your audience. Our AI ensures that the content is well-researched and professionally written.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Newsletters</h2>
          <p className="text-lg leading-relaxed">
            Keep your subscribers informed and engaged with regular newsletters. Our AI helps you create content that is both informative and engaging, ensuring high open and click-through rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;