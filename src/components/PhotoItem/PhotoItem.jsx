import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PhotoItem.css';
//mui component
import { Card, CardActions } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function PhotoItem ({ photo }) {
    const dispatch = useDispatch();
    const propertyReducer = useSelector(store => store.propertyReducer);

    const [selected, setSelected] = useState(false);

    const selectAsFeature = () => {
        dispatch({
            type: 'SET_FEATURE_PHOTO',
            payload: photo.id
        });
        setSelected(true);
    }

    const removePhoto = () => {
        dispatch({
            type: 'DELETE_A_PHOTO',
            payload: photo.id
        });
    }

    if (propertyReducer) {
            return (selected && propertyReducer.editResidence.photo === photo.id) ? (
                <>
                    <Card className="selected" margin={2}>
                        <img 
                            className="relative" 
                            src={photo.imagePath}
                            onClick={selectAsFeature}
                        />
                        <CardActions>
                            <DeleteForeverIcon onClick={removePhoto}/>
                        </CardActions>
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
                        <CardActions>
                            <DeleteForeverIcon onClick={removePhoto}/>
                        </CardActions>
                    </Card>
                </>
            )
    } else {
        return (selected) ? (
            <>
                <Card className="selected" margin={2}>
                    <img 
                        className="relative" 
                        src={photo.imagePath}
                        onClick={selectAsFeature}
                    />
                    <CardActions>
                        <DeleteForeverIcon onClick={removePhoto}/>
                    </CardActions>
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
                    <CardActions>
                        <DeleteForeverIcon onClick={removePhoto}/>
                    </CardActions>
                </Card>
            </>
        )
    }
}

export default PhotoItem;