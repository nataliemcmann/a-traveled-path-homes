import React from 'react';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import './Amenity.css';

function Laundry({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <LocalLaundryServiceIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Laundry</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <LocalLaundryServiceIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Laundry</p>
            </div>
        )
    }
}

export default Laundry;