import React from 'react';

function PhotoItem ({ photo }) {

    return (
        <>
            <li>
                <img src={photo.imagePath} width="300" height="300"/>
            </li>
        </>
    )
}

export default PhotoItem;