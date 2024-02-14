// import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar';
// import PropertyCard from '../components/PropertyCard/PropertyCard';
// import Header from '../components/Header';

// import About from '../components/About';
// import Crime from '../components/Crime/Crime';
// import Footer from '../components/Footer';


// function Home() {
//   const [propertyData, setPropertyData] = useState(null);
//   return (
//     <div>
//         <NavBar />
//       <header id="header">
//         <Header />
//       </header>

     
      
// 			<ContactForm />
// 			<h1>Property Listings</h1>
// 			<SearchBar
// 				setPropertyData={setPropertyData}
// 				setCrimeData={setCrimeData}
// 				setCrimeRate={setCrimeRate}
// 			/>
// 			<Crime crimeRate={crimeRate} crimeData={crimeData} />
// 			<PropertyCard propertyData={propertyData} />
// 			<About />
// 			<Crime />
// 			<Footer />
		
//       <Crime />
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default Home;


//-----------------------------
// Home.js
import React, { useState } from 'react';
import NavBar from '../components/NavBar'; // Import NavBar component
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import Header from '../components/Header';
import About from '../components/About';
import Crime from '../components/Crime/Crime';
import Footer from '../components/Footer';

function Home() {
  const [propertyData, setPropertyData] = useState(null);
  
  
  const [crimeData, setCrimeData] = useState(null);
  const [crimeRate, setCrimeRate] = useState(null);
  
  return (
    <div>
      <NavBar /> 
      <header id="header">
        <Header />
      </header>
      <div>
        <h1>Property Listings</h1>
        <SearchBar
          setPropertyData={setPropertyData}
          setCrimeData={setCrimeData}
          setCrimeRate={setCrimeRate}
        />
       
        <Crime crimeRate={crimeRate} crimeData={crimeData} />
        <PropertyCard propertyData={propertyData} />
        <About />
        <Crime />
      
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
