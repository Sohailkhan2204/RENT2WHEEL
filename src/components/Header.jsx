import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from './icons';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.41016 7.75L29.4902 23.78L28.8302 8.04L3.41016 7.75Z" fill="#2563EB"/>
      <path d="M0 0L28.83 8.04L26.08 16.03L3.41 7.75L0 0Z" fill="#2563EB"/>
    </svg>
    <span className="font-bold text-2xl text-gray-true-800-solid font-outfit">CarRental</span>
  </Link>
);

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'My Bookings', path: '/bookings' },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-slate-100/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-200">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="text-gray-true-800/80 font-medium hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search cars"
                className="border border-gray-300 rounded-full py-2 px-4 w-60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Link to="/admin" className="text-gray-true-800/80 font-medium hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link to="#" className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Logout
            </Link>
          </div>
          {/* Mobile menu button will go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
