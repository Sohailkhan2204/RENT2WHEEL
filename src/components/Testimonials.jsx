import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold text-gray-true-800-solid font-outfit mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base text-gray-500-opaque font-outfit">
            Discover why discerning travelers choose CarRental for their luxury accommodations around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
