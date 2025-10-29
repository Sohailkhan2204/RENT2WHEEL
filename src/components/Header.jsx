import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, ListIcon, XIcon } from './icons';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/cars?search=${searchQuery.trim()}`);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    toast.success('You have been logged out.');
    setIsMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'My Bookings', path: '/bookings' },
  ];

  const mobileNavLinks = [...navLinks, { name: 'Dashboard', path: '/admin' }];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-slate-100/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-slate-200">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => 
                  `text-gray-true-800/80 font-medium hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text" 
                placeholder="Search cars"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-full py-2 px-4 w-60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </button>
            </form>
            <Link to="/admin" className="text-gray-true-800/80 font-medium hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <a href="#" onClick={handleLogout} className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Logout
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-true-800-solid focus:outline-none p-2 -mr-2">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <XIcon className="h-7 w-7" /> : <ListIcon className="h-7 w-7" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-20 bg-black/30"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-20 w-80 max-w-[85vw] h-full bg-white p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                  <Logo />
                  <button onClick={() => setIsMenuOpen(false)} className="text-gray-true-800-solid focus:outline-none p-2 -mr-2">
                      <XIcon className="h-7 w-7" />
                  </button>
              </div>
              <nav className="flex flex-col space-y-2 flex-grow">
                {mobileNavLinks.map(link => (
                  <NavLink 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `text-gray-true-800/80 font-medium py-3 text-lg rounded-md px-3 hover:text-blue-600 hover:bg-slate-100 transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              <a href="#" onClick={handleLogout} className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center mt-6">
                Logout
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
