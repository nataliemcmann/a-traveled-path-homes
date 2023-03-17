import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Amenity.css';

function AC({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <AcUnitIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>A/C</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <AcUnitIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>A/C</p>
            </div>
        )
    }
}

export default AC;