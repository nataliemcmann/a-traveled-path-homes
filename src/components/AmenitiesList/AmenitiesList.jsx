import React from 'react';
import { useSelector } from 'react-redux'
import AmenityItem from '../AmenityItem/AmenityItem';

function AmenitiesList(){
    const amenitiesReducer = useSelector((store) => store.amenitiesReducer);

    return (
        <>
            {amenitiesReducer && amenitiesReducer.amenitiesArray.map((amenity, index) => {
                return <AmenityItem key={index} amenity={amenity}/>
            })}
        </>
    )
}

export default AmenitiesList;