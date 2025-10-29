import React from 'react';
import { motion } from 'framer-motion';

const MonthlyRevenueCard = ({ revenue }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white border border-slate-200 rounded-lg p-6 h-full"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-1">Monthly Revenue</h3>
      <p className="text-sm text-slate-500 mb-6">Revenue for current month</p>
      <div className="flex items-end justify-start">
        <p className="text-4xl font-bold text-blue-600">₹{revenue.toLocaleString('en-IN')}</p>
      </div>
    </motion.div>
  );
};

export default MonthlyRevenueCard;
