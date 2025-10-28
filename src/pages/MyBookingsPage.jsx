import React from 'react';
import BookingCard from '../components/BookingCard';
import { myBookings } from '../data/mockData';

const MyBookingsPage = () => {
    return (
        <main className="font-outfit pt-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <h1 className="text-4xl font-semibold text-slate-900 mb-2">
                        My Bookings
                    </h1>
                    <p className="text-lg text-slate-500">
                        View and manage your car bookings
                    </p>
                </div>

                <div className="space-y-8 max-w-7xl mx-auto">
                    {myBookings.map(booking => (
                        <BookingCard key={booking.id} booking={booking} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default MyBookingsPage;
