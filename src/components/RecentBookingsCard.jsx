import React from 'react';
import { ClipboardListIcon } from './icons';
import StatusBadge from './StatusBadge';

const RecentBookingsCard = ({ bookings }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-1">Recent Bookings</h3>
      <p className="text-sm text-slate-500 mb-6">Latest customer bookings</p>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100/60 rounded-full p-2">
                <ClipboardListIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-800">{booking.carName}</p>
                <p className="text-xs text-slate-500">{booking.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
                <p className="text-sm font-medium text-slate-600">${booking.price}</p>
                <StatusBadge status={booking.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookingsCard;
