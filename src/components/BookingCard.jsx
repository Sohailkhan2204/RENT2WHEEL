import React from 'react';
import { motion } from 'framer-motion';
import { featuredCars } from '../data/mockData';
import { CalendarDaysIcon, MapPinIcon } from './icons';

const BookingCard = ({ booking }) => {
  const car = featuredCars.find(c => c.id === booking.carId);

  if (!car) {
    return null; // Or a placeholder
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="border border-slate-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start"
    >
      {/* Left Side: Car Info */}
      <div className="flex-shrink-0 w-full md:w-80">
        <img src={booking.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-base font-semibold text-slate-800 mt-4">{car.name.toUpperCase()}</h3>
        <p className="text-sm text-slate-500">{car.year} • {car.type}</p>
      </div>

      {/* Middle: Booking Details */}
      <div className="flex-grow w-full">
        <div className="flex items-center gap-4 mb-6">
          <p className="bg-slate-100 text-slate-800 text-xs font-medium px-3 py-1 rounded">
            {booking.bookingId}
          </p>
          <div className="bg-green-status-bg text-green-status-text text-xs font-medium px-4 py-1 rounded-full capitalize">
            {booking.status}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CalendarDaysIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-500/90">Rental Period</p>
              <p className="text-sm font-medium text-slate-800">{booking.rentalPeriod}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-500/90">Pick-up Location</p>
              <p className="text-sm font-medium text-slate-800">{booking.pickupLocation}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-500/90">Return Location</p>
              <p className="text-sm font-medium text-slate-800">{booking.returnLocation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Price */}
      <div className="text-left md:text-right w-full md:w-auto mt-4 md:mt-0 flex-shrink-0">
        <p className="text-sm text-slate-500/95">Total Price</p>
        <p className="text-2xl font-semibold text-blue-600 mb-1">₹{booking.totalPrice.toLocaleString('en-IN')}</p>
        <p className="text-sm text-slate-500/95">Booked on {booking.bookedOn}</p>
      </div>
    </motion.div>
  );
};

export default BookingCard;
