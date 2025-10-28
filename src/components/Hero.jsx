import React from 'react';
import { SearchIcon, ChevronDownIcon } from './icons';

const Hero = () => {
  return (
    <section className="relative bg-slate-100 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-true-800-solid font-outfit mb-12">
          Luxury Cars on Rent
        </h1>

        <div className="relative max-w-4xl mx-auto bg-white rounded-full shadow-form p-4 mb-10">
          <form className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <div className="text-left px-4">
              <label className="text-sm font-medium text-slate-800/90">Pickup Location</label>
              <div className="flex items-center justify-between">
                <p className="text-slate-800/50">Bangalore</p>
                <ChevronDownIcon className="h-5 w-5 text-gray-700-light" />
              </div>
            </div>
            <div className="text-left px-4 border-l">
              <label className="text-sm font-medium text-slate-800/90">Pick-up Date</label>
              <div className="flex items-center justify-between">
                <p className="text-slate-800/50">28-Mar 2025</p>
                <ChevronDownIcon className="h-5 w-5 text-gray-700-light" />
              </div>
            </div>
            <div className="text-left px-4 border-l">
              <label className="text-sm font-medium text-slate-800/90">Return Date</label>
              <div className="flex items-center justify-between">
                <p className="text-slate-800/50">30-Mar 2025</p>
                <ChevronDownIcon className="h-5 w-5 text-gray-700-light" />
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
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/135d/140f/5786166f512b55e2f4e35f33e60af240?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YZQfmVTgV01Zu4Amw4FBo2LlpavvKmL8gZIQaxEqp2AyDoH7oHCL~hEGkoOHM-5IULPFZUSqM0-VGR7hb7~cvVUDErQgp5gj-6z3PNMOU526SLtYovG~cfbLD0oSY3KzD~n3DX-lvNM0byYQ6jfNLtbKVrmajnlqbcP2be04PGLzm0KCU3dDZluXzWzTHwrW9ZhII4B4xv8cMat0vYaiip8Y7cHpTevfe5S7H7Wjsf1vobO6QbzIrIbsT5gucXaaa4kpy4ROnsbDJF1Pl1sT7QgO24SLJC7BEwlDYNl9p7AbI1FmhAzpCN3bVsh2O05WvPu8jVNfq9Li~eHhkHHCFQ__" 
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
