import React from 'react';
import AmenityItem from '../AmenityItem/AmenityItem';

function DetailsAmenitiesList({ amenities }){

    return (
        <>
            {amenities && amenities.map((amenity, index) => {
                return <AmenityItem key={index} amenity={amenity.amenitiesId}/>
            })}
        </>
    )
}

export default DetailsAmenitiesList;