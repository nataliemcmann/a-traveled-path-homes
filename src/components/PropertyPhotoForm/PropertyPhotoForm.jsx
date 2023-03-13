import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PropertyPhotoForm.css';
import PropertyPhotoList from '../PropertyPhotoList/PropertyPhotoList';
//mui components
import { Card, CardHeader, CardContent, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav';

function PropertyPhotoForm() {
    //declare dispatch
    const dispatch = useDispatch();
    //declare a reducer to temporarily files
    const photoReducer = useSelector(store => store.photoReducer);
    const propertyReducer = useSelector(store => store.propertyReducer);

    //state for pop-up
    const [buttonPopup, setButtonPopup] = useState(false);

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
                residenceId: propertyReducer.residence.id,
                files : photoReducer.files
            }
        })
    }
        const id=10;

        return (
            <>
                <PropertyFormNav className="photos"/>
                <form onSubmit={postFiles} encType="multipart/form-data">
                    <div className="uploadForm">
                        <Card>
                            <CardHeader 
                            titleTypographyProps={{variant:'h3', textAlign:'center'}}
                            title="Photos"
                            subheaderTypographyProps={{textAlign:'left', color: '#000000'}}
                            subheader="Upload photos of your property! 
                            You need at least five photos, but the more the merrier. 
                            Make it feel like home!"
                            />
                            <CardContent style={{display: 'flex', justifyContent:'center'}}>
                                <div className="uploadContainer">
                                    <Button component="label"  
                                    style={{backgroundColor: 'transparent'}} 
                                    sx={{ color: '#111856'}}>
                                    <AddCircleOutlineIcon 
                                        style={{ 
                                            width: '2.5em', height: '2.5em',
                                            paddingLeft: '270px', paddingTop: '170px'
                                        }}
                                    /> 
                                    <input 
                                        onChange={onFileChange} 
                                        multiple 
                                        type="file"
                                        // accept="image/jpeg, image/png, image/jpg" 
                                        hidden 
                                    />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="selectBtn">
                            <Button 
                            onClick={() => setButtonPopup(true)}
                            size='large'
                            sx={{
                                backgroundColor: '#111856',
                                color: '#f8f8f8'
                            }}
                            >
                                View Photos
                            </Button>
                        </div>
                    </div>
                    <div className="nextBtn">
                        <Button 
                        type="submit"
                        size='large'
                        sx={{
                            backgroundColor: '#CE8077',
                            color: '#f8f8f8'
                        }}
                        >
                            Next
                        </Button>
                    </div>
                </form>
                <PropertyPhotoList trigger={buttonPopup} setTrigger={setButtonPopup} residenceId={ id }/>
            </>
        )
}

export default PropertyPhotoForm;