import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredCars } from '../data/mockData';
import CarCard from '../components/CarCard';
import FilterModal from '../components/FilterModal';
import { SearchIcon, FilterIcon } from '../components/icons';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
};
  
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
};

const CarsPage = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const initialFilters = {
        price: [0, 50000],
        categories: [],
        seats: [],
    };
    const [activeFilters, setActiveFilters] = useState(initialFilters);

    const allCars = useMemo(() => [...featuredCars, ...featuredCars.map(c => ({...c, id: c.id + 100}))], []);

    const filteredCars = useMemo(() => {
        let cars = allCars;
        const query = searchQuery.toLowerCase();

        if (query) {
            cars = cars.filter(car => 
                car.name.toLowerCase().includes(query) ||
                car.type.toLowerCase().includes(query) ||
                car.location.toLowerCase().includes(query)
            );
        }

        cars = cars.filter(car => {
            const priceCondition = car.price >= activeFilters.price[0] && car.price <= activeFilters.price[1];
            const categoryCondition = activeFilters.categories.length === 0 || activeFilters.categories.includes(car.category);
            const seatsCondition = activeFilters.seats.length === 0 || activeFilters.seats.some(s => {
                if (s === 7) return car.seats >= 7;
                return car.seats === s;
            });
            
            return priceCondition && categoryCondition && seatsCondition;
        });
        
        return cars;
    }, [searchQuery, activeFilters, allCars]);

    const handleApplyFilters = (newFilters) => {
        setActiveFilters(newFilters);
    };

    const handleResetFilters = () => {
        setActiveFilters(initialFilters);
    };

    const activeFilterCount = 
        (activeFilters.categories.length) +
        (activeFilters.seats.length) +
        (activeFilters.price[0] !== initialFilters.price[0] || activeFilters.price[1] !== initialFilters.price[1] ? 1 : 0);

    return (
        <>
            <main className="font-outfit pt-20">
                <div className="bg-slate-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-semibold text-slate-950 font-roboto mb-4">
                            Available Cars
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Browse our selection of premium vehicles available for your next adventure
                        </p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                            <div className="relative w-full md:w-1/2 lg:w-1/3">
                                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search by make, model, or features"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-12 pl-12 pr-12 border border-slate-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <button 
                                    onClick={() => setIsFilterOpen(true)}
                                    className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center text-slate-500 hover:text-blue-600"
                                >
                                    <FilterIcon className="h-5 w-5" />
                                    {activeFilterCount > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-bold"
                                        >
                                            {activeFilterCount}
                                        </motion.span>
                                    )}
                                </button>
                            </div>
                            <p className="text-base text-gray-text">
                                Showing {filteredCars.length} Cars
                            </p>
                        </div>

                        {filteredCars.length > 0 ? (
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredCars.map((car, index) => (
                                    <motion.div key={`${car.id}-${index}`} variants={itemVariants}>
                                        <CarCard car={car} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="text-center py-16">
                                <h3 className="text-xl font-semibold text-slate-800">No cars found</h3>
                                <p className="text-slate-500 mt-2">Try adjusting your search or filters.</p>
                                <button onClick={() => { handleResetFilters(); setIsFilterOpen(false); }} className="mt-4 text-blue-600 hover:underline">Reset all filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <FilterModal 
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApply={handleApplyFilters}
                onReset={handleResetFilters}
                initialFilters={activeFilters}
                carData={allCars}
            />
        </>
    );
};

export default CarsPage;
