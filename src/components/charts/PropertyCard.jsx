import React from 'react';

// PropertyCard functional component
// It receives price and imageSrc as props
function PropertyCard({ price, imageSrc }) {
  return (
    <div className="property-card"> {/* Outer container for the property card */}
      <img src={imageSrc} alt="Property" /> {/* Property image */}
      <div className="property-details"> {/* Container for property details */}
        <p>Price: £{price}</p> {/* Displaying property price */}
      </div>
    </div>
  );
}

export default PropertyCard; 
