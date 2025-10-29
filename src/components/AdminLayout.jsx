import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-slate-100 font-outfit">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200">
            <div className="px-8 h-20 flex items-center justify-end">
                 {/* This could be a user menu or other header items */}
            </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
