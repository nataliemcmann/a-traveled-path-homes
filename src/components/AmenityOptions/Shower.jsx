import React from 'react';
import ShowerIcon from '@mui/icons-material/Shower';
import './Amenity.css';

function Shower({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <ShowerIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Shower</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <ShowerIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Shower</p>
            </div>
        )
    }
}

export default Shower;