//------------------------------------------------

// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import Crime from './components/Crime';

// function App() {
//     // State variable to hold the search term
//     const [searchTerm, setSearchTerm] = useState('');

//     return (
//         <div>
//             <h1>Property Listings</h1>
//             {/* Render the SearchBar component and pass setSearchTerm as a prop */}
//             <SearchBar setSearchTerm={setSearchTerm} />
//             {/* Render the Crime component and pass the searchTerm as a prop */}
//             {/* <Crime searchTerm={searchTerm} /> */}
//             <Crime setSearchTerm={setSearchTerm} />
//         </div>
//     );
// }

// export default App;

//----------------------------------------------v3
// App.jsx
// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import PropertyCard from './components/charts/PropertyCard'; // Corrected import path

// function App() {
//     // State variable to hold the property data received from SearchBar
//     const [propertyData, setPropertyData] = useState(null);

//     return (
//         <div>
//             <h1>Property Listings</h1>
//             {/* Render the SearchBar component and pass setPropertyData as a prop */}
//             <SearchBar setPropertyData={setPropertyData} />
//             {/* Render the PropertyCard component and pass propertyData as a prop */}
//             <PropertyCard propertyData={propertyData} />
//         </div>
//     );
// }

// export default App;

//------------------------------v4
// App.jsx
// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import PropertyCard from './components/charts/PropertyCard'; // Import PropertyCard component
// // import Crime from './components/Crime';

// function App() {
//     // State variable to hold the property data received from SearchBar
//     const [propertyData, setPropertyData] = useState(null);

//     return (
//         <div className="container"> {/* Add class container */}
//             <h1 className="mt-5">Property Listings</h1> {/* Add margin top 5 */}
//             {/* Render the SearchBar component and pass setPropertyData as a prop */}
//             <SearchBar setPropertyData={setPropertyData} />
//             {/* Render the PropertyCard component and pass propertyData as a prop */}
//             {propertyData && <PropertyCard propertyData={propertyData} />}
//             {/* Render the Crime component */}
//             {/* <Crime /> */}
//         </div>
//     );
// }

// export default App;

//-------------------------------------
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/charts/PropertyCard';

function App() {
    const [propertyData, setPropertyData] = useState([]);

    return (
        <div className="container">
            <h1 className="mt-5">Property Listings</h1>
            <SearchBar setPropertyData={setPropertyData} />
            <PropertyCard propertyData={propertyData} />
        </div>
    );
}

export default App;


