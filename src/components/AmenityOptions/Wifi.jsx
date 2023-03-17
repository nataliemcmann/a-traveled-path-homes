import React from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import './Amenity.css';

function Wifi({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <WifiIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>WI-FI</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <WifiIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>WI-FI</p>
            </div>
        )
    }
}

export default Wifi;