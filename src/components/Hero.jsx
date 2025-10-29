import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon, CalendarDaysIcon } from './icons';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (location) searchParams.append('location', location);
    if (pickupDate) searchParams.append('pickup', pickupDate);
    if (returnDate) searchParams.append('return', returnDate);
    
    navigate(`/cars?${searchParams.toString()}`);
  };

  return (
    <section className="relative bg-slate-100 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-true-800-solid font-outfit mb-12">
          Luxury cars on Rent
        </h1>

        <div className="relative max-w-4xl mx-auto bg-white rounded-[50px] shadow-form p-4 mb-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <div className="text-left px-4 py-2">
              <label htmlFor="pickup-location" className="text-sm font-medium text-slate-800/90 flex items-center cursor-pointer">
                Pickup Location
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </label>
              <input
                type="text"
                id="pickup-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Please select location"
                className="w-full text-slate-800 placeholder-slate-400 mt-1 focus:outline-none bg-transparent"
              />
            </div>
            <div className="text-left px-4 py-2 border-l">
              <label htmlFor="pickup-date" className="text-sm font-medium text-slate-800/90">Pick-up Date</label>
              <div className="flex items-center justify-between mt-1">
                <input
                  type="date"
                  id="pickup-date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="text-left px-4 py-2 border-l">
              <label htmlFor="return-date" className="text-sm font-medium text-slate-800/90">Return Date</label>
              <div className="flex items-center justify-between mt-1">
                <input
                  type="date"
                  id="return-date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>
            <button type="submit" className="bg-blue-600 text-white rounded-full flex items-center justify-center gap-2 h-14 w-full md:w-auto md:px-8 hover:bg-blue-700 transition-colors">
              <SearchIcon className="h-5 w-5" />
              <span className="font-medium">Search</span>
            </button>
          </form>
        </div>

        <div className="max-w-4xl mx-auto">
          <img 
            src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/135d/140f/5786166f512b55e2f4e35f33e60af240?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YZQfmVTgV01Zu4Amw4FBo2LlpavvKmL8gZIQaxEqp2AyDoH7oHCL~hEGkoOHM-5IULPFZUSqM0-VGR7hb7~cvVUDErQgp5gj-6z3PNMOU526SLtYovG~cfbLD0oSY3KzD~n3DX-lvNM0byYQ6jfNLtbKVrmajnlqbcP2be04PGLzm0KCU3dDZluXzWzTHwrW9ZhII4B4xv8cMat0vYaiip8Y7cHpTevfe5S7H7Wjsf1vobO6QbzIrIbsT5gucXaaa4kpy4ROnsbDJF1Pl1sT7QgO24SLJC7BEwlDYNl9p7AbI1FmhAzpCN3bVsh2O05WvPu8jVNfq9Li~eHhkHHCFQ__" 
            alt="Silver luxury sedan" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="h-32 bg-white w-full"></div>
    </section>
  );
};

export default Hero;
