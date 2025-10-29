import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from './icons';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-testimonial h-full">
      <div className="flex items-center gap-4 mb-4">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-gray-700 font-outfit">{testimonial.name}</h4>
          <p className="text-xs text-gray-700-light font-inter">{testimonial.location}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-blue-primary fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-sm text-gray-700-light font-outfit leading-relaxed">
        {testimonial.quote}
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
