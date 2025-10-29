import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { adminBookings as initialBookings } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import { ChevronDownIcon } from '../components/icons';

const AdminManageBookingsPage = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(currentBookings =>
        currentBookings.map(booking =>
          booking.id === bookingId ? { ...booking, status: 'Cancelled' } : booking
        )
      );
      toast.success('Booking has been cancelled.');
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Manage Bookings</h1>
        <p className="text-slate-500 mt-1">
          Track all customer bookings, approve or cancel requests, and manage booking statuses
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full align-middle">
          <div className="grid grid-cols-12 gap-4 text-left text-sm font-medium text-slate-500 border-b border-slate-200 pb-3">
            <div className="col-span-4 pl-4">Car</div>
            <div className="col-span-3">Date Range</div>
            <div className="col-span-1 text-right">Total</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>

          <motion.div layout className="divide-y divide-slate-200">
            <AnimatePresence>
              {bookings.map((booking) => (
                <motion.div 
                  key={booking.id}
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="grid grid-cols-12 gap-4 items-center py-4"
                >
                  <div className="col-span-4 flex items-center gap-4 pl-4">
                    <img src={booking.carImage} alt={booking.carName} className="w-16 h-10 object-cover rounded-md" />
                    <span className="font-medium text-slate-800">{booking.carName}</span>
                  </div>
                  <div className="col-span-3 text-slate-600">{booking.dateRange}</div>
                  <div className="col-span-1 font-medium text-slate-800 text-right">₹{booking.total.toLocaleString('en-IN')}</div>
                  <div className="col-span-2 flex justify-center">
                    <StatusBadge status={booking.status} />
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <button 
                      onClick={() => handleCancelBooking(booking.id)}
                      disabled={booking.status.toLowerCase() === 'cancelled' || booking.status.toLowerCase() === 'completed'}
                      className="flex items-center gap-1 text-slate-600 border border-slate-300 rounded-md px-3 py-1.5 text-sm hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
                    >
                      Cancel
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageBookingsPage;
