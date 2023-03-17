import React from 'react';
import AmenityItem from '../AmenityItem/AmenityItem';

function FormAmenitiesList({ amenities }){

    return (
        <>
            {amenities && amenities.map((amenity, index) => {
                return <AmenityItem key={index} amenity={amenity}/>
            })}
        </>
    )
}

export default FormAmenitiesList;