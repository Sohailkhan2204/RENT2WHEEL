import React from 'react';
import { dashboardStats, recentBookingsAdmin } from '../data/mockData';
import DashboardStatCard from '../components/DashboardStatCard';
import RecentBookingsCard from '../components/RecentBookingsCard';
import MonthlyRevenueCard from '../components/MonthlyRevenueCard';
import { CarIcon, ClipboardListIcon, AlertTriangleIcon, CheckCircleIcon } from '../components/icons';

const AdminDashboardPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-500 mt-1">
          Monitor overall platform performance including total cars, bookings, revenue, and recent activities
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardStatCard title="Total Cars" value={dashboardStats.totalCars} icon={CarIcon} />
        <DashboardStatCard title="Total Bookings" value={dashboardStats.totalBookings} icon={ClipboardListIcon} />
        <DashboardStatCard title="Pending Bookings" value={dashboardStats.pendingBookings} icon={AlertTriangleIcon} />
        <DashboardStatCard title="Completed Bookings" value={dashboardStats.completedBookings} icon={CheckCircleIcon} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentBookingsCard bookings={recentBookingsAdmin} />
        </div>
        <div>
          <MonthlyRevenueCard revenue={dashboardStats.monthlyRevenue} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
