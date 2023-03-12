import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './PropertyFormNav.css';
import AddressOption from './NavOptions/AddressOption';
//mui components
import { Grid, Button } from '@mui/material';
import BasicsOption from './NavOptions/BasicsOption';
import AmenitiesOption from './NavOptions/AmenitiesOption';
import PhotosOption from './NavOptions/PhotosOption';
import StayLengthOption from './NavOptions/StayLengthOption';
import PriceOption from './NavOptions/PriceOption';
import ReviewOption from './NavOptions/ReviewOption';

function PropertyFormNav(props) {
    const history = useHistory();

    const [allowAddress, setAllowAddress] = useState(false);
    const [allowBasics, setAllowBasics] = useState(false);
    const [allowAmenities, setAllowAmenities] = useState(false);
    const [allowPhotos, setAllowPhotos] = useState(false);
    const [allowStayLength, setAllowStayLength] = useState(false);
    const [allowPrice, setAllowPrice] = useState(false);
    const [allowReview, setAllowReview] = useState(false);

    function toDescribe() {
        history.push('/describe');
    }

    //giant if else statement to cue available interactions
    useEffect(() =>{
        if (props.className === 'address' ||
            props.className === 'basics' ||
            props.className === 'amenities' ||
            props.className === 'photos' ||
            props.className === 'stayLength' ||
            props.className === 'price' ||
            props.className === 'review') {
            console.log('address true');
            setAllowAddress(true);
        } 
        if (props.className === 'basics' ||
            props.className === 'amenities' ||
            props.className === 'photos' ||
            props.className === 'stayLength' ||
            props.className === 'price' ||
            props.className === 'review') {
            console.log('basics true');
            setAllowBasics(true);
        } 
        if (props.className === 'amenities' ||
            props.className === 'photos' ||
            props.className === 'stayLength' ||
            props.className === 'price' ||
            props.className === 'review') {
            console.log('amenities true');
            setAllowAmenities(true);
        } 
        if (props.className === 'photos' ||
            props.className === 'stayLength' ||
            props.className === 'price' ||
            props.className === 'review') {
            console.log('photos true');
            setAllowPhotos(true);
        }  
        if (props.className === 'stayLength' ||
            props.className === 'price' ||
            props.className === 'review') {
            console.log('stay length true');
            setAllowStayLength(true);
        }  
        if (props.className === 'price' ||
            props.className === 'review') {
            console.log('price true');
            setAllowPrice(true);
        }  
        if (props.className === 'review') {
            console.log('review true');
            setAllowReview(true);
        }
    }, [])
    

    return (
        <>
            <Grid
            className="formNav"
            container spacing={1}
            direction='row' 
            flexWrap='nowrap'
            justifyContent='space-around' 
            marginTop={4}
            marginBottom={2}
            >
                <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toDescribe}></Button>
                    </div>
                    <p>Describe</p>
                </div>
                <AddressOption allowAddress={allowAddress}/>
                <BasicsOption allowBasics={allowBasics}/>
                <AmenitiesOption allowAmenities={allowAmenities}/>
                <PhotosOption allowPhotos={allowPhotos}/>
                <StayLengthOption allowStayLength={allowStayLength}/>
                <PriceOption allowPrice={allowPrice}/>
                <ReviewOption allowReview={allowReview}/>
            </Grid>
        </>
    )
}

export default PropertyFormNav;