import React from 'react';
import BathtubIcon from '@mui/icons-material/Bathtub';
import './Amenity.css';

function Bathtub({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <BathtubIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Bathtub</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <BathtubIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Bathtub</p>
            </div>
        )
    }
}

export default Bathtub;