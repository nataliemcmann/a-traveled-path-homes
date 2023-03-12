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
            setAllowAddress(true);
    } else if (props.className === 'basics' ||
        props.className === 'amenities' ||
        props.className === 'photos' ||
        props.className === 'stayLength' ||
        props.className === 'price' ||
        props.className === 'review') {
            setAllowBasics(true);
        } else if (props.className === 'amenities' ||
        props.className === 'photos' ||
        props.className === 'stayLength' ||
        props.className === 'price' ||
        props.className === 'review') {
            setAllowAmenities(true);
        } else if (props.className === 'photos' ||
        props.className === 'stayLength' ||
        props.className === 'price' ||
        props.className === 'review') {
            setAllowPhotos(true);
        } else if (props.className === 'stayLength' ||
        props.className === 'price' ||
        props.className === 'review') {
            setAllowStayLength(true);
        } else if (props.className === 'price' ||
        props.className === 'review') {
            setAllowPrice(true);
        } else if (props.classname === 'review') {
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