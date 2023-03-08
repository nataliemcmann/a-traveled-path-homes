import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PropertyPhotoForm.css';
//mui components
import { Card, CardHeader, CardContent, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function PropertyPhotoForm() {
    const dispatch = useDispatch();

    const photoReducer = useSelector(store => store.photoReducer)

    const onFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        dispatch({
            type: 'SET_FILES',
            payload: selectedFiles
        })
    };

    const postFiles = () => {
        console.log('uploading files', photoReducer.files);
        dispatch({
            type: 'ADD_FILES',
            payload: photoReducer.files
        })
    }

    return (
        <>
                <Card>
                    <CardHeader 
                    title="Photos"
                    subheader="Upload photos of your property! 
                    You need at least five photos, but the more the merrier. 
                    Make it feel like home!"
                    />
                    <CardContent>
                        <div className="uploadContainer">
                            <Button component="label"  
                            sx={{ color: '#111856'}}>
                            <AddCircleOutlineIcon/> 
                            <input 
                                onChange={onFileChange} 
                                multiple 
                                type="file" 
                                accept="image/jpeg, image/png, image/jpg" 
                                hidden 
                            />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <div>
                    <Button onClick={postFiles}>Next</Button>
                </div>
        </>
    )
}

export default PropertyPhotoForm;