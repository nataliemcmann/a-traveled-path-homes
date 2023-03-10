import React, { useEffect } from 'react';

import PhotoItem from '../PhotoItem/PhotoItem';


function PropertyPhotoList ({ residenceId }) {
    const photoReducer = useSelector(store => store.photoReducer);
    useEffect(() => {
        dispatch({ type: "FETCH_RESIDENCE_PHOTOS", payload: residenceId})
    }, []);

    return (
        <>
            <ul>
                {photoReducer.residencePhotos && photoReducer.residencePhotos.map((photo) => {
                return <PhotoItem id key={photo.id} photo={photo}/>
            })}
            </ul>
        </>
    )
}

export default PropertyPhotoList;