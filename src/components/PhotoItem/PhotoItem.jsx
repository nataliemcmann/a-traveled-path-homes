import React from 'react';
import './PhotoItem.css';
//mui component
import { Card } from '@mui/material'

function PhotoItem ({ photo }) {

    return (
        <>
            <Card margin={2}>
                <img className="relative" src={photo.imagePath}/>
            </Card>
        </>
    )
}

export default PhotoItem;