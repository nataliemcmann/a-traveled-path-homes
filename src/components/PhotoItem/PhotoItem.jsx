import React from 'react';

function PhotoItem ({ photo }) {

    return (
        <>
            <li>
                <img src={photo.imagePath} width="500" height="500"/>
            </li>
        </>
    )
}

export default PhotoItem;