import React from 'react';

const MonthlyRevenueCard = ({ revenue }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 h-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-1">Monthly Revenue</h3>
      <p className="text-sm text-slate-500 mb-6">Revenue for current month</p>
      <div className="flex items-end justify-start">
        <p className="text-4xl font-bold text-blue-600">${revenue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default MonthlyRevenueCard;
