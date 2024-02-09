// import React, { useEffect, useState } from 'react';
// import axios from 'axios';



// const Crime = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://ukpolicedata.p.rapidapi.com/locate-neighbourhood',
//         params: {
//           q: '50.636096,-4.360882'
//         },
//         headers: {
//           'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
//           'X-RapidAPI-Host': 'ukpolicedata.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setData(response.data);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   return (
//     <div>
//       {error && <div>Error: {error.message}</div>}
//       {data && (
//         <div>
//           <h2>Response Data</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Crime;
//------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Crime = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://ukpolicedata.p.rapidapi.com/locate-neighbourhood',
        params: {
          q: '50.636096,-4.360882'
        },
        headers: {
          'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
          'X-RapidAPI-Host': 'ukpolicedata.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data); // Log the JSON object
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h2>Response Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Crime;
