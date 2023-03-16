import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import  Card  from '@mui/material/Card';
import { Button } from '@mui/material';
import './ResidenceDetails.css';

function ResidenceDetails(residences) {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const propertyReducer = useSelector(store => store.propertyReducer)


    useEffect(() => {
        dispatch({
            type: 'FETCH_RESIDENCE',
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
                            padding: 1.5,
                            lineHeight: 1,
                            textAlign: 'left',
                            borderRadius: 4,
                            border: "none", 
                        boxShadow: "none"
                        }}><h1>{propertyReducer.residence.propertyName}</h1>
                            {propertyReducer.residence.featurePhoto}
                            </Card >
                        <br></br>
                        <Card sx={{
                            textAlign: 'left',
                            fontSize: 22,
                            backgroundColor: '#FFFFFF',
                            color: '#410064',
                            lineHeight: 1,
                            width: 450,
                            padding: 1.5,
                            lineHeight: 1,
                            textAlign: 'left',
                            borderRadius: 4,
                            marginBottom: 2,
                            border: "none", 
                        boxShadow: "none"
                        }}>
                        
                            <p>Maximun Guests: {propertyReducer.residence.maxGuests}</p>
                            <p>{propertyReducer.residence.propertyName}</p>
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
                            textAlign: 'left',
                            borderRadius: 4,
                            marginBottom: 2,
                            border: "none", 
                        boxShadow: "none"
                        }}>
                                <p>Bedrooms: {propertyReducer.residence.bedrooms}</p> 
                                <p> Bathrooms: {propertyReducer.residence.bathrooms} Beds: {propertyReducer.residence.beds}</p>
                                
                            </Card>
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
                            marginTop: -85,
                            marginLeft: 100,
                            marginBottom: 100,
                            
                        }}>
                            <h1>About this stay</h1>
                            <p>Minimum Stay Length: {propertyReducer.residence.minStayLength}</p>
                            <p>Daily Price: {propertyReducer.residence.priceDaily} Monthly Price {propertyReducer.residence.priceMonthly}</p>

                        </Card>
            
            

    <Button sx={{
        color: '#FFF',
        padding: 1,
        backgroundColor: '#D1877F',
        marginLeft: 4
    }} onClick={() => backToProperties(residences)}>Back</Button>
        </>
)

}

export default ResidenceDetails;
