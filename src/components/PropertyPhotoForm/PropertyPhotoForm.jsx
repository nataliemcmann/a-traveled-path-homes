import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PropertyPhotoForm.css';
//mui components
import { Card, CardHeader, CardContent, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function PropertyPhotoForm() {
    const dispatch = useDispatch();


    const [fileInputs, setFileInputs] = useState([]);

    const onFileChange = (event) => {
    
    // Update the state
    setFileInputs({ selectedFile: event.target.files });
    
    };

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
                        <Button component="label" onChange={onFileChange}   
                        sx={{ color: '#111856'}}>
                        <AddCircleOutlineIcon/> <input type="file" hidden />
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </>
    )
}

export default PropertyPhotoForm;