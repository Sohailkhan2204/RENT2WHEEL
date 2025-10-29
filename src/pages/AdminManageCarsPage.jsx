import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredCars } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import { EyeIcon, Trash2Icon } from '../components/icons';

const AdminManageCarsPage = () => {
  const [cars, setCars] = useState(featuredCars.slice(0, 4));

  const handleDeleteCar = (carId) => {
    if (window.confirm('Are you sure you want to delete this car? This action cannot be undone.')) {
      setCars(currentCars => currentCars.filter(car => car.id !== carId));
      toast.success('Car has been deleted.');
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Manage Cars</h1>
        <p className="text-slate-500 mt-1">
          View all listed cars, update their details, or remove them from the booking platform
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full align-middle">
          <div className="grid grid-cols-12 gap-4 text-left text-sm font-medium text-slate-500 border-b border-slate-200 pb-3">
            <div className="col-span-5 pl-4">Car</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>

          <motion.div layout className="divide-y divide-slate-200">
            <AnimatePresence>
              {cars.map((car) => (
                <motion.div 
                  key={car.id} 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                  className="grid grid-cols-12 gap-4 items-center py-4"
                >
                  <div className="col-span-5 flex items-center gap-4 pl-4">
                    <img src={car.image} alt={car.name} className="w-16 h-10 object-cover rounded-md" />
                    <div>
                      <span className="font-medium text-slate-800">{car.name}</span>
                      <p className="text-sm text-slate-500">{car.seats} seats • {car.transmission.toLowerCase()}</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-slate-600">{car.category}</div>
                  <div className="col-span-2 font-medium text-slate-800">₹{car.price.toLocaleString('en-IN')}/day</div>
                  <div className="col-span-1">
                    <StatusBadge status={car.available ? 'Available' : 'Not Available'} />
                  </div>
                  <div className="col-span-2 flex justify-center items-center gap-4">
                    <Link to={`/car/${car.id}`} className="text-slate-500 hover:text-slate-800" title="View Car Details">
                      <EyeIcon className="w-5 h-5" />
                    </Link>
                    <button onClick={() => handleDeleteCar(car.id)} className="text-slate-500 hover:text-red-600" title="Delete Car">
                      <Trash2Icon className="w-5 h-5" />
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

export default AdminManageCarsPage;
