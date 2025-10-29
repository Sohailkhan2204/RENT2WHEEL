import React from 'react';

const StatusBadge = ({ status }) => {
    const baseClasses = "text-xs font-medium capitalize px-3 py-1 rounded-full border text-center";
    const statusKey = status.toLowerCase();
    const statusClasses = {
        confirmed: "border-green-300 bg-green-50 text-green-700",
        completed: "border-blue-300 bg-blue-50 text-blue-700",
        pending: "border-yellow-300 bg-yellow-50 text-yellow-700",
        available: "border-green-300 bg-green-50 text-green-700",
        'not available': "border-red-300 bg-red-50 text-red-700",
        cancelled: "border-red-300 bg-red-50 text-red-700",
    };
    return <span className={`${baseClasses} ${statusClasses[statusKey] || 'border-gray-300 bg-gray-50 text-gray-700'}`}>{status}</span>;
};

export default StatusBadge;
