import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function AmenitiesOption({ allowAmenities }) {
    const history = useHistory();

    function toAmenities() {
        history.push('/amenities')
    }

    return (allowAmenities) ? (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toAmenities}></Button>
                    </div>
                    <p>Amenities</p>
            </div>
        </>
    ) : (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator restrict"></div>
                    <p className="restricted">Amenities</p>
            </div>
        </>
    ) 
}

export default AmenitiesOption;