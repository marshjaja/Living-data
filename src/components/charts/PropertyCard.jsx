

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
                                    <Card.Title>Property Details</Card.Title>
                                    <p>Address: {property.displayAddress}</p>
                                    <p>Price: {property.price.amount} GBP</p>
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



