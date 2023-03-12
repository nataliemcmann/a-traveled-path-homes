import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function PhotosOption({ allowPhotos }) {
    const history = useHistory();

    function toPhotos() {
        history.push('/photos')
    }

    return (allowPhotos) ? (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toPhotos}></Button>
                    </div>
                    <p>Photos</p>
            </div>
        </>
    ) : (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator restrict"></div>
                    <p className="restricted">Photos</p>
            </div>
        </>
    ) 
}

export default PhotosOption;