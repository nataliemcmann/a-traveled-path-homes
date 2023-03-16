import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import  Card  from '@mui/material/Card';
import { Button, Grid } from '@mui/material';
import './ResidenceDetails.css';
import MapRender from '../PropertyDetailsPage/MapRender';

function ResidenceDetails(residences) {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const propertyReducer = useSelector(store => store.propertyReducer)
    const amenitiesReducer = useSelector(store => store.amenitiesReducer)
    const photoReducer = useSelector(store => store.photoReducer)


    useEffect(() => {
        dispatch({
            type: 'FETCH_RESIDENCE',
            payload: params.id 
        })
    }, [params.id])


    useEffect(() => {
        dispatch({
            type: 'FETCH_RESIDENCE_PHOTOS',
            payload: params.id 
        })
    }, [params.id])


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
                marginLeft: 8,
                marginRight: 8,
                padding: 3,
                lineHeight: 1,
                textAlign: 'left',
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
                            textAlign: 'left',
                            borderRadius: 4,
                        }}><h1>{propertyReducer.residence.propertyName}</h1>
                            <img src={propertyReducer.residence.featurePhoto}/>
                            </Card >
                        <br></br>
                        <Card sx={{
                            textAlign: 'center',
                            fontSize: 22,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 2,
                            letterSpacing: .8,
                            wordSpacing: 1.5,
                            width: 450,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                            marginBottom: 2,
                        }}>
                        
                            <p>Maximum Guests: {propertyReducer.residence.maxGuests}</p>
                            <br></br>
                            <p>{propertyReducer.residence.description}</p>
                            </Card>

                            <Card sx={{
                            textAlign: 'center',
                            fontSize: 22,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                            marginBottom: 2,
                        }}>
                                <p>Bedrooms: {propertyReducer.residence.bedrooms}</p> 
                                <p> Bathrooms: {propertyReducer.residence.bathrooms} </p>
                                <p>Beds: {propertyReducer.residence.beds}</p>
                                
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

                            <Card sx={{
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 600,
                            height: 600,
                            padding: 1.5,
                            lineHeight: 1,
                            textAlign: 'left',
                            marginBottom: 2,
                        }}>
                            <h2>What's in the neighborhood?</h2>
                            <MapRender ></MapRender>
                            </Card>
                            </Card>
                            

                        <Card sx={{
                            textAlign: 'center',
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -270,
                            marginBottom: 200
                            
                        }}>
                            <h1>About this stay</h1>
                            <p>Minimum Stay Length: {propertyReducer.residence.minStayLength}</p>
                            <p>Daily Price: {propertyReducer.residence.priceDaily}</p>
                            <p>Monthly Price {propertyReducer.residence.priceMonthly}</p>

                        </Card>
                        <Card sx={{
                            textAlign: 'center',
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 1,
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -180,
                            marginBottom: 200
                            
                        }}>
                            <h1>Amenities</h1>
                            <p>{amenitiesReducer.amenities}</p>

                        </Card>

                        <Card sx={{
                            textAlign: 'left',
                            fontSize: 18,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 400,
                            padding: 1.5,
                            lineHeight: 1,
                            textAlign: 'left',
                            borderRadius: 4,
                            marginLeft: 100,
                            marginTop: -180,
                            marginBottom: 200
                            
                        }}>
                            <h1>Ready to book?</h1>
                            <p>Your Stay:</p>
                            <p>Jan 1 - Mar 1</p>
                            <p>Total Price: {propertyReducer.residence.priceMonthly}</p>
                            <p>Pay in full: <Button sx={{color: '#ffffff',
                        backgroundColor: '#CE8077'}}>Book Now</Button></p>
                        </Card>

                        
                        
            
            

    <Button sx={{
        color: '#FFF',
        padding: 1,
        backgroundColor: '#D1877F',
        marginLeft: 4
    }} className="btn btn_sizeMd" onClick={() => backToProperties(residences)}>Back</Button>
        </>
)

}

export default ResidenceDetails;
