import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-medium text-gray-dark font-outfit mb-2">
            Never Miss a Deal!
          </h2>
          <p className="text-base text-gray-text mb-8 font-outfit">
            Subscribe to get the latest offers, new collections, and exclusive discounts.
          </p>
          <form className="relative max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full h-14 border border-gray-300 rounded-lg pl-6 pr-40 focus:outline-none focus:ring-2 focus:ring-blue-600 font-outfit"
            />
            <button 
              type="submit" 
              className="absolute right-0 top-0 h-14 bg-blue-600 text-white font-outfit px-6 rounded-r-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
