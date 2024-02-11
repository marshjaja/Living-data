

import React from 'react';
import Card from 'react-bootstrap/Card';
import './PropertyCard.css';

function PropertyCard({ propertyData }) {
    if (!propertyData || !propertyData.data) {
        return null;
    }

    return (
        <div>
            {propertyData.data.map(property => (
                <div key={property.id} className="main-container">
                    <div className="property-card-container">
                        <div className="image-container">
                            {property.propertyImages && property.propertyImages.mainImageSrc && (
                                <img src={property.propertyImages.mainImageSrc} alt="Main Image" style={{ width: '400px' }} />
                            )}
                        </div>
                        <div className="card-container">
                            <Card-propriety>
                                <Card.Body>
                                    {/* <Card.Title>Property Details</Card.Title> */}
                                    <p>Address: {property.displayAddress}</p>
                                    {/* <p>Price: {property.price.amount} GBP</p> */}
                                    <p>Property Type: {property.propertyTypeFullDescription}</p>
                                    <p>Bedrooms: {property.bedrooms}</p>
                                    <p>Bathrooms: {property.bathrooms}</p>
                                    {/* <p>Summary: {property.summary}</p> */}
                                    <p>Price: {property.price.displayPrices[0].displayPrice}</p>
                                    {/* <p>Price: {property.price.displayPrices[1].displayPrice}</p> */}
                                    <p>Contact: {property.customer.contactTelephone}</p>
                                </Card.Body>
                            </Card-propriety>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PropertyCard;

