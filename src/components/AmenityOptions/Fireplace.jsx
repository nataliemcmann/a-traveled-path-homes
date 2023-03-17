import React from 'react';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import './Amenity.css';

function Fireplace({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <FireplaceIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Fireplace</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <FireplaceIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Fireplace</p>
            </div>
        )
    }
}

export default Fireplace;