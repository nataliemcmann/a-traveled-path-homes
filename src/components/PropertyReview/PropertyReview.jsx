import React from "react";
import './Review.css'
import { Stack, Grid, Card, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";
import AmenitiesList from "../AmenitiesList/AmenitiesList";

function PropertyReview (){
    const history = useHistory()
    const dispatch = useDispatch();

    const propertyReducer = useSelector((store) => store.propertyReducer);
    const photoReducer = useSelector((store) => store.photoReducer);
    const amenitiesReducer = useSelector((store) => store.amenitiesReducer);
    const address = useSelector((store) => store.address)

    const handleSubmit = (event) => {
        event.preventDefault();
        let addressAsString = ''
        if (address.apartment) {
          addressAsString = `${address.street} ${address.apartment} ${address.city} ${address.state} ${address.zip}`;
        } else {
          addressAsString = `${address.street} ${address.city} ${address.state} ${address.zip}`;
        }
        let newResidence = {
            houseType: propertyReducer.houseType,
            propertyName: propertyReducer.propertyName,
            description: propertyReducer.description,
            address: addressAsString,
            maxGuests: Number(propertyReducer.guests),
            bedrooms: Number(propertyReducer.bedrooms),
            beds: Number(propertyReducer.beds),
            bathrooms: Number(propertyReducer.bathrooms),
            listed: false,
            featurePhoto: propertyReducer.featurePhoto,
            minStayLength: Number(propertyReducer.stayLength),
            priceDaily: Number(propertyReducer.priceDaily),
            priceMonthly: Number(propertyReducer.priceMonthly)
        }

        dispatch({
            type: 'CREATE_RESIDENCE',
            payload: {
                residence: newResidence,
                uploadedFiles : photoReducer.uploadedFiles,
                amenitiesArray: amenitiesReducer.amenitiesArray
            }
        });

        history.push('/ownerdashboard')
}

    return (
    <>
    <PropertyFormNav className="review"/>
    <div className="reviewForm">
        <Stack>
            <div className="reviewHeader">
                <h1> Review</h1>
                <p> 
                    Dust the shelves and clean the windows. Does everthing look like it should? This is what renters will see when looking at ypur property page.
                </p>

            </div>
            <Grid
            container spacing={2}
            direction = 'row'
            margin={2}
            >
                <Grid
                margin={3}
                >
                    <Card>
                        <img className="feature" src={propertyReducer.featurePhoto}/>
                    </Card>
                </Grid>
                <Grid
                margin={3}
                >
                    <h2>{propertyReducer.propertyName}</h2>
                    <Card>
                        <h2>${propertyReducer.priceMonthly} per Month</h2>
                        <h2>{propertyReducer.stayLength} Month Stay Minimum</h2>
                        <p>{propertyReducer.description}</p>
                    </Card>
                    <Card>
                        <h2>Amenities</h2>
                        <AmenitiesList />
                    </Card>
                </Grid>
            </Grid> 
        </Stack>
    </div>
    <Button onClick={handleSubmit} type="submit"
                        size='large'
                        sx={{
                            backgroundColor: '#CE8077',
                            color: '#f8f8f8',
                            marginLeft: 140
                        }}> Submit </Button> 
    </>
    )
}

export default PropertyReview;