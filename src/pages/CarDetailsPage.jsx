import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredCars } from '../data/mockData';
import { ArrowLeftIcon, UsersIcon, FuelIcon, CarIcon, MapPinIcon, CheckIcon } from '../components/icons';

const CarDetailsPage = () => {
  const { id } = useParams();
  const car = featuredCars.find(c => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-48 text-center">
        <h2 className="text-2xl font-semibold">Car not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Go back to Home
        </Link>
      </div>
    );
  }
  
  const carImage = car.image || 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/f3f4f6/64748b?text=Image';

  const features = [
    'Leather Seats',
    'Panoramic Sunroof',
    'Wireless Charging',
    '360 Camera',
  ];

  const carDetails = [
    { Icon: UsersIcon, text: `${car.seats} Seats` },
    { Icon: FuelIcon, text: car.fuel },
    { Icon: CarIcon, text: car.transmission },
    { Icon: MapPinIcon, text: car.location },
  ];

  return (
    <div className="bg-white font-outfit pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Back to all cars</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Car Info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-100 rounded-lg mb-8 flex items-center justify-center p-4">
               <img src={'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/d5c2/616f/853add84ce8f822b4ddbd4c5c30bed70?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iIySwdV4Ysh-XjxSz-OOXxPAmREeNqZaXzZsae7Thftpf8z8HKrnNYpcE8tW~2Q4ei7MUJQJOKz37aoVwYPK8MXp0dqP5P3-YjsaesaRvfaZtRu9XJw6dU7dIomnlnaxKnH-du7ZIV-x2FGi6d-3pqfaMgfdKxXcLYFcr2UHG0MuBVVjrBX~40-aayL7VFQOuCUGKwp496lI5VX8z-Cl5wq3N8m-9rR0YQjrXTuQRxacrM8Skpeh1EmD-xNXgUs95AkKnYWNkJ2XohNjSVgw71Oah7Vpm3YloOiaG~ZttXWfDeK48ga0S04etGKpURo11XZQjIO7Mu7tiaFpZIfv3g__'} alt={car.name} className="w-full max-w-2xl h-auto object-cover rounded-lg" />
            </div>
            
            <h1 className="text-3xl font-bold text-slate-800 mb-1">{car.name.toUpperCase()}</h1>
            <p className="text-base text-slate-500 mb-6">{car.year} • {car.type}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {carDetails.map(({ Icon, text }, index) => (
                <div key={index} className="bg-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-center h-24">
                  <Icon className="w-6 h-6 text-slate-500 mb-2" />
                  <span className="text-sm font-medium text-slate-950">{text}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-semibold text-slate-950 mb-3">Description</h2>
              <p className="text-base text-slate-500 leading-relaxed">
                The {car.name} is a {car.type.toLowerCase()} that combines luxury, performance, and versatility. First introduced as a pioneer in its class, it continues to set standards with its dynamic driving experience and premium interior.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-950 mb-4">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-light/30 rounded-full p-1 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-base text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-card p-6 sticky top-28">
              <div className="flex items-baseline justify-between mb-6 border-b border-slate-200 pb-4">
                <span className="text-3xl font-bold text-slate-800">${car.price}</span>
                <span className="text-sm text-slate-500">/per day</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-slate-800 mb-2 block">Pickup Date</label>
                  <input type="text" placeholder="Select date" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-800 mb-2 block">Return Date</label>
                  <input type="text" placeholder="Select date" className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                No credit card required to reserve
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
