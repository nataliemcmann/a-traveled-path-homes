import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import  Card  from '@mui/material/Card';
import { Button, Grid } from '@mui/material';
import './ResidenceDetails.css';
import MapRender from '../PropertyDetailsPage/MapRender';
import FormAmenitiesList from '../AmenitiesList/FormAmenitiesList';
import ConfirmationPopup from './ConfirmationPopup';


function ResidenceDetails(residences) {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const propertyReducer = useSelector(store => store.propertyReducer)
    const amenitiesReducer = useSelector(store => store.amenitiesReducer)
    const photoReducer = useSelector(store => store.photoReducer)
    

    const [buttonPopup, setButtonPopup] = useState(false);


    useEffect(() => {
        dispatch({
            type: 'FETCH_RESIDENCE',
            payload: params.id 
        })
        dispatch({
            type: 'FETCH_RESIDENCE_PHOTOS',
            payload: params.id 
        })
    }, [])

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    // useEffect(() => {
        
    // }, [])


    const backToProperties = () => {
        history.push(`/propertygallery`)
}

    return(
        <>
        
            <Card sx={{
                border: "none", 
                boxShadow: "none",
                backgroundColor: '#FFF',
                color: '#111856',
                maxWidth: 800,
                marginTop: 6,
                marginBottom: 6,
                marginLeft: 14,
                marginRight: 8,
                padding: 3,
                lineHeight: 1,
                textAlign: 'center',
                borderRadius: 6

                    }}
                    >
                        <Card sx={{
                            textAlign: 'left',
                            fontSize: 18,
                            backgroundColor: '#FFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            height: 450,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                        }}><h1>{propertyReducer.residence.propertyName}</h1>
                            <img src={propertyReducer.residence.featurePhoto}/>
                            </Card >
                        <br></br>
                        <Card sx={{
                            textAlign: 'left',
                            fontSize: 22,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 2,
                            letterSpacing: .8,
                            wordSpacing: 1.5,
                            width: 450,
                            padding: 2,
                            lineHeight: 1.5,
                            borderRadius: 4,
                            marginBottom: 2,
                        }}>
                            <p>{propertyReducer.residence.description}</p>
                            </Card>

                        

                            <Card sx={{
                            textAlign: 'center',
                            fontSize: 22,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 500,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                            marginBottom: 2,
                        }}> 
                                <h3>Additional Images</h3>
                                <Grid 
                        container spacing={2}
                        columns={3}
                        flexWrap='wrap'
                        justifyContent='center'
                        marginTop={1}
                        padding={.5}
                    >
                        {photoReducer.residencePhotos && photoReducer.residencePhotos.map((photo) => {
                        return <Card key={photo.id} margin={2}>
                        <img 
                            className="relative" 
                            src={photo.imagePath}
                        />
                    </Card>
                    })}
                    </Grid>
                    </Card>

                            
                    </Card>

                    
                            

                        <Card sx={{
                            textAlign: 'center',
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 2,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -225,
                            marginBottom: 155
                            
                        }}>
                            <h1>About this stay</h1>
                            <p>Minimum Stay Length: {propertyReducer.residence.minStayLength}</p>
                            <p>Daily Price: {USDollar.format(propertyReducer.residence.priceDaily)}</p>
                            <p>Monthly Price {USDollar.format(propertyReducer.residence.priceMonthly)}</p>

                        </Card>
                        <Card sx={{
                            textAlign: 'center',
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 2,
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -150,
                            marginBottom: 80
                            
                        }}>
                            <h1>Amenities</h1>
                            <FormAmenitiesList amenities={amenitiesReducer.amenitiesArray}/>

                        </Card>

                        <Card sx={{
                            textAlign: 'center',
                            fontSize: 22,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 2,
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -75,
                            marginBottom: 210,
                            marginBottom: 160,
                        }}>     <p>Maximum Guests: {propertyReducer.residence.maxGuests}</p>
                                <p>Bedrooms: {propertyReducer.residence.bedrooms}</p> 
                                <p> Bathrooms: {propertyReducer.residence.bathrooms} </p>
                                <p>Beds: {propertyReducer.residence.beds}</p>
                                
                            </Card>

                        <Card sx={{
                            textAlign: 'left',
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 4,
                            lineHeight: 2,
                            textAlign: 'left',
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -150,
                            marginBottom: 20
                            
                        }}>
                            <h1>Ready to book?</h1>
                            <p>Your Stay: {propertyReducer.residence.propertyName}</p>
                            <p>March 31 - June 30</p>
                            <p>Total Price: $5,685.00</p>
                            <Button sx={{color: '#ffffff',
                        backgroundColor: '#CE8077'}} onClick={() => setButtonPopup(true)}>Book Now</Button>
                        </Card>

                        <Card sx={{
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 1000,
                            height: 600,
                            padding: 1.5,
                            lineHeight: 1,
                            textAlign: 'left',
                            marginLeft:  20,
                            marginBottom: 2
                            }}>
                            <h2>What's in the neighborhood?</h2>
                            <MapRender ></MapRender>
                        </Card>

    <Button sx={{
        color: '#FFF',
        padding: 1,
        backgroundColor: '#D1877F',
        marginLeft: 4
    }} className="btn btn_sizeMd" onClick={() => backToProperties(residences)}>Back</Button>

    <ConfirmationPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Success!</h1>
        <h3>You have successfully booked '{propertyReducer.residence.propertyName}'</h3>
        <Button sx={{
        color: '#FFF',
        padding: 1,
        backgroundColor: '#D1877F',
        marginLeft: 4
    }} className="btn btn_sizeMd" onClick={() => backToProperties(residences)}>View More Properties</Button>
    </ConfirmationPopup>
        </>
)

}

export default ResidenceDetails;
