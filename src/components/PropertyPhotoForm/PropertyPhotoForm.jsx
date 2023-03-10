import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PropertyPhotoForm.css';
//mui components
import { Card, CardHeader, CardContent, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function PropertyPhotoForm() {
    //declare dispatch
    const dispatch = useDispatch();
    //declare a reducer to temporarily files
    const photoReducer = useSelector(store => store.photoReducer);
    const propertyReducer = useSelector(store => store.propertyReducer);


    // event handler to manage file change and update reducer
    const onFileChange = (event) => {
        const selectedFiles = [...event.target.files];
        dispatch({
            type: 'SET_FILES',
            payload: selectedFiles
        })
    };

    //send files to saga
    const postFiles = () => {
        console.log('uploading files', photoReducer.files);
        dispatch({
            type: 'ADD_PHOTOS',
            payload: {
                residenceId: propertyReducer.residenceId,
                files : photoReducer.files
            }
        })
    }

    return (
        <>
            <form onSubmit={postFiles} encType="multipart/form-data">
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
                    <Button type="submit">Next</Button>
                </div>
            </form>
        </>
    )
}

export default PropertyPhotoForm;