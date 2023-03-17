import React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import './Amenity.css';

function Heating({ status }) {
    if (status) {
        return (
            <div className='amenity clicked'>
                <LocalFireDepartmentIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Heating</p>
            </div>
        )
    } else {
        return (
            <div className='amenity'>
                <LocalFireDepartmentIcon sx={{width: '3rem', height: '3rem'}}/>
                <p>Heating</p>
            </div>
        )
    }
}

export default Heating;