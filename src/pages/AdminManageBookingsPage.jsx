import React from 'react';
import { adminBookings } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import { ChevronDownIcon } from '../components/icons';

const AdminManageBookingsPage = () => {
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
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-left text-sm font-medium text-slate-500 border-b border-slate-200 pb-3">
            <div className="col-span-4 pl-4">Car</div>
            <div className="col-span-3">Date Range</div>
            <div className="col-span-1 text-right">Total</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-200">
            {adminBookings.map((booking) => (
              <div key={booking.id} className="grid grid-cols-12 gap-4 items-center py-4">
                <div className="col-span-4 flex items-center gap-4 pl-4">
                  <img src={booking.carImage} alt={booking.carName} className="w-16 h-10 object-cover rounded-md" />
                  <span className="font-medium text-slate-800">{booking.carName}</span>
                </div>
                <div className="col-span-3 text-slate-600">{booking.dateRange.replace(' To ', ' to ')}</div>
                <div className="col-span-1 font-medium text-slate-800 text-right">${booking.total}</div>
                <div className="col-span-2 flex justify-center">
                  <StatusBadge status={booking.status} />
                </div>
                <div className="col-span-2 flex justify-center">
                  <button className="flex items-center gap-1 text-slate-600 border border-slate-300 rounded-md px-3 py-1.5 text-sm hover:bg-slate-50">
                    Cancel
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageBookingsPage;
