import React from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './Amenity.css';

function Parking({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <DirectionsCarIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Parking</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <DirectionsCarIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Parking</p>
            </div>
        )
    }
}

export default Parking;