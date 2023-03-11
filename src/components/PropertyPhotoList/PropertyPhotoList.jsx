import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoItem from '../PhotoItem/PhotoItem';
import './PropertyPhotoList.css';
//mui component
import { Grid } from '@mui/material';


function PropertyPhotoList ({ trigger, setTrigger, residenceId }) {
    const dispatch = useDispatch();

    const photoReducer = useSelector(store => store.photoReducer);
    useEffect(() => {
        dispatch({ type: "FETCH_RESIDENCE_PHOTOS", payload: residenceId})
    }, []);

    return (trigger) ? (
        <div className='view-photos'>
            <div className='view-photos-inner'>
                    <Grid 
                        container spacing={2}
                        flexWrap='wrap'
                        justifyContent='center'
                    >
                        {photoReducer.residencePhotos && photoReducer.residencePhotos.map((photo) => {
                        return <PhotoItem id key={photo.id} photo={photo}/>
                    })}
                    </Grid>
                <button className='close-btn' onClick={() => setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export default PropertyPhotoList;