import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import { featuredCars } from '../data/mockData';
import { ArrowRightIcon } from './icons';

const FeaturedVehicles = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-true-800-solid font-outfit mb-2">
            Featured Vehicles
          </h2>
          <p className="text-base text-gray-true-800/80 font-outfit">
            Explore our selection of premium vehicles available for your next adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
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
