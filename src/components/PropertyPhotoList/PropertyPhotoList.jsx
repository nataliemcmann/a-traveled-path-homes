import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoItem from '../PhotoItem/PhotoItem';
import './PropertyPhotoList.css';


function PropertyPhotoList ({ trigger, setTrigger, residenceId }) {
    const dispatch = useDispatch();

    const photoReducer = useSelector(store => store.photoReducer);
    useEffect(() => {
        dispatch({ type: "FETCH_RESIDENCE_PHOTOS", payload: residenceId})
    }, []);

    return (trigger) ? (
        <div className='view-photos'>
            <div className='view-photos-inner'>
                    <ul>
                        {photoReducer.residencePhotos && photoReducer.residencePhotos.map((photo) => {
                        return <PhotoItem id key={photo.id} photo={photo}/>
                    })}
                    </ul>
                <button className='close-btn' onClick={() => setTrigger(false)}>Close</button>
            </div>
        </div>
    ) : "";
}

export default PropertyPhotoList;