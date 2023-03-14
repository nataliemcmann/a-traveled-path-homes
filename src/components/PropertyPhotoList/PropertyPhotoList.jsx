import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoItem from '../PhotoItem/PhotoItem';
import './PropertyPhotoList.css';
//mui component
import { Grid } from '@mui/material';


function PropertyPhotoList ({ trigger, setTrigger }) {

    const photoReducer = useSelector(store => store.photoReducer);

    return (trigger) ? (
        <div className='view-photos'>
            <div className='view-photos-inner'>
                <p>Select a feature photo for the property.</p>
                    <Grid 
                        container spacing={2}
                        columns={3}
                        flexWrap='wrap'
                        justifyContent='center'
                        marginTop={2}
                    >
                        {photoReducer.uploadedFiles && photoReducer.uploadedFiles.map((file, index) => {
                        return <PhotoItem key={index} file={file}/>
                    })}
                    </Grid>
                <button className='close-btn' onClick={() => setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export default PropertyPhotoList;