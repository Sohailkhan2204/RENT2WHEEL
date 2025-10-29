import React from 'react';

const DashboardStatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
      </div>
      <div className="bg-blue-50 rounded-full p-3">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  );
};

export default DashboardStatCard;
