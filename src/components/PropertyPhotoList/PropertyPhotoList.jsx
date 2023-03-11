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
                <p>Select a feature photo for the property and remove photos if needed.</p>
                    <Grid 
                        container spacing={2}
                        columns={3}
                        flexWrap='wrap'
                        justifyContent='center'
                        marginTop={2}
                    >
                        {photoReducer.residencePhotos && photoReducer.residencePhotos.map((photo) => {
                        return <PhotoItem key={photo.id} photo={photo}/>
                    })}
                    </Grid>
                <button className='close-btn' onClick={() => setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export default PropertyPhotoList;