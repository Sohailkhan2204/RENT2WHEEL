import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from './icons';

const FilterModal = ({ isOpen, onClose, onApply, onReset, initialFilters, carData }) => {
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters, isOpen]);

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    setFilters(prev => ({ ...prev, categories: newCategories }));
  };

  const handleSeatsChange = (seatCount) => {
    const newSeats = filters.seats.includes(seatCount)
      ? filters.seats.filter(s => s !== seatCount)
      : [...filters.seats, seatCount];
    setFilters(prev => ({ ...prev, seats: newSeats }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newPriceRange = [...filters.price];
    if (name === 'minPrice') {
      newPriceRange[0] = value ? parseInt(value, 10) : 0;
    } else {
      newPriceRange[1] = value ? parseInt(value, 10) : 50000;
    }
    setFilters(prev => ({ ...prev, price: newPriceRange }));
  };
  
  const handleApplyClick = () => {
    onApply(filters);
    onClose();
  };

  const handleResetClick = () => {
    onReset();
    onClose();
  };

  const uniqueCategories = [...new Set(carData.map(car => car.category))];
  const seatOptions = [2, 4, 5, 7];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white rounded-xl shadow-lg w-full max-w-lg" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800">Filters</h2>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100">
                <XIcon className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h3 className="text-base font-medium text-slate-700 mb-3">Price Range (₹/day)</h3>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">₹</span>
                      <input
                          type="number"
                          name="minPrice"
                          placeholder="Min"
                          value={filters.price[0] === 0 ? '' : filters.price[0]}
                          onChange={handlePriceChange}
                          className="w-full border border-slate-300 rounded-md p-2 pl-7 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                  </div>
                  <span className="text-slate-400">-</span>
                  <div className="relative flex-1">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">₹</span>
                      <input
                          type="number"
                          name="maxPrice"
                          placeholder="Max"
                          value={filters.price[1] === 50000 ? '' : filters.price[1]}
                          onChange={handlePriceChange}
                          className="w-full border border-slate-300 rounded-md p-2 pl-7 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium text-slate-700 mb-3">Category</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {uniqueCategories.map(category => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium text-slate-700 mb-3">Seats</h3>
                <div className="flex items-center gap-3">
                  {seatOptions.map(seats => (
                    <button
                      key={seats}
                      onClick={() => handleSeatsChange(seats)}
                      className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors ${
                        filters.seats.includes(seats)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {seats}{seats === 7 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 border-t border-slate-200 bg-slate-50 rounded-b-xl">
              <button onClick={handleResetClick} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Reset All
              </button>
              <button onClick={handleApplyClick} className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
