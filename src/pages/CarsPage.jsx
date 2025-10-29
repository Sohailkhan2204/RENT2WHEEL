import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { featuredCars } from '../data/mockData';
import CarCard from '../components/CarCard';
import { SearchIcon, FilterIcon } from '../components/icons';

const CarsPage = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

    const filteredCars = useMemo(() => {
        let cars = [...featuredCars];
        const query = searchQuery.toLowerCase();

        if (query) {
            cars = cars.filter(car => 
                car.name.toLowerCase().includes(query) ||
                car.type.toLowerCase().includes(query) ||
                car.location.toLowerCase().includes(query)
            );
        }
        
        return cars;
    }, [searchQuery]);

    return (
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
                                className="w-full h-12 pl-12 pr-4 border border-slate-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                <FilterIcon className="h-5 w-5 text-slate-500" />
                            </button>
                        </div>
                        <p className="text-base text-gray-text">
                            Showing {filteredCars.length} Cars
                        </p>
                    </div>

                    {filteredCars.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCars.map(car => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold text-slate-800">No cars found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default CarsPage;
