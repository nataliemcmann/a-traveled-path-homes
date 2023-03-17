import React from 'react';
import MonitorIcon from '@mui/icons-material/Monitor';
import './Amenity.css';

function TV({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <MonitorIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>TV</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <MonitorIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>TV</p>
            </div>
        )
    }
}

export default TV;