import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CarCard from './CarCard';
import { featuredCars } from '../data/mockData';
import { ArrowRightIcon } from './icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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

const FeaturedVehicles = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold text-gray-true-800-solid font-outfit mb-2">
            Featured Vehicles
          </h2>
          <p className="text-base text-gray-true-800/80 font-outfit">
            Explore our selection of premium vehicles available for your next adventure.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredCars.map(car => (
            <motion.div key={car.id} variants={itemVariants}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <Link to="/cars" className="inline-flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 text-base font-outfit text-slate-800 hover:bg-slate-100 transition-colors">
            Explore all cars
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
