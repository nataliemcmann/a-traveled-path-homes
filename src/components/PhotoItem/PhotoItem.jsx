import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PhotoItem.css';
//mui component
import { Card } from '@mui/material';

function PhotoItem ({ file }) {
    const dispatch = useDispatch();
    const propertyReducer = useSelector(store => store.propertyReducer);

    const [selected, setSelected] = useState(false);

    const selectAsFeature = () => {
        dispatch({
            type: 'SET_FEATURE_PHOTO',
            payload: file
        });
        setSelected(true);
    }

    if (propertyReducer) {
            return (selected && propertyReducer.featurePhoto === file) ? (
                <>
                    <Card className="selected" margin={2}>
                        <img 
                            className="relative" 
                            src={file}
                            onClick={selectAsFeature}
                        />
                    </Card>
                </>
            ) : (
                <>
                    <Card margin={2}>
                        <img 
                            className="relative" 
                            src={file}
                            onClick={selectAsFeature}
                        />
                    </Card>
                </>
            )
    } else {
        return (selected) ? (
            <>
                <Card className="selected" margin={2}>
                    <img 
                        className="relative" 
                        src={file}
                        onClick={selectAsFeature}
                    />
                </Card>
            </>
        ) : (
            <>
                <Card margin={2}>
                    <img 
                        className="relative" 
                        src={file}
                        onClick={selectAsFeature}
                    />
                </Card>
            </>
        )
    }
}

export default PhotoItem;