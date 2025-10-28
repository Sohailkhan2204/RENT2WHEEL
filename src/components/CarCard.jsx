import React from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon, CarIcon, FuelIcon, MapPinIcon } from './icons';

const CarCard = ({ car }) => {
  return (
    <Link to={`/car/${car.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-card overflow-hidden h-full transform group-hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="relative">
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
          {car.available && (
            <span className="absolute top-3 left-3 bg-blue-accent text-white text-xs font-outfit px-3 py-1 rounded-full">
              Available Now
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium font-outfit text-black">{car.name}</h3>
              <p className="text-sm text-slate-600 font-outfit">{car.type} {car.year}</p>
            </div>
            <div className="bg-black text-white text-xs font-outfit px-3 py-2 rounded-lg">
              ${car.price}/day
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-600 font-outfit mt-auto">
            <div className="flex items-center gap-2">
              <UsersIcon className="w-4 h-4 text-slate-600" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <FuelIcon className="w-4 h-4 text-slate-600" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center gap-2">
              <CarIcon className="w-4 h-4 text-slate-600" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-slate-600" />
              <span>{car.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
