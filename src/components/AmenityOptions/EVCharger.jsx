import React from 'react';
import { ElectricCarIcon } from '@mui/icons-material';
import './Amenity.css';

function EV({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <ElectricCarIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>EV Charging</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <ElectricCarIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>EV Charging</p>
            </div>
        )
    }
}

export default EV;