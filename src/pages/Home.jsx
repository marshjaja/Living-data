import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import Header from '../components/Header';

import About from '../components/About';
import Crime from '../components/Crime';
import Footer from '../components/Footer';

function Home() {
  const [propertyData, setPropertyData] = useState(null);
  return (
    <div>
      <header id="header">
        <Header />
      </header>

      <h1>Property Listings</h1>
      <SearchBar setPropertyData={setPropertyData} />
      <PropertyCard propertyData={propertyData} />
      <About />

      <Crime />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
