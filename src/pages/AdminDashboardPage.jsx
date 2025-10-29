import React from 'react';
import { motion } from 'framer-motion';
import { dashboardStats, recentBookingsAdmin } from '../data/mockData';
import DashboardStatCard from '../components/DashboardStatCard';
import RecentBookingsCard from '../components/RecentBookingsCard';
import MonthlyRevenueCard from '../components/MonthlyRevenueCard';
import { CarIcon, ClipboardListIcon, AlertTriangleIcon, CheckCircleIcon } from '../components/icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AdminDashboardPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-500 mt-1">
          Monitor overall platform performance including total cars, bookings, revenue, and recent activities
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <motion.div variants={itemVariants}>
          <DashboardStatCard title="Total Cars" value={dashboardStats.totalCars} icon={CarIcon} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardStatCard title="Total Bookings" value={dashboardStats.totalBookings} icon={ClipboardListIcon} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardStatCard title="Pending Bookings" value={dashboardStats.pendingBookings} icon={AlertTriangleIcon} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DashboardStatCard title="Completed Bookings" value={dashboardStats.completedBookings} icon={CheckCircleIcon} />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <RecentBookingsCard bookings={recentBookingsAdmin} />
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MonthlyRevenueCard revenue={dashboardStats.monthlyRevenue} />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
