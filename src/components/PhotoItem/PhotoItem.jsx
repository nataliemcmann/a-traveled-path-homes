import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PhotoItem.css';
//mui component
import { Card } from '@mui/material'

function PhotoItem ({ photo }) {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false);

    const selectAsFeature = () => {
        dispatch({
            type: 'SET_FEATURE_PHOTO',
            payload: photo.id
        });
        setSelected(true);
    }

    const handleClickOutside = () => {
        
    }

    return (selected) ? (
        <>
            <Card className="selected" margin={2}>
                <img 
                    className="relative" 
                    src={photo.imagePath}
                    onClick={selectAsFeature}
                />
            </Card>
        </>
    ) : (
        <>
            <Card margin={2}>
                <img 
                    className="relative" 
                    src={photo.imagePath}
                    onClick={selectAsFeature}
                />
            </Card>
        </>
    )
}

export default PhotoItem;