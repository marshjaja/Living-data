
import React, { useState } from 'react';
import './App.css';
import BarChart from './components/charts/BarChart';
import { UserData } from './components/charts/Data';
import Crime from './components/Crime'; // Import the Crime component
import SearchBar from './components/SearchBar';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map((data) => data.userGain),
    }]
  });

  return (
    <div className='App'>
      <BarChart chartData={userData}/>
      {/* <Crime /> Render the Crime component */}
      <SearchBar />
    </div>
  );
}

export default App;

//---------------------------------------------------------
// import React, { useState } from 'react';
// import './App.css';
// import BarChart from './components/charts/BarChart';
// import { UserData } from './components/charts/Data';
// import Crime from './components/Crime';
// import SearchBar from './components/SearchBar';

// function App() {
//   const [buyPrices, setBuyPrices] = useState([]);
//   const [rentPrices, setRentPrices] = useState([]);

//   const handleCityData = (cityData) => {
//     setBuyPrices(cityData.buyPrices);
//     setRentPrices(cityData.rentPrices);
//   };

//   return (
//     <div className='App'>
//       <BarChart chartData={UserData.map((data) => data.userGain)} />
//       <Crime />
//       <SearchBar onCityData={handleCityData} />
//       <div>
//         <h2>Buy Prices</h2>
//         <ul>
//           {buyPrices.map((price, index) => (
//             <li key={index}>{price}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Rent Prices</h2>
//         <ul>
//           {rentPrices.map((price, index) => (
//             <li key={index}>{price}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;


