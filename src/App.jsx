import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarDetailsPage from './pages/CarDetailsPage';
import CarsPage from './pages/CarsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AdminLayout from './components/AdminLayout';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminAddCarPage from './pages/AdminAddCarPage';
import AdminManageBookingsPage from './pages/AdminManageBookingsPage';

const AppLayout = () => (
  <div className="bg-white font-outfit">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cars" element={<CarsPage />} />
        <Route path="car/:id" element={<CarDetailsPage />} />
        <Route path="bookings" element={<MyBookingsPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="add-car" element={<AdminAddCarPage />} />
        <Route path="manage-bookings" element={<AdminManageBookingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
