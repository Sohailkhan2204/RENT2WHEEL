import React from 'react';
import Hero from '../components/Hero';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedVehicles />
      <Banner />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

export default HomePage;
