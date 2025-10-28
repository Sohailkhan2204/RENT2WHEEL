import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarDetailsPage from './pages/CarDetailsPage';

const AppLayout = () => (
  <div className="bg-white font-outfit">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="car/:id" element={<CarDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
