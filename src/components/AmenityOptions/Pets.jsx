import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import './Amenity.css';

function Pets({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <PetsIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Pets Allowed</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <PetsIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Pets Allowed</p>
            </div>
        )
    }
}

export default Pets;