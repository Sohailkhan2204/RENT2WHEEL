import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, PlusSquareIcon, CarIcon, ClipboardListIcon } from './icons';

const Logo = () => (
  <div className="flex items-center gap-2 mb-12">
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.41016 7.75L29.4902 23.78L28.8302 8.04L3.41016 7.75Z" fill="#2563EB"/>
      <path d="M0 0L28.83 8.04L26.08 16.03L3.41 7.75L0 0Z" fill="#2563EB"/>
    </svg>
    <span className="font-bold text-2xl text-gray-true-800-solid font-outfit">CarRental</span>
  </div>
);

const AdminSidebar = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Car', path: '/admin/add-car', icon: PlusSquareIcon },
    { name: 'Manage Cars', path: '/admin/manage-cars', icon: CarIcon },
    { name: 'Manage Bookings', path: '/admin/manage-bookings', icon: ClipboardListIcon },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      <Logo />
      
      <div className="flex items-center gap-4 mb-10">
        <img 
            src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4441/f63d/d6a4767d62e9b16b5b04484ca10?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eFgeiax1Mf36knZYMNunUM3Ccum2dFtrPquvA~SUDYkPsv9f9QsYRQ86Wx6qxn2d30D7jaUwJkw0h521a-xUH0gmVujhzQfH8exlg7Ha5qlI~btAMMJ4fksnKV65tKAyLUvjN5x~qGobl3h8qgT6Aw~M7SivrQSqAyNtm15SKQzLlc8sciJfLhP1XZXgnpNZypm-ye9lfKdXg9mIlEBqyBySjrXNnSp7OjlVHpxtku61rkQo3SRRjJgIZl1iYV0wx7Zh9pCiFAj5mhVvJnoq8czAPRxq2hIqUELJXtCheAe2EUSljIuGY4h-qhdiiTnmCF6sH6oiMHynf9UKwi-SmA__" 
            alt="Richard Sanford" 
            className="w-14 h-14 rounded-full object-cover"
        />
        <div>
            <h3 className="font-medium text-gray-700">Richard Sanford</h3>
        </div>
      </div>

      <nav className="flex flex-col space-y-2">
        {navLinks.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end={path === '/admin' || path.startsWith('/admin/manage')}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
