import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './PropertyPhotoForm.css';
import PropertyPhotoList from '../PropertyPhotoList/PropertyPhotoList';
//mui components
import { Card, CardHeader, CardContent, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PropertyFormNav from '../PropertyFormNav/PropertyFormNav';

function PropertyPhotoForm() {
    //declare dispatch
    const dispatch = useDispatch();
    const history = useHistory();
    //declare a reducer to temporarily files
    const photoReducer = useSelector(store => store.photoReducer);
    const propertyReducer = useSelector(store => store.propertyReducer);

    //state for pop-up
    const [buttonPopup, setButtonPopup] = useState(false);

    // event handler to manage file change and update reducer
    function onFileChange (event) {
        const selectedFiles = [...event.target.files];
        // dispatch({
        //     type: 'SET_FILES',
        //     payload: selectedFiles
        //     })
            dispatch({
                type: 'ADD_FILES',
                payload: {
                    files : selectedFiles
                }
            })
    };

    //send files to saga
//     const postFiles = () => {
//         if (photoReducer.files) {
//             console.log('uploading files', photoReducer.files);
            
//     }
// }

    const nextBtn = () => {
        history.push('/stayLength');
    }

    const cancelBtn = () => {
        history.push(`/ownerdashboard`)
    }

        return (
            <>
                <PropertyFormNav className="photos"/>
                <div className="uploadForm">
                <form encType="multipart/form-data">
                    <div className="photoHeader">
                        <h1>Photos</h1>
                        <p>Upload photos of your property! 
                            You need at least five photos, but the more the merrier. 
                            Make it feel like home!</p>
                    </div>
                        <Card>
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
                    </form>
                </div>
                <PropertyPhotoList trigger={buttonPopup} setTrigger={setButtonPopup}/>
                <div className="btnContainer">
                    <div className="nextBtn">
                        <Button 
                        onClick={nextBtn}
                        size= "large"
                        sx={{
                            backgroundColor: '#CE8077',
                            color: '#f8f8f8',
                            margin: '2%',
                            paddingTop: '16px', paddingBottom: '16px',
                            paddingRight: '32px', paddingLeft: '32px'
                        }}
                        >
                            Next
                        </Button>  
                    </div>
                    <div className="cancelBtn">
                        <Button onClick={cancelBtn}
                        type="submit" 
                        size= "large"
                        sx={{
                            backgroundColor: '#CE8077',
                            color: '#f8f8f8',
                            margin: '2%',
                            paddingTop: '16px', paddingBottom: '16px',
                            paddingRight: '32px', paddingLeft: '32px'
                        }}
                        >
                            Cancel
                        </Button> 
                    </div>
                </div>
            </>
        )
}

export default PropertyPhotoForm;